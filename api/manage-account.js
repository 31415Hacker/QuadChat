import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

function parseBody(req) {
  if (req.body && typeof req.body === "object" && !Array.isArray(req.body)) {
    return req.body;
  }

  try {
    return JSON.parse(req.body || "{}");
  } catch {
    return {};
  }
}

async function requireAdmin(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    const error = new Error("Not authenticated");
    error.status = 401;
    throw error;
  }

  const decodedToken = await admin.auth().verifyIdToken(authHeader.slice(7));
  const callerDoc = await admin.firestore().doc(`users/${decodedToken.uid}`).get();
  if (!callerDoc.exists || callerDoc.data().isAdmin !== true) {
    const error = new Error("Only admins can manage accounts.");
    error.status = 403;
    throw error;
  }

  return decodedToken;
}

function isProtectedAccount(account, profile) {
  return account?.customClaims?.admin === true ||
    account?.customClaims?.developer === true ||
    profile?.isAdmin === true ||
    profile?.isDeveloper === true;
}

function serializeValue(value) {
  if (value?.toDate) return value.toDate().toISOString();
  if (Array.isArray(value)) return value.map(serializeValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, serializeValue(entry)]));
  }
  return value;
}

async function getRawAuthMetadata(uid) {
  const accessToken = await admin.app().options.credential.getAccessToken();
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/projects/${serviceAccount.project_id}/accounts:lookup`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ localId: [uid] })
    }
  );
  if (!response.ok) return {};

  const result = await response.json();
  return result.users?.[0] || {};
}

function accountDetails(account, profile, rawMetadata) {
  return {
    uid: account?.uid || "",
    email: account?.email || profile?.email || "",
    displayName: account?.displayName || profile?.displayName || "",
    photoURL: account?.photoURL || profile?.photoURL || "",
    emailVerified: account?.emailVerified ?? false,
    disabled: account?.disabled ?? false,
    providers: (account?.providerData || []).map((provider) => provider.providerId),
    providerDetails: (account?.providerData || []).map((provider) => ({
      providerId: provider.providerId,
      uid: provider.uid || "",
      email: provider.email || "",
      displayName: provider.displayName || ""
    })),
    createdAt: account?.metadata?.creationTime || "",
    createdAtMs: rawMetadata?.createdAt || "",
    lastSignInAt: account?.metadata?.lastSignInTime || "",
    lastRefreshAt: account?.metadata?.lastRefreshTime || "",
    role: profile?.role || "member",
    bio: profile?.bio || "",
    status: serializeValue(profile?.status || {}),
    authClaims: serializeValue(account?.customClaims || {}),
    profile: serializeValue(profile || {}),
    protected: isProtectedAccount(account, profile)
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const caller = await requireAdmin(req);
    const { action, uid, password } = parseBody(req);
    if (!uid || typeof uid !== "string") {
      return res.status(400).json({ error: "Account ID is required." });
    }

    const [account, profileDoc] = await Promise.all([
      admin.auth().getUser(uid).catch((error) => {
        if (error.code === "auth/user-not-found") return null;
        throw error;
      }),
      admin.firestore().doc(`users/${uid}`).get()
    ]);
    const profile = profileDoc.exists ? profileDoc.data() : null;
    const rawMetadata = await getRawAuthMetadata(uid).catch(() => ({}));
    const details = accountDetails(account, profile, rawMetadata);

    if (action === "details") {
      const sessions = await admin.firestore().doc(`users/${uid}`).collection("sessions").get();
      return res.status(200).json({
        account: {
          ...details,
          hasAuthUser: Boolean(account),
          sessions: sessions.docs
            .map((session) => ({ id: session.id, ...serializeValue(session.data()) }))
            .sort((a, b) => String(b.start || "").localeCompare(String(a.start || "")))
        }
      });
    }

    if (!account && action !== "delete") {
      return res.status(404).json({ error: "No sign-in account exists for this user." });
    }

    if (uid === caller.uid || details.protected) {
      return res.status(403).json({ error: "Admin and developer accounts cannot be changed here." });
    }

    if (action === "password") {
      if (typeof password !== "string" || password.length < 6 || password.length > 64) {
        return res.status(400).json({ error: "Password must be between 6 and 64 characters." });
      }
      await admin.auth().updateUser(uid, { password });
      return res.status(200).json({ message: "Password updated." });
    }

    if (action === "ban") {
      await admin.auth().updateUser(uid, { disabled: true });
      await admin.auth().revokeRefreshTokens(uid);
      await admin.firestore().doc(`users/${uid}`).set({
        banned: true,
        bannedAt: admin.firestore.FieldValue.serverTimestamp(),
        bannedBy: caller.uid
      }, { merge: true });
      return res.status(200).json({ message: "Account banned. It can no longer sign in or register again." });
    }

    if (action === "unban") {
      await admin.auth().updateUser(uid, { disabled: false });
      await admin.firestore().doc(`users/${uid}`).set({
        banned: false,
        unbannedAt: admin.firestore.FieldValue.serverTimestamp(),
        unbannedBy: caller.uid
      }, { merge: true });
      return res.status(200).json({ message: "Account unbanned. It can sign in again." });
    }

    if (action === "delete") {
      await Promise.all([
        account ? admin.auth().deleteUser(uid) : Promise.resolve(),
        admin.firestore().doc(`users/${uid}`).delete()
      ]);
      // Tombstone blocks the deleted session from recreating its profile
      // while its ID token is still valid (checked by Firestore rules).
      await admin.firestore().doc(`deleted-users/${uid}`).set({
        deletedAt: admin.firestore.FieldValue.serverTimestamp(),
        deletedBy: caller.uid
      });
      return res.status(200).json({
        message: account
          ? "Account deleted."
          : "Profile deleted. No sign-in account existed for this user."
      });
    }

    return res.status(400).json({ error: "Unknown account action." });
  } catch (error) {
    const status = error.status || (error.code === "auth/user-not-found" ? 404 : 500);
    return res.status(status).json({ error: error.message || "Account management failed." });
  }
}
