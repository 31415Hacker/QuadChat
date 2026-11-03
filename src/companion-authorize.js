import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

const params = new URLSearchParams(location.search);
const identity = document.querySelector("#identity");
const approve = document.querySelector("#approve");
const error = document.querySelector("#error");
const workerUrl = (import.meta.env.VITE_PRESENCE_WORKER_URL || "")
  .replace(/^wss:/, "https:")
  .replace(/^ws:/, "http:")
  .replace(/\/$/, "");
let user = null;

function authorizationRequest() {
  const codeChallenge = params.get("code_challenge");
  const state = params.get("state");
  const redirectUri = params.get("redirect_uri");
  if (!codeChallenge || !state || !redirectUri) return null;
  return {
    codeChallenge,
    codeChallengeMethod: "S256",
    state,
    redirectUri,
    deviceName: params.get("device_name") || "QuadChat Service"
  };
}

const request = authorizationRequest();
if (!request || !workerUrl || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") {
  identity.textContent = "This authorization request is invalid or unavailable in local emulator mode.";
  identity.className = "bad";
} else {
  onAuthStateChanged(auth, (nextUser) => {
    user = nextUser;
    approve.disabled = !user;
    identity.textContent = user
      ? `Signed in as ${user.email || "QuadChat member"}`
      : "Sign in to QuadChat before authorizing the service.";
    identity.className = user ? "ok" : "bad";
  });
}

approve.addEventListener("click", async () => {
  if (!user || !request) return;
  approve.disabled = true;
  error.textContent = "";
  try {
    const response = await fetch(`${workerUrl}/companion/authorize`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await user.getIdToken()}` },
      body: JSON.stringify(request)
    });
    const result = await response.json();
    if (!response.ok || !result.redirectUrl) throw new Error(result.error || "Authorization failed");
    location.assign(result.redirectUrl);
  } catch (caught) {
    error.textContent = `Authorization failed: ${caught.message}`;
    approve.disabled = false;
  }
});
