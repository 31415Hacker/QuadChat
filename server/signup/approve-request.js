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
    const error = new Error("Only admins can approve requests.");
    error.status = 403;
    throw error;
  }
  return decodedToken;
}

function normalizeDisplayName(displayName, email) {
  const fallbackName = displayName || email || "User";
  const firstName = fallbackName.split("@")[0].trim().split(/\s+/)[0] || "User";
  return firstName;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const caller = await requireAdmin(req);
    const { requestId } = parseBody(req);
    if (!requestId || typeof requestId !== "string") {
      return res.status(400).json({ error: "Request ID is required." });
    }

    const db = admin.firestore();
    const requestRef = db.doc(`signup-requests/${requestId}`);
    const requestSnap = await requestRef.get();
    if (!requestSnap.exists) {
      return res.status(404).json({ error: "That signup request no longer exists." });
    }
    const request = requestSnap.data();
    if (request.status !== "pending") {
      return res.status(400).json({ error: "That request was already handled." });
    }

    const email = String(request.email || "").toLowerCase();
    if (!email) {
      return res.status(400).json({ error: "Request has no email." });
    }

    let displayName = String(request.displayName || "").trim();
    if (!displayName) displayName = normalizeDisplayName(displayName, email);

    if (request.provider === "password") {
      if (typeof request.password !== "string" || request.password.length < 6) {
        return res.status(400).json({ error: "Request is missing a valid password." });
      }
      const existing = await admin.auth().getUserByEmail(email).catch((error) => {
        if (error.code === "auth/user-not-found") return null;
        throw error;
      });
      if (existing) {
        return res.status(400).json({ error: "That email already has an account. They can sign in instead." });
      }

      const created = await admin.auth().createUser({
        email,
        password: request.password,
        displayName
      });

      const profileData = {
        id: created.uid,
        email,
        displayName: normalizeDisplayName(displayName, email),
        photoURL: "",
        role: "member",
        isAdmin: false,
        isDeveloper: false,
        bio: "",
        schedule: {
          timezone: "UTC",
          overrides: []
        },
        status: { mode: "active", text: "", scheduledBusy: [] },
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        approvedAt: admin.firestore.FieldValue.serverTimestamp()
      };

      await Promise.all([
        db.doc(`users/${created.uid}`).set(profileData),
        db.doc(`approved-users/${email}`).set({
          email,
          displayName,
          provider: "password",
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          approvedBy: caller.uid
        }),
        requestRef.update({ status: "approved", reviewedAt: admin.firestore.FieldValue.serverTimestamp(), reviewedBy: caller.uid, password: admin.firestore.FieldValue.delete() })
      ]);

      return res.status(200).json({
        ok: true,
        message: "Request approved. The member should use &ldquo;Forgot password?&rdquo; on the sign-in screen to set their password."
      });
    }

    if (request.provider === "google") {
      await Promise.all([
        db.doc(`approved-users/${email}`).set({
          email,
          displayName,
          provider: "google",
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          approvedBy: caller.uid
        }),
        requestRef.update({ status: "approved", reviewedAt: admin.firestore.FieldValue.serverTimestamp(), reviewedBy: caller.uid })
      ]);

      return res.status(200).json({
        ok: true,
        message: "Request approved. The member can sign in with Google."
      });
    }

    return res.status(400).json({ error: "Unknown request type." });
  } catch (error) {
    const status = error.status || 500;
    return res.status(status).json({ error: error.message || "Approval failed." });
  }
}
