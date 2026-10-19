import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { email, password, displayName, turnstileToken, website, headless, code } = req.body || {};
  if (website || headless) return res.status(400).json({ error: "Unable to create account." });
  if (!email || !password || !displayName || !turnstileToken) return res.status(400).json({ error: "Complete the form and CAPTCHA." });
  if (!code) return res.status(400).json({ error: "An invite code is required." });
  if (!process.env.TURNSTILE_SECRET_KEY) return res.status(500).json({ error: "CAPTCHA is not configured." });

  try {
    const settingsSnapshot = await admin.firestore().doc("settings/app").get();
    if (settingsSnapshot.exists && settingsSnapshot.data().signupEnabled === false) {
      return res.status(403).json({ error: "Signup is currently disabled." });
    }

    const captcha = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: turnstileToken })
    }).then((response) => response.json());
    if (!captcha.success) return res.status(400).json({ error: "CAPTCHA verification failed. Try again." });

    const db = admin.firestore();
    const cleanEmail = String(email).trim().toLowerCase();

    const codeRef = db.doc(`signup-codes/${code}`);
    let codeData;
    try {
      codeData = await db.runTransaction(async (tx) => {
        const snap = await tx.get(codeRef);
        if (!snap.exists) throw Object.assign(new Error("That invite code is invalid."), { status: 400 });
        const data = snap.data();
        if (data.used === true) throw Object.assign(new Error("That invite code has already been used."), { status: 400 });
        if (data.email && String(data.email).toLowerCase() !== cleanEmail) {
          throw Object.assign(new Error("That invite code is not valid for this email."), { status: 400 });
        }
        tx.update(codeRef, { used: true, usedAt: admin.firestore.FieldValue.serverTimestamp(), usedBy: cleanEmail });
        return data;
      });
    } catch (txError) {
      return res.status(txError.status || 400).json({ error: txError.message || "Invite code validation failed." });
    }

    const created = await admin.auth().createUser({ email: cleanEmail, password: String(password), displayName: String(displayName).trim() });

    await db.doc(`approved-users/${cleanEmail}`).set({
      email: cleanEmail,
      displayName: String(displayName).trim(),
      uid: created.uid,
      provider: "password",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "invite-code"
    });

    return res.status(201).json({ ok: true });
  } catch (error) {
    if (error.code === "auth/email-already-exists") {
      return res.status(400).json({ error: "That email already has an account. Sign in instead." });
    }
    return res.status(400).json({ error: error.message || "Unable to create account." });
  }
}
