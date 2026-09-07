import { createHash } from "node:crypto";
import { AccessToken } from "livekit-server-sdk";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}-default-rtdb.firebaseio.com`
  });
}

const JOINABLE_ROOM_PATTERN = /^[-A-Za-z0-9_.:]{1,64}$/;

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

    const room =
      typeof req.body?.room === "string" ? req.body.room.trim() : "";
    if (!room || !JOINABLE_ROOM_PATTERN.test(room)) {
      return res.status(400).json({ error: "Invalid room" });
    }

    const dirSnap = await admin
      .database()
      .ref(`call-directory/${room}`)
      .once("value");
    const dirData = dirSnap.val();

    if (!dirData) {
      return res.status(404).json({ error: "Call not found" });
    }

    if (dirData.passwordHash) {
      const password = typeof req.body?.password === "string" ? req.body.password : "";
      const salt = typeof dirData.passwordSalt === "string" ? dirData.passwordSalt : "";
      const hash = createHash("sha256").update(`${salt}:${password}`).digest("hex");
      if (!password || hash !== dirData.passwordHash) {
        return res.status(403).json({ error: "Incorrect password" });
      }
    }

    const at = new AccessToken(
      process.env.LIVEKIT_API_KEY,
      process.env.LIVEKIT_API_SECRET,
      {
        identity: decodedToken.uid,
        name: decodedToken.name || decodedToken.uid,
      }
    );
    at.addGrant({ roomJoin: true, room, canPublish: true, canSubscribe: true });
    const token = await at.toJwt();

    return res.status(200).json({ token, url: process.env.LIVEKIT_URL });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}