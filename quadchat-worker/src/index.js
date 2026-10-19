import { DurableObject } from "cloudflare:workers";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const FIRESTORE_SCOPE = "https://www.googleapis.com/auth/datastore";
const FIRESTORE_BASE = "https://firestore.googleapis.com/v1";
const JWKS_URL =
  "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

const PROFANITY_API = "https://www.purgomalum.com/service/json";
const PROFANITY_FILL = "*";
const AUTO_MUTE_DURATION_MS = 24 * 60 * 60 * 1000;
const AUTO_MUTE_BY = "__auto-mod__";

const CORS_ORIGIN = "https://quadchat-cf697.web.app";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": CORS_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};

function json(data, status = 200, cors = false) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...(cors ? CORS_HEADERS : {})
    }
  });
}

function databasePath(account) {
  return `projects/${account.project_id}/databases/(default)`;
}

export function findStandaloneProfanity(originalText, censoredText) {
  if (!originalText || !censoredText || originalText === censoredText) {
    return [];
  }

  const originalChunks = originalText.split(/\s+/).filter(Boolean);
  const censoredChunks = censoredText.split(/\s+/).filter(Boolean);
  const caught = [];

  for (let i = 0; i < originalChunks.length; i++) {
    const censored = censoredChunks[i] || "";
    if (!censored.includes(PROFANITY_FILL)) continue;

    const lettersRemaining = censored
      .split(PROFANITY_FILL)
      .join("")
      .replace(/[^a-zA-Z0-9]/g, "");
    if (lettersRemaining.length > 0) continue;

    const word = originalChunks[i].replace(/[^a-zA-Z0-9]/g, "");
    if (word) caught.push(word);
  }

  return caught;
}

async function checkProfanity(text) {
  try {
    const params = new URLSearchParams({ text, fill_char: PROFANITY_FILL });
    const response = await fetch(`${PROFANITY_API}?${params.toString()}`);
    if (!response.ok) return null;
    const data = await response.json();
    const censored = typeof data?.result === "string" ? data.result : null;
    if (censored === null) return null;
    return findStandaloneProfanity(text, censored);
  } catch (err) {
    console.error("[PROFANITY] moderation API unreachable, failing open:", err?.message || err);
    return null;
  }
}

async function readFirestoreDoc(account, collection, docId) {
  const accessToken = await getAccessToken(account);
  const documentName = `${databasePath(account)}/documents/${collection}/${docId}`;
  const url = `${FIRESTORE_BASE}/${documentName}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (response.status === 404) return null;
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Firestore read failed: ${response.status} ${text}`);
  }
  return response.json();
}

