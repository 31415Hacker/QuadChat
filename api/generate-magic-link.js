import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const idToken = authHeader.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    const callerDoc = await admin
      .firestore()
      .doc(`users/${decodedToken.uid}`)
      .get();
    if (!callerDoc.exists || !callerDoc.data().isAdmin) {
      return res.status(403).json({ error: "Only admins can generate magic links." });
    }

    const { email, redirectUrl } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const link = await admin.auth().generateSignInWithEmailLink(email, {
      url: redirectUrl || "https://quadchat-cf697.firebaseapp.com",
      handleCodeInApp: true
    });

    return res.status(200).json({ url: link });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
