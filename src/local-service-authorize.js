import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

const identity = document.querySelector("#identity");
const authorizeButton = document.querySelector("#authorize");
const error = document.querySelector("#error");
const transaction = new URLSearchParams(location.search).get("transaction");
let signedInUser = null;

if (import.meta.env.VITE_USE_FIREBASE_EMULATORS !== "true") {
  identity.textContent = "This local pairing page requires Firebase Emulator mode.";
  error.textContent = "Start QuadChat with npm run dev:emulator and sign in to its local test account.";
} else if (!transaction) {
  identity.textContent = "Missing local authorization transaction.";
} else {
  onAuthStateChanged(auth, (user) => {
    signedInUser = user;
    authorizeButton.disabled = !user;
    identity.textContent = user
      ? `Signed in locally as ${user.email}`
      : "Sign in to QuadChat's Firebase Emulator account before approving this service.";
    identity.className = user ? "ok" : "bad";
  });
}

authorizeButton.addEventListener("click", async () => {
  if (!signedInUser || !transaction) return;
  authorizeButton.disabled = true;
  error.textContent = "";
  try {
    const idToken = await signedInUser.getIdToken();
    const response = await fetch("http://127.0.0.1:43722/authorize/approve", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ transaction, id_token: idToken })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Authorization failed");
    location.assign(result.redirectUrl);
  } catch (caught) {
    error.textContent = `Authorization failed: ${caught.message}`;
    authorizeButton.disabled = false;
  }
});
