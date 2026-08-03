export const CHANNELS = [
  { id: "group", label: "Group Chat" },
  { id: "updates", label: "Updates" },
  { id: "suggestions", label: "Suggestions" }
];

export const adminEmails = ["ariqipraditya@gmail.com"];
export const developerEmails = ["ariqipraditya@gmail.com"];

export const sessionUserIdKey = "quadchat:sessionUserId";
export const notificationsEnabledKey = "quadchat:notificationsEnabled";
export const notificationIcon = `${import.meta.env.BASE_URL}favicon.svg`;

export const maxAttachments = 4;
export const maxAttachmentBytes = 10 * 1024 * 1024;
export const maxProfilePhotoBytes = 5 * 1024 * 1024;
export const PAGE_SIZE = 30;
export const MAX_MESSAGES = 500;

export const supportsRecording = typeof MediaRecorder !== "undefined";
export const rtcConfig = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};
export const OPUS_BITRATE = 25000;
export const VIDEO_EXT_REGEX = /\.(mp4|webm|mov|avi|mkv|ogg|wmv|flv)$/i;
