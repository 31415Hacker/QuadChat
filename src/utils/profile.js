export function parseDuration(value) {
  if (!value) {
    return null;
  }

  const match = value.match(/^(\d+)(s|m|h|d)?$/i);

  if (!match) {
    return null;
  }

  const amount = Number(match[1]);
  const unit = (match[2] || "m").toLowerCase();
  const multipliers = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000
  };

  return amount * multipliers[unit];
}

function toDate(value) {
  return value?.toDate ? value.toDate() : new Date(value);
}

export function isProfileMuted(profile) {
  if (!profile?.muted) {
    return false;
  }

  if (!profile.mutedUntil) {
    return true;
  }

  return toDate(profile.mutedUntil).getTime() > Date.now();
}

export function isProfileVoiceMuted(profile) {
  if (!profile?.voiceMuted) {
    return false;
  }

  if (!profile.voiceMutedUntil) {
    return true;
  }

  return toDate(profile.voiceMutedUntil).getTime() > Date.now();
}

export function getMuteLabel(profile) {
  if (!isProfileMuted(profile)) {
    return "";
  }

  if (!profile.mutedUntil) {
    return "You are muted.";
  }

  const mutedUntilDate = toDate(profile.mutedUntil);

  return `You are muted until ${new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(mutedUntilDate)}.`;
}

export function getWarningLabel(profile) {
  if (!profile?.warning) return "";
  const w = profile.warning;
  let label = "The admin has warned you.";
  if (w.action) label += ` The admin may ${w.action} you.`;
  if (w.reason) label += ` ${w.reason}`;
  return label;
}

export function getStatusColor(mode) {
  switch (mode) {
    case "busy": return "#ef4444";
    case "away": return "#f59e0b";
    default: return "#22c55e";
  }
}

export function getStatusLabel(mode) {
  switch (mode) {
    case "busy": return "Busy";
    case "away": return "Away";
    default: return "Active";
  }
}
