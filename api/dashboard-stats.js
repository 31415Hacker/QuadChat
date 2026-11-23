import admin from "firebase-admin";
import { RoomServiceClient } from "livekit-server-sdk";

const PROJECT_ID = "quadchat-cf697";

function getApp() {
  const account = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "null");
  if (!account) throw new Error("Firebase service account is not configured");
  return admin.apps.find((app) => app.name === "quadchat-dashboard") || admin.initializeApp({
    credential: admin.credential.cert(account),
    databaseURL: `https://${account.project_id}-default-rtdb.firebaseio.com`
  }, "quadchat-dashboard");
}

async function requireDeveloper(req, app) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    throw Object.assign(new Error("Not authenticated"), { status: 401 });
  }
  const token = await app.auth().verifyIdToken(header.slice(7), true);
  const profile = await app.firestore().doc(`users/${token.uid}`).get();
  if (!profile.exists || profile.data().isDeveloper !== true) {
    throw Object.assign(new Error("Access restricted to a developer account."), { status: 403 });
  }
}

async function cloudinaryUsage() {
  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) return { available: false, reason: "Credentials are not configured in Vercel." };
  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/usage`, {
    headers: { Authorization: `Basic ${credentials}` }
  });
  if (!response.ok) throw new Error(`Cloudinary usage request failed (${response.status})`);
  const usage = await response.json();
  return {
    available: true,
    storage: usage.storage || null,
    bandwidth: usage.bandwidth || null,
    requests: usage.requests || null,
    resources: usage.resources || null,
    credits: usage.credits || null,
    plan: usage.plan || null
  };
}

async function liveKitUsage() {
  const url = process.env.LIVEKIT_URL;
  const key = process.env.LIVEKIT_API_KEY;
  const secret = process.env.LIVEKIT_API_SECRET;
  if (!url || !key || !secret) return { available: false, reason: "Credentials are not configured in Vercel." };
  const rooms = await new RoomServiceClient(url.replace(/^ws/, "http"), key, secret).listRooms();
  return {
    available: true,
    activeRooms: rooms.length,
    participants: rooms.reduce((total, room) => total + Number(room.numParticipants || 0), 0)
  };
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  try {
    const app = getApp();
    await requireDeveloper(req, app);
    const store = app.firestore();
    const database = app.database();
    const [users, messages, badMessages, spamIncidents, directory, cloudinary, livekit] = await Promise.all([
      store.collection("users").count().get(),
      store.collectionGroup("messages").count().get(),
      store.collection("bad-messages").count().get(),
      store.collection("spam-incidents").count().get(),
      database.ref("call-directory").get(),
      cloudinaryUsage().catch((error) => ({ available: false, reason: error.message })),
      liveKitUsage().catch((error) => ({ available: false, reason: error.message }))
    ]);
    const calls = directory.val() || {};
    return res.status(200).json({
      asOf: new Date().toISOString(),
      firebase: {
        projectId: PROJECT_ID,
        users: users.data().count,
        messages: messages.data().count,
        badMessages: badMessages.data().count,
        spamIncidents: spamIncidents.data().count,
        configuredCalls: Object.values(calls).filter((call) => !call?.deleting).length
      },
      cloudinary,
      livekit,
      cloudflare: { available: false, reason: "The Cloudflare token is a GitHub Actions secret, not a Vercel runtime secret." },
      vercel: { available: false, reason: "Vercel system variables identify this deployment but do not grant usage-analytics access." },
      github: { available: false, reason: "GitHub Actions secrets are available only to workflow jobs." }
    });
  } catch (error) {
    return res.status(error.status || 500).json({ error: error.message || "Could not load dashboard statistics." });
  }
}
