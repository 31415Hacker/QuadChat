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
    rooms: rooms.map((room) => ({ name: room.name, participants: Number(room.numParticipants || 0), createdAt: room.creationTime || null }))
  };
}

async function cloudflareUsage() {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
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

async function vercelUsage() {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
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

async function githubUsage() {
  const token = process.env.GITHUB_TOKEN;
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
    const [users, messages, badMessages, spamIncidents, directory, cloudinary, livekit, cloudflare, vercel, github] = await Promise.all([
      store.collection("users").count().get(),
      store.collectionGroup("messages").count().get(),
      store.collection("bad-messages").count().get(),
      store.collection("spam-incidents").count().get(),
      database.ref("call-directory").get(),
      cloudinaryUsage().catch((error) => unavailable(error.message)),
      liveKitUsage().catch((error) => unavailable(error.message)),
      cloudflareUsage().catch((error) => unavailable(`Cloudflare: ${error.message}`)),
      vercelUsage().catch((error) => unavailable(`Vercel: ${error.message}`)),
      githubUsage().catch((error) => unavailable(`GitHub: ${error.message}`))
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
      cloudflare,
      vercel,
      github,
      purgomalum: { available: true, endpoint: "www.purgomalum.com/service/json", telemetry: "The provider does not expose account usage telemetry." }
    });
  } catch (error) {
    return res.status(error.status || 500).json({ error: error.message || "Could not load dashboard statistics." });
  }
}
