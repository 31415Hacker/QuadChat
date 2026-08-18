import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { email, password, displayName, turnstileToken, website, headless } = req.body || {};
  if (website || headless) return res.status(400).json({ error: "Unable to create account." });
  if (!email || !password || !displayName || !turnstileToken) return res.status(400).json({ error: "Complete the form and CAPTCHA." });
  if (!process.env.TURNSTILE_SECRET_KEY) return res.status(500).json({ error: "CAPTCHA is not configured." });

  try {
    const captcha = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: turnstileToken })
    }).then((response) => response.json());
    if (!captcha.success) return res.status(400).json({ error: "CAPTCHA verification failed. Try again." });
    await admin.auth().createUser({ email: String(email).trim(), password: String(password), displayName: String(displayName).trim() });
    return res.status(201).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ error: error.code === "auth/email-already-exists" ? "That email already has an account. Sign in instead." : error.message || "Unable to create account." });
  }
}
