import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp
} from "firebase/firestore";
import {
  Chrome,
  CircleUserRound,
  Download,
  Settings,
  Trash2,
  KeyRound,
  LogOut,
  MessageCircle,
  Send,
  ShieldCheck,
  Upload,
  UserRound
} from "lucide-react";
import { auth, db } from "../firebase.js";

const messagesRef = collection(db, "messages");
const usersRef = collection(db, "users");
const authMode = import.meta.env.VITE_AUTH_MODE || "production";
const googleProvider = new GoogleAuthProvider();
const adminEmails = ["ariqipraditya@gmail.com"];
const keyRotationMs = 60 * 60 * 1000;
const keyDbName = "quadchat-keys";
const keyStoreName = "keys";
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function bytesToBase64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)));
}

function base64ToBytes(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

function openKeyDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(keyDbName, 1);

    request.onupgradeneeded = () => {
      request.result.createObjectStore(keyStoreName);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readStoredKey(uid) {
  const dbInstance = await openKeyDb();

  return new Promise((resolve, reject) => {
    const transaction = dbInstance.transaction(keyStoreName, "readonly");
    const request = transaction.objectStore(keyStoreName).get(uid);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function writeStoredKey(uid, keyData) {
  const dbInstance = await openKeyDb();

  return new Promise((resolve, reject) => {
    const transaction = dbInstance.transaction(keyStoreName, "readwrite");
    const request = transaction.objectStore(keyStoreName).put(keyData, uid);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function deleteStoredKey(uid) {
  const dbInstance = await openKeyDb();

  return new Promise((resolve, reject) => {
    const transaction = dbInstance.transaction(keyStoreName, "readwrite");
    const request = transaction.objectStore(keyStoreName).delete(uid);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function generateKeyData() {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256"
    },
    true,
    ["encrypt", "decrypt"]
  );
  const publicKey = await crypto.subtle.exportKey("spki", keyPair.publicKey);
  const privateKey = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

  return {
    version: crypto.randomUUID(),
    publicKey: bytesToBase64(publicKey),
    privateKey: bytesToBase64(privateKey),
    createdAt: Date.now()
  };
}

async function importPublicKey(publicKey) {
  return crypto.subtle.importKey(
    "spki",
    base64ToBytes(publicKey),
    { name: "RSA-OAEP", hash: "SHA-256" },
    false,
    ["encrypt"]
  );
}

async function importPrivateKey(privateKey) {
  return crypto.subtle.importKey(
    "pkcs8",
    base64ToBytes(privateKey),
    { name: "RSA-OAEP", hash: "SHA-256" },
    false,
    ["decrypt"]
  );
}

async function encryptMessageForProfiles(text, recipientProfiles) {
  const aesKey = await crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    textEncoder.encode(text)
  );
  const rawAesKey = await crypto.subtle.exportKey("raw", aesKey);
  const encryptedKeys = {};

  await Promise.all(
    recipientProfiles.map(async (profile) => {
      const publicKey = await importPublicKey(profile.publicKey);
      const encryptedKey = await crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKey,
        rawAesKey
      );
      encryptedKeys[profile.id] = bytesToBase64(encryptedKey);
    })
  );

  return {
    ciphertext: bytesToBase64(ciphertext),
    iv: bytesToBase64(iv),
    encryptedKeys
  };
}

async function decryptMessage(messageDoc, keyData, uid) {
  const encryptedKey = messageDoc.encryptedKeys?.[uid];

  if (!encryptedKey || !keyData?.privateKey) {
    return null;
  }

  const privateKey = await importPrivateKey(keyData.privateKey);
  const rawAesKey = await crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    base64ToBytes(encryptedKey)
  );
  const aesKey = await crypto.subtle.importKey(
    "raw",
    rawAesKey,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBytes(messageDoc.iv) },
    aesKey,
    base64ToBytes(messageDoc.ciphertext)
  );

  return textDecoder.decode(plaintext);
}

async function decryptMessageWithKeyring(messageDoc, keyring, uid) {
  for (const candidateKey of keyring) {
    try {
      const plaintext = await decryptMessage(messageDoc, candidateKey, uid);

      if (plaintext !== null) {
        return plaintext;
      }
    } catch {
      // Try the next locally stored private key.
    }
  }

  return null;
}

function normalizeKeyring(storedKey) {
  if (!storedKey) {
    return [];
  }

  if (Array.isArray(storedKey.keys)) {
    return storedKey.keys;
  }

  if (storedKey.publicKey && storedKey.privateKey) {
    return [storedKey];
  }

  return [];
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

function normalizeName(value) {
  return (value || "").trim().replace(/^@/, "").toLowerCase();
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

async function saveUserProfile(firebaseUser, displayNameOverride) {
  if (!firebaseUser) {
    return;
  }

  const displayName = normalizeDisplayName(
    displayNameOverride || firebaseUser.displayName,
    firebaseUser.email
  );

  await setDoc(
    doc(db, "users", firebaseUser.uid),
    {
      id: firebaseUser.uid,
      displayName,
      email: firebaseUser.email || "",
      isAdmin: isAdminEmail(firebaseUser.email),
      photoURL: firebaseUser.photoURL || "",
      role: isAdminEmail(firebaseUser.email) ? "admin" : "member",
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

async function saveUserKeyProfile(firebaseUser, keyData) {
  await setDoc(
    doc(db, "users", firebaseUser.uid),
    {
      id: firebaseUser.uid,
      publicKey: keyData.publicKey,
      keyVersion: keyData.version,
      keyUpdatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [authView, setAuthView] = useState("signin");
  const [draftName, setDraftName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [decryptedMessages, setDecryptedMessages] = useState({});
  const [profiles, setProfiles] = useState({});
  const [keyData, setKeyData] = useState(null);
  const [keyring, setKeyring] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsName, setSettingsName] = useState("");
  const [settingsPassword, setSettingsPassword] = useState("");
  const [error, setError] = useState("");
  const [settingsMessage, setSettingsMessage] = useState("");
  const endRef = useRef(null);

  const currentProfile = user ? profiles[user.uid] : null;
  const isCurrentUserAdmin =
    currentProfile?.isAdmin || isAdminEmail(user?.email || "");
  const muteLabel = getMuteLabel(currentProfile);
  const encryptedProfiles = useMemo(
    () => Object.values(profiles).filter((profile) => profile.publicKey),
    [profiles]
  );

  const activeName = useMemo(
    () => getProfileName(currentProfile, user?.displayName || user?.email || ""),
    [currentProfile, user]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthReady(true);

      if (firebaseUser) {
        saveUserProfile(firebaseUser).catch((firebaseError) => {
          setError(firebaseError.message);
        });
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setKeyData(null);
      setKeyring([]);
      setDecryptedMessages({});
      return undefined;
    }

    let isCancelled = false;

    async function ensureKeys() {
      try {
        const storedKey = await readStoredKey(user.uid);
        const existingKeyring = normalizeKeyring(storedKey);
        const activeKey = existingKeyring[existingKeyring.length - 1];
        const shouldRotate =
          !activeKey || Date.now() - activeKey.createdAt >= keyRotationMs;
        const nextKeyData = shouldRotate ? await generateKeyData() : activeKey;
        const nextKeyring = shouldRotate
          ? [...existingKeyring, nextKeyData]
          : existingKeyring;

        if (shouldRotate) {
          await writeStoredKey(user.uid, {
            activeVersion: nextKeyData.version,
            keys: nextKeyring
          });
        }

        await saveUserKeyProfile(user, nextKeyData);

        if (!isCancelled) {
          setKeyData(nextKeyData);
          setKeyring(nextKeyring);
        }
      } catch (firebaseError) {
        if (!isCancelled) {
          setError(firebaseError.message);
        }
      }
    }

    ensureKeys();
    const rotationTimer = window.setInterval(ensureKeys, keyRotationMs);

    return () => {
      isCancelled = true;
      window.clearInterval(rotationTimer);
    };
  }, [user]);

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
      orderBy("createdAt", "asc"),
      limit(100)
    );

    const unsubscribe = onSnapshot(
      recentMessagesQuery,
      (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
        );
        setError("");
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
    if (!user || keyring.length === 0) {
      setDecryptedMessages({});
      return;
    }

    let isCancelled = false;

    async function decryptMessages() {
      const nextMessages = {};

      await Promise.all(
        messages.map(async (item) => {
          if (!item.ciphertext) {
            nextMessages[item.id] = item.text || "";
            return;
          }

          try {
            nextMessages[item.id] = await decryptMessageWithKeyring(
              item,
              keyring,
              user.uid
            );
          } catch {
            nextMessages[item.id] = null;
          }
        })
      );

      if (!isCancelled) {
        setDecryptedMessages(nextMessages);
      }
    }

    decryptMessages();

    return () => {
      isCancelled = true;
    };
  }, [keyring, messages, user]);

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

        setUser({
          ...credential.user,
          displayName: cleanName
        });
      } else {
        await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
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
      setDraftName("");
      setEmail("");
      setPassword("");
    } catch (firebaseError) {
      setError(getAuthErrorMessage(firebaseError));
    }
  }

  async function signOut() {
    try {
      await signOutOfFirebase(auth);
      setMessage("");
      setError("");
    } catch (firebaseError) {
      setError(getAuthErrorMessage(firebaseError));
    }
  }

  function openSettings() {
    setSettingsName(activeName || "");
    setSettingsPassword("");
    setSettingsMessage("");
    setError("");
    setIsProfileMenuOpen(false);
    setIsSettingsOpen(true);
  }

  async function saveSettings(event) {
    event.preventDefault();
    const cleanName = settingsName.trim();
    const cleanPassword = settingsPassword.trim();

    if (!user || (!cleanName && !cleanPassword)) {
      return;
    }

    if (cleanName && hasUsernameSpaces(cleanName)) {
      setSettingsMessage("Usernames cannot contain spaces.");
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
        await updatePassword(user, cleanPassword);
      }

      await user.reload();
      setUser(auth.currentUser);
      setSettingsPassword("");
      setSettingsMessage("Settings saved.");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
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
      await deleteStoredKey(user.uid);
      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);
      setIsSettingsOpen(false);
      setMessage("");
      setError("");
    } catch (firebaseError) {
      setSettingsMessage(getAuthErrorMessage(firebaseError));
    } finally {
      setIsSavingSettings(false);
    }
  }

  function findCommandTargets(targetName) {
    const normalizedTarget = normalizeName(targetName);
    const allProfiles = Object.values(profiles);

    if (normalizedTarget === "everyone") {
      return allProfiles.filter((profile) => profile.id !== user.uid);
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

    if (command === "?unmute") {
      await Promise.all(
        targets.map((target) =>
          setDoc(
            doc(db, "users", target.id),
            {
              muted: false,
              mutedUntil: null,
              mutedBy: user.uid,
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
              mutedBy: user.uid,
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

    if (!cleanMessage || !activeName || isSending) {
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

      const recipients = encryptedProfiles;

      if (!keyData || recipients.length === 0) {
        setError("Secure keys are still being prepared. Try again in a moment.");
        return;
      }

      const encryptedPayload = await encryptMessageForProfiles(
        cleanMessage,
        recipients
      );

      await addDoc(messagesRef, {
        ...encryptedPayload,
        ...(commandResult?.metadata || {}),
        userId: user.uid,
        encryption: "RSA-OAEP-2048/AES-GCM",
        createdAt: serverTimestamp()
      });
      setMessage("");
    } catch (firebaseError) {
      setError(firebaseError.message);
    } finally {
      setIsSending(false);
    }
  }

  function downloadRecoveryKey() {
    if (!user || !keyData) {
      return;
    }

    const recoveryData = {
      app: "QuadChat",
      uid: user.uid,
      activeVersion: keyData.version,
      keys: keyring
    };
    const blob = new Blob([JSON.stringify(recoveryData, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `quadchat-recovery-${user.uid}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function uploadRecoveryKey(event) {
    const file = event.target.files?.[0];

    if (!user || !file) {
      return;
    }

    try {
      const recoveryData = JSON.parse(await file.text());
      const importedKeyring = normalizeKeyring(recoveryData);
      const nextKeyData = importedKeyring[importedKeyring.length - 1];

      if (
        recoveryData.uid !== user.uid ||
        !nextKeyData?.publicKey ||
        !nextKeyData?.privateKey ||
        !nextKeyData?.version
      ) {
        setSettingsMessage("That recovery key does not match this account.");
        return;
      }

      await writeStoredKey(user.uid, {
        activeVersion: nextKeyData.version,
        keys: importedKeyring
      });
      await saveUserKeyProfile(user, nextKeyData);
      setKeyData(nextKeyData);
      setKeyring(importedKeyring);
      setSettingsMessage("Recovery key uploaded.");
    } catch {
      setSettingsMessage("Could not read that recovery key file.");
    } finally {
      event.target.value = "";
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
                <button type="button" onClick={signOut}>
                  <LogOut size={17} />
                  <span>Sign out</span>
                </button>
              </div>
            ) : null}
          </div>
        </header>

        {error ? <div className="error-banner">{error}</div> : null}
        {!keyData ? (
          <div className="error-banner secure-banner">
            Preparing secure message keys.
          </div>
        ) : null}
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
              const isMine = item.userId === user.uid;
              const messageText = decryptedMessages[item.id];

              return (
                <article
                  className={`message ${isMine ? "message-mine" : ""}`}
                  key={item.id}
                >
                  <div className="message-meta">
                    <strong>{senderName}</strong>
                    <span>{formatTime(item.createdAt)}</span>
                  </div>
                  <p>
                    {messageText === null
                      ? "Encrypted message unavailable on this device."
                      : messageText
                        ? renderMessageText(
                            messageText,
                            profiles,
                            item.adminCommand
                          )
                        : "Decrypting..."}
                  </p>
                </article>
              );
            })
          )}
          <div ref={endRef} />
        </div>

        <form className="composer" onSubmit={sendMessage}>
          <div className="composer-row">
            <div className="highlight-input">
              <div className="highlight-layer" aria-hidden="true">
                {message
                  ? renderMessageText(
                      message,
                      profiles,
                      isCurrentUserAdmin &&
                        ["?mute", "?unmute"].includes(
                          message.trim().split(/\s+/)[0]?.toLowerCase()
                        )
                    )
                  : null}
              </div>
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type a message"
                maxLength={500}
              />
            </div>
            <button
              type="submit"
              aria-label="Send message"
              title="Send message"
              disabled={
                !message.trim() ||
                !activeName ||
                isSending ||
                !keyData ||
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
                <p>ID: {user.uid}</p>
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

              <div className="key-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={downloadRecoveryKey}
                  disabled={!keyData}
                >
                  <Download size={17} />
                  <span>Download recovery key</span>
                </button>
                <label className="upload-button" htmlFor="recovery-key-upload">
                  <Upload size={17} />
                  <span>Upload recovery key</span>
                </label>
                <input
                  id="recovery-key-upload"
                  className="file-input"
                  type="file"
                  accept="application/json"
                  onChange={uploadRecoveryKey}
                />
              </div>

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
