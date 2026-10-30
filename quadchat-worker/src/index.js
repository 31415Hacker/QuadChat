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
const SPAM_MUTE_DURATIONS = [
  { ms: 10_000, label: "10 seconds" },
  { ms: 30_000, label: "30 seconds" },
  { ms: 60_000, label: "1 minute" },
  { ms: 5 * 60_000, label: "5 minutes" },
  { ms: 10 * 60_000, label: "10 minutes" },
  { ms: 30 * 60_000, label: "30 minutes" },
  { ms: 60 * 60_000, label: "1 hour" },
  { ms: 2 * 60 * 60_000, label: "2 hours" },
  { ms: 5 * 60 * 60_000, label: "5 hours" },
  { ms: 10 * 60 * 60_000, label: "10 hours" },
  { ms: 12 * 60 * 60_000, label: "12 hours" },
  { ms: 18 * 60 * 60_000, label: "18 hours" },
  { ms: 24 * 60 * 60_000, label: "24 hours" }
];

const CORS_ORIGINS = new Set([
  "https://quad-chat.com",
  "https://quadchat-cf697.web.app"
]);

function getCorsHeaders(request) {
  const origin = request.headers.get("Origin");
  return {
    ...(CORS_ORIGINS.has(origin) ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {}),
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
  };
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers
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

function buildAutoMuteWrite(account, uid, durationMs = AUTO_MUTE_DURATION_MS, spamMuteLevel = null) {
  const documentName = `${databasePath(account)}/documents/users/${uid}`;
  const fields = {
    muted: { booleanValue: true },
    mutedUntil: {
      timestampValue: new Date(Date.now() + durationMs).toISOString()
    },
    mutedBy: { stringValue: AUTO_MUTE_BY }
  };
  const fieldPaths = ["muted", "mutedUntil", "mutedBy", "mutedUpdatedAt"];
  if (Number.isInteger(spamMuteLevel)) {
    fields.spamMuteLevel = { integerValue: String(spamMuteLevel) };
    fieldPaths.push("spamMuteLevel");
  }
  return {
    update: {
      name: documentName,
      fields,
      updateMask: {
        fieldPaths
      },
      updateTransforms: [{ fieldPath: "mutedUpdatedAt", setToServerValue: "REQUEST_TIME" }]
    }
  };
}

function buildSpamIncidentWrite(account, uid, text, channel, limit, windowSeconds) {
  const documentName = `${databasePath(account)}/documents/spam-incidents/${crypto.randomUUID()}`;
  return {
    update: {
      name: documentName,
      fields: {
        text: { stringValue: text },
        channel: { stringValue: channel },
        userId: { stringValue: uid },
        messageLimit: { integerValue: String(limit) },
        windowSeconds: { integerValue: String(windowSeconds) }
      },
      updateMask: {
        fieldPaths: ["text", "channel", "userId", "messageLimit", "windowSeconds", "createdAt"]
      },
      updateTransforms: [{ fieldPath: "createdAt", setToServerValue: "REQUEST_TIME" }]
    }
  };
}

function getSpamRateLimit(settingsDoc) {
  const messageLimit = Number(
    settingsDoc?.fields?.spamMessageLimit?.integerValue ??
    settingsDoc?.fields?.spamMessageLimit?.doubleValue ??
    settingsDoc?.fields?.spamMessagesPerSecond?.integerValue ??
    settingsDoc?.fields?.spamMessagesPerSecond?.doubleValue
  );
  const windowSeconds = Number(
    settingsDoc?.fields?.spamWindowSeconds?.integerValue ??
    settingsDoc?.fields?.spamWindowSeconds?.doubleValue
  );
  return {
    messageLimit: Number.isInteger(messageLimit) && messageLimit >= 1 && messageLimit <= 100 ? messageLimit : 3,
    windowSeconds: Number.isInteger(windowSeconds) && windowSeconds >= 1 && windowSeconds <= 3600 ? windowSeconds : 1
  };
}

export function getSpamMuteEscalation(level) {
  const safeLevel = Math.max(0, Math.min(SPAM_MUTE_DURATIONS.length - 1, Number(level) || 0));
  return {
    ...SPAM_MUTE_DURATIONS[safeLevel],
    nextLevel: Math.min(safeLevel + 1, SPAM_MUTE_DURATIONS.length - 1)
  };
}

async function handleModerate(request, env) {
  const corsHeaders = getCorsHeaders(request);
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405, corsHeaders);
  }

  const idToken = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!idToken) {
    return json({ error: "Not authenticated" }, 401, corsHeaders);
  }

  let callerUid;
  try {
    callerUid = await verifyFirebaseIdToken(idToken);
  } catch (err) {
    return json({ error: `Unauthorized: ${err.message}` }, 401, corsHeaders);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400, corsHeaders);
  }

  const text = typeof body?.text === "string" ? body.text.trim() : "";
  const channel = typeof body?.channel === "string" ? body.channel.slice(0, 64) : "";
  const checkSpam = body?.checkSpam === true;
  if (!text) {
    return json({ error: "No text supplied" }, 400, corsHeaders);
  }
  if (text.length > 2500) {
    return json({ error: "Text too long" }, 400, corsHeaders);
  }

  let account = null;
  try {
    account = parseServiceAccount(env.FIREBASE_SERVICE_ACCOUNT_KEY);
  } catch (err) {
    console.error("[MODERATION] Firebase service account unavailable, failing open:", err?.message || err);
  }

  let isAdmin = false;
  let spamMessageLimit = 3;
  let spamWindowSeconds = 1;
  let spamMuteLevel = 0;
  if (account) {
    try {
      const [callerDoc, settingsDoc] = await Promise.all([
        readFirestoreDoc(account, "users", callerUid),
        readFirestoreDoc(account, "settings", "app")
      ]);
      const callerData = callerDoc?.fields || {};
      isAdmin =
        callerData.isAdmin?.booleanValue === true ||
        callerData.isDeveloper?.booleanValue === true;
      ({ messageLimit: spamMessageLimit, windowSeconds: spamWindowSeconds } = getSpamRateLimit(settingsDoc));
      spamMuteLevel = Math.max(0, Math.min(
        SPAM_MUTE_DURATIONS.length - 1,
        Number(callerData.spamMuteLevel?.integerValue ?? callerData.spamMuteLevel?.doubleValue) || 0
      ));
    } catch (err) {
      console.error("[MODERATION] failed to read moderation settings:", err?.message || err);
    }
  }

  if (account && checkSpam && !isAdmin) {
    let isSpam = false;
    try {
      const limiter = env.PRESENCE.get(env.PRESENCE.idFromName(`spam:${callerUid}`));
      const result = await limiter.recordMessage(spamMessageLimit, spamWindowSeconds * 1000);
      isSpam = result.isSpam;
    } catch (err) {
      console.error("[SPAM] rate check skipped, failing open:", err?.message || err);
    }
    if (isSpam) {
      const escalation = getSpamMuteEscalation(spamMuteLevel);
      try {
        await commitFirestoreWrites(account, [
          buildSpamIncidentWrite(account, callerUid, text, channel, spamMessageLimit, spamWindowSeconds),
          buildAutoMuteWrite(account, callerUid, escalation.ms, escalation.nextLevel)
        ]);
        return json({
          flagged: true,
          muted: true,
          reason: "spam",
          muteDurationLabel: escalation.label,
          words: []
        }, 200, corsHeaders);
      } catch (err) {
        console.error("[SPAM] failed to record incident or mute user, failing open:", err?.message || err);
        return json({ flagged: false, words: [] }, 200, corsHeaders);
      }
    }
  }

  const words = await checkProfanity(text);
  if (!words || words.length === 0) {
    return json({ flagged: false, words: [] }, 200, corsHeaders);
  }

  if (!account) {
    return json({ flagged: false, words: [] }, 200, corsHeaders);
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
    console.error("[PROFANITY] failed to record message or mute user, failing open:", err?.message || err);
    return json({ flagged: false, words: [] }, 200, corsHeaders);
  }

  return json({ flagged: true, muted, words }, 200, corsHeaders);
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
    this.healthCheck = null;
  }

  ensureHealthCheck() {
    if (this.healthCheck) return;
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

  async recordMessage(limit, windowMs = 1000) {
    const now = Date.now();
    const windowStart = now - windowMs;
    const timestamps = (await this.ctx.storage.get("timestamps") || [])
      .filter((timestamp) => Number.isFinite(timestamp) && timestamp > windowStart);
    timestamps.push(now);
    await this.ctx.storage.put("timestamps", timestamps);
    return { isSpam: timestamps.length > limit };
  }

  async fetch(request) {
    this.ensureHealthCheck();
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
