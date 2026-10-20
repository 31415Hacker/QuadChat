import admin from "firebase-admin";
import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import { createCallService, failure } from "./service.js";

let service;
const CALLS_APP_NAME = "quadchat-calls";
function getService() {
  const accountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!accountJson) throw failure(503, "Call service is not configured: FIREBASE_SERVICE_ACCOUNT_KEY is missing");
  const account = JSON.parse(accountJson);
  // databaseURL must be set on the app: admin.database(app) ignores a second
  // url argument, so without it the SDK cannot resolve the RTDB instance. Use a
  // dedicated named app so we never inherit another function's default app
  // (Vercel may share the module isolate across functions in a region).
  const databaseURL = `https://${account.project_id}-default-rtdb.firebaseio.com`;
  const app = admin.apps.find((candidate) => candidate.name === CALLS_APP_NAME)
    || admin.initializeApp({ credential: admin.credential.cert(account), databaseURL }, CALLS_APP_NAME);
  if (!service) {
    const url = process.env.LIVEKIT_URL;
    if (!url) throw failure(503, "Call service is not configured: LIVEKIT_URL is missing");
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      throw failure(503, `Call service is not configured: LIVEKIT_URL is not a valid URL ("${url}")`);
    }
    // Self-hosted LiveKit does not enforce token revocation. Fail closed rather
    // than silently permit replay of pre-mute/deleted-room credentials.
    if (!parsedUrl.hostname.endsWith(".livekit.cloud")) {
      throw failure(503, "Call service is not configured: LIVEKIT_URL must be a LiveKit Cloud URL");
    }
    service = createCallService({
      auth: app.auth(), store: app.firestore(),
      database: app.database(),
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
      // Surface the underlying cause for 5xx so misconfiguration is diagnosable
      // from the browser without needing to open the Vercel function logs.
      return res.status(status).json({ error: status >= 500 ? `Call service unavailable: ${error.message}` : error.message });
    }
  };
}
