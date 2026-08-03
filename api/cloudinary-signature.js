import crypto from "crypto";
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
    await admin.auth().verifyIdToken(idToken);

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !uploadPreset || !apiKey || !apiSecret) {
      return res.status(500).json({ error: "Cloudinary env vars not configured" });
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const params = { timestamp, upload_preset: uploadPreset };
    const stringToSign =
      Object.keys(params)
        .sort()
        .map((key) => `${key}=${params[key]}`)
        .join("&") + apiSecret;
    const signature = crypto.createHash("sha1").update(stringToSign).digest("hex");

    return res
      .status(200)
      .json({ signature, timestamp, apiKey, cloudName, uploadPreset });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
