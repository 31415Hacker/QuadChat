import { adminEmails, developerEmails } from "../constants.js";

export function isDmChannelId(channelId) {
  return typeof channelId === "string" && channelId.startsWith("dm_");
}

export function dmChannelId(uidA, uidB) {
  return `dm_${[uidA, uidB].sort().join("_")}`;
}

export function dmPartnerId(channelId, sessionUserId, dm) {
  if (!isDmChannelId(channelId)) return "";
  if (Array.isArray(dm?.participants)) {
    return dm.participants.find((uid) => uid !== sessionUserId) || "";
  }
  return channelId.slice(3).split("_").find((uid) => uid !== sessionUserId) || "";
}

export function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
}

export function normalizeName(value) {
  return (value || "")
    .trim()
    .replace(/^@/, "")
    .replace(/[.,!?;:)\]}"'…]+$/, "")
    .toLowerCase();
}

export function getProfileName(profile, fallback = "Anonymous") {
  return profile?.displayName?.trim() || profile?.email || fallback;
}

export function getDmPartnerName(dm, profiles, sessionUserId) {
  if (!dm?.id) return "";
  const partnerId = dmPartnerId(dm.id, sessionUserId, dm);
  if (!partnerId) return "";
  return (
    getProfileName(profiles[partnerId], "") ||
    dm.names?.[partnerId] ||
    "Unknown"
  );
}

export function normalizeDisplayName(displayName, email) {
  const fallbackName = displayName || email || "User";
  const firstName = fallbackName.split("@")[0].trim().split(/\s+/)[0] || "User";

  if ((email || "").toLowerCase().includes("lorenzo")) {
    return "Lorenzo";
  }

  if (normalizeName(fallbackName).includes("lorenzo")) {
    return "Lorenzo";
  }

  return firstName;
}

export function hasUsernameSpaces(value) {
  return /\s/.test(value.trim());
}

export function isAdminEmail(email) {
  return adminEmails.includes((email || "").toLowerCase());
}

export function isDeveloperEmail(email) {
  return developerEmails.includes((email || "").toLowerCase());
}
