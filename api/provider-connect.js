import crypto from "crypto";
import admin from "firebase-admin";
import { deleteProviderConnection, getProviderConnection, publicConnection, saveProviderConnection } from "../server/dashboard/provider-connections.js";

function getApp() {
  const account = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "null");
  if (!account) throw new Error("Firebase service account is not configured");
  return admin.apps.find((app) => app.name === "quadchat-dashboard") || admin.initializeApp({ credential: admin.credential.cert(account) }, "quadchat-dashboard");
}

function body(req) {
  if (req.body && typeof req.body === "object") return req.body;
  try { return JSON.parse(req.body || "{}"); } catch { return {}; }
}

async function requireDeveloper(req, app) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) throw Object.assign(new Error("Not authenticated"), { status: 401 });
  const token = await app.auth().verifyIdToken(header.slice(7), true);
  const profile = await app.firestore().doc(`users/${token.uid}`).get();
  if (!profile.exists || profile.data().isDeveloper !== true) throw Object.assign(new Error("Access restricted to a developer account."), { status: 403 });
  return token;
}

function callbackUrl() {
  const url = process.env.DASHBOARD_OAUTH_CALLBACK_URL;
  if (!url) throw new Error("DASHBOARD_OAUTH_CALLBACK_URL is not configured.");
  return url;
}

function githubConfig() {
  if (!process.env.GITHUB_OAUTH_CLIENT_ID || !process.env.GITHUB_OAUTH_CLIENT_SECRET) {
    throw new Error("GitHub OAuth is not configured. Set GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET.");
  }
  return { clientId: process.env.GITHUB_OAUTH_CLIENT_ID, clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET };
}

function callbackRedirect(status) {
  const url = new URL("/dashboard", callbackUrl());
  url.searchParams.set("provider", "github");
  url.searchParams.set("connection", status);
  return url.toString();
}

async function connectGithub(req, res, app) {
  const developer = await requireDeveloper(req, app);
  const { clientId } = githubConfig();
  const state = crypto.randomBytes(32).toString("base64url");
  await app.firestore().doc(`dashboard-oauth-states/${state}`).set({ uid: developer.uid, provider: "github", expiresAt: Date.now() + 10 * 60 * 1000 });
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", callbackUrl());
  authorize.searchParams.set("scope", "repo workflow offline_access");
  authorize.searchParams.set("state", state);
  authorize.searchParams.set("allow_signup", "false");
  return res.status(200).json({ authorizeUrl: authorize.toString() });
}

async function githubCallback(req, res, app) {
  const { code, state, error } = req.query || {};
  if (error || !code || !state) return res.redirect(302, callbackRedirect("cancelled"));
  const stateRef = app.firestore().doc(`dashboard-oauth-states/${state}`);
  const stateSnapshot = await stateRef.get();
  const stateData = stateSnapshot.data();
  await stateRef.delete().catch(() => {});
  if (!stateSnapshot.exists || stateData.provider !== "github" || stateData.expiresAt < Date.now()) return res.redirect(302, callbackRedirect("invalid"));

  const { clientId, clientSecret } = githubConfig();
  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: callbackUrl() })
  });
  const token = await tokenResponse.json();
  if (!tokenResponse.ok || !token.access_token) return res.redirect(302, callbackRedirect("failed"));
  const identityResponse = await fetch("https://api.github.com/user", { headers: { Authorization: `Bearer ${token.access_token}`, Accept: "application/vnd.github+json" } });
  const identity = await identityResponse.json();
  if (!identityResponse.ok || !identity.login) return res.redirect(302, callbackRedirect("failed"));
  await saveProviderConnection(app.firestore(), "github", {
    secret: JSON.stringify(token),
    metadata: { login: identity.login, id: identity.id, scopes: token.scope || "", connectedBy: stateData.uid }
  });
  return res.redirect(302, callbackRedirect("success"));
}

async function connectToken(req, res, app, provider) {
  await requireDeveloper(req, app);
  const { token, accountId, projectId } = body(req);
  if (!token || typeof token !== "string") return res.status(400).json({ error: "A provider token is required." });
  let metadata;
  if (provider === "cloudflare") {
    if (!accountId || typeof accountId !== "string") return res.status(400).json({ error: "A Cloudflare account ID is required." });
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}`, { headers: { Authorization: `Bearer ${token}` } });
    const data = await response.json();
    if (!response.ok || data.success === false) return res.status(400).json({ error: "Cloudflare rejected this token or account ID." });
    metadata = { accountId, accountName: data.result?.name || "Cloudflare account" };
  } else {
    if (!projectId || typeof projectId !== "string") return res.status(400).json({ error: "A Vercel project ID is required." });
    const response = await fetch(`https://api.vercel.com/v9/projects/${encodeURIComponent(projectId)}`, { headers: { Authorization: `Bearer ${token}` } });
    const data = await response.json();
    if (!response.ok) return res.status(400).json({ error: "Vercel rejected this token or project ID." });
    metadata = { projectId, projectName: data.name || projectId };
  }
  await saveProviderConnection(app.firestore(), provider, { secret: token, metadata });
  return res.status(200).json({ connection: publicConnection(await getProviderConnection(app.firestore(), provider)) });
}

export default async function handler(req, res) {
  try {
    const app = getApp();
    if (req.method === "GET" && req.query?.callback === "github") return githubCallback(req, res, app);
    if (req.method === "POST" && req.query?.action === "github") return connectGithub(req, res, app);
    if (req.method === "POST" && ["cloudflare", "vercel"].includes(req.query?.action)) return connectToken(req, res, app, req.query.action);
    if (req.method === "DELETE" && ["github", "cloudflare", "vercel"].includes(req.query?.provider)) {
      await requireDeveloper(req, app);
      await deleteProviderConnection(app.firestore(), req.query.provider);
      return res.status(204).end();
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(error.status || 500).json({ error: error.message || "Could not update provider connection." });
  }
}
