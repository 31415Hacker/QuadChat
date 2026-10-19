import admin from "firebase-admin";
import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import { createCallService } from "./service.js";

let service;
function getService() {
  const account = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(account) });
  if (!service) {
    const url = process.env.LIVEKIT_URL;
    // Self-hosted LiveKit does not enforce token revocation. Fail closed rather
    // than silently permit replay of pre-mute/deleted-room credentials.
    if (!new URL(url).hostname.endsWith(".livekit.cloud")) {
      throw new Error("Secure calls require LiveKit Cloud token revocation");
    }
    service = createCallService({
      auth: admin.auth(), store: admin.firestore(),
      database: admin.database(undefined, `https://${account.project_id}-default-rtdb.firebaseio.com`),
      rooms: new RoomServiceClient(url.replace(/^ws/, "http"), process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET),
      makeToken: async ({ identity, name, room, canPublish, ttl }) => {
        const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, { identity, name, ttl });
        token.addGrant({ roomJoin: true, room, canPublish, canPublishData: canPublish, canSubscribe: true });
        return token.toJwt();
      }
    });
  }
  return service;
}

export function callHandler(action) {
  return async (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    try {
      const result = await getService().handle(action, req);
      return res.status(200).json(action === "livekit-token" ? { ...result, url: process.env.LIVEKIT_URL } : result);
    } catch (error) {
      const status = error.status || (error.code === "not_found" ? 404 : 500);
      if (status >= 500) console.error("Call operation failed", error);
      return res.status(status).json({ error: status >= 500 ? "Call service unavailable. Please try again." : error.message });
    }
  };
}
