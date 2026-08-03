import { DurableObject } from "cloudflare:workers";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const FIRESTORE_SCOPE = "https://www.googleapis.com/auth/datastore";
const JWKS_URL =
  "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

const FIREBASE_PROJECT_ID = "quadchat-cf697";
const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;

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
  }

  async fetch(request) {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    if (!token) {
      return new Response("Missing token query parameter", { status: 400 });
    }

    let userId;
    try {
      userId = await verifyFirebaseIdToken(token);
    } catch (err) {
      return new Response(`Unauthorized: ${err.message}`, { status: 401 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.handleSession(server, userId);
    return new Response(null, { status: 101, webSocket: client });
  }

  async handleSession(webSocket, userId) {
    webSocket.accept();
    this.sessions.set(webSocket, userId);
    await this.cancelPendingOffline(userId);
    this.broadcast({ type: "presence", userId, status: "online" });
    const onlineUsers = Array.from(new Set(this.sessions.values()));
    webSocket.send(JSON.stringify({ type: "sync", onlineUsers }));

    const handleDisconnect = () => {
      if (this.sessions.has(webSocket)) {
        this.sessions.delete(webSocket);
        const isStillConnected = Array.from(this.sessions.values()).includes(userId);
        if (!isStillConnected) {
          this.scheduleOffline(userId);
        }
      }
    };

    webSocket.addEventListener("close", handleDisconnect);
    webSocket.addEventListener("error", handleDisconnect);
  }

  isConnected(userId) {
    return Array.from(this.sessions.values()).includes(userId);
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
        this.sessions.delete(ws);
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