async function commitFirestoreWrites(account, writes) {
  const accessToken = await getAccessToken(account);
  const url = `${FIRESTORE_BASE}/${databasePath(account)}/documents:commit`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ writes })
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Firestore commit failed: ${response.status} ${text}`);
  }
}

function buildBadMessageWrite(account, uid, text, channel, words) {
  const documentName = `${databasePath(account)}/documents/bad-messages/${crypto.randomUUID()}`;
  return {
    update: {
      name: documentName,
      fields: {
        text: { stringValue: text },
        channel: { stringValue: channel },
        userId: { stringValue: uid },
        words: { arrayValue: { values: words.map((word) => ({ stringValue: word })) } }
      },
      updateMask: {
        fieldPaths: ["text", "channel", "userId", "words", "createdAt"]
      },
      updateTransforms: [{ fieldPath: "createdAt", setToServerValue: "REQUEST_TIME" }]
    }
  };
}

function buildAutoMuteWrite(account, uid) {
  const documentName = `${databasePath(account)}/documents/users/${uid}`;
  return {
    update: {
      name: documentName,
      fields: {
        muted: { booleanValue: true },
        mutedUntil: {
          timestampValue: new Date(Date.now() + AUTO_MUTE_DURATION_MS).toISOString()
        },
        mutedBy: { stringValue: AUTO_MUTE_BY }
      },
      updateMask: {
        fieldPaths: ["muted", "mutedUntil", "mutedBy", "mutedUpdatedAt"]
      },
      updateTransforms: [{ fieldPath: "mutedUpdatedAt", setToServerValue: "REQUEST_TIME" }]
    }
  };
}

async function handleModerate(request, env) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405, true);
  }

  const idToken = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!idToken) {
    return json({ error: "Not authenticated" }, 401, true);
  }

  let callerUid;
  try {
    callerUid = await verifyFirebaseIdToken(idToken);
  } catch (err) {
    return json({ error: `Unauthorized: ${err.message}` }, 401, true);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400, true);
  }

  const text = typeof body?.text === "string" ? body.text.trim() : "";
  const channel = typeof body?.channel === "string" ? body.channel.slice(0, 64) : "";
  if (!text) {
    return json({ error: "No text supplied" }, 400, true);
  }
  if (text.length > 2500) {
    return json({ error: "Text too long" }, 400, true);
  }

  const words = await checkProfanity(text);
  if (!words || words.length === 0) {
    return json({ flagged: false, words: [] }, 200, true);
  }

  const account = parseServiceAccount(env.FIREBASE_SERVICE_ACCOUNT_KEY);

  let isAdmin = false;
  try {
    const callerDoc = await readFirestoreDoc(account, "users", callerUid);
    const callerData = callerDoc?.fields || {};
    isAdmin =
      callerData.isAdmin?.booleanValue === true ||
      callerData.isDeveloper?.booleanValue === true;
  } catch (err) {
    console.error("[PROFANITY] failed to read caller profile:", err?.message || err);
  }

  const writes = [buildBadMessageWrite(account, callerUid, text, channel, words)];
  let muted = false;
  if (!isAdmin) {
    writes.push(buildAutoMuteWrite(account, callerUid));
    muted = true;
  }

  try {
    await commitFirestoreWrites(account, writes);
  } catch (err) {
    return json({ error: err.message }, 500, true);
  }

  return json({ flagged: true, muted, words }, 200, true);
}

const FIREBASE_PROJECT_ID = "quadchat-cf697";
const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
const MAX_SESSIONS_PER_USER = 3;
const MAX_CONNECTION_ATTEMPTS_PER_MINUTE = 10;
const MAX_MESSAGES_PER_MINUTE = 12;

let tokenCache = null;
let jwksCache = { keys: null, fetchedAt: 0 };

function base64UrlEncode(str) {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(str) {
  const pad = str.length % 4 === 0 ? "" : "=".repeat(4 - (str.length % 4));
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return bytes.buffer;
}

async function getFirebaseJwks() {
  const age = Date.now() - jwksCache.fetchedAt;
  if (jwksCache.keys && age < 3600000) {
    return jwksCache.keys;
  }
  const response = await fetch(JWKS_URL);
  if (!response.ok) {
    throw new Error(`JWKS fetch failed: ${response.status}`);
  }
  const json = await response.json();
  const keys = {};
  for (const key of json.keys) {
    keys[key.kid] = key;
  }
  jwksCache = { keys, fetchedAt: Date.now() };
  return keys;
}

async function verifyFirebaseIdToken(token) {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Malformed token");
  }
  const [headerB64, payloadB64, signatureB64] = parts;
  const header = JSON.parse(new TextDecoder().decode(base64UrlDecode(headerB64)));
  const payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(payloadB64)));

  if (payload.aud !== FIREBASE_PROJECT_ID) {
    throw new Error("Wrong audience");
  }
  if (payload.iss !== FIREBASE_ISSUER) {
    throw new Error("Wrong issuer");
  }
  if (!payload.exp || payload.exp * 1000 < Date.now()) {
    throw new Error("Token expired");
  }
  if (!payload.sub) {
    throw new Error("Missing subject");
  }

  const jwks = await getFirebaseJwks();
  const jwk = jwks[header.kid];
  if (!jwk) {
    throw new Error("Unknown signing key");
  }
  const publicKey = await crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const valid = await crypto.subtle.verify(
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    publicKey,
    base64UrlDecode(signatureB64),
    new TextEncoder().encode(`${headerB64}.${payloadB64}`)
  );
  if (!valid) {
    throw new Error("Invalid signature");
  }
  return payload.sub;
}

function pemToArrayBuffer(pem) {
  const base64 = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function parseServiceAccount(raw) {
  if (typeof raw !== "string" || !raw.trim()) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is missing");
  }
  const account = JSON.parse(raw);
  if (!account.project_id || !account.client_email || !account.private_key) {
    throw new Error("Invalid service account key: missing required fields");
  }
  return account;
}

async function getAccessToken(account) {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 300000) {
    return tokenCache.token;
  }

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss: account.client_email,
    scope: FIRESTORE_SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600
  };
  const unsignedToken =
    base64UrlEncode(JSON.stringify(header)) +
    "." +
    base64UrlEncode(JSON.stringify(claims));

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(account.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsignedToken)
  );

  const signatureBase64 = base64UrlEncode(
    String.fromCharCode(...new Uint8Array(signature))
  );
  const assertion = unsignedToken + "." + signatureBase64;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to obtain OAuth2 token: ${response.status} ${text}`);
  }

  const data = await response.json();
  tokenCache = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000
  };
  return data.access_token;
}

