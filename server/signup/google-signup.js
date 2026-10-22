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
    const { code, email, uid } = parseBody(req);
    if (!code) {
      return res.status(400).json({ error: "Invite code is required." });
    }
    if (!uid || typeof uid !== "string") {
      return res.status(400).json({ error: "Sign in with Google first." });
    }

    const cleanEmail = String(email || "").trim().toLowerCase();
    if (!cleanEmail) {
      return res.status(400).json({ error: "Email is required." });
    }

    const verifiedUser = await admin.auth().getUser(uid).catch(() => null);
    if (!verifiedUser || String(verifiedUser.email || "").toLowerCase() !== cleanEmail) {
      return res.status(400).json({ error: "That account doesn't match the Google email you signed in with." });
    }
    if (!(verifiedUser.providerData || []).some((provider) => provider.providerId === "google.com")) {
      return res.status(400).json({ error: "That's not a Google account. Sign in with Google to redeem this code." });
    }

    const settingsSnapshot = await admin.firestore().doc("settings/app").get();
    if (settingsSnapshot.exists && settingsSnapshot.data().signupEnabled === false) {
      return res.status(403).json({ error: "Signup is currently disabled." });
    }

    const db = admin.firestore();

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

    const codeRef = db.doc(`signup-codes/${code}`);
    try {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(codeRef);
        if (!snap.exists) throw Object.assign(new Error("That invite code is invalid."), { status: 400 });
        const data = snap.data();
        if (data.used === true) throw Object.assign(new Error("That invite code has already been used."), { status: 400 });
        if (data.email && String(data.email).toLowerCase() !== cleanEmail) {
          throw Object.assign(new Error("That invite code is not valid for this email."), { status: 400 });
        }
        tx.update(codeRef, { used: true, usedAt: admin.firestore.FieldValue.serverTimestamp(), usedBy: cleanEmail });
      });
    } catch (txError) {
      return res.status(txError.status || 400).json({ error: txError.message || "Invite code validation failed." });
    }

    await db.doc(`approved-users/${cleanEmail}`).set({
      email: cleanEmail,
      uid,
      provider: "google",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "invite-code"
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ error: error.message || "Could not validate your invite code." });
  }
}
