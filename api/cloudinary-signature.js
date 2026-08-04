import crypto from "crypto";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const MAX_MESSAGE_BYTES = 50 * 1024 * 1024; // 50 MB
const MAX_VOICE_BYTES = 50 * 1024 * 1024; // 50 MB
const MAX_PROFILE_BYTES = 5 * 1024 * 1024; // 5 MB

// Types that can carry active content and are never allowed, no matter what
// the client reports.
const BLOCKED_TYPES = new Set([
  "text/html",
  "application/xhtml+xml",
  "text/javascript",
  "application/javascript",
  "application/x-javascript",
  "text/ecmascript",
  "application/ecmascript",
  "application/x-msdownload",
  "application/x-msdos-program",
  "application/vnd.microsoft.portable-executable",
  "application/x-shockwave-flash",
  "image/svg+xml",
  "application/x-httpd-php",
  "application/x-perl"
]);

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

function validateUpload(metadata) {
  const kind = metadata.kind || "message";
  const size = Number(metadata.fileSize);
  const fileType = String(metadata.fileType || "").toLowerCase();
  const fileName = String(metadata.fileName || "");

  if (!Number.isFinite(size) || size <= 0) {
    return "File size is required.";
  }

  const sizeLimit =
    kind === "profile" ? MAX_PROFILE_BYTES : MAX_MESSAGE_BYTES;
  if (size > sizeLimit) {
    return kind === "profile"
      ? "Profile pictures must be 5 MB or smaller."
      : "Files must be 50 MB or smaller.";
  }

  if (BLOCKED_TYPES.has(fileType)) {
    return "This file type is not allowed.";
  }

  if (kind === "profile") {
    if (!fileType.startsWith("image/")) {
      return "Profile pictures must be an image.";
    }
  } else if (kind === "voice") {
    if (!fileType.startsWith("audio/")) {
      return "Voice messages must be audio files.";
    }
  }

  if (/\.(?:html?|php|asp|aspx|jsp|sh|bat|cmd|ps1|js|mjs|svg|exe|dll|msi|scr|jar)$/i.test(fileName)) {
    return "This file type is not allowed.";
  }

  return null;
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

    const validationError = validateUpload(parseBody(req));
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.VITE_CLOUDINARY_UPLOAD_PRESET;
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
