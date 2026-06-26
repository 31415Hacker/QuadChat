import { AccessToken } from "livekit-server-sdk";
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

    const at = new AccessToken(
      process.env.LIVEKIT_API_KEY,
      process.env.LIVEKIT_API_SECRET,
      {
        identity: decodedToken.uid,
        name: decodedToken.name || decodedToken.uid,
      }
    );
    at.addGrant({ roomJoin: true, room: "global", canPublish: true, canSubscribe: true });
    const token = await at.toJwt();

    return res.status(200).json({ token, url: process.env.LIVEKIT_URL });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
