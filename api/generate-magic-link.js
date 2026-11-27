import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount)
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
    const decodedToken = await getAuth().verifyIdToken(idToken, true);

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

    const link = await getAuth().generateSignInWithEmailLink(email, {
      url: redirectUrl || "https://quadchat-cf697.firebaseapp.com",
      handleCodeInApp: true
    });

    return res.status(200).json({ url: link });
  } catch (err) {
    return res.status(500).json({ error: "Could not generate link. Please try again." });
  }
}