async function updateLastOnline(env, userId) {
  const account = parseServiceAccount(env.FIREBASE_SERVICE_ACCOUNT_KEY);
  const accessToken = await getAccessToken(account);

  const databasePath = `projects/${account.project_id}/databases/(default)`;
  const documentName = `${databasePath}/documents/users/${userId}`;
  const url = `https://firestore.googleapis.com/v1/${databasePath}/documents:commit`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      writes: [
        {
          update: {
            name: documentName,
            fields: {}
          },
          updateMask: { fieldPaths: ["lastOnline"] },
          updateTransforms: [
            {
              fieldPath: "lastOnline",
              setToServerValue: "REQUEST_TIME"
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Firestore write failed: ${response.status} ${text}`);
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/moderate") {
      return handleModerate(request, env);
    }

    if (request.headers.get("Upgrade") === "websocket") {
      const id = env.PRESENCE.idFromName("global-presence");
      const stub = env.PRESENCE.get(id);
      return stub.fetch(request);
    }
    return new Response("QuadChat Presence Server running", { status: 200 });
  }
};

export class PresenceServer extends DurableObject {
  constructor(state, env) {
    super(state, env);
    this.env = env;
    this.sessions = new Map();
    this.connectionAttempts = new Map();
    this.messageWindows = new Map();
    this.healthCheck = setInterval(() => {
      const now = Date.now();
      for (const [webSocket, session] of this.sessions) {
        if (now - session.lastPing <= 25000) continue;
        try {
          webSocket.close();
        } finally {
          this.handleDisconnect(webSocket);
        }
      }
    }, 15000);
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.searchParams.get("token")) {
      return new Response("Token must be sent via WebSocket message, not URL", { status: 400 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.handleConnection(server);
    return new Response(null, { status: 101, webSocket: client });
  }

  async handleConnection(webSocket) {
    webSocket.accept();
    let authenticated = false;
    let userId = null;

    const timeout = setTimeout(() => {
      if (!authenticated) {
        try { webSocket.close(1008, "Authentication timeout"); } catch {}
      }
    }, 15000);

    webSocket.addEventListener("message", async (event) => {
      if (authenticated) {
        const session = this.sessions.get(webSocket);
        if (!session) return;
        const now = Date.now();
        const recentMessages = (this.messageWindows.get(webSocket) || []).filter(
          (timestamp) => now - timestamp < 60000
        );
        if (recentMessages.length >= MAX_MESSAGES_PER_MINUTE) {
          webSocket.close(1008, "Presence message rate limit exceeded");
          this.handleDisconnect(webSocket);
          return;
        }
        recentMessages.push(now);
        this.messageWindows.set(webSocket, recentMessages);
        session.lastPing = now;
        return;
      }

      try {
        const data = JSON.parse(event.data);
        if (data.type !== "auth" || !data.token) {
          webSocket.close(1008, "Expected auth message");
          return;
        }

        userId = await verifyFirebaseIdToken(data.token);

        const account = parseServiceAccount(this.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        const callerDoc = await readFirestoreDoc(account, "users", userId);
        if (!callerDoc) {
          webSocket.close(1008, "User not found");
          return;
        }
        const callerData = callerDoc.fields || {};
        if (callerData.banned?.booleanValue === true) {
          webSocket.close(1008, "Account banned");
          return;
        }

        const now = Date.now();
        const attempts = (this.connectionAttempts.get(userId) || []).filter(
          (timestamp) => now - timestamp < 60000
        );
        const activeSessions = Array.from(this.sessions.values()).filter(
          (session) => session.userId === userId
        ).length;
        if (
          activeSessions >= MAX_SESSIONS_PER_USER ||
          attempts.length >= MAX_CONNECTION_ATTEMPTS_PER_MINUTE
        ) {
          webSocket.close(1008, "Presence connection rate limit exceeded");
          return;
        }
        attempts.push(now);
        this.connectionAttempts.set(userId, attempts);

        authenticated = true;
        clearTimeout(timeout);
        this.sessions.set(webSocket, { userId, lastPing: Date.now() });
        await this.cancelPendingOffline(userId);
        this.broadcast({ type: "presence", userId, status: "online" });
        const onlineUsers = Array.from(
          new Set(Array.from(this.sessions.values()).map((session) => session.userId))
        );
        webSocket.send(JSON.stringify({ type: "sync", onlineUsers }));
      } catch (err) {
        try { webSocket.close(1008, "Authentication failed"); } catch {}
      }
    });

    webSocket.addEventListener("close", () => {
      clearTimeout(timeout);
      if (authenticated) this.handleDisconnect(webSocket);
    });
    webSocket.addEventListener("error", () => {
      clearTimeout(timeout);
      if (authenticated) this.handleDisconnect(webSocket);
    });
  }

  handleDisconnect(webSocket) {
    const session = this.sessions.get(webSocket);
    if (!session) return;

    this.sessions.delete(webSocket);
    this.messageWindows.delete(webSocket);
    const isStillConnected = Array.from(this.sessions.values()).some(
      (activeSession) => activeSession.userId === session.userId
    );
    if (!isStillConnected) {
      this.scheduleOffline(session.userId);
    }
  }

  isConnected(userId) {
    return Array.from(this.sessions.values()).some(
      (session) => session.userId === userId
    );
  }

  async scheduleOffline(userId) {
    const pending = (await this.ctx.storage.get("pendingOffline")) || {};
    if (!pending[userId]) {
      pending[userId] = Date.now() + 10000;
      await this.ctx.storage.put("pendingOffline", pending);
      const currentAlarm = await this.ctx.storage.getAlarm();
      const nextAlarm = Math.min(...Object.values(pending));
      if (!currentAlarm || nextAlarm < currentAlarm) {
        await this.ctx.storage.setAlarm(nextAlarm);
      }
    }
  }

  async cancelPendingOffline(userId) {
    const pending = (await this.ctx.storage.get("pendingOffline")) || {};
    if (pending[userId]) {
      delete pending[userId];
      if (Object.keys(pending).length === 0) {
        await this.ctx.storage.delete("pendingOffline");
        await this.ctx.storage.deleteAlarm();
      } else {
        await this.ctx.storage.put("pendingOffline", pending);
      }
    }
  }

  async alarm() {
    const pending = (await this.ctx.storage.get("pendingOffline")) || {};
    const now = Date.now();
    for (const [userId, deadline] of Object.entries(pending)) {
      if (deadline <= now) {
        delete pending[userId];
        if (!this.isConnected(userId)) {
          this.writeLastOnline(userId);
          this.broadcast({ type: "presence", userId, status: "offline" });
        }
      }
    }
    const remaining = Object.values(pending);
    if (remaining.length > 0) {
      await this.ctx.storage.put("pendingOffline", pending);
      await this.ctx.storage.setAlarm(Math.min(...remaining));
    } else {
      await this.ctx.storage.delete("pendingOffline");
    }
  }

  broadcast(data) {
    const payload = JSON.stringify(data);
    for (const [ws] of this.sessions) {
      try {
        ws.send(payload);
      } catch (err) {
        this.handleDisconnect(ws);
      }
    }
  }

  async writeLastOnline(userId) {
    try {
      await updateLastOnline(this.env, userId);
    } catch (err) {
      console.error(`Failed to write lastOnline for ${userId}:`, err);
    }
  }
}
