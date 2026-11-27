import admin from "firebase-admin";
import { RoomServiceClient } from "livekit-server-sdk";
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";

const PROJECT_ID = "quadchat-cf697";
const CONNECTION_COLLECTION = "dashboard-provider-connections";

function credentialKey() {
  const secret = process.env.DASHBOARD_CREDENTIAL_ENCRYPTION_KEY;
  if (!secret) throw new Error("DASHBOARD_CREDENTIAL_ENCRYPTION_KEY is not configured.");
  return createHash("sha256").update(secret).digest();
}

function encryptCredential(secret) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", credentialKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(secret, "utf8"), cipher.final()]);
  return { ciphertext: ciphertext.toString("base64"), iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64") };
}

function decryptCredential(secret) {
  if (!secret?.ciphertext || !secret?.iv || !secret?.tag) return null;
  const decipher = createDecipheriv("aes-256-gcm", credentialKey(), Buffer.from(secret.iv, "base64"));
  decipher.setAuthTag(Buffer.from(secret.tag, "base64"));
  return Buffer.concat([decipher.update(Buffer.from(secret.ciphertext, "base64")), decipher.final()]).toString("utf8");
}

async function getProviderConnection(store, provider) {
  const snapshot = await store.doc(`${CONNECTION_COLLECTION}/${provider}`).get();
  if (!snapshot.exists) return null;
  const connection = snapshot.data();
  try { return { ...connection, secret: decryptCredential(connection.secret) }; } catch { return { ...connection, secret: null, corrupted: true }; }
}

async function saveProviderConnection(store, provider, { secret, metadata = {} }) {
  await store.doc(`${CONNECTION_COLLECTION}/${provider}`).set({ provider, secret: encryptCredential(secret), metadata, connectedAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
}

function publicConnection(connection) {
  if (!connection) return { connected: false };
  return { connected: Boolean(connection.secret) && !connection.corrupted, connectedAt: connection.connectedAt || null, metadata: connection.metadata || {}, error: connection.corrupted ? "Stored credential could not be decrypted. Reconnect this provider." : null };
}

function getApp() {
  const account = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "null");
  if (!account) throw new Error("Firebase service account is not configured");
  return admin.getApps().find((app) => app.name === "quadchat-dashboard") || admin.initializeApp({
    credential: admin.credential.cert(account),
    databaseURL: `https://${account.project_id}-default-rtdb.firebaseio.com`
  }, "quadchat-dashboard");
}

function unavailable(reason) {
  return { available: false, reason };
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  const data = await response.json();
  if (data.success === false) throw new Error(data.errors?.map((error) => error.message).join(", ") || "Provider rejected the request");
  return data;
}

async function requireDeveloper(req, app) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) throw Object.assign(new Error("Not authenticated"), { status: 401 });
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
  if (!cloudName || !apiKey || !apiSecret) return unavailable("Cloudinary credentials are not configured in Vercel.");
  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const usage = await fetchJson(`https://api.cloudinary.com/v1_1/${cloudName}/usage`, {
    headers: { Authorization: `Basic ${credentials}` }
  });
  return {
    available: true,
    cloudName,
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
  if (!url || !key || !secret) return unavailable("LiveKit credentials are not configured in Vercel.");
  const rooms = await new RoomServiceClient(url.replace(/^ws/, "http"), key, secret).listRooms();
  return {
    available: true,
    host: new URL(url).host,
    activeRooms: rooms.length,
    participants: rooms.reduce((total, room) => total + Number(room.numParticipants || 0), 0),
    // LiveKit exposes proto int64 timestamps as BigInt. Convert them before
    // sending JSON; JSON.stringify cannot serialize a BigInt value.
    rooms: rooms.map((room) => ({
      name: room.name,
      participants: Number(room.numParticipants || 0),
      createdAt: room.creationTime ? new Date(Number(room.creationTime) * 1000).toISOString() : null
    }))
  };
}

async function cloudflareUsage(connection) {
  const token = connection?.secret || process.env.CLOUDFLARE_API_TOKEN;
  const accountId = connection?.metadata?.accountId || process.env.CLOUDFLARE_ACCOUNT_ID;
  if (!token || !accountId) return unavailable("Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID in Vercel to view Cloudflare data.");
  const headers = { Authorization: `Bearer ${token}` };
  const [accountResponse, scriptsResponse] = await Promise.all([
    fetchJson(`https://api.cloudflare.com/client/v4/accounts/${accountId}`, { headers }),
    fetchJson(`https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts`, { headers })
  ]);
  const scripts = (scriptsResponse.result || []).map((script) => ({
    name: script.id,
    modifiedAt: script.modified_on || null,
    etag: script.etag || null
  }));
  return {
    available: true,
    accountName: accountResponse.result?.name || "Cloudflare account",
    workerScripts: scripts,
    workerScriptCount: scripts.length,
    turnstileConfigured: Boolean(process.env.TURNSTILE_SECRET_KEY)
  };
}

