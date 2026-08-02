import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  GoogleAuthProvider,
  isSignInWithEmailLink,
  linkWithPopup,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPopup,
  signOut as signOutOfFirebase,
  unlink,
  updatePassword,
  updateProfile
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  endAt,
  getDoc,
  getDocs,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  startAfter,
  Timestamp,
  updateDoc,
  where
} from "firebase/firestore";
import {
  get as rtdbGet,
  onValue,
  ref as rtdbRef,
  set,
  onDisconnect,
  push,
  onChildAdded,
  off,
  onChildRemoved,
  update,
  remove
} from "firebase/database";
import {
  Bell,
  BellOff,
  CheckCheck,
  Chrome,
  CircleUserRound,
  Clock,
  CornerDownLeft,
  FileText,
  Film,
  Gamepad2,
  Image,
  ImagePlus,
  Lightbulb,
  Megaphone,
  Mic,
  MicOff,
  Moon,
  MoreVertical,
  Pause,
  Phone,
  PhoneIncoming,
  PhoneOff,
  Play,
  Plus,
  X,
  Settings,
  Sun,
  Trash2,
  KeyRound,
  LogOut,
  MessageCircle,
  Send,
  ShieldCheck,
  Upload,
  UserRound,
  Users,
  Copy,
  Eye,
  Monitor,
  MonitorOff
} from "lucide-react";
import { Room, RoomEvent } from "livekit-client";
import { auth, db, rtdb } from "../firebase.js";
import { uploadToCloudinary } from "../cloudinary.js";
import GameSessionCard from "./GameSessionCard.jsx";
import { version as APP_VERSION } from "../package.json";

function messagesRef(channelId) {
  return collection(db, "messages", channelId, "messages");
}

function isDmChannelId(channelId) {
  return typeof channelId === "string" && channelId.startsWith("dm_");
}

function dmChannelId(uidA, uidB) {
  return `dm_${[uidA, uidB].sort().join("_")}`;
}

function dmPartnerId(channelId, sessionUserId, dm) {
  if (!isDmChannelId(channelId)) return "";
  if (Array.isArray(dm?.participants)) {
    return dm.participants.find((uid) => uid !== sessionUserId) || "";
  }
  return channelId.slice(3).split("_").find((uid) => uid !== sessionUserId) || "";
}

const usersRef = collection(db, "users");
const appSettingsRef = doc(db, "settings", "app");
const googleProvider = new GoogleAuthProvider();
const adminEmails = ["ariqipraditya@gmail.com"];
const developerEmails = ["ariqipraditya@gmail.com"];
const CHANNELS = [
  { id: "group", label: "Group Chat" },
  { id: "updates", label: "Updates" },
  { id: "suggestions", label: "Suggestions" }
];
const sessionUserIdKey = "quadchat:sessionUserId";
const notificationsEnabledKey = "quadchat:notificationsEnabled";
const notificationIcon = `${import.meta.env.BASE_URL}favicon.svg`;
const maxAttachments = 4;
const maxAttachmentBytes = 10 * 1024 * 1024;
const PAGE_SIZE = 30;
const MAX_MESSAGES = 500;
const supportsRecording = typeof MediaRecorder !== "undefined";
const rtcConfig = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};
const OPUS_BITRATE = 25000;

function applyOpusBitrate(description, bitrate) {
  return new RTCSessionDescription({
    type: description.type,
    sdp: description.sdp.replace(
      /a=fmtp:111\s*(.*)/g,
      (_, params) => `a=fmtp:111 ${params.replace(/;maxaveragebitrate=\d+/g, '')};maxaveragebitrate=${bitrate}`
    )
  });
}

function computeCapability() {
  const cpu = navigator.hardwareConcurrency || 1;
  const downlink = navigator.connection?.downlink || 10;
  return Math.round(cpu * 1000 + downlink * 100);
}

