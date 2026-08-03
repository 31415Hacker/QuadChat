import { DurableObject } from "cloudflare:workers";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const FIRESTORE_SCOPE = "https://www.googleapis.com/auth/datastore";

let tokenCache = null;

function base64UrlEncode(str) {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
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
    const userId = url.searchParams.get("userId");
    if (!userId) {
      return new Response("Missing userId query parameter", { status: 400 });
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
