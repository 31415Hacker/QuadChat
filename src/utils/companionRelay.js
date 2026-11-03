function relayBaseUrl() {
  return (import.meta.env.VITE_PRESENCE_WORKER_URL || "")
    .replace(/^wss:/, "https:")
    .replace(/^ws:/, "http:")
    .replace(/\/$/, "");
}

export async function syncCompanionSoundPreferences(firebaseUser, preferences) {
  if (!firebaseUser || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") return;
  const baseUrl = relayBaseUrl();
  if (!baseUrl) return;
  try {
    await fetch(`${baseUrl}/companion/preferences`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${await firebaseUser.getIdToken()}` }, body: JSON.stringify(preferences) });
  } catch (error) { console.warn("[COMPANION] Sound preference sync unavailable:", error); }
}

export async function notifyPairedMessageDevices(firebaseUser, channel, messageId, targetUserIds) {
  if (!firebaseUser || !channel || !messageId || !Array.isArray(targetUserIds) || targetUserIds.length === 0 || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") return;
  const baseUrl = relayBaseUrl();
  if (!baseUrl) return;
  try {
    const idToken = await firebaseUser.getIdToken();
    for (let start = 0; start < targetUserIds.length; start += 100) {
      const response = await fetch(`${baseUrl}/companion/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${idToken}` },
        body: JSON.stringify({ type: "message", channel, messageId, targetUserIds: targetUserIds.slice(start, start + 100) })
      });
      if (!response.ok) console.warn("[COMPANION] Message relay rejected:", response.status);
    }
  } catch (error) {
    // A relay outage must never make sending a chat message fail.
    console.warn("[COMPANION] DM relay unavailable:", error);
  }
}

export async function notifyPairedCallDevice(firebaseUser, callKey, targetUserId) {
  if (!firebaseUser || !callKey || !targetUserId || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") return;
  const baseUrl = relayBaseUrl();
  if (!baseUrl) return;
  try {
    const response = await fetch(`${baseUrl}/companion/notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await firebaseUser.getIdToken()}` },
      body: JSON.stringify({ type: "incoming_call", callKey, targetUserId })
    });
    if (!response.ok) console.warn("[COMPANION] Call relay rejected:", response.status);
  } catch (error) {
    console.warn("[COMPANION] Call relay unavailable:", error);
  }
}

export async function stopPairedCallRingtone(firebaseUser, callKey, targetUserId) {
  if (!firebaseUser || !callKey || !targetUserId || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") return;
  const baseUrl = relayBaseUrl();
  if (!baseUrl) return;
  try {
    await fetch(`${baseUrl}/companion/notify`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${await firebaseUser.getIdToken()}` }, body: JSON.stringify({ type: "call_ended", callKey, targetUserId }) });
  } catch (error) { console.warn("[COMPANION] Call ringtone stop unavailable:", error); }
}

export async function getCompanionCallAvailability(firebaseUser, userIds) {
  if (!firebaseUser || !Array.isArray(userIds) || userIds.length === 0 || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") return [];
  const baseUrl = relayBaseUrl();
  if (!baseUrl) return [];
  try {
    const response = await fetch(`${baseUrl}/companion/call-availability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await firebaseUser.getIdToken()}`
      },
      body: JSON.stringify({ userIds })
    });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.connectedUserIds) ? data.connectedUserIds : [];
  } catch {
    return [];
  }
}