function formatTime(timestamp) {
  if (!timestamp?.toDate) {
    return "sending";
  }

  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(timestamp.toDate());
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function dayKey(date) {
  if (!date) return "";
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function formatDayLabel(timestamp) {
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

function getAuthErrorMessage(firebaseError) {
  switch (firebaseError.code) {
    case "auth/email-already-in-use":
      return "That email already has an account. Sign in instead.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "The email or password is incorrect.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled in Firebase.";
    case "auth/popup-closed-by-user":
      return "The Google sign-in popup was closed before finishing.";
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in popup.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized in Firebase Authentication settings.";
    case "auth/requires-recent-login":
      return "Please sign out, sign back in, and try again.";
    default:
      return firebaseError.message;
  }
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
}

function normalizeName(value) {
  return (value || "").trim().replace(/^@/, "").toLowerCase();
}

function getProfileName(profile, fallback = "Anonymous") {
  return profile?.displayName?.trim() || profile?.email || fallback;
}

function getDmPartnerName(dm, profiles, sessionUserId) {
  if (!dm?.id) return "";
  const partnerId = dmPartnerId(dm.id, sessionUserId, dm);
  if (!partnerId) return "";
  return (
    getProfileName(profiles[partnerId], "") ||
    dm.names?.[partnerId] ||
    "Unknown"
  );
}

function normalizeDisplayName(displayName, email) {
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

function hasUsernameSpaces(value) {
  return /\s/.test(value.trim());
}

function isAdminEmail(email) {
  return adminEmails.includes((email || "").toLowerCase());
}

function isDeveloperEmail(email) {
  return developerEmails.includes((email || "").toLowerCase());
}

function parseDuration(value) {
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

function isProfileMuted(profile) {
  if (!profile?.muted) {
    return false;
  }

  if (!profile.mutedUntil) {
    return true;
  }

  const mutedUntilDate = profile.mutedUntil?.toDate
    ? profile.mutedUntil.toDate()
    : new Date(profile.mutedUntil);

  return mutedUntilDate.getTime() > Date.now();
}

function getMuteLabel(profile) {
  if (!isProfileMuted(profile)) {
    return "";
  }

  if (!profile.mutedUntil) {
    return "You are muted.";
  }

  const mutedUntilDate = profile.mutedUntil?.toDate
    ? profile.mutedUntil.toDate()
    : new Date(profile.mutedUntil);

  return `You are muted until ${new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(mutedUntilDate)}.`;
}

function getWarningLabel(profile) {
  if (!profile?.warning) return "";
  const w = profile.warning;
  let label = "The admin has warned you.";
  if (w.action) label += ` The admin may ${w.action} you.`;
  if (w.reason) label += ` ${w.reason}`;
  return label;
}

function getStatusColor(mode) {
  switch (mode) {
    case "busy": return "#ef4444";
    case "away": return "#f59e0b";
    default: return "#22c55e";
  }
}

function getStatusLabel(mode) {
  switch (mode) {
    case "busy": return "Busy";
    case "away": return "Away";
    default: return "Active";
  }
}

const ONLINE_THRESHOLD = 60000; // 60 seconds — if lastOnline is within this window, consider online

function isRecentlyOnline(timestamp) {
  if (!timestamp?.toDate) return false;
  return Date.now() - timestamp.toDate() < ONLINE_THRESHOLD;
}

function getRelativeTime(timestamp) {
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

const VIDEO_EXT_REGEX = /\.(mp4|webm|mov|avi|mkv|ogg|wmv|flv)$/i;

function safeUrl(str) {
  if (typeof str !== "string" || !str.trim()) return "";
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:" ? str : "";
  } catch {
    return "";
  }
}

function isVideoUrl(str) {
  try {
    const url = new URL(str);
    return VIDEO_EXT_REGEX.test(url.pathname);
  } catch {
    return false;
  }
}

function renderMessageText(text, profiles, isAdminCommand = false, sessionUserId = null, targetUserId = null) {
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

function getReplyPreview(text) {
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();

  if (cleanText.length <= 90) {
    return cleanText;
  }

  return `${cleanText.slice(0, 87)}...`;
}

function isMentionOf(text, myName) {
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

function isFreshMessage(data, maxAgeMs = 30000) {
  return Boolean(data?.createdAt?.toMillis) &&
    Date.now() - data.createdAt.toMillis() < maxAgeMs;
}

function timeAgo(timestamp) {
  const diff = Math.max(0, Date.now() - timestamp);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function getFilePreview(file) {
  return file.type.startsWith("image/") || file.type.startsWith("video/")
    ? URL.createObjectURL(file)
    : "";
}

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

async function saveUserProfile(
  firebaseUser,
  displayNameOverride,
  options = {}
) {
  if (!firebaseUser) {
    return;
  }

  const displayName = normalizeDisplayName(
    displayNameOverride || firebaseUser.displayName,
    firebaseUser.email
  );

  const profileRef = doc(db, "users", firebaseUser.uid);
  const profileSnapshot = await getDoc(profileRef);
  const userIsAdmin =
    isAdminEmail(firebaseUser.email) && firebaseUser.emailVerified;
  const userIsDeveloper =
    isDeveloperEmail(firebaseUser.email) && firebaseUser.emailVerified;
  const profileData = {
    id: firebaseUser.uid,
    displayName,
    email: firebaseUser.email || "",
    updatedAt: serverTimestamp()
  };

  if (options.forcePhoto || options.photoURL !== undefined) {
    profileData.photoURL = options.photoURL || "";
  } else if (!profileSnapshot.exists()) {
    profileData.photoURL = firebaseUser.photoURL || "";
  }

  if (!profileSnapshot.exists() || userIsAdmin || userIsDeveloper) {
    profileData.isAdmin = userIsAdmin;
    profileData.isDeveloper = userIsDeveloper;
    profileData.role = userIsDeveloper
      ? "developer"
      : userIsAdmin
        ? "admin"
        : "member";
  }

  await setDoc(profileRef, profileData, { merge: true });
}

function readSessionUserId() {
  return sessionStorage.getItem(sessionUserIdKey) || "";
}

function writeSessionUserId(uid) {
  sessionStorage.setItem(sessionUserIdKey, uid);
}

function clearSessionUserId() {
  sessionStorage.removeItem(sessionUserIdKey);
}

function readNotificationsEnabled() {
  return localStorage.getItem(notificationsEnabledKey) === "true";
}

function writeNotificationsEnabled(isEnabled) {
  localStorage.setItem(notificationsEnabledKey, String(isEnabled));
}

export default function App() {
  const [user, setUser] = useState(null);
  const [sessionUserId, setSessionUserId] = useState(readSessionUserId);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [authView, setAuthView] = useState("signin");
  const [draftName, setDraftName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [pendingFiles, setPendingFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [replyTo, setReplyTo] = useState(null);
  const [openMessageMenuId, setOpenMessageMenuId] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    readNotificationsEnabled
  );
  const [notificationPermission, setNotificationPermission] = useState(
    "Notification" in window ? Notification.permission : "unsupported"
  );
  const [isSending, setIsSending] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingPaused, setIsRecordingPaused] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState("account");
  const [reduceMotion, setReduceMotion] = useState(() => {
    const stored = localStorage.getItem("quadchat-reduce-motion");
    return stored === "true";
  });
  const [showVersionInHeader, setShowVersionInHeader] = useState(() => {
    const stored = localStorage.getItem("quadchat-show-version");
    return stored === "true";
  });
  const [uiScale, setUiScale] = useState(() => {
    const stored = localStorage.getItem("quadchat-ui-scale");
    const value = Number(stored);
    return stored && value >= 50 && value <= 100 ? value : 100;
  });
  const [settingsName, setSettingsName] = useState("");
  const [settingsCurrentPassword, setSettingsCurrentPassword] = useState("");
  const [settingsPassword, setSettingsPassword] = useState("");
  const [settingsPhotoFile, setSettingsPhotoFile] = useState(null);
  const [settingsPhotoPreview, setSettingsPhotoPreview] = useState("");
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [appSettings, setAppSettings] = useState({ signupEnabled: true });
  const [onlineUsers, setOnlineUsers] = useState(new Set());
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const stored = localStorage.getItem("quadchat-theme");
    return stored !== null ? stored === "dark" : true;
  });
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [editStatus, setEditStatus] = useState({ mode: "active", text: "" });
  const [scheduledBusy, setScheduledBusy] = useState([]);
  const [error, setError] = useState("");
  const [magicLinkEmail, setMagicLinkEmail] = useState("");
  const [magicLinkUrl, setMagicLinkUrl] = useState("");
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);
  const [magicLinkError, setMagicLinkError] = useState("");
  const [pendingEmailLinkEmail, setPendingEmailLinkEmail] = useState("");
  const [emailLinkError, setEmailLinkError] = useState("");
  const [settingsMessage, setSettingsMessage] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const endRef = useRef(null);
  const [analyticsTarget, setAnalyticsTarget] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  const [typingUsers, setTypingUsers] = useState({});
  const typingTimeoutRef = useRef(null);
  const typingLastWriteRef = useRef(0);

  async function openUserAnalytics(profile) {
    if (!profile) return;
    setAnalyticsTarget(profile);
    setAnalyticsLoading(true);
    setAnalyticsData(null);

    try {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const startStr = thirtyDaysAgo.toISOString().slice(0, 10);

      const q = query(
        collection(db, "users", profile.id, "sessions"),
        where("date", ">=", startStr),
        orderBy("date", "desc"),
        limit(500)
      );
      const snap = await getDocs(q);
      const sessions = snap.docs.map((d) => d.data());

      const viewerTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const dayDurations = {};
      const hourlyCounts = new Array(24).fill(0);
      let sessionCount = 0;

      for (const s of sessions) {
        const start = s.start?.toDate?.();
        const end = s.end?.toDate?.();
        if (!start || !end) continue;
        sessionCount++;

        const day = start.toLocaleDateString("en-CA");
        dayDurations[day] = (dayDurations[day] || 0) + (end - start);

        let cursor = new Date(start);
        while (cursor < end) {
          const localHour = new Date(cursor.toLocaleString("en-US", { timeZone: viewerTz })).getHours();
          hourlyCounts[localHour]++;
          cursor.setTime(cursor.getTime() + 3600000);
        }
      }

      const days = Object.keys(dayDurations);
      const avgPlayTime = days.length > 0
        ? days.reduce((sum, d) => sum + dayDurations[d], 0) / days.length
        : 0;

      const top3 = (() => {
        const active = hourlyCounts
          .map((count, hour) => ({ hour, count }))
          .filter((h) => h.count > 0)
          .sort((a, b) => a.hour - b.hour);
        const groups = [];
        for (const h of active) {
          const last = groups[groups.length - 1];
          if (last && last.end === h.hour) {
            last.end = h.hour + 1;
            last.count += h.count;
          } else {
            groups.push({ start: h.hour, end: h.hour + 1, count: h.count });
          }
        }
        return groups
          .sort((a, b) => b.count - a.count || a.start - b.start)
          .slice(0, 3)
          .map((g) => {
            const startStr = `${String(g.start).padStart(2, "0")}:00`;
            const endStr = `${String(g.end).padStart(2, "0")}:00`;
            return `${startStr}–${endStr}`;
          });
      })();

      setAnalyticsData({ avgPlayTime, top3, sessionCount, days: days.length });
    } catch (e) {
      console.error("analytics error:", e);
    } finally {
      setAnalyticsLoading(false);
    }
  }

  const sentinelRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const pendingFilesRef = useRef([]);
  const mediaRecorderRef = useRef(null);
  const recordingTimerRef = useRef(null);
  const recordingChunksRef = useRef([]);
  const shouldSendRef = useRef(false);
  const oldestDocSnapRef = useRef(null);
  const newestDocSnapRef = useRef(null);
  const newMessagesUnsubRef = useRef(null);
  const hasMoreMessagesRef = useRef(true);
  const isLoadingMoreRef = useRef(false);
  const scrollSaveRef = useRef(null);
  const isNearBottomRef = useRef(true);
  const knownMessageIdsRef = useRef(new Set());
  const hasLoadedMessagesRef = useRef(false);
  const [inAppNotifications, setInAppNotifications] = useState([]);
  const [inAppToasts, setInAppToasts] = useState([]);
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const notificationPanelRef = useRef(null);
  const knownMessageIdsByChannelRef = useRef(new Map());
  const notificationIdsRef = useRef(new Set());
  const toastIdsRef = useRef(new Set());
  const toastTimersRef = useRef(new Map());
  const activeNameRef = useRef("");
  const prevOnlineRef = useRef({});
  const hasSyncedOnlineRef = useRef(false);

  const currentProfile = sessionUserId ? profiles[sessionUserId] : null;
  const isCurrentUserDeveloper =
    currentProfile?.isDeveloper || isDeveloperEmail(user?.email || "");
  const isCurrentUserAdmin =
    currentProfile?.isAdmin ||
    isCurrentUserDeveloper ||
    isAdminEmail(user?.email || "");
  const hasGoogleProvider = user?.providerData?.some(
    (provider) => provider.providerId === "google.com"
  );
  const hasEmailProvider = user?.providerData?.some(
    (provider) => provider.providerId === "password"
  );
  const muteLabel = getMuteLabel(currentProfile);
  const warningLabel = getWarningLabel(currentProfile);
  const [activeChannel, setActiveChannel] = useState("group");
  const [dmChannels, setDmChannels] = useState([]);
  const [showNewDm, setShowNewDm] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showGamingPost, setShowGamingPost] = useState(false);
  const [gamingPostCard, setGamingPostCard] = useState(null);
  const [callStatus, setCallStatus] = useState("idle");
  const [callPartnerId, setCallPartnerId] = useState(null);
  const [callPartnerName, setCallPartnerName] = useState("");
  const [callMuted, setCallMuted] = useState(false);
  const [remoteMuted, setRemoteMuted] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);
  const peerRef = useRef(null);
  const localStreamRef = useRef(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const callNodeRef = useRef(null);
  const seenCallIdsRef = useRef(new Set());
  const isCallerRef = useRef(false);
  const callCleanupsRef = useRef([]);
  const startCallLockRef = useRef(false);
  const answerCallLockRef = useRef(false);
  const remoteAudioRef = useRef(null);
  const screenVideoRef = useRef(null);
  const screenStreamRef = useRef(null);
  const [isSharingScreen, setIsSharingScreen] = useState(false);
  const isSharingScreenRef = useRef(false);
  const [remoteScreenStream, setRemoteScreenStream] = useState(null);
  const [viewingScreen, setViewingScreen] = useState(false);
  const [screenSharedByName, setScreenSharedByName] = useState(null);
  const [screenShareRequest, setScreenShareRequest] = useState(null);
  const screenShareRequestTimerRef = useRef(null);
  const callStatusRef = useRef(callStatus);
  const profilesRef = useRef(profiles);
  const activeChannelRef = useRef(activeChannel);
  const currentSessionDocRef = useRef(null);

  const [groupCallStatus, setGroupCallStatus] = useState("idle");
  const groupCallRoomRef = useRef(null);
  const [groupCallParticipants, setGroupCallParticipants] = useState({});
  const [groupCallLocalMuted, setGroupCallLocalMuted] = useState(false);
  const groupCallLocalStreamRef = useRef(null);
  const groupCallAudioContainerRef = useRef(null);
  const groupCallCleaningRef = useRef(false);

  const [p2pGroupCallStatus, setP2pGroupCallStatus] = useState("idle");
  const [p2pGroupCallHostId, setP2pGroupCallHostId] = useState(null);
  const [p2pGroupCallParticipants, setP2pGroupCallParticipants] = useState({});
  const [p2pGroupCallLocalMuted, setP2pGroupCallLocalMuted] = useState(false);
  const p2pGroupCallStreamRef = useRef(null);
  const p2pGroupCallConnectionsRef = useRef({});
  const p2pGroupCallAudioContainerRef = useRef(null);
  const p2pGroupCallNodeRef = useRef(null);
  const p2pGroupCallCleaningRef = useRef(false);
  const p2pGroupCallUnsubsRef = useRef([]);

  const attachMenuRef = useRef(null);
  const canPostInActiveChannel =
    activeChannel !== "updates" || isCurrentUserDeveloper;

  const activeName = useMemo(
    () => getProfileName(currentProfile, user?.displayName || user?.email || ""),
    [currentProfile, user]
  );

  const activeDm = dmChannels.find((dm) => dm.id === activeChannel) || null;
  const dmPartnerName = useMemo(() => {
    if (!isDmChannelId(activeChannel)) return "";
    const partnerId = dmPartnerId(activeChannel, sessionUserId, activeDm);
    if (!partnerId) return "";
    return (
      getProfileName(profiles[partnerId], "") ||
      activeDm?.names?.[partnerId] ||
      "Unknown"
    );
  }, [activeChannel, sessionUserId, profiles, activeDm]);

  const activeChannelLabel =
    CHANNELS.find((c) => c.id === activeChannel)?.label ||
    dmPartnerName ||
    activeChannel;

  const dismissToast = (id) => {
    setInAppToasts((prev) => prev.filter((toast) => toast.id !== id));
    if (toastTimersRef.current.has(id)) {
      window.clearTimeout(toastTimersRef.current.get(id));
      toastTimersRef.current.delete(id);
    }
  };

  const pushInAppNotification = ({
    type,
    channelId,
    channelLabel,
    senderName,
    body,
    id
  }) => {
    const notificationId =
      id ||
      `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    if (notificationIdsRef.current.has(notificationId)) return;
    notificationIdsRef.current.add(notificationId);
    setInAppNotifications((prev) =>
      [
        {
          id: notificationId,
          type,
          channelId,
          channelLabel,
          senderName,
          body,
          createdAt: Date.now(),
          read: false
        },
        ...prev
      ].slice(0, 100)
    );
    if (document.visibilityState === "visible" && !toastIdsRef.current.has(notificationId)) {
      toastIdsRef.current.add(notificationId);
      setInAppToasts((prev) =>
        [...prev, { id: notificationId, type, channelId, channelLabel, senderName, body }].slice(-3)
      );
      const timer = window.setTimeout(() => dismissToast(notificationId), 6000);
      toastTimersRef.current.set(notificationId, timer);
    }
  };

  const markAllNotificationsRead = () => {
    setInAppNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  const scrollToBottomOfMessages = () => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  const openNotification = (notification) => {
    setInAppNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
    );
    setNotificationPanelOpen(false);
    if (notification.channelId) {
      if (notification.channelId === activeChannelRef.current) {
        scrollToBottomOfMessages();
      } else {
        setActiveChannel(notification.channelId);
      }
    }
  };

  const openToast = (toast) => {
    dismissToast(toast.id);
    if (toast.channelId) {
      if (toast.channelId === activeChannelRef.current) {
        scrollToBottomOfMessages();
      } else {
        setActiveChannel(toast.channelId);
      }
    }
  };

  const unreadNotificationCount = inAppNotifications.filter((n) => !n.read).length;

  const dmChannelIdsKey = useMemo(
    () => dmChannels.map((dm) => dm.id).sort().join("|"),
    [dmChannels]
  );

  async function openDm(userId) {
    if (!sessionUserId || !userId || userId === sessionUserId) return;
    const dmId = dmChannelId(sessionUserId, userId);
    try {
      const existing = await getDoc(doc(db, "dms", dmId));
      if (!existing.exists()) {
        await setDoc(doc(db, "dms", dmId), {
          participants: [sessionUserId, userId].sort(),
          names: {
            [sessionUserId]: activeName,
            [userId]: getProfileName(profiles[userId], "Unknown")
          },
          lastMessage: "",
          lastSenderId: sessionUserId,
          updatedAt: serverTimestamp()
        });
      }
      setActiveChannel(dmId);
    } catch (firebaseError) {
      setError(firebaseError.message);
    }
  }

  async function updateDmMetadata(lastMessage) {
    if (!isDmChannelId(activeChannel) || !sessionUserId) return;
    const partnerId = dmPartnerId(activeChannel, sessionUserId, activeDm);
    await setDoc(
      doc(db, "dms", activeChannel),
      {
        names: {
          [sessionUserId]: activeName,
          [partnerId]: getProfileName(profiles[partnerId], "Unknown")
        },
        lastMessage,
        lastSenderId: sessionUserId,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthReady(true);

      if (firebaseUser) {
        writeSessionUserId(firebaseUser.uid);
        setSessionUserId(firebaseUser.uid);
        saveUserProfile(firebaseUser).catch((firebaseError) => {
          setError(firebaseError.message);
        });
      } else {
        clearSessionUserId();
        setSessionUserId("");
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const uid = user.uid;

    const sessionRef = doc(collection(db, "users", uid, "sessions"));
    currentSessionDocRef.current = sessionRef;
    setDoc(sessionRef, { start: serverTimestamp(), date: new Date().toISOString().slice(0, 10) });

    const handleBeforeUnload = () => {
      setDoc(doc(db, "users", uid), { lastOnline: serverTimestamp() }, { merge: true });
      if (currentSessionDocRef.current) {
        updateDoc(currentSessionDocRef.current, { end: serverTimestamp() }).catch(() => {});
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      setDoc(doc(db, "users", uid), { lastOnline: serverTimestamp() }, { merge: true });
      if (currentSessionDocRef.current) {
        updateDoc(currentSessionDocRef.current, { end: serverTimestamp() }).catch(() => {});
      }
    };
  }, [user]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("quadchat-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const root = document.documentElement;
    if (reduceMotion) {
      root.setAttribute("data-reduce-motion", "");
    } else {
      root.removeAttribute("data-reduce-motion");
    }
    localStorage.setItem("quadchat-reduce-motion", reduceMotion ? "true" : "false");
  }, [reduceMotion]);

  useEffect(() => {
    localStorage.setItem("quadchat-show-version", showVersionInHeader ? "true" : "false");
  }, [showVersionInHeader]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--ui-scale", (uiScale / 100).toFixed(4));
  }, [uiScale]);

  useEffect(() => {
    localStorage.setItem("quadchat-ui-scale", String(uiScale));
  }, [uiScale]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      appSettingsRef,
      (snapshot) => {
        setAppSettings({
          signupEnabled: snapshot.exists()
            ? snapshot.data().signupEnabled !== false
            : true
        });
      },
      (firebaseError) => {
        setError(firebaseError.message);
      }
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!appSettings.signupEnabled && authView === "signup") {
      setAuthView("signin");
    }
  }, [appSettings.signupEnabled, authView]);

  useEffect(() => {
    if (user) {
      setSettingsName(activeName || "");
    }
  }, [activeName, user]);

  useEffect(() => {
    if (isSettingsOpen) {
      return undefined;
    }
    if (settingsPhotoPreview) {
      URL.revokeObjectURL(settingsPhotoPreview);
    }
    setSettingsPhotoFile(null);
    setSettingsPhotoPreview("");
    return undefined;
  }, [isSettingsOpen, settingsPhotoPreview]);

  useEffect(() => {
    if (!user) {
      setProfiles({});
      return undefined;
    }

    const unsubscribe = onSnapshot(
      usersRef,
      (snapshot) => {
        setProfiles(
          snapshot.docs.reduce((nextProfiles, profileDoc) => {
            nextProfiles[profileDoc.id] = {
              id: profileDoc.id,
              ...profileDoc.data()
            };
            return nextProfiles;
          }, {})
        );
      },
      (firebaseError) => {
        setError(firebaseError.message);
      }
    );

    return unsubscribe;
  }, [user]);

  useEffect(() => {
    if (!sessionUserId) {
      setDmChannels([]);
      return undefined;
    }

    const dmQuery = query(
      collection(db, "dms"),
      where("participants", "array-contains", sessionUserId)
    );

    const unsubscribe = onSnapshot(
      dmQuery,
      (snapshot) => {
        const channels = snapshot.docs.map((dmDoc) => ({
          id: dmDoc.id,
          ...dmDoc.data()
        }));
        channels.sort(
          (a, b) =>
            (b.updatedAt?.toDate?.() || 0) - (a.updatedAt?.toDate?.() || 0)
        );
        setDmChannels(channels);
      },
      (firebaseError) => {
        setError(firebaseError.message);
      }
    );

    return unsubscribe;
  }, [sessionUserId]);

  useEffect(() => {
    if (!user) {
      setOnlineUsers(new Set());
      return;
    }

    const presenceUrl = import.meta.env.VITE_PRESENCE_WORKER_URL;
    if (!presenceUrl) return;

    const wsUrl = `${presenceUrl}?userId=${user.uid}`;
    let ws = null;
    let reconnectTimeout = null;
    let reconnectAttempt = 0;
    const maxReconnectDelay = 30000;
    let closed = false;

    function connect() {
      if (closed) return;
      ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        reconnectAttempt = 0;
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "sync") {
            setOnlineUsers(new Set(data.onlineUsers));
          } else if (data.type === "presence") {
            setOnlineUsers((prev) => {
              const next = new Set(prev);
              if (data.status === "online") {
                next.add(data.userId);
              } else {
                next.delete(data.userId);
              }
              return next;
            });

            if (data.userId !== user.uid) {
            }
          }
        } catch (e) {
          console.error("Presence WS parse error:", e);
        }
      };

      ws.onclose = () => {
        if (!closed) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempt), maxReconnectDelay);
          reconnectAttempt++;
          reconnectTimeout = setTimeout(connect, delay);
        }
      };

      ws.onerror = () => {
        ws.close();
      };
    }

    connect();

    return () => {
      closed = true;
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
      if (ws) ws.close();
    };
  }, [user]);

  useEffect(() => {
    if (!user) {
      hasSyncedOnlineRef.current = false;
      prevOnlineRef.current = {};
      return;
    }

    const uids = Object.keys(profiles);
    if (uids.length === 0) return;

    if (!hasSyncedOnlineRef.current) {
      for (const [uid, profile] of Object.entries(profiles)) {
        prevOnlineRef.current[uid] = isRecentlyOnline(profile.lastOnline);
      }
      hasSyncedOnlineRef.current = true;
      return;
    }

    for (const [uid, profile] of Object.entries(profiles)) {
      if (uid === sessionUserId) continue;
      const nowOnline = isRecentlyOnline(profile.lastOnline);
      const wasOnline = prevOnlineRef.current[uid] ?? false;
      prevOnlineRef.current[uid] = nowOnline;
    }
  }, [user, profiles, sessionUserId]);

  useEffect(() => {
    if (!user || !sessionUserId) return;
    const profile = profiles[sessionUserId];
    if (!profile?.status?.scheduledBusy?.length) return;

    const check = () => {
      const now = Date.now();
      const inBusy = profile.status.scheduledBusy.some(
        (s) => now >= s.start?.toDate() && now <= s.end?.toDate()
      );
      if (inBusy && profile.status.mode !== "busy") {
        setDoc(doc(db, "users", sessionUserId), {
          status: { ...profile.status, mode: "busy" }
        }, { merge: true });
      }
    };

    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, [user, sessionUserId, profiles]);

  useEffect(() => {
    if (!user || !sessionUserId) return;
    setDoc(doc(db, "users", sessionUserId), { lastOnline: serverTimestamp() }, { merge: true });
    const id = setInterval(() => {
      setDoc(doc(db, "users", sessionUserId), { lastOnline: serverTimestamp() }, { merge: true });
    }, 30000);
    return () => clearInterval(id);
  }, [user, sessionUserId]);

  useEffect(() => {
    callStatusRef.current = callStatus;
    if (callStatus === "idle") {
      console.log("[CALL] status → idle");
    }
  }, [callStatus]);

  useEffect(() => {
    profilesRef.current = profiles;
    activeChannelRef.current = activeChannel;
    activeNameRef.current = activeName;
  }, [profiles, activeChannel, activeName]);

  useEffect(() => {
    if (remoteAudioRef.current && remoteStream) {
      console.log("[CALL] setting audio element srcObject");
      remoteAudioRef.current.srcObject = remoteStream;
    }
  }, [remoteStream, callStatus]);

  useEffect(() => {
    isSharingScreenRef.current = isSharingScreen;
  }, [isSharingScreen]);

  useEffect(() => {
    if (screenVideoRef.current && remoteScreenStream) {
      screenVideoRef.current.srcObject = remoteScreenStream;
    }
    if (!remoteScreenStream && viewingScreen) {
      setViewingScreen(false);
    }
  }, [remoteScreenStream]);

  useEffect(() => {
    if (callStatus !== "idle") return;
    const callsRef = rtdbRef(rtdb, "calls");
    const statusUnsubs = {};

    const unsub = onChildAdded(callsRef, (snap) => {
      const data = snap.val();
      if (data.calleeId !== sessionUserId || seenCallIdsRef.current.has(snap.key)) return;
      seenCallIdsRef.current.add(snap.key);

      const callKey = snap.key;
      console.log(`[CALL-DETECT] new child key=${callKey} status=${data.status} calleeId=${data.calleeId} callerName=${data.callerName} startedAt=${data.startedAt} age=${Date.now() - data.startedAt}ms`);

      if (data.status !== "calling" || Date.now() - data.startedAt >= 20000) {
        console.log(`[CALL-DETECT] filtering out stale/ended call key=${callKey}`);
        return;
      }

      const statusRef = rtdbRef(rtdb, `calls/${callKey}/status`);
      statusUnsubs[callKey] = onValue(statusRef, (statusSnap) => {
        const currentStatus = statusSnap.exists() ? statusSnap.val() : null;
        console.log(`[CALL-STATUS] key=${callKey} status=${currentStatus} callStatusRef=${callStatusRef.current}`);

        if (currentStatus === "calling" && callStatusRef.current === "idle" && Date.now() - data.startedAt < 20000) {
          console.log(`[CALL-STATUS] showing incoming call modal for key=${callKey}`);
          if (notificationsEnabled && notificationPermission === "granted") {
            new Notification("QuadChat", {
              body: `${data.callerName} is calling you`,
              icon: notificationIcon,
              tag: `incoming-call-${callKey}`,
            });
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: data.callerName,
            body: "is calling you",
            id: `call-${callKey}`
          });
          setIncomingCall({ key: callKey, ...data });
        } else {
          console.log(`[CALL-STATUS] clearing incoming call for key=${callKey} reason=${!currentStatus ? "no-status" : currentStatus !== "calling" ? "not-calling" : "busy-or-expired"}`);
          setIncomingCall((prev) => prev?.key === callKey ? null : prev);
          if (statusUnsubs[callKey]) {
            statusUnsubs[callKey]();
            delete statusUnsubs[callKey];
          }
        }
      });
    });

    return () => {
      console.log("[CALL-DETECT] cleaning up incoming call listener");
      off(callsRef);
      Object.values(statusUnsubs).forEach(fn => fn());
    };
  }, [sessionUserId, callStatus]);

  useEffect(() => {
    if (!statusModalOpen || !sessionUserId) return;
    const profile = profiles[sessionUserId];
    const s = profile?.status;
    setEditStatus({ mode: s?.mode || "active", text: s?.text || "" });
    setScheduledBusy(
      ((s?.scheduledBusy || []).map((sb) => ({
        start: sb.start?.toDate(),
        end: sb.end?.toDate()
      })) || []).sort((a, b) => a.start - b.start).reduce((acc, cur) => {
        if (acc.length === 0) return [cur];
        const last = acc[acc.length - 1];
        if (cur.start <= last.end) {
          if (cur.end > last.end) last.end = cur.end;
          return acc;
        }
        return [...acc, cur];
      }, [])
    );
  }, [statusModalOpen, sessionUserId, profiles]);

  useEffect(() => {
    if (!user) {
      setMessages([]);
      setHasMoreMessages(true);
      hasMoreMessagesRef.current = true;
      oldestDocSnapRef.current = null;
      newestDocSnapRef.current = null;
      if (newMessagesUnsubRef.current) {
        newMessagesUnsubRef.current();
        newMessagesUnsubRef.current = null;
      }
      return;
    }

    setMessages([]);
    setHasMoreMessages(true);
    hasMoreMessagesRef.current = true;
    oldestDocSnapRef.current = null;
    newestDocSnapRef.current = null;

    let cancelled = false;

    async function loadInitialMessages() {
      const ref = messagesRef(activeChannel);
      const initialQ = query(
        ref,
        orderBy("createdAt", "asc"),
        limitToLast(PAGE_SIZE)
      );

      const snapshot = await getDocs(initialQ);

      if (cancelled) return;

      const msgs = snapshot.docs.map((messageDoc) => ({
        id: messageDoc.id,
        ...messageDoc.data()
      }));

      setMessages(msgs);
      setTimeout(() => {
        const el = messagesContainerRef.current;
        if (el) el.scrollTop = el.scrollHeight;
      }, 0);
      const hasMore = snapshot.docs.length >= PAGE_SIZE;
      setHasMoreMessages(hasMore);
      hasMoreMessagesRef.current = hasMore;
      oldestDocSnapRef.current = snapshot.docs[0] || null;
      newestDocSnapRef.current =
        snapshot.docs[snapshot.docs.length - 1] || null;

      let unsubNew;
      if (newestDocSnapRef.current) {
        const newQuery = query(
          ref,
          orderBy("createdAt", "asc"),
          startAfter(newestDocSnapRef.current)
        );

        unsubNew = onSnapshot(
          newQuery,
          (snap) => {
            if (cancelled) return;

            snap.docChanges().forEach((change) => {
              if (change.type === "removed") {
                setMessages((prev) => prev.filter((m) => m.id !== change.doc.id));
                return;
              }
              if (change.type !== "added" && change.type !== "modified") {
                return;
              }
              const msg = {
                id: change.doc.id,
                ...change.doc.data()
              };
              setMessages((prev) => {
                const existingIndex = prev.findIndex((m) => m.id === msg.id);
                if (existingIndex === -1) {
                  const next = [...prev, msg];
                  return next.length > MAX_MESSAGES
                    ? next.slice(next.length - MAX_MESSAGES)
                    : next;
                }
                const next = prev.slice();
                next[existingIndex] = { ...next[existingIndex], ...msg };
                return next;
              });
              if (change.type === "added") {
                newestDocSnapRef.current = change.doc;
              }
            });
          },
          (firebaseError) => {
            if (!cancelled) setError(firebaseError.message);
          }
        );
      }

      const modQuery =
        oldestDocSnapRef.current && newestDocSnapRef.current
          ? query(
              ref,
              orderBy("createdAt", "asc"),
              startAfter(oldestDocSnapRef.current),
              endAt(newestDocSnapRef.current)
            )
          : query(ref, orderBy("createdAt", "asc"), limitToLast(PAGE_SIZE));
      const modUnsub = onSnapshot(
        modQuery,
        (snap) => {
          if (cancelled) return;
          snap.docChanges().forEach((change) => {
            if (change.type === "added") {
              const msg = {
                id: change.doc.id,
                ...change.doc.data()
              };
              setMessages((prev) => {
                const existingIndex = prev.findIndex((m) => m.id === msg.id);
                if (existingIndex === -1) {
                  const next = [...prev, msg];
                  return next.length > MAX_MESSAGES
                    ? next.slice(next.length - MAX_MESSAGES)
                    : next;
                }
                const next = prev.slice();
                next[existingIndex] = { ...next[existingIndex], ...msg };
                return next;
              });
            } else if (change.type === "modified") {
              const msg = {
                id: change.doc.id,
                ...change.doc.data()
              };
              setMessages((prev) => {
                const idx = prev.findIndex((m) => m.id === msg.id);
                if (idx === -1) return prev;
                const next = prev.slice();
                next[idx] = { ...next[idx], ...msg };
                return next;
              });
            } else if (change.type === "removed") {
              setMessages((prev) => prev.filter((m) => m.id !== change.doc.id));
            }
          });
        }
      );

      if (cancelled) return;
      newMessagesUnsubRef.current = () => {
        if (unsubNew) unsubNew();
        modUnsub();
      };
    }

    loadInitialMessages();

    return () => {
      cancelled = true;

      if (newMessagesUnsubRef.current) {
        newMessagesUnsubRef.current();
        newMessagesUnsubRef.current = null;
      }
    };
  }, [user, activeChannel]);

  useEffect(() => {
    if (!user || !activeChannel) {
      setTypingUsers({});
      return;
    }

    const typingRef = rtdbRef(rtdb, `typing/${activeChannel}`);

    const unsub = onValue(typingRef, (snap) => {
      const val = snap.val() || {};
      const others = {};
      Object.entries(val).forEach(([uid, data]) => {
        if (uid !== sessionUserId && data?.name) {
          others[uid] = data.name;
        }
      });
      setTypingUsers(others);
    });

    return () => {
      unsub();
      if (sessionUserId) {
        remove(rtdbRef(rtdb, `typing/${activeChannel}/${sessionUserId}`)).catch(() => {});
      }
      setTypingUsers({});
    };
  }, [user, activeChannel, sessionUserId]);

  useEffect(() => {
    if (isNearBottomRef.current) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, typingUsers]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    function handleScroll() {
      const threshold = 150;
      isNearBottomRef.current =
        container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
    }

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoadingMore && scrollSaveRef.current && messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const heightDiff = container.scrollHeight - scrollSaveRef.current.scrollHeight;
      container.scrollTop = scrollSaveRef.current.scrollTop + heightDiff;
      scrollSaveRef.current = null;
    }
  }, [isLoadingMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const container = messagesContainerRef.current;
    if (!sentinel || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreMessages();
        }
      },
      { root: container, threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMoreMessages, messages]);

  useEffect(() => {
    if (!showAttachMenu) return;
    function handleClick(e) {
      if (attachMenuRef.current && !attachMenuRef.current.contains(e.target)) {
        setShowAttachMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showAttachMenu]);

  useEffect(() => {
    if (!isNotificationPanelOpen) return;
    function handleClick(e) {
      if (notificationPanelRef.current && !notificationPanelRef.current.contains(e.target)) {
        setNotificationPanelOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isNotificationPanelOpen]);

  useEffect(
    () => () => {
      toastTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      toastTimersRef.current.clear();
    },
    []
  );

  useEffect(() => {
    pendingFilesRef.current = pendingFiles;
  }, [pendingFiles]);

  useEffect(
    () => () => {
      pendingFilesRef.current.forEach((pendingFile) => {
        if (pendingFile.previewUrl) {
          URL.revokeObjectURL(pendingFile.previewUrl);
        }
      });
    },
    []
  );

  useEffect(() => {
    if (!user) {
      knownMessageIdsRef.current = new Set();
      hasLoadedMessagesRef.current = false;
      return;
    }

    const nextKnownIds = new Set(messages.map((item) => item.id));

    if (!hasLoadedMessagesRef.current) {
      if (messages.length > 0) {
        knownMessageIdsRef.current = nextKnownIds;
        hasLoadedMessagesRef.current = true;
      }
      return;
    }

    const shouldNotify =
      notificationsEnabled &&
      notificationPermission === "granted" &&
      (document.hidden || !document.hasFocus());

    messages
      .filter(
        (item) =>
          !knownMessageIdsRef.current.has(item.id) &&
          item.userId !== sessionUserId
      )
      .forEach((item) => {
        const senderProfile = profiles[item.userId];
        const senderName = getProfileName(senderProfile, "Someone");
        const body = getReplyPreview(
          item.text ||
            (item.isFile
              ? "Sent a file"
              : item.attachments?.length > 0
                ? "Sent an attachment"
                : "Sent a message")
        );
        const isMention = isMentionOf(item.text, activeName);
        const messageVisible =
          !document.hidden && document.hasFocus() && isNearBottomRef.current;

        if (isFreshMessage(item) && (!messageVisible || isMention)) {
          pushInAppNotification({
            type: isMention ? "mention" : "message",
            channelId: activeChannel,
            channelLabel: activeChannelLabel,
            senderName,
            body,
            id: `msg-${activeChannel}-${item.id}`
          });
        }

        if (shouldNotify) {
          const notification = new Notification(`QuadChat: ${senderName}`, {
            body,
            icon: notificationIcon,
            tag: `quadchat-${item.id}`
          });

          window.setTimeout(() => notification.close(), 7000);
        }
      });

    knownMessageIdsRef.current = nextKnownIds;
  }, [
    messages,
    activeChannel,
    activeChannelLabel,
    activeName,
    notificationPermission,
    notificationsEnabled,
    profiles,
    sessionUserId,
    user
  ]);

  useEffect(() => {
    return () => { cleanupGroupCall(); };
  }, []);

  useEffect(() => {
    if (!user || !sessionUserId) return;

    const watcherChannels = [
      ...CHANNELS.map((channel) => ({ id: channel.id, label: channel.label })),
      ...dmChannels.map((dm) => ({
        id: dm.id,
        label: getDmPartnerName(dm, profilesRef.current, sessionUserId)
      }))
    ];

    const unsubs = watcherChannels.map(({ id: channelId, label: channelLabel }) => {
      const tailQuery = query(
        messagesRef(channelId),
        orderBy("createdAt", "desc"),
        limit(10)
      );
      return onSnapshot(
        tailQuery,
        (snap) => {
          const known = knownMessageIdsByChannelRef.current.get(channelId);
          if (!known) {
            knownMessageIdsByChannelRef.current.set(
              channelId,
              new Set(snap.docs.map((messageDoc) => messageDoc.id))
            );
            return;
          }
          let changed = false;
          snap.docs.forEach((messageDoc) => {
            if (known.has(messageDoc.id)) return;
            const data = messageDoc.data();
            if (!data || data.userId === sessionUserId || !isFreshMessage(data)) return;
            known.add(messageDoc.id);
            changed = true;
            const senderName = getProfileName(
              profilesRef.current[data.userId],
              "Someone"
            );
            const body = getReplyPreview(
              data.text ||
                (data.isFile
                  ? "Sent a file"
                  : data.attachments?.length > 0
                    ? "Sent an attachment"
                    : "Sent a message")
            );
            const isMention = isMentionOf(data.text, activeNameRef.current);
            if (channelId === activeChannelRef.current && !isMention) return;
            pushInAppNotification({
              type: isMention ? "mention" : "message",
              channelId,
              channelLabel,
              senderName,
              body,
              id: `msg-${channelId}-${messageDoc.id}`
            });
          });
          if (changed) {
            knownMessageIdsByChannelRef.current.set(channelId, known);
          }
        },
        () => {}
      );
    });

    return () => unsubs.forEach((unsub) => unsub());
  }, [user, sessionUserId, dmChannelIdsKey]);

  async function handleAuth(event) {
    event.preventDefault();
    const cleanName = draftName.trim();
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    const isSigningUp = authView === "signup";

    if (!cleanEmail || !cleanPassword || (isSigningUp && !cleanName)) {
      return;
    }

    if (isSigningUp && hasUsernameSpaces(cleanName)) {
      setError("Usernames cannot contain spaces.");
      return;
    }

    setError("");

    try {
      if (isSigningUp) {
        const credential = await createUserWithEmailAndPassword(
          auth,
          cleanEmail,
          cleanPassword
        );

        await updateProfile(credential.user, {
          displayName: cleanName
        });
        await saveUserProfile(credential.user, cleanName);
        writeSessionUserId(credential.user.uid);
        setSessionUserId(credential.user.uid);

        setUser({
          ...credential.user,
          displayName: cleanName
        });
      } else {
        const credential = await signInWithEmailAndPassword(
          auth,
          cleanEmail,
          cleanPassword
        );
        writeSessionUserId(credential.user.uid);
        setSessionUserId(credential.user.uid);
      }

      setDraftName("");
      setEmail("");
      setPassword("");
    } catch (firebaseError) {
      setError(getAuthErrorMessage(firebaseError));
    }
  }

  async function signInWithGoogle() {
    setError("");

    try {
      const credential = await signInWithPopup(auth, googleProvider);
      await saveUserProfile(credential.user);
      writeSessionUserId(credential.user.uid);
      setSessionUserId(credential.user.uid);
      setDraftName("");
      setEmail("");
      setPassword("");
    } catch (firebaseError) {
      setError(getAuthErrorMessage(firebaseError));
    }
  }

  async function linkGoogleAccount() {
    if (!user) {
      return;
    }

    setIsSavingSettings(true);
    setSettingsMessage("");

    try {
      const credential = await linkWithPopup(user, googleProvider);
      const profileRef = doc(db, "users", credential.user.uid);
      const profileSnap = await getDoc(profileRef);
      const existingPhoto = profileSnap.data()?.photoURL || "";
      const googlePhoto = credential.user.photoURL || "";

      let photoChoice = null;
      if (googlePhoto && existingPhoto && googlePhoto !== existingPhoto) {
        const overwrite = window.confirm(
          "You already have a profile picture. Replace it with your Google account picture?"
        );
        photoChoice = overwrite ? googlePhoto : existingPhoto;
      } else if (googlePhoto) {
        photoChoice = googlePhoto;
      }

      await saveUserProfile(credential.user, undefined, {
        photoURL: photoChoice ?? "",
        forcePhoto: photoChoice !== null
      });
      await credential.user.reload();
      setUser(auth.currentUser);
      setSettingsMessage("Google account connected.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  async function unlinkGoogleAccount() {
    if (!user) return;

    if (!hasEmailProvider) {
      setSettingsMessage("Set a password first so you can sign in without Google, then unlink.");
      return;
    }

    const confirmed = window.confirm(
      "Unlink Google from this account? You can link a different Google account later."
    );
    if (!confirmed) return;

    setIsSavingSettings(true);
    setSettingsMessage("");

    try {
      await unlink(user, googleProvider.providerId);
      await user.reload();
      setUser(auth.currentUser);
      setSettingsMessage("Google account unlinked.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  async function unlinkPassword() {
    if (!user || !hasEmailProvider) return;

    const confirmed = window.confirm(
      "Remove password sign-in from this account? You will no longer be able to sign in with a password."
    );
    if (!confirmed) return;

    setIsSavingSettings(true);
    setSettingsMessage("");

    try {
      await unlink(user, "password");
      await user.reload();
      setUser(auth.currentUser);
      setSettingsCurrentPassword("");
      setSettingsPassword("");
      setSettingsMessage("Password sign-in removed.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  function cleanupCall() {
    console.log("[CALL-CLEANUP] start");
    callCleanupsRef.current.forEach(fn => fn());
    callCleanupsRef.current = [];
    console.log("[CALL-CLEANUP] listeners detached");

    if (peerRef.current) {
      console.log("[CALL-CLEANUP] closing peer connection");
      if (peerRef.current._unsubAnswer) {
        peerRef.current._unsubAnswer();
        delete peerRef.current._unsubAnswer;
      }
      peerRef.current.close();
      peerRef.current = null;
    }
    if (localStreamRef.current) {
      console.log("[CALL-CLEANUP] stopping local stream");
      localStreamRef.current.getTracks().forEach((t) => t.stop());
      localStreamRef.current = null;
    }
    const nodeRef = callNodeRef.current;
    callNodeRef.current = null;
    if (nodeRef) {
      console.log("[CALL-CLEANUP] cancelling onDisconnect + writing ended + removing node");
      onDisconnect(nodeRef).cancel();
      update(nodeRef, { status: "ended" }).then(() => remove(nodeRef)).catch(() => {});
    }
    console.log("[CALL-CLEANUP] resetting state variables");
    setRemoteStream(null);
    setRemoteScreenStream(null);
    setScreenSharedByName(null);
    stopScreenShare();
    setCallStatus("idle");
    setCallPartnerId(null);
    setCallPartnerName("");
    setCallMuted(false);
    setRemoteMuted(false);
    setIncomingCall(null);
  }

  function hangUp() {
    console.log("[CALL] hangUp called");
    cleanupCall();
  }

  async function createPeerConnection(callNodeRefVal, isCaller) {
    const pc = new RTCPeerConnection(rtcConfig);
    peerRef.current = pc;
    let renegotiating = false;

    pc.onicecandidate = (e) => {
      if (e.candidate && callNodeRefVal) {
        if (process.env.NODE_ENV !== "production") {
          console.log(`[CALL-ICE] sending ${isCaller ? "caller" : "callee"} candidate`);
        }
        const candidateRef = rtdbRef(rtdb, `calls/${callNodeRefVal.key}/candidates/${isCaller ? "caller" : "callee"}/${Date.now()}`);
        set(candidateRef, e.candidate.toJSON());
      }
    };

    pc.ontrack = (e) => {
      if (e.track.kind === "video") {
        console.log("[CALL] ontrack — screen video received");
        setRemoteScreenStream(e.streams[0]);
        e.track.onmute = () => setRemoteScreenStream(null);
      } else {
        console.log("[CALL] ontrack — remote audio received");
        setRemoteStream(e.streams[0]);
      }
    };

    pc.onnegotiationneeded = async () => {
      if (renegotiating) return;
      renegotiating = true;
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        const reofferRef = rtdbRef(rtdb, `calls/${callNodeRefVal.key}/renego/offer_${sessionUserId}`);
        await set(reofferRef, { type: offer.type, sdp: offer.sdp });
        const reanswerRef = rtdbRef(rtdb, `calls/${callNodeRefVal.key}/renego/answer_${sessionUserId}`);
        const unsub = onValue(reanswerRef, async (snap) => {
          const val = snap.val();
          if (val && val.type) {
            unsub();
            try {
              await pc.setRemoteDescription(new RTCSessionDescription(val));
            } catch (e) {
              console.error("[CALL-RENEGO] setRemoteDescription failed:", e);
            }
            renegotiating = false;
          }
        });
        callCleanupsRef.current.push(unsub);
      } catch (e) {
        console.error("[CALL-RENEGO] createOffer failed:", e);
        renegotiating = false;
      }
    };

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, localStreamRef.current));
    }

    return pc;
  }

  async function startCall(calleeId, calleeName) {
    console.log(`[CALL-START] starting call to ${calleeId} (${calleeName})`);
    if (callStatus !== "idle" || startCallLockRef.current) {
      console.log(`[CALL-START] blocked: callStatus=${callStatus} lock=${startCallLockRef.current}`);
      return;
    }
    startCallLockRef.current = true;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      console.log("[CALL-START] got local media stream");
      localStreamRef.current = stream;

      const callRef = push(rtdbRef(rtdb, "calls"));
      callNodeRef.current = callRef;
      isCallerRef.current = true;
      onDisconnect(callRef).update({ status: "ended" });
      console.log(`[CALL-START] callRef key=${callRef.key}`);

      const pc = await createPeerConnection(callRef, true);

      const offer = applyOpusBitrate(await pc.createOffer(), OPUS_BITRATE);
      await pc.setLocalDescription(offer);
      console.log("[CALL-START] created and set local offer");

      await set(callRef, {
        callerId: sessionUserId,
        calleeId,
        callerName: activeName,
        calleeName,
        status: "calling",
        startedAt: Date.now(),
        offer: { type: offer.type, sdp: offer.sdp }
      });
      console.log("[CALL-START] call data written to RTDB");

      setCallStatus("calling");
      setCallPartnerId(calleeId);
      setCallPartnerName(calleeName);

      const answerRef = rtdbRef(rtdb, `calls/${callRef.key}/answer`);
      const unsubAnswer = onValue(answerRef, async (snap) => {
        if (snap.exists() && pc.signalingState !== "stable") {
          console.log("[CALL-START] received answer, setting remote description");
          const ans = snap.val();
          await pc.setRemoteDescription(new RTCSessionDescription(ans));
          if (notificationsEnabled && notificationPermission === "granted") {
            new Notification("QuadChat", {
              body: `${calleeName} picked up your call`,
              icon: notificationIcon,
              tag: `call-picked-${callRef.key}`,
            });
          }
          setCallStatus("connected");
        }
      });
      peerRef.current._unsubAnswer = unsubAnswer;

      const candidatesRef = rtdbRef(rtdb, `calls/${callRef.key}/candidates/callee`);
      const unsubCandidates = onChildAdded(candidatesRef, (snap) => {
        try {
          if (pc.signalingState === "closed") return;
          const candidate = new RTCIceCandidate(snap.val());
          pc.addIceCandidate(candidate).catch(e => console.error("[CALL-ICE] addIceCandidate error (caller receiving callee):", e));
        } catch (e) {
          console.error("[CALL-ICE] bad candidate data (caller):", e, snap.val());
        }
      });
      callCleanupsRef.current.push(unsubCandidates);

      const calleeMuteRef = rtdbRef(rtdb, `calls/${callRef.key}/calleeMuted`);
      const unsubMute = onValue(calleeMuteRef, (snap) => { console.log(`[CALL-START] remote mute changed: ${!!snap.val()}`); setRemoteMuted(!!snap.val()); });
      callCleanupsRef.current.push(unsubMute);

      const screenShareRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareActive`);
      const unsubScreen = onValue(screenShareRef, (snap) => {
        const val = snap.val();
        setScreenSharedByName(val && typeof val === "object" ? val.name : null);
      });
      callCleanupsRef.current.push(unsubScreen);

      const screenShareReqRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareRequest`);
      const unsubScreenReq = onValue(screenShareReqRef, (snap) => {
        const val = snap.val();
        if (val && val.uid && val.uid !== user.uid && isSharingScreenRef.current) {
          setScreenShareRequest(val);
          clearTimeout(screenShareRequestTimerRef.current);
          screenShareRequestTimerRef.current = setTimeout(() => {
            set(screenShareReqRef, null).catch(() => {});
            setScreenShareRequest(null);
          }, 5000);
        } else if (!val) {
          setScreenShareRequest(null);
          clearTimeout(screenShareRequestTimerRef.current);
        }
      });
      callCleanupsRef.current.push(unsubScreenReq);

      const cancelRef = rtdbRef(rtdb, `calls/${callRef.key}/status`);
      let cleaningUp = false;
      const unsubCancel = onValue(cancelRef, (snap) => {
        const s = snap.exists() ? snap.val() : null;
        console.log(`[CALL-START] cancel listener: status=${s} cleaningUp=${cleaningUp} nodeRef=${!!callNodeRef.current}`);
        if (cleaningUp) return;
        if ((!snap.exists() || snap.val() === "ended") && callNodeRef.current) {
          cleaningUp = true;
          if (typeof Notification !== "undefined") {
            try { new Notification("QuadChat", { body: `${calleeName} has ended the call.` }); } catch (_) {}
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: calleeName,
            body: "has ended the call",
            id: `call-end-${callRef.key}`
          });
          console.log("[CALL-START] cancel listener → cleanupCall");
          cleanupCall();
        }
      });
      callCleanupsRef.current.push(unsubCancel);

      const renegoRef = rtdbRef(rtdb, `calls/${callRef.key}/renego/offer_${calleeId}`);
      let handlingRenego = false;
      const unsubRenego = onValue(renegoRef, async (snap) => {
        const val = snap.val();
        if (!val || !val.type || handlingRenego) return;
        handlingRenego = true;
        try {
          if (pc.signalingState !== "stable") {
            console.log("[CALL-START] renego: rolling back stale signaling state");
            await pc.setLocalDescription({ type: "rollback" });
          }
          await pc.setRemoteDescription(new RTCSessionDescription(val));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await set(rtdbRef(rtdb, `calls/${callRef.key}/renego/answer_${calleeId}`), { type: answer.type, sdp: answer.sdp });
        } catch (e) {
          console.error("[CALL-START] renego handler failed:", e);
        }
        handlingRenego = false;
      });
      callCleanupsRef.current.push(unsubRenego);

      let disconnectTimeout;
      pc.oniceconnectionstatechange = () => {
        console.log(`[CALL-START] ICE state: ${pc.iceConnectionState}`);
        if (pc.iceConnectionState === "disconnected") {
          disconnectTimeout = setTimeout(() => {
            if (pc.iceConnectionState === "disconnected" && !cleaningUp) {
              console.log("[CALL-START] ICE still disconnected after 10s → cleanupCall");
              if (typeof Notification !== "undefined") {
                try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
              }
              cleanupCall();
            }
          }, 10000);
        } else if (pc.iceConnectionState === "connected" || pc.iceConnectionState === "completed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
        } else if (pc.iceConnectionState === "failed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
          if (!cleaningUp) {
            console.log("[CALL-START] ICE failed → cleanupCall");
            if (typeof Notification !== "undefined") {
              try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
            }
            cleanupCall();
          }
        }
      };
    } catch (e) {
      console.error("[CALL-START] error:", e);
      cleanupCall();
    } finally {
      startCallLockRef.current = false;
    }
  }

  async function answerCall() {
    console.log("[CALL-ANSWER] answerCall called", incomingCall?.key);
    if (!incomingCall || answerCallLockRef.current) {
      console.log(`[CALL-ANSWER] blocked: incomingCall=${!!incomingCall} lock=${answerCallLockRef.current}`);
      return;
    }
    answerCallLockRef.current = true;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      console.log("[CALL-ANSWER] got local media stream");
      localStreamRef.current = stream;

      const callRef = rtdbRef(rtdb, `calls/${incomingCall.key}`);
      callNodeRef.current = callRef;
      isCallerRef.current = false;
      onDisconnect(callRef).update({ status: "ended" });
      console.log(`[CALL-ANSWER] callRef key=${incomingCall.key}`);

      const offer = incomingCall.offer;
      if (!offer) {
        console.log("[CALL-ANSWER] no offer in incomingCall, aborting");
        setSettingsMessage("Call no longer available.");
        setIncomingCall(null);
        answerCallLockRef.current = false;
        return;
      }

      const pc = await createPeerConnection(callRef, false);
      console.log("[CALL-ANSWER] peer connection created");

      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      console.log("[CALL-ANSWER] remote description set");

      const answer = applyOpusBitrate(await pc.createAnswer(), OPUS_BITRATE);
      await pc.setLocalDescription(answer);
      console.log("[CALL-ANSWER] local description set (answer)");

      await update(callRef, { answer: { type: answer.type, sdp: answer.sdp }, status: "connected" });
      console.log("[CALL-ANSWER] answer written to RTDB, status → connected");

      setCallStatus("connected");
      setCallPartnerId(incomingCall.callerId);
      setCallPartnerName(incomingCall.callerName);
      setIncomingCall(null);

      const candidatesRef = rtdbRef(rtdb, `calls/${callRef.key}/candidates/caller`);
      const unsubCandidates = onChildAdded(candidatesRef, (snap) => {
        try {
          if (pc.signalingState === "closed") return;
          const candidate = new RTCIceCandidate(snap.val());
          pc.addIceCandidate(candidate).catch(e => console.error("[CALL-ICE] addIceCandidate error (callee receiving caller):", e));
        } catch (e) {
          console.error("[CALL-ICE] bad candidate data (callee):", e, snap.val());
        }
      });
      callCleanupsRef.current.push(unsubCandidates);

      const callerMuteRef = rtdbRef(rtdb, `calls/${callRef.key}/callerMuted`);
      const unsubMute = onValue(callerMuteRef, (snap) => { console.log(`[CALL-ANSWER] remote mute changed: ${!!snap.val()}`); setRemoteMuted(!!snap.val()); });
      callCleanupsRef.current.push(unsubMute);

      const screenShareRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareActive`);
      const unsubScreen = onValue(screenShareRef, (snap) => {
        const val = snap.val();
        setScreenSharedByName(val && typeof val === "object" ? val.name : null);
      });
      callCleanupsRef.current.push(unsubScreen);

      const screenShareReqRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareRequest`);
      const unsubScreenReq = onValue(screenShareReqRef, (snap) => {
        const val = snap.val();
        if (val && val.uid && val.uid !== user.uid && isSharingScreenRef.current) {
          setScreenShareRequest(val);
          clearTimeout(screenShareRequestTimerRef.current);
          screenShareRequestTimerRef.current = setTimeout(() => {
            set(screenShareReqRef, null).catch(() => {});
            setScreenShareRequest(null);
          }, 5000);
        } else if (!val) {
          setScreenShareRequest(null);
          clearTimeout(screenShareRequestTimerRef.current);
        }
      });
      callCleanupsRef.current.push(unsubScreenReq);

      const renegoRef = rtdbRef(rtdb, `calls/${callRef.key}/renego/offer_${incomingCall.callerId}`);
      let handlingRenego = false;
      const unsubRenego = onValue(renegoRef, async (snap) => {
        const val = snap.val();
        if (!val || !val.type || handlingRenego) return;
        handlingRenego = true;
        try {
          if (pc.signalingState !== "stable") {
            console.log("[CALL-ANSWER] renego: rolling back stale signaling state");
            await pc.setLocalDescription({ type: "rollback" });
          }
          await pc.setRemoteDescription(new RTCSessionDescription(val));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await set(rtdbRef(rtdb, `calls/${callRef.key}/renego/answer_${incomingCall.callerId}`), { type: answer.type, sdp: answer.sdp });
        } catch (e) {
          console.error("[CALL-ANSWER] renego handler failed:", e);
        }
        handlingRenego = false;
      });
      callCleanupsRef.current.push(unsubRenego);

      const cancelRef2 = rtdbRef(rtdb, `calls/${callRef.key}/status`);
      let cleaningUp2 = false;
      const unsubCancel = onValue(cancelRef2, (snap) => {
        const s = snap.exists() ? snap.val() : null;
        console.log(`[CALL-ANSWER] cancel listener: status=${s} cleaningUp=${cleaningUp2} nodeRef=${!!callNodeRef.current}`);
        if (cleaningUp2) return;
        if ((!snap.exists() || snap.val() === "ended") && callNodeRef.current) {
          cleaningUp2 = true;
          if (typeof Notification !== "undefined") {
            try { new Notification("QuadChat", { body: `${incomingCall.callerName} has ended the call.` }); } catch (_) {}
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: incomingCall.callerName,
            body: "has ended the call",
            id: `call-end-${callRef.key}`
          });
          console.log("[CALL-ANSWER] cancel listener → cleanupCall");
          cleanupCall();
        }
      });
      callCleanupsRef.current.push(unsubCancel);

      let disconnectTimeout;
      pc.oniceconnectionstatechange = () => {
        console.log(`[CALL-ANSWER] ICE state: ${pc.iceConnectionState}`);
        if (pc.iceConnectionState === "disconnected") {
          disconnectTimeout = setTimeout(() => {
            if (pc.iceConnectionState === "disconnected" && !cleaningUp2) {
              console.log("[CALL-ANSWER] ICE still disconnected after 10s → cleanupCall");
              if (typeof Notification !== "undefined") {
                try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
              }
              cleanupCall();
            }
          }, 10000);
        } else if (pc.iceConnectionState === "connected" || pc.iceConnectionState === "completed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
        } else if (pc.iceConnectionState === "failed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
          if (!cleaningUp2) {
            console.log("[CALL-ANSWER] ICE failed → cleanupCall");
            if (typeof Notification !== "undefined") {
              try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
            }
            cleanupCall();
          }
        }
      };
    } catch (e) {
      console.error("[CALL-ANSWER] error:", e);
      cleanupCall();
    } finally {
      answerCallLockRef.current = false;
    }
  }

  function rejectCall() {
    console.log("[CALL-REJECT] rejecting incoming call", incomingCall?.key);
    if (incomingCall) {
      remove(rtdbRef(rtdb, `calls/${incomingCall.key}`));
      setIncomingCall(null);
    }
  }

  function toggleGroupCallMute() {
    if (groupCallLocalStreamRef.current) {
      const audioTrack = groupCallLocalStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setGroupCallLocalMuted(!audioTrack.enabled);
      }
    }
  }

  async function toggleScreenShare() {
    if (isSharingScreen) {
      stopScreenShare();
      return;
    }
    if (!isSharingScreen && screenSharedByName !== null) {
      const reqPath = callNodeRef.current
        ? `calls/${callNodeRef.current.key}/screenShareRequest`
        : p2pGroupCallNodeRef.current
          ? `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareRequest`
          : null;
      if (reqPath) {
        const reqRef = rtdbRef(rtdb, reqPath);
        set(reqRef, { uid: user.uid, name: activeName }).catch(() => {});
        setTimeout(() => set(reqRef, null).catch(() => {}), 5000);
      }
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      screenStreamRef.current = stream;
      const track = stream.getVideoTracks()[0];
      if (!track) return;

      track.onended = () => stopScreenShare();

      const addToAll = (track, stream) => {
        if (callStatus === "connected" && peerRef.current) {
          peerRef.current.addTrack(track, stream);
        }
        Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => {
          try { pc.addTrack(track, stream); } catch (_) {}
        });
        if (groupCallRoomRef.current) {
          groupCallRoomRef.current.localParticipant.publishTrack(track, {
            source: "screen_share",
          }).catch((e) => console.error("[SCREEN] publish to LiveKit failed:", e));
        }
      };

      addToAll(track, stream);

      if (callNodeRef.current) {
        set(rtdbRef(rtdb, `calls/${callNodeRef.current.key}/screenShareActive`), { name: activeName }).catch(() => {});
      }
      if (p2pGroupCallNodeRef.current) {
        set(rtdbRef(rtdb, `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareActive`), { name: activeName }).catch(() => {});
      }

      setIsSharingScreen(true);
    } catch (e) {
      if (e.name !== "NotAllowedError" && e.name !== "AbortError") {
        console.error("[SCREEN] share failed:", e);
      }
    }
  }

  function stopScreenShare() {
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((t) => t.stop());
      screenStreamRef.current = null;
    }
    if (callNodeRef.current) {
      set(rtdbRef(rtdb, `calls/${callNodeRef.current.key}/screenShareActive`), false).catch(() => {});
      set(rtdbRef(rtdb, `calls/${callNodeRef.current.key}/screenShareRequest`), null).catch(() => {});
    }
    if (p2pGroupCallNodeRef.current) {
      set(rtdbRef(rtdb, `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareActive`), false).catch(() => {});
      set(rtdbRef(rtdb, `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareRequest`), null).catch(() => {});
    }
    clearTimeout(screenShareRequestTimerRef.current);
    setScreenShareRequest(null);
    setIsSharingScreen(false);
  }

  function cleanupGroupCall() {
    if (groupCallCleaningRef.current) return;
    groupCallCleaningRef.current = true;
    if (groupCallRoomRef.current) {
      groupCallRoomRef.current.disconnect();
      groupCallRoomRef.current = null;
    }
    if (groupCallLocalStreamRef.current) {
      groupCallLocalStreamRef.current.getTracks().forEach((t) => t.stop());
      groupCallLocalStreamRef.current = null;
    }
    if (groupCallAudioContainerRef.current) {
      groupCallAudioContainerRef.current.querySelectorAll("audio").forEach((el) => {
        el.srcObject = null;
        el.remove();
      });
    }
    setGroupCallParticipants({});
    setGroupCallLocalMuted(false);
    setRemoteScreenStream(null);
    setScreenSharedByName(null);
    stopScreenShare();
    setGroupCallStatus("idle");
    groupCallCleaningRef.current = false;
  }

  function cleanupP2PGroupCall() {
    if (p2pGroupCallCleaningRef.current) return;
    p2pGroupCallCleaningRef.current = true;

    p2pGroupCallUnsubsRef.current.forEach((fn) => fn());
    p2pGroupCallUnsubsRef.current = [];

    Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => {
      pc.close();
    });
    p2pGroupCallConnectionsRef.current = {};

    if (p2pGroupCallStreamRef.current) {
      p2pGroupCallStreamRef.current.getTracks().forEach((t) => t.stop());
      p2pGroupCallStreamRef.current = null;
    }

    if (p2pGroupCallAudioContainerRef.current) {
      p2pGroupCallAudioContainerRef.current.querySelectorAll("audio").forEach((el) => {
        el.srcObject = null;
        el.remove();
      });
    }

    if (p2pGroupCallNodeRef.current) {
      remove(p2pGroupCallNodeRef.current).catch(() => {});
      p2pGroupCallNodeRef.current = null;
    }

    setP2pGroupCallParticipants({});
    setP2pGroupCallHostId(null);
    setP2pGroupCallLocalMuted(false);
    setRemoteScreenStream(null);
    setScreenSharedByName(null);
    stopScreenShare();
    setP2pGroupCallStatus("idle");
    p2pGroupCallCleaningRef.current = false;
  }

  function createP2PConnection(remoteUid, callKey) {
    const pc = new RTCPeerConnection(rtcConfig);
    const connId = [sessionUserId, remoteUid].sort().join("_");
    let renegotiating = false;

    if (p2pGroupCallStreamRef.current) {
      p2pGroupCallStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, p2pGroupCallStreamRef.current));
    }

    pc.onicecandidate = (e) => {
      if (e.candidate) {
        set(
          rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/candidates_${sessionUserId}/${Date.now()}`),
          e.candidate.toJSON()
        ).catch(() => {});
      }
    };

    pc.ontrack = (e) => {
      if (e.track.kind === "video") {
        console.log("[P2P] ontrack — screen video from", remoteUid);
        setRemoteScreenStream(e.streams[0]);
        e.track.onmute = () => setRemoteScreenStream(null);
      } else {
        const audio = document.createElement("audio");
        audio.srcObject = e.streams[0];
        audio.autoplay = true;
        audio.setAttribute("data-p2p-participant", remoteUid);
        p2pGroupCallAudioContainerRef.current?.appendChild(audio);
      }
    };

    pc.onnegotiationneeded = async () => {
      if (renegotiating) return;
      renegotiating = true;
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        const reofferRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/renego/offer_${sessionUserId}`);
        await set(reofferRef, { type: offer.type, sdp: offer.sdp });
        const reanswerRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/renego/answer_${sessionUserId}`);
        const unsub = onValue(reanswerRef, async (snap) => {
          const val = snap.val();
          if (val && val.type) {
            unsub();
            try {
              await pc.setRemoteDescription(new RTCSessionDescription(val));
            } catch (e) {
              console.error("[P2P-RENEGO] setRemoteDescription failed:", e);
            }
            renegotiating = false;
          }
        });
        p2pGroupCallUnsubsRef.current.push(unsub);
      } catch (e) {
        console.error("[P2P-RENEGO] createOffer failed:", e);
        renegotiating = false;
      }
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "failed" || pc.connectionState === "disconnected") {
        const el = p2pGroupCallAudioContainerRef.current?.querySelector(
          `[data-p2p-participant="${remoteUid}"]`
        );
        if (el) { el.srcObject = null; el.remove(); }
        delete p2pGroupCallConnectionsRef.current[remoteUid];
      }
    };

    p2pGroupCallConnectionsRef.current[remoteUid] = pc;
    return pc;
  }

  function listenForRemoteCandidates(remoteUid, callKey, pc) {
    const connId = [sessionUserId, remoteUid].sort().join("_");
    const candidatePath = `group-calls/${callKey}/connections/${connId}/candidates_${remoteUid}`;
    const unsub = onChildAdded(rtdbRef(rtdb, candidatePath), (snap) => {
      if (pc.remoteDescription && snap.val()) {
        pc.addIceCandidate(new RTCIceCandidate(snap.val())).catch(() => {});
      }
    });
    p2pGroupCallUnsubsRef.current.push(unsub);
  }

  function listenForP2PRenego(remoteUid, callKey, pc) {
    const connId = [sessionUserId, remoteUid].sort().join("_");
    const renegoOfferPath = `group-calls/${callKey}/connections/${connId}/renego/offer_${remoteUid}`;
    let handlingRenego = false;
    const unsub = onValue(rtdbRef(rtdb, renegoOfferPath), async (snap) => {
      const val = snap.val();
      if (!val || !val.type || handlingRenego) return;
      handlingRenego = true;
      try {
        if (pc.signalingState !== "stable") {
          await pc.setLocalDescription({ type: "rollback" });
        }
        await pc.setRemoteDescription(new RTCSessionDescription(val));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        const reanswerRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/renego/answer_${remoteUid}`);
        await set(reanswerRef, { type: answer.type, sdp: answer.sdp });
      } catch (e) {
        console.error("[P2P-RENEGO] handling offer failed:", e);
      }
      handlingRenego = false;
    });
    p2pGroupCallUnsubsRef.current.push(unsub);
  }

  async function negotiateP2PConnection(remoteUid, callKey) {
    const connId = [sessionUserId, remoteUid].sort().join("_");
    const connRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}`);

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        console.error(`[P2P-NEGO] timeout ${sessionUserId}→${remoteUid}`);
        unsub();
        reject(new Error("negotiation timeout"));
      }, 20000);

      let done = false;

      const unsub = onValue(connRef, async (snap) => {
        if (done) return;
        const data = snap.val();
        if (!data) {
          if (sessionUserId > remoteUid) {
            const pc = createP2PConnection(remoteUid, callKey);
            listenForRemoteCandidates(remoteUid, callKey, pc);
            listenForP2PRenego(remoteUid, callKey, pc);
            console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: writing offer (empty node)`);
            const offer = applyOpusBitrate(await pc.createOffer(), OPUS_BITRATE);
            await pc.setLocalDescription(offer);
            await update(connRef, { offer: { type: offer.type, sdp: offer.sdp } });
          }
          return;
        }

        console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: offer=${!!data.offer} answer=${!!data.answer} higher=${sessionUserId > remoteUid}`);

        if (data.offer && data.answer && !done) {
          done = true;
          clearTimeout(timeout);
          unsub();
          resolve();
          return;
        }

        if (sessionUserId > remoteUid) {
          if (!data.offer) {
            const pc = createP2PConnection(remoteUid, callKey);
            listenForRemoteCandidates(remoteUid, callKey, pc);
            listenForP2PRenego(remoteUid, callKey, pc);
            console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: writing offer`);
            const offer = applyOpusBitrate(await pc.createOffer(), OPUS_BITRATE);
            await pc.setLocalDescription(offer);
            await update(connRef, { offer: { type: offer.type, sdp: offer.sdp } });
          }
        } else {
          if (data.offer && !data.answer) {
            console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: writing answer`);
            const pc = createP2PConnection(remoteUid, callKey);
            listenForRemoteCandidates(remoteUid, callKey, pc);
            listenForP2PRenego(remoteUid, callKey, pc);
            await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
            const answer = applyOpusBitrate(await pc.createAnswer(), OPUS_BITRATE);
            await pc.setLocalDescription(answer);
            await update(connRef, { answer: { type: answer.type, sdp: answer.sdp } });
          }
        }
      });
    });
  }

  async function connectToPeer(uid, callKey) {
    if (uid === sessionUserId || p2pGroupCallConnectionsRef.current[uid]) return;
    await negotiateP2PConnection(uid, callKey);
  }

  async function ensureP2PAudioStream() {
    if (p2pGroupCallStreamRef.current) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      p2pGroupCallStreamRef.current = stream;
      Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => {
        stream.getTracks().forEach((t) => pc.addTrack(t, stream));
      });
    } catch (e) {
      console.error("[P2P] getUserMedia failed:", e);
    }
  }

  async function joinP2PGroupCall() {
    if (p2pGroupCallStatus !== "idle" || p2pGroupCallCleaningRef.current) return;
    setP2pGroupCallStatus("connecting");

    try {
      if (callStatus !== "idle") cleanupCall();

      const callKey = "global_p2p";
      const capability = computeCapability();
      const now = Date.now();

      const callRef = rtdbRef(rtdb, `group-calls/${callKey}`);
      const myParticipantRef = rtdbRef(rtdb, `group-calls/${callKey}/participants/${sessionUserId}`);

      await update(callRef, { createdAt: now });
      await set(myParticipantRef, {
        name: activeName,
        capability,
        joinedAt: now,
      });
      onDisconnect(myParticipantRef).remove();
      p2pGroupCallNodeRef.current = callRef;

      const snap = await rtdbGet(callRef);
      const existingParticipants = snap.val()?.participants || {};

      console.log(`[P2P-JOIN] participants keys=${Object.keys(existingParticipants)} now=${now} gotStream=${!!p2pGroupCallStreamRef.current}`);
      const otherUids = Object.keys(existingParticipants).filter((uid) => uid !== sessionUserId);

      const allCaps = { ...existingParticipants };
      allCaps[sessionUserId] = { capability, name: activeName };
      const hostUid = Object.keys(allCaps).reduce((best, uid) =>
        (allCaps[uid]?.capability || 0) > (allCaps[best]?.capability || 0) ? uid : best
      );
      setP2pGroupCallHostId(hostUid);
      const { [sessionUserId]: _self, ...otherParticipants } = existingParticipants;
      setP2pGroupCallParticipants(otherParticipants);

      if (otherUids.length === 0) {
        setP2pGroupCallStatus("connected");
      } else {
        await ensureP2PAudioStream();
        for (const uid of otherUids) {
          await connectToPeer(uid, callKey);
        }
        setP2pGroupCallStatus("connected");
      }

      const unsubAdded = onChildAdded(
        rtdbRef(rtdb, `group-calls/${callKey}/participants`),
        async (snap) => {
          const uid = snap.key;
          if (uid === sessionUserId || p2pGroupCallConnectionsRef.current[uid]) return;
          const pData = snap.val();
          setP2pGroupCallParticipants((prev) => ({ ...prev, [uid]: pData }));
          await ensureP2PAudioStream();
          connectToPeer(uid, callKey);
        }
      );
      p2pGroupCallUnsubsRef.current.push(unsubAdded);

      const unsubRemoved = onChildRemoved(
        rtdbRef(rtdb, `group-calls/${callKey}/participants`),
        (snap) => {
          const uid = snap.key;
          const pData = snap.val();
          if (uid === sessionUserId) {
            if (!p2pGroupCallCleaningRef.current && typeof Notification !== "undefined") {
              try { new Notification("QuadChat", { body: "You have disconnected from the group call. You may be lagging." }); } catch (_) {}
            }
            return;
          }
          const displayName = pData?.name || uid;
          if (typeof Notification !== "undefined") {
            try { new Notification("QuadChat", { body: `${displayName} has left the group call.` }); } catch (_) {}
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: displayName,
            body: "has left the group call",
            id: `call-leave-${callKey}-${uid}`
          });
          setP2pGroupCallParticipants((prev) => {
            const { [uid]: _, ...rest } = prev;
            return rest;
          });
          if (p2pGroupCallConnectionsRef.current[uid]) {
            p2pGroupCallConnectionsRef.current[uid].close();
            delete p2pGroupCallConnectionsRef.current[uid];
          }
          const el = p2pGroupCallAudioContainerRef.current?.querySelector(
            `[data-p2p-participant="${uid}"]`
          );
          if (el) { el.srcObject = null; el.remove(); }
        }
      );
      p2pGroupCallUnsubsRef.current.push(unsubRemoved);

      const p2pScreenShareRef = rtdbRef(rtdb, `group-calls/${callKey}/screenShareActive`);
      const unsubP2pScreen = onValue(p2pScreenShareRef, (snap) => {
        const val = snap.val();
        setScreenSharedByName(val && typeof val === "object" ? val.name : null);
      });
      p2pGroupCallUnsubsRef.current.push(unsubP2pScreen);

      const p2pScreenShareReqRef = rtdbRef(rtdb, `group-calls/${callKey}/screenShareRequest`);
      const unsubP2pScreenReq = onValue(p2pScreenShareReqRef, (snap) => {
        const val = snap.val();
        if (val && val.uid && val.uid !== user.uid && isSharingScreenRef.current) {
          setScreenShareRequest(val);
          clearTimeout(screenShareRequestTimerRef.current);
          screenShareRequestTimerRef.current = setTimeout(() => {
            set(p2pScreenShareReqRef, null).catch(() => {});
            setScreenShareRequest(null);
          }, 5000);
        } else if (!val) {
          setScreenShareRequest(null);
          clearTimeout(screenShareRequestTimerRef.current);
        }
      });
      p2pGroupCallUnsubsRef.current.push(unsubP2pScreenReq);
    } catch (e) {
      console.error("[P2P-GROUP-CALL] join error:", e);
      cleanupP2PGroupCall();
    }
  }

  function leaveP2PGroupCall() {
    cleanupP2PGroupCall();
  }

  function toggleP2PGroupCallMute() {
    if (p2pGroupCallStreamRef.current) {
      const audioTrack = p2pGroupCallStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setP2pGroupCallLocalMuted(!audioTrack.enabled);
      }
    } else {
      setP2pGroupCallLocalMuted((prev) => !prev);
    }
  }

  async function joinGroupCall() {
    if (groupCallStatus !== "idle" || groupCallCleaningRef.current) return;
    setGroupCallStatus("connecting");

    try {
      if (callStatus !== "idle") {
        cleanupCall();
      }

      const idToken = await user.getIdToken();
      const res = await fetch("/api/livekit-token", {
        method: "POST",
        headers: { Authorization: `Bearer ${idToken}` },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to get token");
      }
      const { token, url } = await res.json();

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      groupCallLocalStreamRef.current = stream;

      const room = new Room({ adaptiveStream: true, dynacast: true });

      room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        if (track.kind === "video") {
          console.log("[LIVEKIT] subscribed to screen video from", participant.identity);
          setRemoteScreenStream(new MediaStream([track.mediaStreamTrack]));
          setScreenSharedByName(participant.name || participant.identity);
          track.onMuted = () => {
            setRemoteScreenStream(null);
            setScreenSharedByName(null);
          };
        } else {
          const audio = document.createElement("audio");
          audio.srcObject = new MediaStream([track.mediaStreamTrack]);
          audio.autoplay = true;
          audio.setAttribute("data-participant", participant.identity);
          groupCallAudioContainerRef.current?.appendChild(audio);
        }
      });

      room.on(RoomEvent.TrackUnsubscribed, (track, publication, participant) => {
        const el = groupCallAudioContainerRef.current?.querySelector(
          `[data-participant="${participant.identity}"]`
        );
        if (el) {
          el.srcObject = null;
          el.remove();
        }
      });

      room.on(RoomEvent.ParticipantConnected, (participant) => {
        setGroupCallParticipants((prev) => ({
          ...prev,
          [participant.identity]: {
            identity: participant.identity,
            name: participant.name || participant.identity,
            isMuted: participant.isMuted || false,
          },
        }));
        if (notificationsEnabled && notificationPermission === "granted") {
          const name = participant.name || participant.identity;
          new Notification("QuadChat", {
            body: `${name} joined the group call`,
            icon: notificationIcon,
            tag: `group-join-${participant.identity}`,
          });
        }
      });

      room.on(RoomEvent.ParticipantDisconnected, (participant) => {
        setGroupCallParticipants((prev) => {
          const next = { ...prev };
          delete next[participant.identity];
          return next;
        });
        const el = groupCallAudioContainerRef.current?.querySelector(
          `[data-participant="${participant.identity}"]`
        );
        if (el) {
          el.srcObject = null;
          el.remove();
        }
        if (notificationsEnabled && notificationPermission === "granted") {
          const name = participant.name || participant.identity;
          new Notification("QuadChat", {
            body: `${name} left the group call`,
            icon: notificationIcon,
            tag: `group-leave-${participant.identity}`,
          });
        }
      });

      room.on(RoomEvent.AudioMuted, (participant) => {
        setGroupCallParticipants((prev) => {
          if (!prev[participant.identity]) return prev;
          return { ...prev, [participant.identity]: { ...prev[participant.identity], isMuted: true } };
        });
      });

      room.on(RoomEvent.AudioUnmuted, (participant) => {
        setGroupCallParticipants((prev) => {
          if (!prev[participant.identity]) return prev;
          return { ...prev, [participant.identity]: { ...prev[participant.identity], isMuted: false } };
        });
      });

      room.on(RoomEvent.ConnectionStateChanged, (state) => {
        if (state === "disconnected") {
          cleanupGroupCall();
        }
      });

      await room.connect(url, token);
      groupCallRoomRef.current = room;

      for (const track of stream.getAudioTracks()) {
        const pub = await room.localParticipant.publishTrack(track, { dtx: true });
        try {
          const sender = pub.track?.sender;
          if (sender) {
            const params = sender.getParameters();
            params.encodings = [{ maxBitrate: OPUS_BITRATE }];
            sender.setParameters(params);
          }
        } catch (_e) { /* some LiveKit versions ignore setParameters for audio */ }
      }

      const participants = {};
      (room.remoteParticipants || new Map()).forEach((p) => {
        participants[p.identity] = {
          identity: p.identity,
          name: p.name || p.identity,
          isMuted: p.isMuted || false,
        };
      });
      setGroupCallParticipants(participants);

      setGroupCallStatus("connected");
    } catch (e) {
      console.error("[GROUP-CALL] join error:", e);
      cleanupGroupCall();
      console.warn("LiveKit unavailable. Falling back to peer-to-peer group call.");
      joinP2PGroupCall();
    }
  }

  function leaveGroupCall() {
    if (p2pGroupCallStatus === "connected") {
      leaveP2PGroupCall();
      return;
    }
    cleanupGroupCall();
  }

  function toggleCallMute() {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        const muted = !audioTrack.enabled;
        console.log(`[CALL-MUTE] toggled: ${muted} isCaller=${isCallerRef.current} hasNode=${!!callNodeRef.current}`);
        setCallMuted(muted);
        if (callNodeRef.current) {
          const muteField = isCallerRef.current ? "callerMuted" : "calleeMuted";
          update(callNodeRef.current, { [muteField]: muted }).catch(() => {});
        }
      }
    }
  }

  async function toggleNotifications() {
    setError("");

    if (!("Notification" in window)) {
      setError("This browser does not support notifications.");
      return;
    }

    if (notificationsEnabled) {
      writeNotificationsEnabled(false);
      setNotificationsEnabled(false);
      setIsProfileMenuOpen(false);
      return;
    }

    const permission =
      Notification.permission === "default"
        ? await Notification.requestPermission()
        : Notification.permission;

    setNotificationPermission(permission);

    if (permission === "granted") {
      writeNotificationsEnabled(true);
      setNotificationsEnabled(true);
      setIsProfileMenuOpen(false);
    } else {
      writeNotificationsEnabled(false);
      setNotificationsEnabled(false);
      setError("Notifications are blocked in this browser.");
    }
  }

  async function signOut() {
    try {
      await signOutOfFirebase(auth);
      clearSessionUserId();
      setSessionUserId("");
      setMessage("");
      setError("");
    } catch (firebaseError) {
      setError(getAuthErrorMessage(firebaseError));
    }
  }

  function openSettings() {
    setSettingsName(activeName || "");
    setSettingsCurrentPassword("");
    setSettingsPassword("");
    setSettingsPhotoFile(null);
    if (settingsPhotoPreview) {
      URL.revokeObjectURL(settingsPhotoPreview);
    }
    setSettingsPhotoPreview("");
    setSettingsMessage("");
    setError("");
    setSettingsTab("account");
    setIsProfileMenuOpen(false);
    setIsSettingsOpen(true);
  }

  function handlePhotoFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    if (!file.type.startsWith("image/")) {
      setSettingsMessage("Profile picture must be an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setSettingsMessage("Profile picture must be under 5 MB.");
      return;
    }
    if (settingsPhotoPreview) {
      URL.revokeObjectURL(settingsPhotoPreview);
    }
    setSettingsPhotoFile(file);
    setSettingsPhotoPreview(URL.createObjectURL(file));
    setSettingsMessage("");
  }

  function clearPendingPhoto() {
    if (settingsPhotoPreview) {
      URL.revokeObjectURL(settingsPhotoPreview);
    }
    setSettingsPhotoFile(null);
    setSettingsPhotoPreview("");
  }

  async function uploadProfilePicture() {
    if (!user || !settingsPhotoFile) {
      return null;
    }
    setIsUploadingPhoto(true);
    setSettingsMessage("");
    try {
      const url = await uploadToCloudinary(settingsPhotoFile);
      await saveUserProfile(user, undefined, { photoURL: url, forcePhoto: true });
      await user.reload();
      setUser(auth.currentUser);
      clearPendingPhoto();
      setSettingsMessage("Profile picture updated.");
      return url;
    } catch (uploadError) {
      console.error(uploadError);
      setSettingsMessage(uploadError.message || "Profile picture upload failed.");
      return null;
    } finally {
      setIsUploadingPhoto(false);
    }
  }

  async function removeProfilePicture() {
    if (!user) {
      return;
    }
    const confirmed = window.confirm("Remove your profile picture?");
    if (!confirmed) {
      return;
    }
    setIsSavingSettings(true);
    setSettingsMessage("");
    try {
      await saveUserProfile(user, undefined, { photoURL: "", forcePhoto: true });
      await user.reload();
      setUser(auth.currentUser);
      setSettingsMessage("Profile picture removed.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  async function saveSettings(event) {
    event.preventDefault();
    const cleanName = settingsName.trim();
    const cleanCurrentPassword = settingsCurrentPassword.trim();
    const cleanPassword = settingsPassword.trim();

    if (!user || (!cleanName && !cleanPassword)) {
      return;
    }

    if (cleanName && hasUsernameSpaces(cleanName)) {
      setSettingsMessage("Usernames cannot contain spaces.");
      return;
    }

    if (cleanPassword && !cleanCurrentPassword && hasEmailProvider) {
      setSettingsMessage("Enter your current password to set a new password.");
      return;
    }

    setIsSavingSettings(true);
    setSettingsMessage("");
    setError("");

    try {
      if (cleanName && cleanName !== user.displayName) {
        await updateProfile(user, { displayName: cleanName });
      }
      if (cleanName) {
        await saveUserProfile(user, cleanName);
      }

      if (cleanPassword) {
        if (hasEmailProvider) {
          const credential = EmailAuthProvider.credential(
            user.email,
            cleanCurrentPassword
          );
          await reauthenticateWithCredential(user, credential);
        }
        await updatePassword(user, cleanPassword);
      }

      await user.reload();
      setUser(auth.currentUser);
      setSettingsCurrentPassword("");
      setSettingsPassword("");
      setSettingsMessage("Settings saved.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  async function toggleSignup() {
    if (!isCurrentUserAdmin) {
      return;
    }

    setSettingsMessage("");

    try {
      await setDoc(
        appSettingsRef,
        {
          signupEnabled: !appSettings.signupEnabled,
          updatedAt: serverTimestamp(),
          updatedBy: sessionUserId
        },
        { merge: true }
      );
    } catch (firebaseError) {
      setSettingsMessage(firebaseError.message);
    }
  }

  async function generateMagicLink() {
    if (!magicLinkEmail || !user) return;
    setIsGeneratingLink(true);
    setMagicLinkError("");
    setMagicLinkUrl("");
    try {
      const idToken = await user.getIdToken();
      const response = await fetch("/api/generate-magic-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify({
          email: magicLinkEmail,
          redirectUrl: window.location.origin
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setMagicLinkUrl(result.url);
    } catch (err) {
      setMagicLinkError(err.message || "Failed to generate magic link.");
    } finally {
      setIsGeneratingLink(false);
    }
  }

  function copyMagicLink() {
    navigator.clipboard.writeText(magicLinkUrl);
  }

  function handleEmailLinkSignIn(event) {
    event.preventDefault();
    setEmailLinkError("");
    const email = pendingEmailLinkEmail.trim();
    if (!email) return;

    signInWithEmailLink(auth, email, window.location.href)
      .then(() => {
        window.localStorage.removeItem("emailForSignIn");
        window.history.replaceState(null, "", window.location.pathname);
      })
      .catch((err) => {
        setEmailLinkError(err.message || "Sign-in failed. Check that this email matches the one the link was generated for.");
      });
  }

  async function removeAccount() {
    if (!user) {
      return;
    }

    const confirmed = window.confirm(
      "Remove this account? This cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    setIsSavingSettings(true);
    setSettingsMessage("");

    try {
      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);
      clearSessionUserId();
      setSessionUserId("");
      setIsSettingsOpen(false);
      setMessage("");
      setError("");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  function addPendingFiles(files) {
    const nextFiles = Array.from(files || []);

    if (nextFiles.length === 0) {
      return;
    }

    setError("");
    setPendingFiles((currentFiles) => {
      const availableSlots = maxAttachments - currentFiles.length;
      const acceptedFiles = nextFiles.slice(0, availableSlots);

      if (nextFiles.length > availableSlots) {
        setError(`You can attach up to ${maxAttachments} files at a time.`);
      }

      const validFiles = acceptedFiles.filter((file) => {
        if (file.size <= maxAttachmentBytes) {
          return true;
        }

        setError("Files must be 10 MB or smaller.");
        return false;
      });

      return [
        ...currentFiles,
        ...validFiles.map((file) => ({
          id: crypto.randomUUID(),
          file,
          previewUrl: getFilePreview(file)
        }))
      ];
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function removePendingFile(fileId) {
    setPendingFiles((currentFiles) => {
      const removedFile = currentFiles.find((file) => file.id === fileId);

      if (removedFile?.previewUrl) {
        URL.revokeObjectURL(removedFile.previewUrl);
      }

      return currentFiles.filter((file) => file.id !== fileId);
    });
  }

  function findCommandTargets(targetName) {
    const normalizedTarget = normalizeName(targetName);
    const allProfiles = Object.values(profiles);

    if (normalizedTarget === "everyone") {
      return allProfiles.filter((profile) => profile.id !== sessionUserId);
    }

    return allProfiles.filter((profile) => {
      const displayName = normalizeName(profile.displayName);
      const emailName = normalizeName(profile.email);
      const idName = normalizeName(profile.id);

      return (
        displayName === normalizedTarget ||
        emailName === normalizedTarget ||
        idName === normalizedTarget
      );
    });
  }

  async function runAdminCommand(cleanMessage) {
    const parts = cleanMessage.trim().split(/\s+/);
    const command = parts[0]?.toLowerCase();

    if (!["?mute", "?unmute", "?warn", "?unwarn"].includes(command)) {
      return null;
    }

    if (!isCurrentUserAdmin) {
      return null;
    }

    if (command === "?warn") {
      const match = cleanMessage.match(/^\?warn\s+(\S+)\s+"([^"]+)"\s+"([^"]+)"$/);
      if (!match) {
        setError('Use ?warn username "action" "reason" (username plain, action and reason in double quotes).');
        return { handled: true };
      }
      const targetName = match[1];
      const action = match[2].trim();
      const reason = match[3].trim();

      if (!action || !reason) {
        setError('Action and reason must not be empty.');
        return { handled: true };
      }

      const targets = findCommandTargets(targetName);
      if (targets.length === 0) {
        setError(`Could not find ${targetName}.`);
        return { handled: true };
      }

      await Promise.all(
        targets.map((target) =>
          setDoc(
            doc(db, "users", target.id),
            {
              warning: {
                action,
                reason,
                warnedBy: sessionUserId,
                warnedAt: serverTimestamp()
              }
            },
            { merge: true }
          )
        )
      );
      setError("");
      const name = getProfileName(targets[0], targetName);
      return {
        handled: false,
        metadata: {
          adminCommand: true,
          command,
          commandTarget: `${targetName}: ${action} — ${reason}`,
          notificationText: `⚠️ @${name} was warned — ${action}: ${reason}`,
          targetUserId: targets[0].id
        }
      };
    }

    if (command === "?unwarn") {
      const targetName = parts[1];
      if (!targetName) {
        setError("Use ?unwarn username.");
        return { handled: true };
      }
      const targets = findCommandTargets(targetName);
      if (targets.length === 0) {
        setError(`Could not find ${targetName}.`);
        return { handled: true };
      }
      await Promise.all(
        targets.map((target) =>
          setDoc(
            doc(db, "users", target.id),
            { warning: null },
            { merge: true }
          )
        )
      );
      setError("");
      const name = getProfileName(targets[0], targetName);
      return {
        handled: false,
        metadata: {
          adminCommand: true,
          command,
          commandTarget: targetName,
          notificationText: `⚠️ Warning removed for @${name}`,
          targetUserId: targets[0].id
        }
      };
    }

    const targetName = parts[1];

    if (!targetName) {
      setError("Use ?mute username, ?mute username -t 10m, or ?unmute username.");
      return { handled: true };
    }

    const targets = findCommandTargets(targetName);

    if (targets.length === 0) {
      setError(`Could not find ${targetName}.`);
      return { handled: true };
    }

    if (
      command === "?mute" &&
      targets.some((target) => target.isAdmin || isAdminEmail(target.email))
    ) {
      setError("cannot mute admins");
      return { handled: true };
    }

    if (command === "?unmute") {
      await Promise.all(
        targets.map((target) =>
          setDoc(
            doc(db, "users", target.id),
            {
              muted: false,
              mutedUntil: null,
              mutedBy: sessionUserId,
              mutedUpdatedAt: serverTimestamp()
            },
            { merge: true }
          )
        )
      );
      setError("");
      const name = getProfileName(targets[0], targetName);
      return {
        handled: false,
        metadata: {
          adminCommand: true,
          command,
          commandTarget: targetName,
          notificationText: `🔇 @${name} was unmuted`,
          targetUserId: targets[0].id
        }
      };
    }

    const timeFlagIndex = parts.findIndex((part) => part === "-t");
    const duration = timeFlagIndex >= 0 ? parseDuration(parts[timeFlagIndex + 1]) : null;
    const durationStr = timeFlagIndex >= 0 ? parts[timeFlagIndex + 1] : null;

    if (timeFlagIndex >= 0 && !duration) {
      setError("Use durations like 30s, 10m, 2h, or 1d.");
      return { handled: true };
    }

    await Promise.all(
      targets.map((target) =>
        setDoc(
          doc(db, "users", target.id),
          {
            muted: true,
            mutedUntil: duration
              ? Timestamp.fromDate(new Date(Date.now() + duration))
              : null,
            mutedBy: sessionUserId,
            mutedUpdatedAt: serverTimestamp()
          },
          { merge: true }
        )
      )
    );
    setError("");
    const name = getProfileName(targets[0], targetName);
    return {
      handled: false,
      metadata: {
        adminCommand: true,
        command,
        commandTarget: targetName,
        notificationText: `🔇 @${name} was muted${durationStr ? ` for ${durationStr}` : ''}`,
        targetUserId: targets[0].id
      }
    };
  }

  async function sendAudioRecording(blob) {
    const file = new File([blob], "Voice message.webm", {
      type: "audio/webm"
    });

    if (file.size > maxAttachmentBytes) {
      setError("Voice message is too large (max 10 MB).");
      return;
    }

    if (activeChannel === "updates" && !isCurrentUserDeveloper) {
      setError("Only developers can post in Updates.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const url = await uploadToCloudinary(file);
      if (isDmChannelId(activeChannel)) {
        await updateDmMetadata("🎤 Voice message");
      }
      await addDoc(messagesRef(activeChannel), {
        text: url,
        isFile: true,
        fileName: "Voice message.webm",
        fileType: "audio/webm",
        userId: sessionUserId,
        createdAt: serverTimestamp()
      });
    } catch (firebaseError) {
      console.error("QuadChat audio upload failed:", firebaseError);
      setError(
        firebaseError.code === "permission-denied"
          ? "Firestore rules blocked this upload."
          : firebaseError.message
      );
    } finally {
      setIsSending(false);
    }
  }

  function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError("Voice recording is not supported in this browser.");
      return;
    }

    setError("");
    recordingChunksRef.current = [];
    setRecordingDuration(0);
    setIsRecordingPaused(false);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
          ? "audio/webm;codecs=opus"
          : "audio/webm";
        const recorder = new MediaRecorder(stream, { mimeType });
        mediaRecorderRef.current = recorder;

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordingChunksRef.current.push(event.data);
          }
        };

        recorder.onstop = () => {
          const blob = new Blob(recordingChunksRef.current, {
            type: "audio/webm"
          });
          stream.getTracks().forEach((track) => track.stop());

          if (shouldSendRef.current) {
            sendAudioRecording(blob);
          }
        };

        recorder.onerror = () => {
          setError("Recording failed. Please try again.");
          setIsRecording(false);
          setIsRecordingPaused(false);
          stream.getTracks().forEach((track) => track.stop());
        };

        recorder.start(250);
        setIsRecording(true);

        recordingTimerRef.current = setInterval(() => {
          setRecordingDuration((prev) => prev + 1);
        }, 1000);
      })
      .catch(() => {
        setError(
          "Microphone access denied. Please allow microphone permissions."
        );
      });
  }

  function pauseRecording() {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.pause();
      setIsRecordingPaused(true);
      clearInterval(recordingTimerRef.current);
    }
  }

  function resumeRecording() {
    if (mediaRecorderRef.current?.state === "paused") {
      mediaRecorderRef.current.resume();
      setIsRecordingPaused(false);
      recordingTimerRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    }
  }

  function stopRecording(sendAfter = false) {
    if (
      mediaRecorderRef.current &&
      (mediaRecorderRef.current.state === "recording" ||
        mediaRecorderRef.current.state === "paused")
    ) {
      shouldSendRef.current = sendAfter;
      mediaRecorderRef.current.stop();
      clearInterval(recordingTimerRef.current);
    }

    setIsRecording(false);
    setIsRecordingPaused(false);
  }

  function cancelRecording() {
    stopRecording(false);
    setRecordingDuration(0);
  }

  async function loadMoreMessages() {
    if (isLoadingMoreRef.current || !hasMoreMessagesRef.current || !oldestDocSnapRef.current) return;

    isLoadingMoreRef.current = true;
    setIsLoadingMore(true);

    if (messagesContainerRef.current) {
      scrollSaveRef.current = {
        scrollTop: messagesContainerRef.current.scrollTop,
        scrollHeight: messagesContainerRef.current.scrollHeight
      };
    }

    try {
      const olderQuery = query(
          messagesRef(activeChannel),
          orderBy("createdAt", "desc"),
        startAfter(oldestDocSnapRef.current),
        limit(PAGE_SIZE)
      );

      const snapshot = await getDocs(olderQuery);

      if (snapshot.empty) {
        setHasMoreMessages(false);
        hasMoreMessagesRef.current = false;
        return;
      }

      const olderMsgs = snapshot.docs
        .reverse()
        .map((messageDoc) => ({
          id: messageDoc.id,
          ...messageDoc.data()
        }));

      setMessages((prev) => [...olderMsgs, ...prev]);
      oldestDocSnapRef.current = snapshot.docs[snapshot.docs.length - 1];
      const hasMore = snapshot.docs.length >= PAGE_SIZE;
      setHasMoreMessages(hasMore);
      hasMoreMessagesRef.current = hasMore;
    } catch (firebaseError) {
      setError(firebaseError.message);
    } finally {
      isLoadingMoreRef.current = false;
      setIsLoadingMore(false);
    }
  }

  async function handleRsvp(messageId, status, customText) {
    if (!sessionUserId || !activeChannel || !messageId) return;
    const ref = doc(db, "messages", activeChannel, "messages", messageId);
    if (!status) {
      await updateDoc(ref, { [`rsvps.${sessionUserId}`]: deleteField() });
      return;
    }
    await updateDoc(ref, {
      [`rsvps.${sessionUserId}`]: {
        name: activeName,
        status,
        customText: customText || "",
        updatedAt: serverTimestamp()
      }
    });
  }

  async function handleDeleteMessage(messageId) {
    const confirmed = window.confirm("Are you sure you want to delete this message?");
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "messages", activeChannel, "messages", messageId));
    } catch (firebaseError) {
      setError(firebaseError.message);
    }
  }

  async function sendMessage(event) {
    event.preventDefault();

    if (isRecording || isRecordingPaused) {
      stopRecording(true);
      return;
    }

    if (activeChannel === "updates" && !isCurrentUserDeveloper) {
      setError("Only developers can post in Updates.");
      return;
    }

    const cleanMessage = message.trim();
    const hasAttachments = pendingFiles.length > 0;

    if (
      (!cleanMessage && !hasAttachments) ||
      !activeName ||
      isSending ||
      !sessionUserId
    ) {
      return;
    }

    setIsSending(true);
    setError("");

    setDoc(doc(db, "users", sessionUserId), { lastOnline: serverTimestamp() }, { merge: true }).catch(() => {});

    try {
      const commandResult = await runAdminCommand(cleanMessage);

      if (commandResult?.handled) {
        return;
      }

      if (!isCurrentUserAdmin && isProfileMuted(currentProfile)) {
        setError(muteLabel || "You are muted.");
        return;
      }

      if (cleanMessage) {
        const messageText = commandResult?.metadata?.notificationText || cleanMessage;
        if (isDmChannelId(activeChannel)) {
          await updateDmMetadata(messageText);
        }
        await addDoc(messagesRef(activeChannel), {
          text: messageText,
          ...(commandResult?.metadata || {}),
          ...(replyTo && !commandResult?.metadata
            ? {
                replyTo: {
                  id: replyTo.id,
                  text: replyTo.text,
                  userId: replyTo.userId,
                  senderName: replyTo.senderName
                }
              }
            : {}),
          userId: sessionUserId,
          createdAt: serverTimestamp()
        });
      }

      for (const pendingFile of pendingFiles) {
        const url = await uploadToCloudinary(pendingFile.file);
        if (isDmChannelId(activeChannel)) {
          await updateDmMetadata(`📎 ${pendingFile.file.name}`);
        }
        await addDoc(messagesRef(activeChannel), {
          text: url,
          isFile: true,
          fileName: pendingFile.file.name,
          fileType: pendingFile.file.type || "application/octet-stream",
          userId: sessionUserId,
          createdAt: serverTimestamp()
        });
      }

      setMessage("");
      clearTimeout(typingTimeoutRef.current);
      if (sessionUserId && activeChannel) {
        remove(rtdbRef(rtdb, `typing/${activeChannel}/${sessionUserId}`)).catch(() => {});
      }
      setReplyTo(null);
      setPendingFiles((currentFiles) => {
        currentFiles.forEach((pendingFile) => {
          if (pendingFile.previewUrl) {
            URL.revokeObjectURL(pendingFile.previewUrl);
          }
        });

        return [];
      });
    } catch (firebaseError) {
      console.error("QuadChat message write failed:", firebaseError);
      setError(
        firebaseError.code === "permission-denied"
          ? "Firestore rules blocked this message write."
          : firebaseError.message
      );
    } finally {
      setIsSending(false);
    }
  }

  function handleComposerPaste(event) {
    const files = Array.from(event.clipboardData?.files || []);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      event.preventDefault();
      addPendingFiles(imageFiles);
    }
  }

  async function toggleUserMute(profile) {
    if (!isCurrentUserAdmin || !profile) return;

    const targetName = getProfileName(profile, profile.email || "");
    const isMuted = isProfileMuted(profile);

    try {
      if (isMuted) {
        await setDoc(
          doc(db, "users", profile.id),
          {
            muted: false,
            mutedUntil: null,
            mutedBy: sessionUserId,
            mutedUpdatedAt: serverTimestamp()
          },
          { merge: true }
        );
      } else {
        await setDoc(
          doc(db, "users", profile.id),
          {
            muted: true,
            mutedUntil: null,
            mutedBy: sessionUserId,
            mutedUpdatedAt: serverTimestamp()
          },
          { merge: true }
        );
      }

      const notificationText = isMuted
        ? `🔇 @${targetName} was unmuted`
        : `🔇 @${targetName} was muted`;

      await addDoc(messagesRef(activeChannel), {
        text: notificationText,
        adminCommand: true,
        command: isMuted ? "?unmute" : "?mute",
        commandTarget: targetName,
        notificationText,
        targetUserId: profile.id,
        userId: sessionUserId,
        createdAt: serverTimestamp()
      });
    } catch (firebaseError) {
      console.error("toggleUserMute failed:", firebaseError);
    }
  }

  return (
    <main className={`app-shell${isSettingsOpen && user ? " app-shell--settings" : ""}`}>
      {isSettingsOpen && user ? null : !isAuthReady ? (
        <section className="signin-panel" aria-label="Loading QuadChat">
          <div className="signin-brand">
            <div className="brand-mark" aria-hidden="true">
              <img src="/logo.png" alt="QuadChat" className="brand-logo" />
            </div>
            <div>
              <h1>QuadChat</h1>
              <p>Checking your session.</p>
            </div>
          </div>
        </section>
      ) : !user ? (
        <section className="signin-panel" aria-label="Sign in to QuadChat">
          <div className="signin-brand">
            <div className="brand-mark" aria-hidden="true">
              <img src="/logo.png" alt="QuadChat" className="brand-logo" />
            </div>
            <div>
              <h1>QuadChat</h1>
              {isSignInWithEmailLink(auth, window.location.href) ? (
                <p>Enter your email to complete sign-in with the magic link.</p>
              ) : (
                <p>
                  {authView === "signup"
                    ? "Create an account to start chatting."
                    : "Sign in to continue chatting."}
                </p>
              )}
            </div>
          </div>

          {isSignInWithEmailLink(auth, window.location.href) ? (
            <form className="signin-form" onSubmit={handleEmailLinkSignIn}>
              <label htmlFor="email-link-email">
                <UserRound size={18} />
                <span>Email</span>
              </label>
              <input
                id="email-link-email"
                type="email"
                value={pendingEmailLinkEmail}
                onChange={(event) => setPendingEmailLinkEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={120}
              />
              {emailLinkError ? <div className="error-banner inline-error">{emailLinkError}</div> : null}
              <button
                type="submit"
                disabled={!pendingEmailLinkEmail.trim()}
              >
                Sign in with magic link
              </button>
            </form>
          ) : (
            <>
              <div className="auth-tabs" role="tablist" aria-label="Authentication view">
                <button
                  className={authView === "signin" ? "active" : ""}
                  type="button"
                  onClick={() => {
                    setAuthView("signin");
                    setError("");
                  }}
                >
                  Sign in
                </button>
                {appSettings.signupEnabled ? (
                  <button
                    className={authView === "signup" ? "active" : ""}
                    type="button"
                    onClick={() => {
                      setAuthView("signup");
                      setError("");
                    }}
                  >
                    Sign up
                  </button>
                ) : null}
              </div>

              <form className="signin-form" onSubmit={handleAuth}>
                {authView === "signup" ? (
                  <>
                    <label htmlFor="signin-name">
                      <UserRound size={18} />
                      <span>Display name</span>
                    </label>
                    <input
                      id="signin-name"
                      type="text"
                      value={draftName}
                      onChange={(event) => setDraftName(event.target.value)}
                      placeholder="Username without spaces"
                      autoComplete="username"
                      maxLength={32}
                    />
                  </>
                ) : null}
                <label htmlFor="signin-email">
                  <UserRound size={18} />
                  <span>Email</span>
                </label>
                <input
                  id="signin-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={120}
                />
                <label htmlFor="signin-password">
                  <KeyRound size={18} />
                  <span>Password</span>
                </label>
                <input
                  id="signin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  maxLength={64}
                />
                {error ? <div className="error-banner inline-error">{error}</div> : null}
                <button
                  type="submit"
                  disabled={
                    !email.trim() ||
                    !password.trim() ||
                    (authView === "signup" && !draftName.trim())
                  }
                >
                  {authView === "signup" ? "Create account" : "Sign in"}
                </button>
              </form>

              <div className="auth-divider">
                <span>or</span>
              </div>

              <button
                className="google-button"
                type="button"
                onClick={signInWithGoogle}
              >
                <Chrome size={18} />
                <span>Continue with Google</span>
              </button>

              <div className="mode-note">
                <ShieldCheck size={18} />
                <span>Production mode: Firebase Authentication manages accounts.</span>
              </div>
            </>
          )}

          <div className="auth-footer-links">
            <a href="./privacy.html" rel="noopener noreferrer" target="_blank">
              Privacy Policy
            </a>
          </div>
        </section>
      ) : (
      <section className="chat-panel" aria-label="QuadChat room">
        <aside className="channel-sidebar" aria-label="Channels">
          <div
            className="channel-tabs"
            role="tablist"
            aria-label="Channels"
          >
            {CHANNELS.map((channel) => (
              <button
                aria-selected={activeChannel === channel.id}
                className={`channel-tab ${
                  activeChannel === channel.id ? "active" : ""
                }`}
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                role="tab"
                type="button"
                title={channel.label}
              >
                {channel.id === "group" ? (
                  <MessageCircle size={18} />
                ) : channel.id === "updates" ? (
                  <Megaphone size={18} />
                ) : (
                  <Lightbulb size={18} />
                )}
                <span>{channel.label}</span>
              </button>
            ))}
            <button
              className="channel-tab channel-tab-new-dm"
              type="button"
              onClick={() => setShowNewDm(true)}
              title="Start a private conversation"
            >
              <Plus size={18} />
              <span>New DM</span>
            </button>
            {dmChannels.length > 0 ? (
              <>
                <div className="dm-section-heading">Direct</div>
                {dmChannels.map((dm) => {
                  const partnerName = getDmPartnerName(dm, profiles, sessionUserId);
                  return (
                    <button
                      aria-selected={activeChannel === dm.id}
                      className={`channel-tab ${
                        activeChannel === dm.id ? "active" : ""
                      }`}
                      key={dm.id}
                      onClick={() => setActiveChannel(dm.id)}
                      role="tab"
                      type="button"
                      title={partnerName}
                    >
                      <span className="dm-tab-avatar">
                        {getInitials(partnerName)}
                      </span>
                      <span>{partnerName}</span>
                    </button>
                  );
                })}
              </>
            ) : null}
          </div>
        </aside>
        <div className="chat-main">
          <header className="chat-header">
          <div className="chat-title">
            <div className="brand-mark" aria-hidden="true">
              <MessageCircle size={26} strokeWidth={2.3} />
            </div>
            <div>
              <h1>{showVersionInHeader ? `QuadChat v${APP_VERSION}` : "QuadChat"}</h1>
              <p>
                Signed in as {activeName} · {messages.length} message
                {messages.length === 1 ? "" : "s"} in{" "}
                {activeChannelLabel}
              </p>
              {isCurrentUserDeveloper ? (
                <span className="admin-badge">Developer</span>
              ) : isCurrentUserAdmin ? (
                <span className="admin-badge">Admin</span>
              ) : null}
            </div>
          </div>
          {!isDmChannelId(activeChannel) ? (
          <button
            className={`icon-text-button ${groupCallStatus === "connected" || p2pGroupCallStatus === "connected" ? "group-call-active" : ""}`}
            type="button"
            onClick={groupCallStatus === "idle" && p2pGroupCallStatus === "idle" ? joinGroupCall : leaveGroupCall}
            title={groupCallStatus === "connected" ? "Leave group call" : p2pGroupCallStatus === "connected" ? "Leave group call" : groupCallStatus === "connecting" || p2pGroupCallStatus === "connecting" ? "Connecting..." : "Join group call"}
          >
            {groupCallStatus === "connected" || p2pGroupCallStatus === "connected" ? <PhoneOff size={18} /> : <Users size={18} />}
            <span>
              {groupCallStatus === "connected"
                ? `In call (${Object.keys(groupCallParticipants).length + 1})`
                : p2pGroupCallStatus === "connected"
                  ? `In call (${Object.keys(p2pGroupCallParticipants).length + 1})`
                  : groupCallStatus === "connecting" || p2pGroupCallStatus === "connecting"
                    ? "Connecting..."
                    : "Group call"}
            </span>
          </button>
          ) : null}
          <div className="notif-bell" ref={notificationPanelRef}>
            <button
              className="icon-text-button notif-bell-button"
              aria-label="Notifications"
              aria-expanded={isNotificationPanelOpen}
              type="button"
              onClick={() => setNotificationPanelOpen((isOpen) => !isOpen)}
              title="Notifications"
            >
              <Bell size={18} />
              <span>Notifications</span>
              {unreadNotificationCount > 0 ? (
                <span className="notif-badge">{unreadNotificationCount}</span>
              ) : null}
            </button>
            {isNotificationPanelOpen ? (
              <div className="notif-panel" aria-label="Notifications">
                <div className="notif-panel-header">
                  <strong>Notifications</strong>
                  {unreadNotificationCount > 0 ? (
                    <button type="button" onClick={markAllNotificationsRead}>
                      <CheckCheck size={14} />
                      <span>Mark all read</span>
                    </button>
                  ) : null}
                </div>
                {inAppNotifications.length === 0 ? (
                  <div className="notif-empty">No notifications yet.</div>
                ) : (
                  inAppNotifications.map((notification) => (
                    <button
                      className={`notif-item ${notification.read ? "" : "notif-item-unread"}`}
                      key={notification.id}
                      type="button"
                      onClick={() => openNotification(notification)}
                    >
                      <span className={`notif-item-icon notif-item-icon-${notification.type}`}>
                        {notification.type === "call" ? (
                          <Phone size={15} />
                        ) : notification.type === "mention" ? (
                          <MessageCircle size={15} />
                        ) : (
                          <Users size={15} />
                        )}
                      </span>
                      <span className="notif-item-text">
                        <strong>{notification.channelLabel || notification.senderName}</strong>
                        <span>
                          {notification.type === "call"
                            ? `${notification.senderName} ${notification.body}`
                            : `${notification.senderName}: ${notification.body}`}
                        </span>
                        <small>{timeAgo(notification.createdAt)}</small>
                      </span>
                    </button>
                  ))
                )}
              </div>
            ) : null}
          </div>
          <button
            className="icon-text-button"
            type="button"
            onClick={signOut}
            title="Sign out"
          >
            <LogOut size={18} />
            <span>Sign out</span>
          </button>
          <div className="profile-actions">
            <div className="avatar-wrapper">
              <button
                className="avatar-button"
                type="button"
                onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
                title="Profile options"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <span>{getInitials(activeName)}</span>
                )}
              </button>
              <span className="avatar-status-dot" style={{ background: getStatusColor(currentProfile?.status?.mode || "active") }} />
            </div>
            {isProfileMenuOpen ? (
              <div className="profile-menu">
                <button type="button" onClick={() => { setIsProfileMenuOpen(false); setStatusModalOpen(true); }}>
                  <Clock size={17} />
                  <span>Set status</span>
                </button>
                <button type="button" onClick={openSettings}>
                  <Settings size={17} />
                  <span>Settings</span>
                </button>
                <button type="button" onClick={() => setIsDarkTheme((prev) => !prev)}>
                  {isDarkTheme ? <Sun size={17} /> : <Moon size={17} />}
                  <span>{isDarkTheme ? "Light mode" : "Dark mode"}</span>
                </button>
                <button type="button" onClick={toggleNotifications}>
                  {notificationsEnabled ? (
                    <BellOff size={17} />
                  ) : (
                    <Bell size={17} />
                  )}
                  <span>
                    {notificationsEnabled
                      ? "Disable notifications"
                      : "Enable notifications"}
                  </span>
                </button>
                <button type="button" onClick={signOut}>
                  <LogOut size={17} />
                  <span>Sign out</span>
                </button>
              </div>
            ) : null}
          </div>
        </header>

        {error ? <div className="error-banner">{error}</div> : null}
        {muteLabel ? <div className="error-banner">{muteLabel}</div> : null}
        {warningLabel ? <div className="error-banner warning-banner">{warningLabel}</div> : null}

        {screenShareRequest ? (
          <div className="screen-share-request">
            <span>{screenShareRequest.name} wants to share their screen. Stop sharing and let them share instead?</span>
            <div className="screen-share-request-actions">
              <button className="call-action-btn" type="button" onClick={() => {
                clearTimeout(screenShareRequestTimerRef.current);
                setScreenShareRequest(null);
                stopScreenShare();
              }}>
                Stop sharing
              </button>
            </div>
          </div>
        ) : null}

        {statusModalOpen ? (
          <div className="modal-backdrop" onClick={() => setStatusModalOpen(false)}>
            <div className="status-modal" onClick={(e) => e.stopPropagation()}>
              <div className="status-modal-header">
                <Clock size={18} />
                <span>Set status</span>
                <button className="modal-close" type="button" onClick={() => setStatusModalOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className="status-picker">
                {["active", "busy", "away"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    className={`status-option ${editStatus.mode === mode ? "selected" : ""}`}
                    onClick={() => setEditStatus((s) => ({ ...s, mode }))}
                  >
                    <span className="status-dot" style={{ background: getStatusColor(mode) }} />
                    <span>{getStatusLabel(mode)}</span>
                  </button>
                ))}
              </div>

              <input
                className="status-text-input"
                type="text"
                placeholder="What's your status?"
                value={editStatus.text}
                onChange={(e) => setEditStatus((s) => ({ ...s, text: e.target.value }))}
                maxLength={80}
              />

              <details className="status-schedule-details">
                <summary>Schedule busy time</summary>
                <div className="status-schedule-form">
                  <label>
                    From
                    <input
                      type="datetime-local"
                      value={editStatus.scheduleStart || ""}
                      onChange={(e) => setEditStatus((s) => ({ ...s, scheduleStart: e.target.value }))}
                    />
                  </label>
                  <label>
                    To
                    <input
                      type="datetime-local"
                      value={editStatus.scheduleEnd || ""}
                      onChange={(e) => setEditStatus((s) => ({ ...s, scheduleEnd: e.target.value }))}
                    />
                  </label>
                  <button
                    type="button"
                    className="add-schedule-btn"
                    disabled={!editStatus.scheduleStart || !editStatus.scheduleEnd}
                    onClick={() => {
                      if (!editStatus.scheduleStart || !editStatus.scheduleEnd) return;
                      const start = new Date(editStatus.scheduleStart);
                      const end = new Date(editStatus.scheduleEnd);
                      if (end <= start) return;
                      setScheduledBusy((prev) => {
                        const all = [...prev, { start, end }].sort((a, b) => a.start - b.start);
                        const merged = [all[0]];
                        for (let i = 1; i < all.length; i++) {
                          const last = merged[merged.length - 1];
                          const cur = all[i];
                          if (cur.start <= last.end) {
                            if (cur.end > last.end) last.end = cur.end;
                          } else {
                            merged.push(cur);
                          }
                        }
                        return merged;
                      });
                      setEditStatus((s) => ({ ...s, scheduleStart: "", scheduleEnd: "" }));
                    }}
                  >
                    Add
                  </button>
                </div>
                {scheduledBusy.length > 0 ? (
                  <div className="scheduled-list">
                    {scheduledBusy.map((s, i) => (
                      <div key={i} className="scheduled-item">
                        <span>
                          {s.start.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                          {" — "}
                          {s.end.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                        </span>
                        <button type="button" className="remove-schedule-btn" onClick={() => setScheduledBusy((prev) => prev.filter((_, j) => j !== i))}>
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </details>

              <div className="status-modal-actions">
                <button
                  type="button"
                  className="save-status-btn"
                  onClick={async () => {
                    const scheduled = scheduledBusy.map((s) => ({
                      start: Timestamp.fromDate(s.start),
                      end: Timestamp.fromDate(s.end)
                    }));
                    await setDoc(
                      doc(db, "users", sessionUserId),
                      { status: { mode: editStatus.mode, text: editStatus.text, scheduledBusy: scheduled } },
                      { merge: true }
                    );
                    setStatusModalOpen(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {showNewDm ? (
          <div className="modal-backdrop" onClick={() => setShowNewDm(false)}>
            <div className="status-modal" onClick={(e) => e.stopPropagation()}>
              <div className="status-modal-header">
                <MessageCircle size={18} />
                <span>Start a conversation</span>
                <button className="modal-close" type="button" onClick={() => setShowNewDm(false)}>
                  <X size={18} />
                </button>
              </div>
              <div className="new-dm-list">
                {Object.values(profiles)
                  .filter((profile) => profile.id !== sessionUserId)
                  .map((profile) => {
                    const name = getProfileName(profile, profile.email || "Unknown");
                    return (
                      <button
                        className="new-dm-user"
                        key={profile.id}
                        type="button"
                        onClick={() => {
                          openDm(profile.id);
                          setShowNewDm(false);
                        }}
                      >
                        <span className="new-dm-avatar">{getInitials(name)}</span>
                        <span>{name}</span>
                      </button>
                    );
                  })}
                {Object.keys(profiles).filter((id) => id !== sessionUserId).length === 0 ? (
                  <p className="new-dm-empty">No other users yet.</p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        {analyticsTarget ? (
          <div className="modal-backdrop" onClick={() => { setAnalyticsTarget(null); setAnalyticsData(null); }}>
            <div className="analytics-modal" onClick={(e) => e.stopPropagation()}>
              <div className="analytics-modal-header">
                <UserRound size={18} />
                <span>{getProfileName(analyticsTarget, analyticsTarget.email || "")}</span>
                <button className="modal-close" type="button" onClick={() => { setAnalyticsTarget(null); setAnalyticsData(null); }}>
                  <X size={18} />
                </button>
              </div>
              {analyticsTarget.status?.mode === "busy" || analyticsTarget.status?.mode === "away" ? (
                <div className="analytics-status-note">
                  {analyticsTarget.status.mode === "busy" ? "⚠️" : "🟡"} Currently <strong>{getStatusLabel(analyticsTarget.status.mode)}</strong>
                  {analyticsTarget.status.text ? ` — ${analyticsTarget.status.text}` : ""}
                </div>
              ) : null}
              <div className="analytics-body">
                {analyticsLoading ? (
                  <p className="analytics-loading">Loading...</p>
                ) : analyticsData ? (
                  <>
                    <div className="analytics-stat">
                      <span className="analytics-stat-label">Active days (30d)</span>
                      <span className="analytics-stat-value">{analyticsData.days}</span>
                    </div>
                    <div className="analytics-stat">
                      <span className="analytics-stat-label">Sessions tracked</span>
                      <span className="analytics-stat-value">{analyticsData.sessionCount}</span>
                    </div>
                    <div className="analytics-stat">
                      <span className="analytics-stat-label">Avg time per day</span>
                      <span className="analytics-stat-value">
                        {analyticsData.avgPlayTime > 0
                          ? `${Math.floor(analyticsData.avgPlayTime / 3600000)}h ${Math.round((analyticsData.avgPlayTime % 3600000) / 60000)}m`
                          : "—"}
                      </span>
                    </div>
                    <div className="analytics-stat">
                      <span className="analytics-stat-label">Best times to catch them</span>
                      <span className="analytics-stat-value analytics-top-hours">
                        {analyticsData.top3.length > 0
                          ? analyticsData.top3.join(" · ")
                          : "Not enough data"}
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="analytics-loading">No data available.</p>
                )}
              </div>
            </div>
          </div>
        ) : null}

        {incomingCall ? (
          <div className="modal-backdrop">
            <div className="incoming-call">
              <PhoneIncoming size={36} />
              <p><strong>{incomingCall.callerName}</strong> is calling...</p>
              <div className="incoming-call-actions">
                <button className="danger-button" type="button" onClick={rejectCall}>
                  <PhoneOff size={18} />
                  <span>Decline</span>
                </button>
                <button className="save-status-btn" type="button" onClick={answerCall}>
                  <Phone size={18} />
                  <span>Answer</span>
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {callStatus === "connected" || callStatus === "calling" ? (
          <div className="active-call-bar">
            <audio ref={remoteAudioRef} autoPlay />
            <div className="active-call-info">
              <Phone size={15} />
              <span>{callStatus === "calling" ? "Calling" : "On call with"} <strong>{callPartnerName}</strong></span>
            </div>
            <div className="active-call-actions">
              {remoteMuted ? <MicOff size={14} className="remote-muted-icon" title="Other party is muted" /> : null}
              {remoteScreenStream && !isSharingScreen ? (
                <button className="call-action-btn" type="button" onClick={() => setViewingScreen(!viewingScreen)} title={viewingScreen ? "Back to chat" : "View screen"}>
                  {viewingScreen ? <MessageCircle size={16} /> : <Monitor size={16} />}
                </button>
              ) : null}
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleCallMute}
                title={callMuted ? "Unmute" : "Mute"}
              >
                {callMuted ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleScreenShare}
                title={isSharingScreen ? "Stop sharing" : "Share screen"}
              >
                {isSharingScreen ? <MonitorOff size={16} /> : <Monitor size={16} />}
              </button>
              <button className="call-action-btn call-end-btn" type="button" onClick={hangUp} title="End call">
                <PhoneOff size={16} />
              </button>
            </div>
          </div>
        ) : null}

        {groupCallStatus === "connected" ? (
          <div className="active-call-bar group-call-bar">
            <div ref={groupCallAudioContainerRef} style={{ display: "none" }} />
            <div className="active-call-info">
              <Users size={15} />
              <span>Group call — <strong>{Object.keys(groupCallParticipants).length + 1}</strong> participant{Object.keys(groupCallParticipants).length + 1 === 1 ? "" : "s"}</span>
            </div>
            <div className="active-call-actions">
              {remoteScreenStream && !isSharingScreen ? (
                <button className="call-action-btn" type="button" onClick={() => setViewingScreen(!viewingScreen)} title={viewingScreen ? "Back to chat" : "View screen"}>
                  {viewingScreen ? <MessageCircle size={16} /> : <Monitor size={16} />}
                </button>
              ) : null}
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleGroupCallMute}
                title={groupCallLocalMuted ? "Unmute" : "Mute"}
              >
                {groupCallLocalMuted ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleScreenShare}
                title={isSharingScreen ? "Stop sharing" : "Share screen"}
              >
                {isSharingScreen ? <MonitorOff size={16} /> : <Monitor size={16} />}
              </button>
              <button className="call-action-btn call-end-btn" type="button" onClick={leaveGroupCall} title="Leave group call">
                <PhoneOff size={16} />
              </button>
            </div>
          </div>
        ) : p2pGroupCallStatus === "connected" ? (
          <div className="active-call-bar group-call-bar">
            <div ref={p2pGroupCallAudioContainerRef} style={{ display: "none" }} />
            <div className="active-call-info">
              <Users size={15} />
              {p2pGroupCallHostId ? <span className="p2p-call-host-indicator" title="P2P host">📡</span> : null}
              <span>Group call — <strong>{Object.keys(p2pGroupCallParticipants).length + 1}</strong> participant{Object.keys(p2pGroupCallParticipants).length + 1 === 1 ? "" : "s"}</span>
            </div>
            <div className="active-call-actions">
              {remoteScreenStream && !isSharingScreen ? (
                <button className="call-action-btn" type="button" onClick={() => setViewingScreen(!viewingScreen)} title={viewingScreen ? "Back to chat" : "View screen"}>
                  {viewingScreen ? <MessageCircle size={16} /> : <Monitor size={16} />}
                </button>
              ) : null}
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleP2PGroupCallMute}
                title={p2pGroupCallLocalMuted ? "Unmute" : "Mute"}
              >
                {p2pGroupCallLocalMuted ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleScreenShare}
                title={isSharingScreen ? "Stop sharing" : "Share screen"}
              >
                {isSharingScreen ? <MonitorOff size={16} /> : <Monitor size={16} />}
              </button>
              <button className="call-action-btn call-end-btn" type="button" onClick={leaveP2PGroupCall} title="Leave group call">
                <PhoneOff size={16} />
              </button>
            </div>
          </div>
        ) : null}

        <div className="chat-body">
          {viewingScreen && remoteScreenStream ? (
            <div className="screen-view-container">
              <div className="screen-view-header">
                <span>{screenSharedByName ? `${screenSharedByName}'s screen` : "Screen share"}</span>
                <button className="screen-view-close-btn" type="button" onClick={() => setViewingScreen(false)}>
                  Back to chat
                </button>
              </div>
              <video ref={screenVideoRef} className="screen-view-video" autoPlay playsInline />
            </div>
          ) : (
          <div className="messages" ref={messagesContainerRef} role="log" aria-live="polite">
            {activeChannel === "suggestions" ? (
              <div className="channel-description">
                <Lightbulb size={16} />
                <span>
                  Share what you'd like to see in the next update. Anyone
                  can post suggestions here.
                </span>
              </div>
            ) : activeChannel === "updates" ? (
              <div className="channel-description">
                <Megaphone size={16} />
                <span>
                  {isCurrentUserDeveloper
                    ? "You're a developer — post announcements and release notes here for everyone to read."
                    : "Read official updates from the developer here. Only developers can post."}
                </span>
              </div>
            ) : null}
            {messages.length === 0 && !isLoadingMore ? (
              <div className="empty-state">
                <MessageCircle size={42} />
                <p>
                  {activeChannel === "updates"
                    ? "No updates yet."
                    : activeChannel === "suggestions"
                      ? "No suggestions yet. Be the first!"
                      : isDmChannelId(activeChannel)
                        ? `This is the beginning of your private conversation with ${dmPartnerName}.`
                        : "No messages yet. Say hello when you are ready."}
                </p>
              </div>
            ) : (
              <>
                {isLoadingMore ? (
                  <div className="loading-more">Loading older messages...</div>
                ) : null}
                {hasMoreMessages && !isLoadingMore ? (
                  <div className="sentinel" ref={sentinelRef} />
                ) : null}
                {messages.map((item, index) => {
                  const senderProfile = profiles[item.userId];
                  const senderName = getProfileName(senderProfile, item.name);
                  const isMine = item.userId === sessionUserId;
                  const isMenuOpen = openMessageMenuId === item.id;
                  const previous = index > 0 ? messages[index - 1] : null;
                  const showDaySeparator =
                    !previous ||
                    (previous.createdAt?.toDate
                      ? dayKey(previous.createdAt.toDate()) !==
                        dayKey(item.createdAt?.toDate())
                      : false);

                  return (
                    <Fragment key={item.id}>
                      {showDaySeparator ? (
                        <div className="day-separator">
                          {formatDayLabel(item.createdAt)}
                        </div>
                      ) : null}
                      <article
                        className={`message ${isMine ? "message-mine" : ""}`}
                      >
                      <div className="message-meta">
                        <strong>{senderName}</strong>
                        <span>{formatTime(item.createdAt)}</span>
                      </div>
                      <div className="message-actions">
                        <button
                          aria-expanded={isMenuOpen}
                          aria-label="Message options"
                          className="message-menu-button"
                          onClick={() =>
                            setOpenMessageMenuId(isMenuOpen ? "" : item.id)
                          }
                          title="Message options"
                          type="button"
                        >
                          <MoreVertical size={16} />
                        </button>
                        {isMenuOpen ? (
                          <div className="message-menu">
                            <button
                              onClick={() => {
                                setReplyTo({
                                  id: item.id,
                                  text: getReplyPreview(item.text),
                                  userId: item.userId,
                                  senderName
                                });
                                setOpenMessageMenuId("");
                              }}
                              type="button"
                            >
                              <CornerDownLeft size={16} />
                              <span>Reply</span>
                            </button>
                            {(isMine || isCurrentUserAdmin) ? (
                              <button
                                onClick={() => {
                                  setOpenMessageMenuId("");
                                  handleDeleteMessage(item.id);
                                }}
                                type="button"
                                className="danger-button"
                              >
                                <Trash2 size={16} />
                                <span>Delete</span>
                              </button>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                      {item.replyTo && typeof item.replyTo === "object" ? (
                        <div className="reply-card">
                          <strong>{item.replyTo.senderName || "Unknown"}</strong>
                          <span>{item.replyTo.text || "Message unavailable"}</span>
                        </div>
                      ) : null}
                      {item.isFile ? (
                        typeof item.fileType === "string" && item.fileType.startsWith("video/") ? (
                          <video
                            controls
                            className="message-video"
                          >
                            <source
                              src={safeUrl(item.text)}
                              type={item.fileType}
                            />
                          </video>
                        ) : typeof item.fileType === "string" && item.fileType.startsWith("audio/") ? (
                          <audio
                            controls
                            className="message-audio"
                            src={safeUrl(item.text)}
                          >
                            <source
                              src={safeUrl(item.text)}
                              type={item.fileType}
                            />
                          </audio>
                        ) : (
                          <a
                            className="message-image-link"
                            href={safeUrl(item.text)}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              src={safeUrl(item.text)}
                              alt={item.fileName || "Uploaded image"}
                            />
                          </a>
                        )
                      ) : item.type === "game_session_card" ? (
                        <GameSessionCard data={item} sessionUserId={sessionUserId} sessionUserName={activeName} onRsvp={(status, customText) => handleRsvp(item.id, status, customText)} onJoinGroupCall={joinGroupCall} />
                      ) : typeof item.text === "string" && item.text ? (
                        <p>
                          {renderMessageText(item.text, profiles, item.adminCommand, sessionUserId, item.targetUserId)}
                        </p>
                      ) : null}
                      {Array.isArray(item.attachments) && item.attachments.length > 0 ? (
                        <div className="message-attachments">
                          {item.attachments.map((attachment) =>
                            attachment && typeof attachment.type === "string" && attachment.type.startsWith("image/") ? (
                              <a
                                className="message-image-link"
                                href={safeUrl(attachment.url)}
                                key={attachment.path || attachment.url}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <img src={safeUrl(attachment.url)} alt={attachment.name} />
                              </a>
                            ) : attachment && typeof attachment.type === "string" && attachment.type.startsWith("video/") ? (
                              <video
                                controls
                                className="message-video"
                                key={attachment.path || attachment.url}
                              >
                                <source
                                  src={safeUrl(attachment.url)}
                                  type={attachment.type}
                                />
                              </video>
                            ) : (
                              <a
                                className="message-file-link"
                                href={safeUrl(attachment?.viewUrl || attachment?.url)}
                                key={attachment?.path || attachment?.url}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FileText size={18} />
                                <span>{attachment?.name}</span>
                              </a>
                            )
                          )}
                        </div>
                      ) : null}
                      </article>
                    </Fragment>
                  );
                })}
                {Object.keys(typingUsers).length > 0 && (
                  <div className="typing-indicator">
                    <span className="typing-text">
                      {Object.values(typingUsers).join(", ")} {Object.keys(typingUsers).length === 1 ? "is" : "are"} typing
                    </span>
                    <span className="typing-dots">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </span>
                  </div>
                )}
                <div ref={endRef} />
              </>
            )}
          </div>
          )}
          <aside className="users-sidebar">
            <div className="users-sidebar-header">
              <Users size={16} />
              <span>Users</span>
            </div>
            <div className="users-sidebar-list">
              {Object.values(profiles).map((profile) => {
                const name = getProfileName(profile, profile.email || "");
                const muted = isProfileMuted(profile);
                const theirMode = profile.status?.mode;
                const isSelf = profile.id === sessionUserId;
                const staleOnline = isRecentlyOnline(profile.lastOnline);
                const userActive = isSelf || onlineUsers.has(profile.id) || staleOnline;
                const statusMode = userActive ? "active" : (theirMode === "busy" || theirMode === "away" ? theirMode : "offline");
                return (
                  <div
                    className={`user-item ${userActive ? "online" : ""}`}
                    key={profile.id}
                  >
                    <span className="user-dot" style={statusMode !== "offline" ? { background: getStatusColor(statusMode) } : undefined} />
                    <div className="user-info">
                      <button
                        className="user-name"
                        type="button"
                        onClick={() => openUserAnalytics(profile)}
                      >
                        {name}
                        {profile.status?.text ? (
                          <span className="user-status-text" title={profile.status.text}>{profile.status.text}</span>
                        ) : null}
                        {(groupCallStatus === "connected" && groupCallParticipants[profile.id]) ||
                        (p2pGroupCallStatus === "connected" && p2pGroupCallParticipants[profile.id]) ? (
                          <span className="group-call-indicator" title="In group call">
                            <Users size={11} />
                          </span>
                        ) : null}
                      </button>
                      <span className="user-last-online">
                        {userActive ? "" : profile.lastOnline ? getRelativeTime(profile.lastOnline) : "unmeasured"}
                      </span>
                    </div>
                    {profile.id !== sessionUserId ? (
                      <button
                        className="user-dm-btn"
                        type="button"
                        onClick={() => openDm(profile.id)}
                        title={`Message ${name}`}
                      >
                        <MessageCircle size={10} />
                      </button>
                    ) : null}
                    {profile.id !== sessionUserId && userActive && callStatus === "idle" ? (
                      <button
                        className="user-call-btn"
                        type="button"
                        onClick={() => startCall(profile.id, name)}
                        title={`Call ${name}`}
                      >
                        <Phone size={10} />
                      </button>
                    ) : null}
                    {isCurrentUserAdmin ? (
                      <button
                        className="user-mic-btn"
                        type="button"
                        onClick={() => toggleUserMute(profile)}
                        title={muted ? `Unmute ${name}` : `Mute ${name}`}
                      >
                        {muted ? (
                          <MicOff
                            aria-label={`${name} is muted`}
                            className="user-mic user-mic-muted"
                            size={12}
                          />
                        ) : (
                          <Mic
                            aria-label={`${name} can speak`}
                            className="user-mic"
                            size={12}
                          />
                        )}
                      </button>
                    ) : muted ? (
                      <MicOff
                        aria-label={`${name} is muted`}
                        className="user-mic user-mic-muted"
                        size={12}
                      />
                    ) : (
                      <Mic
                        aria-label={`${name} can speak`}
                        className="user-mic"
                        size={12}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="commit-fineprint">commit {__COMMIT_HASH__}</div>
          </aside>
        </div>

        <form className="composer" onSubmit={sendMessage}>
          {replyTo ? (
            <div className="reply-composer">
              <div className="reply-composer-text">
                <strong>Replying to {replyTo.senderName}</strong>
                <span>{replyTo.text}</span>
              </div>
              <button
                aria-label="Cancel reply"
                onClick={() => setReplyTo(null)}
                title="Cancel reply"
                type="button"
              >
                <X size={16} />
              </button>
            </div>
          ) : null}
          {pendingFiles.length > 0 ? (
            <div className="attachment-preview-list">
              {pendingFiles.map((pendingFile) => (
                <div className="attachment-preview" key={pendingFile.id}>
                  {pendingFile.previewUrl ? (
                    pendingFile.file.type.startsWith("video/") ? (
                      <Film size={18} />
                    ) : (
                      <img src={pendingFile.previewUrl} alt="" />
                    )
                  ) : (
                    <FileText size={22} />
                  )}
                  <span>{pendingFile.file.name}</span>
                  <button
                    aria-label={`Remove ${pendingFile.file.name}`}
                    onClick={() => removePendingFile(pendingFile.id)}
                    title="Remove file"
                    type="button"
                  >
                    <X size={15} />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
          <div
            className={`composer-row${isRecording || isRecordingPaused ? " composer-row--recording" : ""}${supportsRecording ? "" : " composer-row--no-mic"}`}
          >
            {isRecording || isRecordingPaused ? (
              <button
                type="button"
                className="recording-cancel-btn"
                onClick={cancelRecording}
                title="Delete recording"
                aria-label="Delete recording"
                disabled={isSending}
              >
                <Trash2 size={20} />
              </button>
            ) : (
              <>
              <div className="attach-wrapper" ref={attachMenuRef}>
                <button
                  aria-label="Attach files"
                  className="attach-button"
                  onClick={() => setShowAttachMenu((prev) => !prev)}
                  title="Attach files"
                  type="button"
                  disabled={
                    pendingFiles.length >= maxAttachments ||
                    isSending ||
                    !canPostInActiveChannel
                  }
                >
                  <Plus size={22} />
                </button>
                {showAttachMenu && (
                  <div className="attach-menu">
                    <button
                      type="button"
                      onClick={() => {
                        fileInputRef.current.accept = "image/*,video/*";
                        fileInputRef.current.click();
                        setShowAttachMenu(false);
                      }}
                    >
                      <Image size={20} />
                      <span>Photos &amp; Videos</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        fileInputRef.current.accept = "";
                        fileInputRef.current.click();
                        setShowAttachMenu(false);
                      }}
                    >
                      <FileText size={20} />
                      <span>Document</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAttachMenu(false);
                        setGamingPostCard({
                          type: "game_session_card",
                          title: "Bloxd.io Session",
                          googleMeetLink: "",
                          note: "Grab your snacks. We're launching the custom lobby code directly inside the Meet chat as soon as everyone drops in. Don't be late! 🚀",
                          tableData: {
                            headers: ["Details", "Information"],
                            rows: [
                              { label: "📅 When", detail: "Tonight around 7:30 PM-ish" },
                              { label: "🎮 Mode", detail: "Custom Bedwars / Parkour" }
                            ]
                          }
                        });
                        setShowGamingPost(true);
                      }}
                    >
                      <Gamepad2 size={20} />
                      <span>Gaming Post</span>
                    </button>
                  </div>
                )}
              </div>
                {supportsRecording ? (
                  <button
                    aria-label="Record voice message"
                    className="mic-button"
                    onClick={startRecording}
                    title="Record voice message"
                    type="button"
                    disabled={isSending || !canPostInActiveChannel}
                  >
                    <Mic size={22} />
                  </button>
                ) : null}
              </>
            )}
            <input
              ref={fileInputRef}
              className="file-input"
              type="file"
              multiple
              onChange={(event) => addPendingFiles(event.target.files)}
            />
            {isRecording || isRecordingPaused ? (
              <div className="recording-bar">
                <span className="recording-dot" />
                <span className="recording-timer">
                  {formatDuration(recordingDuration)}
                </span>
                <button
                  type="button"
                  className="recording-pause-btn"
                  onClick={
                    isRecordingPaused ? resumeRecording : pauseRecording
                  }
                  title={
                    isRecordingPaused
                      ? "Resume recording"
                      : "Pause recording"
                  }
                  aria-label={
                    isRecordingPaused
                      ? "Resume recording"
                      : "Pause recording"
                  }
                >
                  {isRecordingPaused ? (
                    <Play size={18} />
                  ) : (
                    <Pause size={18} />
                  )}
                </button>
              </div>
            ) : (
              <input
                type="text"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  if (!sessionUserId || !activeChannel) return;
                  const now = Date.now();
                  clearTimeout(typingTimeoutRef.current);
                  typingTimeoutRef.current = setTimeout(() => {
                    remove(rtdbRef(rtdb, `typing/${activeChannel}/${sessionUserId}`)).catch(() => {});
                  }, 3000);
                  if (now - typingLastWriteRef.current < 2000) return;
                  typingLastWriteRef.current = now;
                  set(rtdbRef(rtdb, `typing/${activeChannel}/${sessionUserId}`), { isTyping: true, name: activeName, timestamp: now }).catch(() => {});
                }}
                onPaste={handleComposerPaste}
                placeholder={
                  isDmChannelId(activeChannel)
                    ? `Message ${dmPartnerName}`
                    : "Type a message"
                }
                maxLength={500}
              />
            )}
            <button
              type="submit"
              aria-label="Send message"
              title="Send message"
              disabled={
                (!message.trim() &&
                  pendingFiles.length === 0 &&
                  !isRecording &&
                  !isRecordingPaused) ||
                !activeName ||
                isSending ||
                !sessionUserId ||
                (!isCurrentUserAdmin && isProfileMuted(currentProfile)) ||
                !canPostInActiveChannel
              }
            >
              <Send size={20} />
            </button>
          </div>
        </form>
        </div>
      </section>
      )}
      {isSettingsOpen && user ? (
        <div className="settings-page">
          <button
            className="settings-close-btn"
            type="button"
            onClick={() => setIsSettingsOpen(false)}
          >
            <X size={20} />
          </button>
          <div className="settings-page-inner">
            <nav className="settings-nav">
              <button
                className={`settings-nav-item ${settingsTab === "account" ? "active" : ""}`}
                onClick={() => setSettingsTab("account")}
              >
                <CircleUserRound size={18} />
                <span>Account</span>
              </button>
              <button
                className={`settings-nav-item ${settingsTab === "security" ? "active" : ""}`}
                onClick={() => setSettingsTab("security")}
              >
                <KeyRound size={18} />
                <span>Security</span>
              </button>
              <button
                className={`settings-nav-item ${settingsTab === "appearance" ? "active" : ""}`}
                onClick={() => setSettingsTab("appearance")}
              >
                <Moon size={18} />
                <span>Appearance</span>
              </button>
              <button
                className={`settings-nav-item ${settingsTab === "accessibility" ? "active" : ""}`}
                onClick={() => setSettingsTab("accessibility")}
              >
                <Eye size={18} />
                <span>Accessibility</span>
              </button>
              <button
                className={`settings-nav-item ${settingsTab === "advanced" ? "active" : ""}`}
                onClick={() => setSettingsTab("advanced")}
              >
                <Settings size={18} />
                <span>Advanced</span>
              </button>
              {isCurrentUserAdmin ? (
                <button
                  className={`settings-nav-item ${settingsTab === "admin" ? "active" : ""}`}
                  onClick={() => setSettingsTab("admin")}
                >
                  <ShieldCheck size={18} />
                  <span>Admin</span>
                </button>
              ) : null}
            </nav>
            <main className="settings-content">
              <div className="settings-content-header">
                <h2>
                  {settingsTab === "account"
                    ? "Account"
                    : settingsTab === "security"
                      ? "Security"
                      : settingsTab === "appearance"
                        ? "Appearance"
                        : settingsTab === "accessibility"
                          ? "Accessibility"
                          : settingsTab === "advanced"
                            ? "Advanced"
                            : "Admin"}
                </h2>
              </div>
              <form className="settings-form" onSubmit={saveSettings}>
                {settingsTab === "account" ? (
                  <>
                    <p className="settings-section-desc">
                      Manage your profile information and photo.
                    </p>

                    <label htmlFor="settings-name">
                      <CircleUserRound size={18} />
                      <span>Username</span>
                    </label>
                    <input
                      id="settings-name"
                      type="text"
                      value={settingsName}
                      onChange={(event) => setSettingsName(event.target.value)}
                      maxLength={32}
                      placeholder="Username without spaces"
                    />

                    <section className="settings-photo-section">
                      <div className="settings-photo-row">
                        <div className="settings-photo-preview" aria-hidden="true">
                          {settingsPhotoPreview ? (
                            <img src={settingsPhotoPreview} alt="" />
                          ) : user?.photoURL ? (
                            <img src={user.photoURL} alt="" />
                          ) : (
                            <span>{getInitials(activeName)}</span>
                          )}
                        </div>
                        <div className="settings-photo-actions">
                          <label className="settings-photo-pick" htmlFor="settings-photo-input">
                            <ImagePlus size={18} />
                            <span>{settingsPhotoFile ? "Choose another" : "Choose image"}</span>
                          </label>
                          <input
                            accept="image/*"
                            id="settings-photo-input"
                            onChange={handlePhotoFileChange}
                            type="file"
                          />
                          {settingsPhotoFile ? (
                            <div className="settings-photo-buttons">
                              <button
                                disabled={isUploadingPhoto || isSavingSettings}
                                onClick={uploadProfilePicture}
                                type="button"
                              >
                                <Upload size={17} />
                                <span>{isUploadingPhoto ? "Uploading..." : "Upload"}</span>
                                <span className="tag tag-safe">Safe</span>
                              </button>
                              <button
                                className="ghost-button"
                                disabled={isUploadingPhoto}
                                onClick={clearPendingPhoto}
                                type="button"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : user?.photoURL ? (
                            <button
                              className="danger-button settings-photo-remove"
                              disabled={isSavingSettings}
                              onClick={removeProfilePicture}
                              type="button"
                            >
                              <Trash2 size={17} />
                              <span>Remove picture</span>
                            </button>
                          ) : null}
                        </div>
                      </div>
                      <p className="settings-note">
                        JPG, PNG, GIF, or WEBP. Max 5 MB. Stored on Cloudinary.
                      </p>
                    </section>

                    {settingsMessage ? (
                      <div className="error-banner inline-error settings-note">
                        {settingsMessage}
                      </div>
                    ) : null}

                    <div className="settings-actions">
                      <button type="submit" disabled={isSavingSettings}>
                        Save changes
                      </button>
                    </div>
                  </>
                ) : null}

                {settingsTab === "security" ? (
                  <>
                    <p className="settings-section-desc">
                      Manage your password and connected sign-in methods.
                    </p>

                    <label htmlFor="settings-current-password">
                      <KeyRound size={18} />
                      <span>Current password</span>
                    </label>
                    <input
                      id="settings-current-password"
                      type="password"
                      value={settingsCurrentPassword}
                      onChange={(event) =>
                        setSettingsCurrentPassword(event.target.value)
                      }
                      maxLength={64}
                      placeholder="Required to change password"
                      autoComplete="current-password"
                    />

                    <label htmlFor="settings-password">
                      <KeyRound size={18} />
                      <span>New password</span>
                    </label>
                    <input
                      id="settings-password"
                      type="password"
                      value={settingsPassword}
                      onChange={(event) => setSettingsPassword(event.target.value)}
                      minLength={6}
                      maxLength={64}
                      placeholder="Leave blank to keep current password"
                      autoComplete="new-password"
                    />

                    {settingsMessage ? (
                      <div className="error-banner inline-error settings-note">
                        {settingsMessage}
                      </div>
                    ) : null}

                    {!hasGoogleProvider ? (
                      <section className="settings-section-box">
                        <div>
                          <h3>
                            Google account
                            <span className="tag tag-safe">Safe</span>
                          </h3>
                          <p>Connect Google as another way to sign in.</p>
                        </div>
                        <button
                          className="google-button"
                          disabled={isSavingSettings}
                          onClick={linkGoogleAccount}
                          type="button"
                        >
                          <Chrome size={18} />
                          <span>Connect Google</span>
                        </button>
                      </section>
                    ) : (
                      <section className="settings-section-box">
                        <div>
                          <h3>
                            Google account
                            <span className="tag tag-danger">Dangerous</span>
                          </h3>
                          <p>Google sign-in is connected.</p>
                        </div>
                        <button
                          className="danger-button"
                          disabled={isSavingSettings}
                          onClick={unlinkGoogleAccount}
                          type="button"
                        >
                          Unlink Google
                        </button>
                      </section>
                    )}

                    {hasEmailProvider ? (
                      <section className="settings-section-box">
                        <div>
                          <h3>
                            Password sign-in
                            <span className="tag tag-danger">Dangerous</span>
                          </h3>
                          <p>Remove password as a sign-in method.</p>
                        </div>
                        <button
                          className="danger-button"
                          disabled={isSavingSettings || !hasGoogleProvider}
                          onClick={unlinkPassword}
                          title={!hasGoogleProvider ? "Connect Google first to remove password" : ""}
                          type="button"
                        >
                          <KeyRound size={18} />
                          <span>Remove password</span>
                        </button>
                      </section>
                    ) : null}

                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Remove account
                          <span className="tag tag-danger">Dangerous</span>
                        </h3>
                        <p>Permanently delete your account and all associated data.</p>
                      </div>
                      <button
                        className="danger-button"
                        type="button"
                        onClick={removeAccount}
                        disabled={isSavingSettings}
                      >
                        <Trash2 size={17} />
                        <span>Remove account</span>
                      </button>
                    </section>

                    <div className="settings-actions">
                      <button type="submit" disabled={isSavingSettings}>
                        Save changes
                      </button>
                    </div>
                  </>
                ) : null}

                {settingsTab === "appearance" ? (
                  <>
                    <p className="settings-section-desc">
                      Customize the look and feel of QuadChat.
                    </p>

                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Theme
                          <span className="tag tag-safe">Safe</span>
                        </h3>
                        <p>Switch between dark and light mode.</p>
                      </div>
                      <label className="toggle-row">
                        <input
                          checked={isDarkTheme}
                          onChange={() => setIsDarkTheme((prev) => !prev)}
                          type="checkbox"
                        />
                        <span>{isDarkTheme ? "Dark mode" : "Light mode"}</span>
                      </label>
                    </section>
                  </>
                  ) : null}

                {settingsTab === "accessibility" ? (
                  <>
                    <p className="settings-section-desc">
                      Options for a more accessible experience.
                    </p>

                    <section className="settings-section-box">
                      <div>
                        <h3>
                          UI scale
                          <span className="tag tag-safe">Safe</span>
                        </h3>
                        <p>
                          Shrinks the entire interface. 100% shows every part
                          of the UI on screen at its default size.
                        </p>
                      </div>
                      <label className="scale-row">
                        <input
                          aria-label="UI scale"
                          max="100"
                          min="50"
                          onChange={(event) => setUiScale(Number(event.target.value))}
                          step="5"
                          type="range"
                          value={uiScale}
                        />
                        <output>{uiScale}%</output>
                      </label>
                    </section>

                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Reduced motion
                          <span className="tag tag-safe">Safe</span>
                        </h3>
                        <p>Minimize animations and transitions throughout the app.</p>
                      </div>
                      <label className="toggle-row">
                        <input
                          checked={reduceMotion}
                          onChange={() => setReduceMotion((prev) => !prev)}
                          type="checkbox"
                        />
                        <span>{reduceMotion ? "On" : "Off"}</span>
                      </label>
                    </section>
                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Desktop notifications
                          <span className="tag tag-safe">Safe</span>
                        </h3>
                        <p>Receive browser notifications when you get a new message or call.</p>
                      </div>
                      <button
                        className="ghost-button"
                        disabled={isSavingSettings}
                        onClick={toggleNotifications}
                        type="button"
                      >
                        {notificationsEnabled ? (
                          <BellOff size={18} />
                        ) : (
                          <Bell size={18} />
                        )}
                        <span>{notificationsEnabled ? "Disable" : "Enable"}</span>
                      </button>
                    </section>
                  </>
                ) : null}

                {settingsTab === "advanced" ? (
                  <>
                    <p className="settings-section-desc">
                      Experimental and power-user options.
                    </p>

                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Show version in header
                        </h3>
                        <p>Display the app version next to "QuadChat" in the header bar.</p>
                      </div>
                      <label className="toggle-row">
                        <input
                          checked={showVersionInHeader}
                          onChange={() => setShowVersionInHeader((prev) => !prev)}
                          type="checkbox"
                        />
                        <span>{showVersionInHeader ? "On" : "Off"}</span>
                      </label>
                    </section>
                  </>
                ) : null}

                {settingsTab === "admin" && isCurrentUserAdmin ? (
                  <>
                    <p className="settings-section-desc">
                      Manage app-wide settings and generate sign-in links.
                    </p>

                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Sign up
                          <span className="tag tag-safe">Safe</span>
                        </h3>
                        <p>Control whether new users can create accounts.</p>
                      </div>
                      <label className="toggle-row">
                        <input
                          checked={appSettings.signupEnabled}
                          onChange={toggleSignup}
                          type="checkbox"
                        />
                        <span>Allow sign up</span>
                      </label>
                    </section>
                    <section className="settings-section-box">
                      <div>
                        <h3>
                          Magic link
                          <span className="tag tag-safe">Safe</span>
                        </h3>
                        <p>Generate a one-time sign-in link for any user.</p>
                      </div>
                      <div className="magic-link-form">
                        <select
                          value={magicLinkEmail}
                          onChange={(event) => setMagicLinkEmail(event.target.value)}
                        >
                          <option value="">Select a user...</option>
                          {Object.values(profiles).map((profile) => (
                            <option key={profile.id} value={profile.email}>
                              {getProfileName(profile, profile.email || "Unknown")}
                            </option>
                          ))}
                        </select>
                        <button
                          disabled={!magicLinkEmail || isGeneratingLink}
                          onClick={generateMagicLink}
                          type="button"
                        >
                          {isGeneratingLink ? "Generating..." : "Generate magic link"}
                        </button>
                      </div>
                      {magicLinkError ? (
                        <div className="error-banner inline-error">{magicLinkError}</div>
                      ) : null}
                      {magicLinkUrl ? (
                        <div className="magic-link-result">
                          <div
                            className="magic-link-url"
                            onClick={copyMagicLink}
                            title="Copy magic link"
                          >
                            <span>********************</span>
                            <Copy size={16} />
                          </div>
                        </div>
                      ) : null}
                    </section>
                  </>
                ) : null}
              </form>
            </main>
          </div>
        </div>
      ) : null}

      {showGamingPost && gamingPostCard ? (
        <div className="modal-backdrop" role="presentation">
          <section
            className="settings-modal"
            aria-label="Create gaming post"
            role="dialog"
            aria-modal="true"
          >
            <header className="settings-header">
              <div>
                <h2>Gaming Post</h2>
                <p>Edit your session card</p>
              </div>
              <button
                className="modal-close"
                type="button"
                onClick={() => setShowGamingPost(false)}
              >
                X
              </button>
            </header>

            <GameSessionCard
              data={gamingPostCard}
              isEditingMode
              onChange={setGamingPostCard}
            />

            <div className="settings-actions">
              <button
                type="button"
                onClick={async () => {
                  await addDoc(messagesRef(activeChannel), {
                    ...gamingPostCard,
                    userId: sessionUserId,
                    createdAt: serverTimestamp()
                  });
                  setShowGamingPost(false);
                  setGamingPostCard(null);
                }}
              >
                Send
              </button>
              <button
                type="button"
                className="danger-button"
                onClick={() => setShowGamingPost(false)}
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      ) : null}
      {inAppToasts.length > 0 ? (
        <div className="toast-container" role="status" aria-live="polite">
          {inAppToasts.map((toast) => (
            <button
              className={`toast toast-${toast.type}`}
              key={toast.id}
              type="button"
              onClick={() => openToast(toast)}
            >
              <span className="toast-icon">
                {toast.type === "call" ? (
                  <Phone size={16} />
                ) : toast.type === "mention" ? (
                  <MessageCircle size={16} />
                ) : (
                  <Users size={16} />
                )}
              </span>
              <span className="toast-text">
                <strong>{toast.channelLabel || toast.senderName}</strong>
                <span>
                  {toast.type === "call"
                    ? `${toast.senderName} ${toast.body}`
                    : `${toast.senderName}: ${toast.body}`}
                </span>
              </span>
              <span
                className="toast-close"
                role="button"
                tabIndex={0}
                title="Dismiss"
                onClick={(event) => {
                  event.stopPropagation();
                  dismissToast(toast.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.stopPropagation();
                    dismissToast(toast.id);
                  }
                }}
              >
                <X size={14} />
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </main>
  );
}
