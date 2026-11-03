function relayBaseUrl() {
  return (import.meta.env.VITE_PRESENCE_WORKER_URL || "")
    .replace(/^wss:/, "https:")
    .replace(/^ws:/, "http:")
    .replace(/\/$/, "");
}

export async function notifyPairedDmDevice(firebaseUser, channel, targetUserId) {
  if (!firebaseUser || !channel || !targetUserId || import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true") return;
  const baseUrl = relayBaseUrl();
  if (!baseUrl) return;
  try {
    const response = await fetch(`${baseUrl}/companion/notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await firebaseUser.getIdToken()}`
      },
      body: JSON.stringify({ type: "dm_message", channel, targetUserId })
    });
    if (!response.ok) console.warn("[COMPANION] DM relay rejected:", response.status);
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
    await fetch(`${baseUrl}/companion/notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await firebaseUser.getIdToken()}` },
      body: JSON.stringify({ type: "incoming_call", callKey, targetUserId })
    });
  } catch (error) {
    console.warn("[COMPANION] Call relay unavailable:", error);
  }
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
