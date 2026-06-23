import React, { useEffect, useMemo, useRef, useState } from "react";
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
  updateDoc
} from "firebase/firestore";
import {
  get,
  onValue,
  ref as rtdbRef,
  set,
  onDisconnect,
  push,
  onChildAdded,
  off,
  update,
  remove
} from "firebase/database";
import {
  Bell,
  BellOff,
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
  Copy
} from "lucide-react";
import { auth, db, rtdb } from "../firebase.js";
import { uploadToCloudinary } from "../cloudinary.js";
import GameSessionCard from "./GameSessionCard.jsx";

function messagesRef(channelId) {
  return collection(db, "messages", channelId, "messages");
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
const supportsRecording = typeof MediaRecorder !== "undefined";
const rtcConfig = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

function formatTime(timestamp) {
  if (!timestamp?.toDate) {
    return "sending";
  }

  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(timestamp.toDate());
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

  return text.split(/(\s+)/).map((part, index) => {
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
  const cleanText = (text || "").replace(/\s+/g, " ").trim();

  if (cleanText.length <= 90) {
    return cleanText;
  }

  return `${cleanText.slice(0, 87)}...`;
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
  const userIsAdmin = isAdminEmail(firebaseUser.email);
  const userIsDeveloper = isDeveloperEmail(firebaseUser.email);
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
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showGamingPost, setShowGamingPost] = useState(false);
  const [gamingPostCard, setGamingPostCard] = useState(null);
  const [callStatus, setCallStatus] = useState("idle");
  const [callPartnerId, setCallPartnerId] = useState(null);
  const [callPartnerName, setCallPartnerName] = useState("");
  const [callMuted, setCallMuted] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);
  const peerRef = useRef(null);
  const localStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);
  const callNodeRef = useRef(null);

  const attachMenuRef = useRef(null);
  const canPostInActiveChannel =
    activeChannel !== "updates" || isCurrentUserDeveloper;

  const activeName = useMemo(
    () => getProfileName(currentProfile, user?.displayName || user?.email || ""),
    [currentProfile, user]
  );

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

    const presenceRef = rtdbRef(rtdb, `presence/${user.uid}`);

    set(presenceRef, true);
    onDisconnect(presenceRef).remove();

    const handleBeforeUnload = () => {
      setDoc(doc(db, "users", user.uid), { lastOnline: serverTimestamp() }, { merge: true });
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      setDoc(doc(db, "users", user.uid), { lastOnline: serverTimestamp() }, { merge: true });
      remove(presenceRef);
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
    if (!user) {
      setOnlineUsers(new Set());
      return;
    }

    const presenceListRef = rtdbRef(rtdb, "presence");
    const unsubscribe = onValue(presenceListRef, (snapshot) => {
      if (snapshot.exists()) {
        setOnlineUsers(new Set(Object.keys(snapshot.val())));
      } else {
        setOnlineUsers(new Set());
      }
    });

    return unsubscribe;
  }, [user]);

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
    }, 300000);
    return () => clearInterval(id);
  }, [user, sessionUserId]);

  useEffect(() => {
    if (callStatus !== "idle") return;

    const callsRef = rtdbRef(rtdb, "calls");
    const unsub = onChildAdded(callsRef, (snap) => {
      const data = snap.val();
      if (data.calleeId === sessionUserId && data.status === "calling" && !incomingCall) {
        setIncomingCall({ key: snap.key, ...data });
      }
    });
    return () => off(callsRef);
  }, [sessionUserId, callStatus, incomingCall]);

  useEffect(() => {
    if (!statusModalOpen || !sessionUserId) return;
    const profile = profiles[sessionUserId];
    const s = profile?.status;
    setEditStatus({ mode: s?.mode || "active", text: s?.text || "" });
    setScheduledBusy(
      (s?.scheduledBusy || []).map((sb) => ({
        start: sb.start?.toDate(),
        end: sb.end?.toDate()
      }))
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
                  return [...prev, msg];
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

      const modUnsub = onSnapshot(
        query(ref, orderBy("createdAt", "asc")),
        (snap) => {
          if (cancelled) return;
          snap.docChanges().forEach((change) => {
            if (change.type !== "modified") return;
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
          });
        }
      );

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
    if (isNearBottomRef.current) {
      endRef.current?.scrollIntoView({ block: "end" });
    }
  }, [messages]);

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
      knownMessageIdsRef.current = nextKnownIds;
      hasLoadedMessagesRef.current = true;
      return;
    }

    const shouldNotify =
      notificationsEnabled &&
      notificationPermission === "granted" &&
      (document.hidden || !document.hasFocus());

    if (shouldNotify) {
      messages
        .filter(
          (item) =>
            !knownMessageIdsRef.current.has(item.id) &&
            item.userId !== sessionUserId
        )
        .forEach((item) => {
          const senderProfile = profiles[item.userId];
          const senderName = getProfileName(senderProfile, "Someone");
          const notification = new Notification(`QuadChat: ${senderName}`, {
            body: getReplyPreview(
              item.text ||
                (item.isFile
                  ? "Sent a file"
                  : item.attachments?.length > 0
                    ? "Sent an attachment"
                    : "Sent a message")
            ),
            icon: notificationIcon,
            tag: `quadchat-${item.id}`
          });

          window.setTimeout(() => notification.close(), 7000);
        });
    }

    knownMessageIdsRef.current = nextKnownIds;
  }, [
    messages,
    notificationPermission,
    notificationsEnabled,
    profiles,
    sessionUserId,
    user
  ]);

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

  function cleanupCall() {
    if (peerRef.current) {
      peerRef.current.close();
      peerRef.current = null;
    }
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((t) => t.stop());
      localStreamRef.current = null;
    }
    if (remoteStreamRef.current) {
      remoteStreamRef.current.getTracks().forEach((t) => t.stop());
      remoteStreamRef.current = null;
    }
    if (callNodeRef.current) {
      remove(callNodeRef.current);
      callNodeRef.current = null;
    }
    setCallStatus("idle");
    setCallPartnerId(null);
    setCallPartnerName("");
    setCallMuted(false);
    setIncomingCall(null);
  }

  async function createPeerConnection(callNodeRefVal, isCaller) {
    const pc = new RTCPeerConnection(rtcConfig);
    peerRef.current = pc;

    pc.onicecandidate = (e) => {
      if (e.candidate && callNodeRefVal) {
        const candidateRef = rtdbRef(rtdb, `${callNodeRefVal.key}/candidates/${isCaller ? "caller" : "callee"}/${Date.now()}`);
        set(candidateRef, e.candidate.toJSON());
      }
    };

    pc.ontrack = (e) => {
      remoteStreamRef.current = e.streams[0];
    };

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, localStreamRef.current));
    }

    return pc;
  }

  async function startCall(calleeId, calleeName) {
    if (callStatus !== "idle") return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      localStreamRef.current = stream;

      const callRef = push(rtdbRef(rtdb, "calls"));
      callNodeRef.current = callRef;

      const initialData = {
        callerId: sessionUserId,
        calleeId,
        callerName: activeName,
        calleeName,
        status: "calling",
        startedAt: Date.now()
      };
      await set(callRef, initialData);

      const pc = await createPeerConnection(callRef, true);

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      await update(callRef, { offer: { type: offer.type, sdp: offer.sdp } });

      setCallStatus("calling");
      setCallPartnerId(calleeId);
      setCallPartnerName(calleeName);

      const answerRef = rtdbRef(rtdb, `${callRef.key}/answer`);
      const unsubAnswer = onValue(answerRef, async (snap) => {
        if (snap.exists() && pc.signalingState !== "stable") {
          const ans = snap.val();
          await pc.setRemoteDescription(new RTCSessionDescription(ans));
          setCallStatus("connected");
        }
      });

      const candidatesRef = rtdbRef(rtdb, `${callRef.key}/candidates/callee`);
      onChildAdded(candidatesRef, (snap) => {
        const candidate = new RTCIceCandidate(snap.val());
        pc.addIceCandidate(candidate);
      });

      peerRef.current._unsubAnswer = unsubAnswer;

      pc.oniceconnectionstatechange = () => {
        if (pc.iceConnectionState === "disconnected" || pc.iceConnectionState === "failed") {
          cleanupCall();
        }
      };
    } catch (e) {
      console.error("call error:", e);
      cleanupCall();
    }
  }

  async function answerCall() {
    if (!incomingCall) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      localStreamRef.current = stream;

      const callRef = rtdbRef(rtdb, incomingCall.key);
      callNodeRef.current = callRef;

      const snap = await get(callRef);
      const data = snap.val();

      const pc = await createPeerConnection(callRef, false);

      await pc.setRemoteDescription(new RTCSessionDescription(data.offer));

      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      await update(callRef, { answer: { type: answer.type, sdp: answer.sdp }, status: "connected" });

      setCallStatus("connected");
      setCallPartnerId(data.callerId);
      setCallPartnerName(data.callerName);
      setIncomingCall(null);

      const candidatesRef = rtdbRef(rtdb, `${callRef.key}/candidates/caller`);
      onChildAdded(candidatesRef, (snap) => {
        const candidate = new RTCIceCandidate(snap.val());
        pc.addIceCandidate(candidate);
      });

      pc.oniceconnectionstatechange = () => {
        if (pc.iceConnectionState === "disconnected" || pc.iceConnectionState === "failed") {
          cleanupCall();
        }
      };
    } catch (e) {
      console.error("answer error:", e);
      cleanupCall();
    }
  }

  function rejectCall() {
    if (incomingCall) {
      remove(rtdbRef(rtdb, incomingCall.key));
      setIncomingCall(null);
    }
  }

  function toggleCallMute() {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setCallMuted(!audioTrack.enabled);
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

    if (cleanPassword && !cleanCurrentPassword) {
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
        const credential = EmailAuthProvider.credential(
          user.email,
          cleanCurrentPassword
        );

        await reauthenticateWithCredential(user, credential);
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

    if (activeChannel === "updates" && !isCurrentUserDeveloper) {
      setError("Only developers can post in Updates.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const url = await uploadToCloudinary(file);
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

  return (
    <main className="app-shell">
      {!isAuthReady ? (
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
          </div>
        </aside>
        <div className="chat-main">
          <header className="chat-header">
          <div className="chat-title">
            <div className="brand-mark" aria-hidden="true">
              <MessageCircle size={26} strokeWidth={2.3} />
            </div>
            <div>
              <h1>QuadChat</h1>
              <p>
                Signed in as {activeName} · {messages.length} message
                {messages.length === 1 ? "" : "s"} in{" "}
                {CHANNELS.find((c) => c.id === activeChannel)?.label}
              </p>
              {isCurrentUserDeveloper ? (
                <span className="admin-badge">Developer</span>
              ) : isCurrentUserAdmin ? (
                <span className="admin-badge">Admin</span>
              ) : null}
            </div>
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
                      setScheduledBusy((prev) => [
                        ...prev,
                        { start, end }
                      ]);
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
            <div className="active-call-info">
              <Phone size={15} />
              <span>{callStatus === "calling" ? "Calling" : "On call with"} <strong>{callPartnerName}</strong></span>
            </div>
            <div className="active-call-actions">
              <button
                className="call-action-btn"
                type="button"
                onClick={toggleCallMute}
                title={callMuted ? "Unmute" : "Mute"}
              >
                {callMuted ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
              <button className="call-action-btn call-end-btn" type="button" onClick={cleanupCall} title="End call">
                <PhoneOff size={16} />
              </button>
            </div>
          </div>
        ) : null}

        <div className="chat-body">
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
                {messages.map((item) => {
                  const senderProfile = profiles[item.userId];
                  const senderName = getProfileName(senderProfile, item.name);
                  const isMine = item.userId === sessionUserId;
                  const isMenuOpen = openMessageMenuId === item.id;

                  return (
                    <article
                      className={`message ${isMine ? "message-mine" : ""}`}
                      key={item.id}
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
                          </div>
                        ) : null}
                      </div>
                      {item.replyTo ? (
                        <div className="reply-card">
                          <strong>{item.replyTo.senderName || "Unknown"}</strong>
                          <span>{item.replyTo.text || "Message unavailable"}</span>
                        </div>
                      ) : null}
                      {item.isFile ? (
                        item.fileType?.startsWith("video/") ? (
                          <video
                            controls
                            className="message-video"
                          >
                            <source
                              src={item.text}
                              type={item.fileType}
                            />
                          </video>
                        ) : item.fileType?.startsWith("audio/") ? (
                          <audio
                            controls
                            className="message-audio"
                            src={item.text}
                          >
                            <source
                              src={item.text}
                              type={item.fileType}
                            />
                          </audio>
                        ) : (
                          <a
                            className="message-image-link"
                            href={item.text}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <img
                              src={item.text}
                              alt={item.fileName || "Uploaded image"}
                            />
                          </a>
                        )
                      ) : item.type === "game_session_card" ? (
                        <GameSessionCard data={item} sessionUserId={sessionUserId} sessionUserName={activeName} onRsvp={(status, customText) => handleRsvp(item.id, status, customText)} />
                      ) : item.text ? (
                        <p>
                          {renderMessageText(item.text, profiles, item.adminCommand, sessionUserId, item.targetUserId)}
                        </p>
                      ) : null}
                      {item.attachments?.length > 0 ? (
                        <div className="message-attachments">
                          {item.attachments.map((attachment) =>
                            attachment.type?.startsWith("image/") ? (
                              <a
                                className="message-image-link"
                                href={attachment.url}
                                key={attachment.path || attachment.url}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <img src={attachment.url} alt={attachment.name} />
                              </a>
                            ) : attachment.type?.startsWith("video/") ? (
                              <video
                                controls
                                className="message-video"
                                key={attachment.path || attachment.url}
                              >
                                <source
                                  src={attachment.url}
                                  type={attachment.type}
                                />
                              </video>
                            ) : (
                              <a
                                className="message-file-link"
                                href={attachment.viewUrl || attachment.url}
                                key={attachment.path || attachment.url}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FileText size={18} />
                                <span>{attachment.name}</span>
                              </a>
                            )
                          )}
                        </div>
                      ) : null}
                    </article>
                  );
                })}
                <div ref={endRef} />
              </>
            )}
          </div>
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
                const statusMode = (theirMode === "busy" || theirMode === "away") ? theirMode : (onlineUsers.has(profile.id) ? "active" : "offline");
                return (
                  <div
                    className={`user-item ${onlineUsers.has(profile.id) ? "online" : ""}`}
                    key={profile.id}
                  >
                    <span className="user-dot" style={statusMode !== "offline" ? { background: getStatusColor(statusMode) } : undefined} />
                    <div className="user-info">
                      <span className="user-name">
                        {name}
                        {profile.status?.text ? (
                          <span className="user-status-text" title={profile.status.text}>{profile.status.text}</span>
                        ) : null}
                      </span>
                      <span className="user-last-online">
                        {onlineUsers.has(profile.id) ? "" : profile.lastOnline ? getRelativeTime(profile.lastOnline) : "unmeasured"}
                      </span>
                    </div>
                    {profile.id !== sessionUserId && onlineUsers.has(profile.id) && callStatus === "idle" ? (
                      <button
                        className="user-call-btn"
                        type="button"
                        onClick={() => startCall(profile.id, name)}
                        title={`Call ${name}`}
                      >
                        <Phone size={13} />
                      </button>
                    ) : null}
                    {muted ? (
                      <MicOff
                        aria-label={`${name} is muted`}
                        className="user-mic user-mic-muted"
                        size={14}
                      />
                    ) : (
                      <Mic
                        aria-label={`${name} can speak`}
                        className="user-mic"
                        size={14}
                      />
                    )}
                  </div>
                );
              })}
            </div>
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
            className="composer-row"
            style={
              isRecording || isRecordingPaused
                ? { gridTemplateColumns: "50px 1fr 50px" }
                : { gridTemplateColumns: "50px 50px 1fr 50px" }
            }
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
                onChange={(event) => setMessage(event.target.value)}
                onPaste={handleComposerPaste}
                placeholder="Type a message"
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
        <div className="modal-backdrop" role="presentation">
          <section
            className="settings-modal"
            aria-label="Account settings"
            role="dialog"
            aria-modal="true"
          >
            <header className="settings-header">
              <div>
                <h2>Settings</h2>
                <p>{user.email}</p>
                <p>ID: {sessionUserId}</p>
                {isCurrentUserDeveloper ? (
                  <p>Role: developer</p>
                ) : isCurrentUserAdmin ? (
                  <p>Role: admin</p>
                ) : null}
              </div>
              <button
                className="modal-close"
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                title="Close settings"
              >
                X
              </button>
            </header>

            <form className="settings-form" onSubmit={saveSettings}>
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
                <section className="admin-settings">
                  <div>
                    <h3>Google account</h3>
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
                <section className="admin-settings">
                  <div>
                    <h3>Google account</h3>
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

              {isCurrentUserAdmin ? (
                <>
                  <section className="admin-settings">
                    <div>
                      <h3>Admin settings</h3>
                      <p>Control app-wide access.</p>
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
                  <section className="admin-settings">
                    <div>
                      <h3>Magic link</h3>
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

              <div className="settings-actions">
                <button type="submit" disabled={isSavingSettings}>
                  Save changes
                </button>
                <button
                  className="danger-button"
                  type="button"
                  onClick={removeAccount}
                  disabled={isSavingSettings}
                >
                  <Trash2 size={17} />
                  <span>Remove account</span>
                </button>
              </div>
            </form>
          </section>
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
    </main>
  );
}
