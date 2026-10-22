import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { email, displayName, password, provider, uid, turnstileToken, website, headless } = req.body || {};
  if (website || headless) return res.status(400).json({ error: "Unable to submit request." });
  if (!email || !displayName) return res.status(400).json({ error: "Complete the form." });

  try {
    const kind = provider === "google" ? "google" : "password";
    if (kind === "google") {
      if (!uid || typeof uid !== "string") {
        return res.status(400).json({ error: "Sign in with Google first so the request can be bound to your account." });
      }
    }
    if (kind === "google") {
      if (!process.env.TURNSTILE_SECRET_KEY) {
        // Google sign-in already verifies the caller's email, so CAPTCHA is
        // optional for that path.
      }
    } else {
      if (!turnstileToken || !process.env.TURNSTILE_SECRET_KEY) {
        return res.status(400).json({ error: "Complete the form and CAPTCHA." });
      }
      const captcha = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: turnstileToken })
      }).then((response) => response.json());
      if (!captcha.success) return res.status(400).json({ error: "CAPTCHA verification failed. Try again." });
    }

    const settingsSnapshot = await admin.firestore().doc("settings/app").get();
    if (settingsSnapshot.exists && settingsSnapshot.data().signupEnabled === false) {
      return res.status(403).json({ error: "Signup is currently disabled." });
    }

    const db = admin.firestore();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(displayName).trim();

    if (kind === "google") {
      const googleUser = await admin.auth().getUser(uid).catch(() => null);
      if (
        !googleUser ||
        String(googleUser.email || "").toLowerCase() !== cleanEmail ||
        !(googleUser.providerData || []).some((account) => account.providerId === "google.com")
      ) {
        return res.status(400).json({ error: "Sign in with the Google account for this email first." });
      }
    }

    const attemptsRef = db.collection("signup-rate-limits").doc(cleanEmail);
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(attemptsRef);
      const now = Date.now();
      const data = snap.exists ? snap.data() : { count: 0, resetAt: now + 3600_000 };
      if (data.resetAt <= now) {
        tx.set(attemptsRef, { count: 1, resetAt: now + 3600_000 });
      } else if (data.count >= 5) {
        throw Object.assign(new Error("Too many requests. Try again later."), { status: 429 });
      } else {
        tx.update(attemptsRef, { count: data.count + 1 });
      }
    });

    if (kind === "password") {
      const existing = await admin.auth().getUserByEmail(cleanEmail).catch((error) => {
        if (error.code === "auth/user-not-found") return null;
        throw error;
      });
      if (existing) return res.status(400).json({ error: "That email already has an account. Sign in instead." });
    }

    const pendingSnap = await db
      .collection("signup-requests")
      .where("email", "==", cleanEmail)
      .where("status", "==", "pending")
      .limit(1)
      .get();
    if (!pendingSnap.empty) return res.status(400).json({ error: "You already have a pending request." });

    const requestData = {
      email: cleanEmail,
      displayName: cleanName,
      provider: kind,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    if (kind === "google") {
      requestData.uid = uid;
    }
    await db.collection("signup-requests").add(requestData);

    return res.status(201).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ error: error.message || "Unable to submit request." });
  }
}
