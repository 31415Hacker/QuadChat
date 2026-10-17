const WORKER_URL_SOURCE = import.meta.env.VITE_PRESENCE_WORKER_URL || "";

function workerBaseUrl() {
  if (!WORKER_URL_SOURCE) return "";
  if (WORKER_URL_SOURCE.startsWith("https://") || WORKER_URL_SOURCE.startsWith("http://")) {
    return WORKER_URL_SOURCE.replace(/\/+$/, "");
  }
  return WORKER_URL_SOURCE.replace(/^wss?:\/\//, (protocol) =>
    protocol === "wss://" ? "https://" : "http://"
  ).replace(/\/+$/, "");
}

export async function checkMessageProfanity(user, text, channel = "") {
  try {
    if (!user || !text) return null;
    const baseUrl = workerBaseUrl();
    if (!baseUrl) return null;
    const idToken = await user.getIdToken();
    const response = await fetch(`${baseUrl}/moderate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`
      },
      body: JSON.stringify({ text, channel })
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (err) {
    console.warn("Profanity check skipped:", err?.message);
    return null;
  }
}