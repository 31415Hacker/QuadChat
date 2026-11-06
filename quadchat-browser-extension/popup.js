const code = document.querySelector("#code");
const status = document.querySelector("#status");
chrome.storage.local.get("linked").then(({ linked }) => { if (linked) status.textContent = "Linked. Browser game activity is optional and active."; });
document.querySelector("#link").addEventListener("click", () => {
  status.textContent = "Linking…";
  chrome.runtime.sendMessage({ type: "link", code: code.value.trim() }, (result) => { status.textContent = result?.ok ? "Linked successfully." : result?.error || "Could not link."; });
});
