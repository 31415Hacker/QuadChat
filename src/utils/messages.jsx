import { VIDEO_EXT_REGEX } from "../constants.js";
import { getProfileName, normalizeName } from "./names.js";

export function safeUrl(str) {
  if (typeof str !== "string" || !str.trim()) return "";
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:" ? str : "";
  } catch {
    return "";
  }
}

export function isVideoUrl(str) {
  try {
    const url = new URL(str);
    return VIDEO_EXT_REGEX.test(url.pathname);
  } catch {
    return false;
  }
}

export function renderMessageText(text, profiles, isAdminCommand = false, sessionUserId = null, targetUserId = null) {
  if (!text) {
    return null;
  }

  if (isAdminCommand) {
    let displayText = text;
    if (sessionUserId && targetUserId && sessionUserId === targetUserId) {
      displayText = text.replace(/@\S+/g, 'You');
    }
    return <span className="admin-command-text">{displayText}</span>;
  }

  const knownNames = Object.values(profiles).map((profile) =>
    normalizeName(getProfileName(profile, ""))
  );

  return String(text || "").split(/(\s+)/).map((part, index) => {
    if (part.startsWith("@")) {
      const mention = normalizeName(part);
      const isMention =
        mention === "everyone" || knownNames.some((name) => name === mention);

      return isMention ? (
        <span className="mention" key={`${part}-${index}`}>
          {part}
        </span>
      ) : (
        part
      );
    }

    if (isVideoUrl(part)) {
      return (
        <video controls className="message-video" key={`${part}-${index}`}>
          <source src={part} />
        </video>
      );
    }

    try {
      const url = new URL(part);
      if (url.protocol === "http:" || url.protocol === "https:") {
        return (
          <a href={part} key={`${part}-${index}`} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
    } catch {
      /* not a URL */
    }

    return part;
  });
}

export function getReplyPreview(text) {
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();

  if (cleanText.length <= 90) {
    return cleanText;
  }

  return `${cleanText.slice(0, 87)}...`;
}

export function isMentionOf(text, myName) {
  if (!text || !myName) return false;
  const normalized = normalizeName(myName);
  if (!normalized) return false;
  return String(text)
    .split(/\s+/)
    .some((part) => {
      if (!part.startsWith("@")) return false;
      const mention = normalizeName(part);
      return mention === "everyone" || mention === normalized;
    });
}

export function isFreshMessage(data, maxAgeMs = 30000) {
  return Boolean(data?.createdAt?.toMillis) &&
    Date.now() - data.createdAt.toMillis() < maxAgeMs;
}

export function getFilePreview(file) {
  return file.type.startsWith("image/") || file.type.startsWith("video/")
    ? URL.createObjectURL(file)
    : "";
}
