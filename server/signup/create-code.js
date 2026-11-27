import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";
import crypto from "crypto";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

// api/[action] also serves call endpoints, which initialize a named Admin app.
// A named app must not prevent us from creating the default app used below.
if (!getApps().some((app) => app.name === "[DEFAULT]")) {
  initializeApp({
    credential: cert(serviceAccount)
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
  const decodedToken = await getAuth().verifyIdToken(authHeader.slice(7), true);
  const callerDoc = await getFirestore().doc(`users/${decodedToken.uid}`).get();
  if (!callerDoc.exists || (callerDoc.data().isAdmin !== true && callerDoc.data().isDeveloper !== true)) {
    const error = new Error("Only admins or developers can create invite codes.");
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

    await getFirestore().doc(`signup-codes/${code}`).set({
      email: cleanEmail,
      used: false,
      createdAt: FieldValue.serverTimestamp(),
      createdBy: caller.uid
    });

    return res.status(201).json({ ok: true, code });
  } catch (error) {
    const status = error.status || 500;
    return res.status(status).json({ error: error.message || "Could not create invite code." });
  }
}
