import admin from "firebase-admin";
import crypto from "crypto";

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
    const error = new Error("Only admins can create invite codes.");
    error.status = 403;
    throw error;
  }
  return decodedToken;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const caller = await requireAdmin(req);
    const { email } = parseBody(req);
    const cleanEmail = typeof email === "string" && email.trim() ? email.trim().toLowerCase() : "";

    const code = crypto.randomBytes(5).toString("base64url").toUpperCase();

    await admin.firestore().doc(`signup-codes/${code}`).set({
      email: cleanEmail,
      used: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      createdBy: caller.uid
    });

    return res.status(201).json({ ok: true, code });
  } catch (error) {
    const status = error.status || 500;
    return res.status(status).json({ error: error.message || "Could not create invite code." });
  }
}
