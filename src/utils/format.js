export function formatTime(timestamp) {
  if (!timestamp?.toDate) {
    return "sending";
  }

  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(timestamp.toDate());
}

export function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function dayKey(date) {
  if (!date) return "";
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function formatDayLabel(timestamp) {
  if (!timestamp?.toDate) return "Just now";

  const date = timestamp.toDate();
  const now = new Date();
  const days = Math.round((startOfDay(now) - startOfDay(date)) / 86400000);

  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days % 30 === 0) {
    const months = days / 30;
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (days % 7 === 0) {
    const weeks = days / 7;
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  if (date.getFullYear() === now.getFullYear()) {
    return new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      day: "numeric",
      month: "short"
    }).format(date);
  }
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

export function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export function timeAgo(timestamp) {
  const diff = Math.max(0, Date.now() - timestamp);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export function getRelativeTime(timestamp) {
  if (!timestamp?.toDate) return "";
  const diff = Date.now() - timestamp.toDate();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return timestamp.toDate().toLocaleDateString();
}
