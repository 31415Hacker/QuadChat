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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { code, email } = parseBody(req);
    if (!code || !email) {
      return res.status(400).json({ error: "Missing invite code or email." });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    if (!cleanEmail) {
      return res.status(400).json({ error: "Email is required." });
    }

    const settingsSnapshot = await admin.firestore().doc("settings/app").get();
    if (settingsSnapshot.exists && settingsSnapshot.data().signupEnabled === false) {
      return res.status(403).json({ error: "Signup is currently disabled." });
    }

    const db = admin.firestore();

    const codeRef = db.doc(`signup-codes/${code}`);
    const codeSnap = await codeRef.get();
    if (!codeSnap.exists) return res.status(400).json({ error: "That invite code is invalid." });
    const codeData = codeSnap.data();
    if (codeData.used === true) return res.status(400).json({ error: "That invite code has already been used." });
    if (codeData.email && String(codeData.email).toLowerCase() !== cleanEmail) {
      return res.status(400).json({ error: "That invite code is not valid for this email." });
    }

    await Promise.all([
      codeRef.update({ used: true, usedAt: admin.firestore.FieldValue.serverTimestamp(), usedBy: cleanEmail }),
      db.doc(`approved-users/${cleanEmail}`).set({
        email: cleanEmail,
        provider: "google",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        source: "invite-code"
      })
    ]);

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ error: error.message || "Could not validate your invite code." });
  }
}
