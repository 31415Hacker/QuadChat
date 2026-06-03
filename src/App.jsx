import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  GoogleAuthProvider,
  linkWithPopup,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutOfFirebase,
  updatePassword,
  updateProfile
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp
} from "firebase/firestore";
import {
  Bell,
  BellOff,
  Chrome,
  CircleUserRound,
  CornerDownLeft,
  FileText,
  MoreVertical,
  Plus,
  X,
  Settings,
  Trash2,
  KeyRound,
  LogOut,
  MessageCircle,
  Send,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { auth, db } from "../firebase.js";

const messagesRef = collection(db, "messages");
const usersRef = collection(db, "users");
const appSettingsRef = doc(db, "settings", "app");
const googleProvider = new GoogleAuthProvider();
const adminEmails = ["ariqipraditya@gmail.com"];
const sessionUserIdKey = "quadchat:sessionUserId";
const notificationsEnabledKey = "quadchat:notificationsEnabled";
const notificationIcon = `${import.meta.env.BASE_URL}favicon.svg`;
const maxAttachments = 4;
const maxAttachmentBytes = 10 * 1024 * 1024;
const uploadUrl = "https://quadchatbackend.onrender.com/upload";

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

function renderMessageText(text, profiles, isAdminCommand = false) {
  if (!text) {
    return null;
  }

  if (isAdminCommand) {
    return <span className="admin-command-text">{text}</span>;
  }

  const knownNames = Object.values(profiles).map((profile) =>
    normalizeName(getProfileName(profile, ""))
  );

  return text.split(/(\s+)/).map((part, index) => {
    if (!part.startsWith("@")) {
      return part;
    }

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
  return file.type.startsWith("image/") ? URL.createObjectURL(file) : "";
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.split(",")[1] || "");
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function saveUserProfile(firebaseUser, displayNameOverride) {
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
  const profileData = {
    id: firebaseUser.uid,
    displayName,
    email: firebaseUser.email || "",
    photoURL: firebaseUser.photoURL || "",
    updatedAt: serverTimestamp()
  };

  if (!profileSnapshot.exists() || userIsAdmin) {
    profileData.isAdmin = userIsAdmin;
    profileData.role = userIsAdmin ? "admin" : "member";
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
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsName, setSettingsName] = useState("");
  const [settingsCurrentPassword, setSettingsCurrentPassword] = useState("");
  const [settingsPassword, setSettingsPassword] = useState("");
  const [appSettings, setAppSettings] = useState({ signupEnabled: true });
  const [error, setError] = useState("");
  const [settingsMessage, setSettingsMessage] = useState("");
  const endRef = useRef(null);
  const fileInputRef = useRef(null);
  const pendingFilesRef = useRef([]);
  const knownMessageIdsRef = useRef(new Set());
  const hasLoadedMessagesRef = useRef(false);

  const currentProfile = sessionUserId ? profiles[sessionUserId] : null;
  const isCurrentUserAdmin =
    currentProfile?.isAdmin || isAdminEmail(user?.email || "");
  const hasGoogleProvider = user?.providerData?.some(
    (provider) => provider.providerId === "google.com"
  );
  const muteLabel = getMuteLabel(currentProfile);

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
      setMessages([]);
      return undefined;
    }

    const recentMessagesQuery = query(
      messagesRef,
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(
      recentMessagesQuery,
      (snapshot) => {
        setMessages(
          snapshot.docs.map((messageDoc) => ({
            id: messageDoc.id,
            ...messageDoc.data()
          }))
        );
      },
      (firebaseError) => {
        setError(firebaseError.message);
      }
    );

    return unsubscribe;
  }, [user]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

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
                (item.attachments?.length > 0
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
      await saveUserProfile(credential.user);
      await credential.user.reload();
      setUser(auth.currentUser);
      setSettingsMessage("Google account connected.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
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
    setSettingsMessage("");
    setError("");
    setIsProfileMenuOpen(false);
    setIsSettingsOpen(true);
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

  async function uploadPendingFiles() {
    if (!sessionUserId || pendingFiles.length === 0) {
      return [];
    }

    return Promise.all(
      pendingFiles.map(async (pendingFile) => {
        const fileBase64 = await readFileAsBase64(pendingFile.file);

        const response = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileName: pendingFile.file.name,
            mimeType: pendingFile.file.type || "application/octet-stream",
            fileBase64
          })
        });

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`Upload failed (${response.status}): ${errorBody}`);
        }

        const data = await response.json();
        return {
          name: data.file.name,
          type: data.file.mimeType,
          url: data.file.webViewLink,
          viewUrl: data.file.webViewLink,
          downloadUrl: data.file.webContentLink,
          path: data.file.id
        };
      })
    );
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

    if (!["?mute", "?unmute"].includes(command)) {
      return null;
    }

    if (!isCurrentUserAdmin) {
      return null;
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
      return {
        handled: false,
        metadata: {
          adminCommand: true,
          command,
          commandTarget: targetName
        }
      };
    }

    const timeFlagIndex = parts.findIndex((part) => part === "-t");
    const duration = timeFlagIndex >= 0 ? parseDuration(parts[timeFlagIndex + 1]) : null;

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
    return {
      handled: false,
      metadata: {
        adminCommand: true,
        command,
        commandTarget: targetName
      }
    };
  }

  async function sendMessage(event) {
    event.preventDefault();
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

    try {
      const commandResult = await runAdminCommand(cleanMessage);

      if (commandResult?.handled) {
        return;
      }

      if (!isCurrentUserAdmin && isProfileMuted(currentProfile)) {
        setError(muteLabel || "You are muted.");
        return;
      }

      const attachments = await uploadPendingFiles();

      await addDoc(messagesRef, {
        text: cleanMessage,
        ...(commandResult?.metadata || {}),
        ...(attachments.length > 0 ? { attachments } : {}),
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
              <MessageCircle size={28} strokeWidth={2.3} />
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
              <MessageCircle size={28} strokeWidth={2.3} />
            </div>
            <div>
              <h1>QuadChat</h1>
              <p>
                {authView === "signup"
                  ? "Create an account to start chatting."
                  : "Sign in to continue chatting."}
              </p>
            </div>
          </div>

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
        </section>
      ) : (
      <section className="chat-panel" aria-label="QuadChat room">
        <header className="chat-header">
          <div className="chat-title">
            <div className="brand-mark" aria-hidden="true">
              <MessageCircle size={26} strokeWidth={2.3} />
            </div>
            <div>
              <h1>QuadChat</h1>
              <p>
                Signed in as {activeName} · {messages.length} messages
              </p>
              {isCurrentUserAdmin ? <span className="admin-badge">Admin</span> : null}
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
            {isProfileMenuOpen ? (
              <div className="profile-menu">
                <button type="button" onClick={openSettings}>
                  <Settings size={17} />
                  <span>Settings</span>
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

        <div className="messages" role="log" aria-live="polite">
          {messages.length === 0 ? (
            <div className="empty-state">
              <MessageCircle size={42} />
              <p>No messages yet. Say hello when you are ready.</p>
            </div>
          ) : (
            messages.map((item) => {
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
                  {item.text ? (
                    <p>
                      {renderMessageText(item.text, profiles, item.adminCommand)}
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
            })
          )}
          <div ref={endRef} />
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
                    <img src={pendingFile.previewUrl} alt="" />
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
          <div className="composer-row">
            <button
              aria-label="Attach files"
              className="attach-button"
              onClick={() => fileInputRef.current?.click()}
              title="Attach files"
              type="button"
              disabled={pendingFiles.length >= maxAttachments || isSending}
            >
              <Plus size={22} />
            </button>
            <input
              ref={fileInputRef}
              className="file-input"
              type="file"
              multiple
              onChange={(event) => addPendingFiles(event.target.files)}
            />
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onPaste={handleComposerPaste}
              placeholder="Type a message"
              maxLength={500}
            />
            <button
              type="submit"
              aria-label="Send message"
              title="Send message"
              disabled={
                (!message.trim() && pendingFiles.length === 0) ||
                !activeName ||
                isSending ||
                !sessionUserId ||
                (!isCurrentUserAdmin && isProfileMuted(currentProfile))
              }
            >
              <Send size={20} />
            </button>
          </div>
        </form>
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
                {isCurrentUserAdmin ? <p>Role: admin</p> : null}
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
                </section>
              )}

              {isCurrentUserAdmin ? (
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
    </main>
  );
}
