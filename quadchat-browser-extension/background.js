const WORKER = "https://quadchat-worker.ariqipraditya.workers.dev";

function gameForTab(tab) {
  const host = new URL(tab.url || "https://invalid").hostname.toLowerCase();
  if (host.endsWith("blooket.com")) return { name: "Blooket", logo: "browser", detail: "Browser game" };
  if (host === "bloxd.io" || host.endsWith(".bloxd.io")) return { name: "Bloxd.io", logo: "browser", detail: "Browser game" };
  if (host === "crazygames.com" || host.endsWith(".crazygames.com")) return { name: "CrazyGames", logo: "browser", detail: "Browser game" };
  if (host === "hotgames.com" || host.endsWith(".hotgames.com")) return { name: "HotGames", logo: "browser", detail: "Browser game" };
  return null;
}

async function report() {
  const { linked } = await chrome.storage.local.get("linked");
  if (!linked) return;
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const game = tab ? gameForTab(tab) : null;
  await fetch(`${WORKER}/browser-extension/presence`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...linked, game }) }).catch(() => {});
}

chrome.tabs.onActivated.addListener(report);
chrome.tabs.onUpdated.addListener((_, change, tab) => { if (change.url || change.status === "complete") report(tab); });
chrome.windows.onFocusChanged.addListener(report);
chrome.alarms?.create?.("quadchat-presence", { periodInMinutes: 0.5 });
chrome.alarms?.onAlarm?.addListener(report);
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type !== "link") return;
  fetch(`${WORKER}/browser-extension/redeem`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: message.code }) })
    .then((response) => response.json().then((data) => ({ response, data })))
    .then(({ response, data }) => { if (!response.ok) throw new Error(data.error || "Could not link"); return chrome.storage.local.set({ linked: data.linked }); })
    .then(() => { report(); sendResponse({ ok: true }); })
    .catch((error) => sendResponse({ ok: false, error: error.message }));
  return true;
});
