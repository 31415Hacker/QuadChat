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
  return account.customClaims?.admin === true ||
    account.customClaims?.developer === true ||
    profile?.isAdmin === true ||
    profile?.isDeveloper === true;
}

function accountDetails(account, profile) {
  return {
    uid: account.uid,
    email: account.email || "",
    displayName: account.displayName || profile?.displayName || "",
    photoURL: account.photoURL || profile?.photoURL || "",
    emailVerified: account.emailVerified,
    disabled: account.disabled,
    providers: account.providerData.map((provider) => provider.providerId),
    createdAt: account.metadata.creationTime || "",
    lastSignInAt: account.metadata.lastSignInTime || "",
    lastRefreshAt: account.metadata.lastRefreshTime || "",
    role: profile?.role || "member",
    bio: profile?.bio || "",
    profileUpdatedAt: profile?.updatedAt?.toDate?.().toISOString?.() || "",
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
      admin.auth().getUser(uid),
      admin.firestore().doc(`users/${uid}`).get()
    ]);
    const profile = profileDoc.exists ? profileDoc.data() : null;
    const details = accountDetails(account, profile);

    if (action === "details") {
      return res.status(200).json({ account: details });
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

    if (action === "delete") {
      await Promise.all([
        admin.auth().deleteUser(uid),
        admin.firestore().doc(`users/${uid}`).delete()
      ]);
      return res.status(200).json({ message: "Account deleted." });
    }

    return res.status(400).json({ error: "Unknown account action." });
  } catch (error) {
    const status = error.status || (error.code === "auth/user-not-found" ? 404 : 500);
    return res.status(status).json({ error: error.message || "Account management failed." });
  }
}