async function vercelUsage(connection) {
  const token = connection?.secret || process.env.VERCEL_TOKEN;
  const projectId = connection?.metadata?.projectId || process.env.VERCEL_PROJECT_ID;
  if (!token || !projectId) return unavailable("Set VERCEL_TOKEN and VERCEL_PROJECT_ID in Vercel to view project and deployment data.");
  const headers = { Authorization: `Bearer ${token}` };
  const [project, deployments] = await Promise.all([
    fetchJson(`https://api.vercel.com/v9/projects/${projectId}`, { headers }),
    fetchJson(`https://api.vercel.com/v6/deployments?projectId=${encodeURIComponent(projectId)}&limit=5`, { headers })
  ]);
  return {
    available: true,
    project: project.name,
    framework: project.framework || null,
    latestDeployments: (deployments.deployments || []).map((deployment) => ({
      url: deployment.url,
      state: deployment.state,
      target: deployment.target || "preview",
      createdAt: deployment.createdAt || null
    }))
  };
}

async function githubUsage(store, connection) {
  let token = process.env.GITHUB_TOKEN;
  if (connection?.secret) {
    try {
      const credential = JSON.parse(connection.secret);
      token = credential.access_token;
      if (credential.refresh_token && credential.expires_in && connection.connectedAt) {
        const expiresAt = new Date(connection.connectedAt).getTime() + Number(credential.expires_in) * 1000;
        if (Date.now() >= expiresAt - 60_000) {
          const refresh = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
              client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
              client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
              grant_type: "refresh_token",
              refresh_token: credential.refresh_token
            })
          });
          const refreshed = await refresh.json();
          if (!refresh.ok || !refreshed.access_token) throw new Error("GitHub authorization expired. Reconnect GitHub.");
          const updated = { ...credential, ...refreshed };
          await saveProviderConnection(store, "github", { secret: JSON.stringify(updated), metadata: connection.metadata });
          token = updated.access_token;
        }
      }
    } catch (error) {
      throw new Error(error.message || "GitHub authorization is invalid. Reconnect GitHub.");
    }
  }
  const repository = process.env.GITHUB_REPOSITORY || (process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
    ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}` : "");
  if (!token || !repository) return unavailable("Set GITHUB_TOKEN and GITHUB_REPOSITORY in Vercel to view Actions data.");
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
  const workflows = await fetchJson(`https://api.github.com/repos/${repository}/actions/workflows?per_page=100`, { headers });
  const workflowData = await Promise.all((workflows.workflows || []).map(async (workflow) => {
    const runs = await fetchJson(`https://api.github.com/repos/${repository}/actions/workflows/${workflow.id}/runs?per_page=1`, { headers });
    const run = runs.workflow_runs?.[0];
    return { name: workflow.name, state: workflow.state, lastRun: run ? { status: run.status, conclusion: run.conclusion, createdAt: run.created_at, url: run.html_url } : null };
  }));
  return { available: true, repository, workflows: workflowData };
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  try {
    const app = getApp();
    await requireDeveloper(req, app);
    const store = app.firestore();
    const database = app.database();
    const migratedSettingsQuery = store.collection("user-settings").where("migrationVersion", "==", 1);
    const [cloudflareConnection, vercelConnection, githubConnection] = await Promise.all([
      getProviderConnection(store, "cloudflare"),
      getProviderConnection(store, "vercel"),
      getProviderConnection(store, "github")
    ]);
    const [users, messages, badMessages, spamIncidents, directory, migratedSettings, migratedSettingsDocs, cloudinary, livekit, cloudflare, vercel, github] = await Promise.all([
      store.collection("users").count().get(),
      store.collectionGroup("messages").count().get(),
      store.collection("bad-messages").count().get(),
      store.collection("spam-incidents").count().get(),
      database.ref("call-directory").get(),
      migratedSettingsQuery.count().get(),
      migratedSettingsQuery.get(),
      cloudinaryUsage().catch((error) => unavailable(error.message)),
      liveKitUsage().catch((error) => unavailable(error.message)),
      cloudflareUsage(cloudflareConnection).catch((error) => unavailable(`Cloudflare: ${error.message}`)),
      vercelUsage(vercelConnection).catch((error) => unavailable(`Vercel: ${error.message}`)),
      githubUsage(store, githubConnection).catch((error) => unavailable(`GitHub: ${error.message}`))
    ]);
    const calls = directory.val() || {};
    const migratedUsers = await Promise.all(migratedSettingsDocs.docs.map(async (settings) => {
      const profile = await store.doc(`users/${settings.id}`).get();
      const data = profile.data() || {};
      return {
        uid: settings.id,
        name: data.name || data.displayName || data.email || settings.id,
        migratedAt: settings.data().migratedAt?.toDate?.().toISOString() || null
      };
    }));
    migratedUsers.sort((a, b) => String(b.migratedAt || "").localeCompare(String(a.migratedAt || "")));
    return res.status(200).json({
      asOf: new Date().toISOString(),
      firebase: {
        projectId: PROJECT_ID,
        users: users.data().count,
        messages: messages.data().count,
        badMessages: badMessages.data().count,
        spamIncidents: spamIncidents.data().count,
        configuredCalls: Object.values(calls).filter((call) => !call?.deleting).length,
        settingsMigrated: migratedSettings.data().count,
        migrationUsers: migratedUsers
      },
      cloudinary,
      livekit,
      cloudflare,
      vercel,
      github,
      connections: {
        cloudflare: publicConnection(cloudflareConnection),
        vercel: publicConnection(vercelConnection),
        github: publicConnection(githubConnection)
      },
      purgomalum: { available: true, endpoint: "www.purgomalum.com/service/json", telemetry: "The provider does not expose account usage telemetry." }
    });
  } catch (error) {
    return res.status(error.status || 500).json({ error: error.message || "Could not load dashboard statistics." });
  }
}
