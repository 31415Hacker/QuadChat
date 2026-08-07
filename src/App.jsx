import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
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
  startAt,
  startAfter,
  Timestamp,
  updateDoc,
  where
} from "firebase/firestore";
import { onChildAdded, onValue, ref as rtdbRef, set, remove } from "firebase/database";
import { AlertCircle, AlertTriangle } from "lucide-react";
import { auth, db, rtdb } from "../firebase.js";
import { uploadToCloudinary } from "../cloudinary.js";

import {
  CHANNELS,
  maxAttachments,
  maxAttachmentBytes,
  PAGE_SIZE,
  MAX_MESSAGES,
  supportsRecording,
  notificationIcon
} from "./constants.js";
import { usersRef, appSettingsRef, googleProvider, messagesRef } from "./utils/refs.js";
import {
  isDmChannelId,
  dmChannelId,
  dmPartnerId,
  getProfileName,
  getDmPartnerName,
  normalizeName,
  hasUsernameSpaces,
  isAdminEmail,
  isDeveloperEmail
} from "./utils/names.js";
import {
  parseDuration,
  isProfileMuted,
  getMuteLabel,
  getWarningLabel
} from "./utils/profile.js";
import {
  getReplyPreview,
  isMentionOf,
  isFreshMessage,
  getFilePreview
} from "./utils/messages.jsx";
import {
  getAuthErrorMessage,
  saveUserProfile,
  readSessionUserId,
  writeSessionUserId,
  clearSessionUserId,
  readNotificationsEnabled,
  writeNotificationsEnabled
} from "./utils/auth.js";
import { createDefaultSchedule, normalizeSchedule } from "./utils/schedule.js";
import { startCallRingtone, stopCallRingtone, unlockCallAudio, resumeCallAudio } from "./utils/callRingtone.js";
import { playDmReceiveSound } from "./utils/dmSound.js";

import { usePresence } from "./hooks/usePresence.js";
import { useNotifications } from "./hooks/useNotifications.js";
import { useCalls } from "./hooks/useCalls.js";
import useConfirmDialog from "./hooks/useConfirmDialog.js";

import AuthScreen from "./components/AuthScreen.jsx";
import ChannelSidebar from "./components/ChannelSidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import MessageList from "./components/MessageList.jsx";
import FilePreviewModal from "./components/FilePreviewModal.jsx";
import UsersSidebar from "./components/UsersSidebar.jsx";
import Composer from "./components/Composer.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import {
  StatusModal,
  NewDmModal,
  AnalyticsModal,
  IncomingCallModal,
  GamingPostModal
} from "./components/Modals.jsx";
import ConfirmDialog from "./components/ConfirmDialog.jsx";
import {
  ScreenShareRequestBanner,
  ActiveCallBar,
  GroupCallBar,
  ScreenViewer
} from "./components/CallUI.jsx";
import ToastContainer from "./components/Toasts.jsx";

function AppLoadingScreen({ message }) {
  return (
    <main className="app-loading-screen" aria-label="Loading QuadChat">
      <div className="app-loading-mark">QC</div>
      <h1>QuadChat</h1>
      <p>{message}</p>
      <div className="app-loading-spinner" aria-hidden="true" />
    </main>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [sessionUserId, setSessionUserId] = useState(readSessionUserId);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isProfilesReady, setIsProfilesReady] = useState(false);
  const [isInitialMessagesReady, setIsInitialMessagesReady] = useState(false);
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
  const [editingMessage, setEditingMessage] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchSearched, setSearchSearched] = useState(false);
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
  const [settingsBio, setSettingsBio] = useState("");
  const [settingsSchedule, setSettingsSchedule] = useState(createDefaultSchedule);
  const [settingsCurrentPassword, setSettingsCurrentPassword] = useState("");
  const [settingsPassword, setSettingsPassword] = useState("");
  const [settingsPhotoFile, setSettingsPhotoFile] = useState(null);
  const [settingsPhotoPreview, setSettingsPhotoPreview] = useState("");
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [appSettings, setAppSettings] = useState({ signupEnabled: true });
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
  const [analyticsTarget, setAnalyticsTarget] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [filePreview, setFilePreview] = useState(null);

  const [typingUsers, setTypingUsers] = useState({});
  const typingTimeoutRef = useRef(null);
  const typingLastWriteRef = useRef(0);

  const [activeChannel, setActiveChannel] = useState("group");
  const [dmChannels, setDmChannels] = useState([]);
  const [showNewDm, setShowNewDm] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showGamingPost, setShowGamingPost] = useState(false);
  const [gamingPostCard, setGamingPostCard] = useState(null);

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
  const knownMessageIdsByChannelRef = useRef(new Map());
  const activeNameRef = useRef("");
  const profilesRef = useRef({});
  const activeChannelRef = useRef(null);
  const searchPanelRef = useRef(null);
  const composerInputRef = useRef(null);
  const pendingJumpRef = useRef(null);
  const highlightTargetRef = useRef(null);
  const isReplyJumpLoadingRef = useRef(false);
  const hasTriggeredTopSentinelRef = useRef(false);
  const attachMenuRef = useRef(null);
  const currentSessionDocRef = useRef(null);
  const endRef = useRef(null);
  const [channelReloadKey, setChannelReloadKey] = useState(0);

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

  const dmChannelIdsKey = useMemo(
    () => dmChannels.map((dm) => dm.id).sort().join("|"),
    [dmChannels]
  );

  const scrollToBottomOfMessages = () => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  const handleNotificationOpen = (channelId) => {
    if (channelId === activeChannelRef.current) {
      scrollToBottomOfMessages();
    } else {
      setActiveChannel(channelId);
    }
  };

  const [onlineUsers] = usePresence(user);

  const {
    inAppNotifications,
    inAppToasts,
    isNotificationPanelOpen,
    setNotificationPanelOpen,
    notificationPanelRef,
    unreadNotificationCount,
    pushInAppNotification,
    dismissToast,
    markAllNotificationsRead,
    openNotification,
    openToast
  } = useNotifications({ activeChannel, onOpenChannel: handleNotificationOpen });

  const {
    callStatus,
    callPartnerName,
    callMuted,
    remoteMuted,
    incomingCall,
    isSharingScreen,
    remoteScreenStream,
    viewingScreen,
    setViewingScreen,
    screenSharedByName,
    screenShareRequest,
    remoteAudioRef,
    screenVideoRef,
    groupCallStatus,
    groupCallParticipants,
    groupCallLocalMuted,
    groupCallAudioContainerRef,
    p2pGroupCallStatus,
    p2pGroupCallHostId,
    p2pGroupCallParticipants,
    p2pGroupCallLocalMuted,
    p2pGroupCallAudioContainerRef,
    startCall,
    answerCall,
    rejectCall,
    hangUp,
    toggleCallMute,
    toggleScreenShare,
    dismissScreenShareRequest,
    toggleGroupCallMute,
    joinGroupCall,
    leaveGroupCall,
    joinP2PGroupCall,
    leaveP2PGroupCall,
    toggleP2PGroupCallMute
  } = useCalls({
    sessionUserId,
    activeName,
    user,
    pushInAppNotification,
    notificationsEnabled,
    notificationPermission,
    onCallError: (msg) => setSettingsMessage(msg)
  });

  const { confirmState, ask, closeConfirm } = useConfirmDialog();

  const joinGroupCallRef = useRef(joinGroupCall);
  joinGroupCallRef.current = joinGroupCall;
  const joinGroupCallStable = useCallback(
    (...args) => joinGroupCallRef.current?.(...args),
    []
  );

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
      setIsProfilesReady(!firebaseUser);
      setIsInitialMessagesReady(!firebaseUser);

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
    const unlockAudio = () => unlockCallAudio();
    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);
    document.addEventListener("visibilitychange", resumeCallAudio);
    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("visibilitychange", resumeCallAudio);
    };
  }, []);

  useEffect(() => {
    if (incomingCall || callStatus === "calling") {
      startCallRingtone();
    } else {
      stopCallRingtone();
    }
    return stopCallRingtone;
  }, [incomingCall, callStatus]);

  useEffect(() => {
    if (!user) return;

    const uid = user.uid;

    const sessionRef = doc(collection(db, "users", uid, "sessions"));
    currentSessionDocRef.current = sessionRef;
    setDoc(sessionRef, { start: serverTimestamp(), date: new Date().toISOString().slice(0, 10) });

    const handleBeforeUnload = () => {
      if (currentSessionDocRef.current) {
        updateDoc(currentSessionDocRef.current, { end: serverTimestamp() }).catch(() => {});
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
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
      setIsProfilesReady(false);
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
        setIsProfilesReady(true);
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
    profilesRef.current = profiles;
    activeChannelRef.current = activeChannel;
    activeNameRef.current = activeName;
  }, [profiles, activeChannel, activeName]);

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
      setIsInitialMessagesReady(false);
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

    const isRemoteJump = pendingJumpRef.current?.channelId === activeChannel;
    if (!isRemoteJump) setMessages([]);
    setHasMoreMessages(true);
    hasMoreMessagesRef.current = true;
    hasTriggeredTopSentinelRef.current = false;
    oldestDocSnapRef.current = null;
    newestDocSnapRef.current = null;

    let cancelled = false;
    let isJumpLoad = false;

    async function loadInitialMessages() {
      const ref = messagesRef(activeChannel);
      const jump = pendingJumpRef.current;
      let snapshot;
      let jumpTargetId = null;
      let hasMore = true;
      let modQueryRanges = null;

      if (jump && jump.channelId === activeChannel && jump.createdAt) {
        jumpTargetId = jump.messageId;
        pendingJumpRef.current = null;
        isJumpLoad = true;
        isReplyJumpLoadingRef.current = true;
        isNearBottomRef.current = false;
        const [beforeSnap, afterSnap, latestSnap] = await Promise.all([
          getDocs(
            query(
              ref,
              orderBy("createdAt", "desc"),
              startAt(jump.createdAt),
              limit(15)
            )
          ),
          getDocs(
            query(
              ref,
              orderBy("createdAt", "asc"),
              startAfter(jump.createdAt),
              limit(25)
            )
          ),
          getDocs(
            query(
              ref,
              orderBy("createdAt", "asc"),
              limitToLast(PAGE_SIZE)
            )
          )
        ]);
        const targetDocs = [...beforeSnap.docs.slice().reverse(), ...afterSnap.docs];
        const docsById = new Map();
        [...targetDocs, ...latestSnap.docs].forEach((messageDoc) => {
          docsById.set(messageDoc.id, messageDoc);
        });
        snapshot = {
          docs: [...docsById.values()].sort((a, b) => {
            const aTime = a.data().createdAt?.toMillis?.() || 0;
            const bTime = b.data().createdAt?.toMillis?.() || 0;
            return aTime - bTime || a.id.localeCompare(b.id);
          })
        };
        hasMore = beforeSnap.docs.length >= 15;
        modQueryRanges = [
          [targetDocs[0], targetDocs[targetDocs.length - 1]],
          [latestSnap.docs[0], latestSnap.docs[latestSnap.docs.length - 1]]
        ].filter(([first, last]) => first && last);
      } else {
        snapshot = await getDocs(
          query(
            ref,
            orderBy("createdAt", "asc"),
            limitToLast(PAGE_SIZE)
          )
        );
        hasMore = snapshot.docs.length >= PAGE_SIZE;
      }

      if (cancelled) return;

      const msgs = snapshot.docs.map((messageDoc) => ({
        id: messageDoc.id,
        ...messageDoc.data()
      }));

      setMessages(msgs);
      setIsInitialMessagesReady(true);
      if (jumpTargetId) {
        highlightTargetRef.current = jumpTargetId;
      } else {
        setTimeout(() => {
          const el = messagesContainerRef.current;
          if (el) el.scrollTop = el.scrollHeight;
        }, 0);
      }
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
                next[existingIndex] = { ...next[existingIndex], ...msg, pending: false };
                return next;
              });
              if (change.type === "added") {
                const messageVisible =
                  !document.hidden && document.hasFocus() && isNearBottomRef.current;
                if (
                  isDmChannelId(activeChannel) &&
                  msg.userId !== sessionUserId &&
                  !messageVisible
                ) {
                  playDmReceiveSound();
                }
                newestDocSnapRef.current = change.doc;
              }
            });
          },
          (firebaseError) => {
            if (!cancelled) setError(firebaseError.message);
          }
        );
      }

      const fallbackModRange = [oldestDocSnapRef.current, newestDocSnapRef.current];
      const modUnsubs = (modQueryRanges || [fallbackModRange]).map(([first, last]) =>
        onSnapshot(
          first && last
            ? query(ref, orderBy("createdAt", "asc"), startAfter(first), endAt(last))
            : query(ref, orderBy("createdAt", "asc"), limitToLast(PAGE_SIZE)),
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
                next[existingIndex] = { ...next[existingIndex], ...msg, pending: false };
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
                next[idx] = { ...next[idx], ...msg, pending: false };
                return next;
              });
            } else if (change.type === "removed") {
              setMessages((prev) => prev.filter((m) => m.id !== change.doc.id));
            }
          });
        }
        )
      );

      if (cancelled) return;
      newMessagesUnsubRef.current = () => {
        if (unsubNew) unsubNew();
        modUnsubs.forEach((unsub) => unsub());
      };
    }

    loadInitialMessages();

    return () => {
      cancelled = true;
      if (isJumpLoad) isReplyJumpLoadingRef.current = false;

      if (newMessagesUnsubRef.current) {
        newMessagesUnsubRef.current();
        newMessagesUnsubRef.current = null;
      }
    };
  }, [user, activeChannel, channelReloadKey]);

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
    if (!user || !sessionUserId) return;

    const missedCallsRef = rtdbRef(rtdb, `missed-calls/${sessionUserId}`);
    const seenMissedCallsRef = new Set();

    const unsub = onChildAdded(missedCallsRef, (snap) => {
      const missed = snap.val();
      const callKey = snap.key;
      if (!missed || !callKey || seenMissedCallsRef.has(callKey)) return;
      seenMissedCallsRef.add(callKey);
      pushInAppNotification({
        type: "missed-call",
        channelId: null,
        channelLabel: null,
        senderName: missed.callerName || "Someone",
        body: "missed your call",
        id: `missed-call-${callKey}`
      });
      remove(rtdbRef(rtdb, `missed-calls/${sessionUserId}/${callKey}`)).catch(() => {});
    });

    return () => unsub();
  }, [user, sessionUserId, pushInAppNotification]);

  useEffect(() => {
    if (isNearBottomRef.current && !highlightTargetRef.current) {
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
    const targetId = highlightTargetRef.current;
    if (!targetId) return;
    const el = document.getElementById(`msg-${targetId}`);
    if (!el) {
      isReplyJumpLoadingRef.current = false;
      return;
    }
    highlightTargetRef.current = null;
    const isRemoteJump = isReplyJumpLoadingRef.current;
    el.scrollIntoView({ behavior: isRemoteJump ? "auto" : "smooth", block: "center" });
    el.classList.add("message-highlight");
    setTimeout(() => el.classList.remove("message-highlight"), 2500);
    if (isRemoteJump) {
      requestAnimationFrame(() => {
        isReplyJumpLoadingRef.current = false;
      });
    }
  }, [messages, activeChannel, channelReloadKey]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const container = messagesContainerRef.current;
    if (!sentinel || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          hasTriggeredTopSentinelRef.current = false;
          return;
        }
        if (
          !hasTriggeredTopSentinelRef.current &&
          !isReplyJumpLoadingRef.current
        ) {
          hasTriggeredTopSentinelRef.current = true;
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

  useEffect(() => {
    if (!searchOpen) return;
    function handleClick(e) {
      if (searchPanelRef.current && !searchPanelRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [searchOpen]);

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
    if (!user || !sessionUserId) return;

    const watcherChannels = [
      ...CHANNELS.map((channel) => ({ id: channel.id, label: channel.label })),
      ...dmChannels.map((dm) => ({
        id: dm.id,
        label: getDmPartnerName(dm, profilesRef.current, sessionUserId)
      }))
    ].filter(({ id }) => id !== activeChannelRef.current);

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
            if (isDmChannelId(channelId)) {
              playDmReceiveSound();
            }
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
  }, [user, sessionUserId, dmChannelIdsKey, activeChannel]);

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
        const overwrite = await ask(
          "You already have a profile picture. Replace it with your Google account picture?",
          { title: "Replace profile picture?", confirmLabel: "Replace" }
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

    const confirmed = await ask(
      "Unlink Google from this account? You can link a different Google account later.",
      { title: "Unlink Google?", confirmLabel: "Unlink" }
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

    const confirmed = await ask(
      "Remove password sign-in from this account? You will no longer be able to sign in with a password.",
      { title: "Remove password sign-in?", confirmLabel: "Remove" }
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
    setSettingsBio(currentProfile?.bio || "");
    setSettingsSchedule(normalizeSchedule(currentProfile?.schedule));
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
      const url = await uploadToCloudinary(settingsPhotoFile, "profile");
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
    const confirmed = await ask("Remove your profile picture?", {
      title: "Remove profile picture?",
      confirmLabel: "Remove"
    });
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

    if (!user) {
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
      await setDoc(
        doc(db, "users", user.uid),
        { bio: settingsBio.trim(), schedule: settingsSchedule },
        { merge: true }
      );

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

    const confirmed = await ask("Remove this account? This cannot be undone.", {
      title: "Remove account?",
      confirmLabel: "Remove account"
    });

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

        setError("Files must be 50 MB or smaller.");
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

    if (!["?mute", "?unmute", "?warn", "?unwarn", "?purge"].includes(command)) {
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

    if (command === "?purge") {
      const count = parseInt(parts[1], 10);
      const offset = parts[2] ? parseInt(parts[2], 10) : 0;

      if (!Number.isInteger(count) || count <= 0) {
        setError("Use ?purge <count> [offset]. Count must be a positive number.");
        return { handled: true };
      }
      if (!Number.isInteger(offset) || offset < 0) {
        setError("Use ?purge <count> [offset]. Offset must be a non-negative number.");
        return { handled: true };
      }

      const skipText = offset > 0 ? `, skipping the ${offset} newest` : "";
      const confirmed = await ask(
        `Are you sure you want to purge the ${count} newest message${count === 1 ? "" : "s"}${skipText}?`,
        { title: "Purge messages?", confirmLabel: "Purge" }
      );
      if (!confirmed) {
        setError("Purge cancelled.");
        return { handled: true };
      }

      const total = count + offset;
      const q = query(
        messagesRef(activeChannel),
        orderBy("createdAt", "desc"),
        limit(total)
      );
      const snap = await getDocs(q);
      const toDelete = snap.docs.slice(offset, total);

      for (const messageDoc of toDelete) {
        await deleteDoc(doc(db, "messages", activeChannel, "messages", messageDoc.id));
      }

      setError("");
      const adminName = getProfileName(currentProfile, activeName);
      return {
        handled: false,
        metadata: {
          adminCommand: true,
          command,
          commandTarget: `${toDelete.length} message${toDelete.length === 1 ? "" : "s"} (offset ${offset})`,
          notificationText: `🧹 ${adminName} purged ${toDelete.length} message${toDelete.length === 1 ? "" : "s"}${offset > 0 ? ` (skipping ${offset} newest)` : ""}`
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
      setError("Voice message is too large (max 50 MB).");
      return;
    }

    if (activeChannel === "updates" && !isCurrentUserDeveloper) {
      setError("Only developers can post in Updates.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const url = await uploadToCloudinary(file, "voice");
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
    if (
      isReplyJumpLoadingRef.current ||
      isLoadingMoreRef.current ||
      !hasMoreMessagesRef.current ||
      !oldestDocSnapRef.current
    ) return;

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

  const handleRsvp = useCallback(async (messageId, status, customText) => {
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
  }, [sessionUserId, activeChannel, activeName]);

  const handleToggleReaction = useCallback(async (item, emoji) => {
    if (!sessionUserId || !activeChannel || !item?.id || typeof emoji !== "string") return;
    const messageRef = doc(db, "messages", activeChannel, "messages", item.id);
    const current = item.reactions?.[sessionUserId];
    try {
      await updateDoc(
        messageRef,
        current === emoji
          ? { [`reactions.${sessionUserId}`]: deleteField() }
          : { [`reactions.${sessionUserId}`]: emoji }
      );
    } catch {
      // reactions are best-effort; no user-facing error needed
    }
  }, [sessionUserId, activeChannel]);

  const handleDeleteMessage = useCallback(async (messageId) => {
    const confirmed = await ask("Are you sure you want to delete this message?", {
      title: "Delete message?",
      confirmLabel: "Delete"
    });
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "messages", activeChannel, "messages", messageId));
    } catch (firebaseError) {
      setError(firebaseError.message);
    }
  }, [ask, activeChannel]);

  const startEditMessage = useCallback((item) => {
    setOpenMessageMenuId("");
    setReplyTo(null);
    setEditingMessage({ id: item.id, text: typeof item.text === "string" ? item.text : "" });
    setMessage(typeof item.text === "string" ? item.text : "");
    setTimeout(() => composerInputRef.current?.focus(), 0);
  }, []);

  async function runSearch() {
    const queryText = searchQuery.trim().toLowerCase();
    if (!queryText || !user) return;
    setSearching(true);
    setSearchSearched(true);
    try {
      const channelIds = [
        ...CHANNELS.map((channel) => channel.id),
        ...dmChannels.map((dm) => dm.id)
      ];
      const groups = [];
      for (const channelId of channelIds) {
        const ref = messagesRef(channelId);
        const snap = await getDocs(
          query(ref, orderBy("createdAt", "desc"), limit(2000))
        );
        const matched = [];
        for (const messageDoc of snap.docs) {
          const data = messageDoc.data();
          if (typeof data.text === "string" && data.text.toLowerCase().includes(queryText)) {
            matched.push({ id: messageDoc.id, ...data });
          }
          if (matched.length >= 30) break;
        }
        if (matched.length === 0) continue;
        const label = isDmChannelId(channelId)
          ? getDmPartnerName(
              dmChannels.find((dm) => dm.id === channelId) || { participants: [] },
              profiles,
              sessionUserId
            )
          : CHANNELS.find((channel) => channel.id === channelId)?.label || channelId;
        groups.push({ channelId, label, messages: matched });
      }
      setSearchResults(groups);
    } catch (firebaseError) {
      setError(firebaseError.message);
    } finally {
      setSearching(false);
    }
  }

  function jumpToSearchResult(group, msg) {
    if (!msg.createdAt) return;
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setSearchSearched(false);
    pendingJumpRef.current = {
      channelId: group.channelId,
      messageId: msg.id,
      createdAt: msg.createdAt
    };
    if (group.channelId !== activeChannel) {
      setActiveChannel(group.channelId);
    }
    setChannelReloadKey((key) => key + 1);
  }

  const jumpToReply = useCallback(async (replyTo) => {
    const targetId = replyTo?.id;
    if (!targetId || !user) return;
    const existing = document.getElementById(`msg-${targetId}`);
    if (existing) {
      isNearBottomRef.current = false;
      existing.scrollIntoView({ behavior: "smooth", block: "center" });
      existing.classList.add("message-highlight");
      setTimeout(() => existing.classList.remove("message-highlight"), 2500);
      return;
    }
    try {
      const targetSnap = await getDoc(
        doc(db, "messages", activeChannel, "messages", targetId)
      );
      if (!targetSnap.exists()) return;
      const target = targetSnap.data();
      if (!target.createdAt) return;
      isNearBottomRef.current = false;
      pendingJumpRef.current = {
        channelId: activeChannel,
        messageId: targetId,
        createdAt: target.createdAt
      };
      setChannelReloadKey((key) => key + 1);
    } catch (firebaseError) {
      setError(firebaseError.message);
    }
  }, [user, activeChannel]);

  async function addMessageWithOptimisticState(data) {
    const messageRef = doc(messagesRef(activeChannel));
    const optimisticMessage = {
      id: messageRef.id,
      ...data,
      createdAt: Timestamp.now(),
      pending: true
    };
    setMessages((prev) => [...prev, optimisticMessage]);

    try {
      await setDoc(messageRef, {
        ...data,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      setMessages((prev) => prev.filter((message) => message.id !== messageRef.id));
      throw error;
    }
  }

  async function sendMessage(event) {
    event.preventDefault();

    if (isRecording || isRecordingPaused) {
      stopRecording(true);
      return;
    }

    if (editingMessage) {
      const cleanEdit = message.trim();
      if (isSending || !sessionUserId || !activeName) return;
      if (!cleanEdit) {
        setEditingMessage(null);
        setMessage("");
        return;
      }
      setIsSending(true);
      setError("");
      try {
        await updateDoc(
          doc(db, "messages", activeChannel, "messages", editingMessage.id),
          {
            text: cleanEdit,
            edited: true,
            editedAt: serverTimestamp()
          }
        );
      } catch (firebaseError) {
        setError(
          firebaseError.code === "permission-denied"
            ? "Firestore rules blocked this edit."
            : firebaseError.message
        );
      } finally {
        setIsSending(false);
        setEditingMessage(null);
        setMessage("");
      }
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
        await addMessageWithOptimisticState({
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
          userId: sessionUserId
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

  function handleComposerChange(value) {
    setMessage(value);
    if (!sessionUserId || !activeChannel) return;
    const now = Date.now();
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      remove(rtdbRef(rtdb, `typing/${activeChannel}/${sessionUserId}`)).catch(() => {});
    }, 3000);
    if (now - typingLastWriteRef.current < 2000) return;
    typingLastWriteRef.current = now;
    set(rtdbRef(rtdb, `typing/${activeChannel}/${sessionUserId}`), { isTyping: true, name: activeName, timestamp: now }).catch(() => {});
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

  const saveStatus = async () => {
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
  };

  const openGamingPost = () => {
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
  };

  if (!isAuthReady) {
    return <AppLoadingScreen message="Checking your session…" />;
  }

  if (user && (!isProfilesReady || !isInitialMessagesReady)) {
    return <AppLoadingScreen message="Loading your chat…" />;
  }

  return (
    <main className={`app-shell${isSettingsOpen && user ? " app-shell--settings" : ""}`}>
      {isSettingsOpen && user ? null : !isAuthReady || !user ? (
        <AuthScreen
          isAuthReady={isAuthReady}
          authView={authView}
          setAuthView={setAuthView}
          appSettings={appSettings}
          draftName={draftName}
          setDraftName={setDraftName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          pendingEmailLinkEmail={pendingEmailLinkEmail}
          setPendingEmailLinkEmail={setPendingEmailLinkEmail}
          emailLinkError={emailLinkError}
          error={error}
          setError={setError}
          handleAuth={handleAuth}
          signInWithGoogle={signInWithGoogle}
          handleEmailLinkSignIn={handleEmailLinkSignIn}
        />
      ) : (
        <section className="chat-panel" aria-label="QuadChat room">
          <ChannelSidebar
            activeChannel={activeChannel}
            setActiveChannel={setActiveChannel}
            dmChannels={dmChannels}
            profiles={profiles}
            sessionUserId={sessionUserId}
            setShowNewDm={setShowNewDm}
          />
          <div className="chat-main">
            <ChatHeader
              activeName={activeName}
              showVersionInHeader={showVersionInHeader}
              isCurrentUserDeveloper={isCurrentUserDeveloper}
              isCurrentUserAdmin={isCurrentUserAdmin}
              currentProfile={currentProfile}
              isDmChannel={isDmChannelId(activeChannel)}
              groupCallStatus={groupCallStatus}
              p2pGroupCallStatus={p2pGroupCallStatus}
              groupCallParticipants={groupCallParticipants}
              p2pGroupCallParticipants={p2pGroupCallParticipants}
              onToggleGroupCall={
                groupCallStatus === "idle" && p2pGroupCallStatus === "idle"
                  ? joinGroupCall
                  : leaveGroupCall
              }
              searchPanelRef={searchPanelRef}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              runSearch={runSearch}
              searching={searching}
              searchSearched={searchSearched}
              searchResults={searchResults}
              profiles={profiles}
              jumpToSearchResult={jumpToSearchResult}
              notificationPanelRef={notificationPanelRef}
              isNotificationPanelOpen={isNotificationPanelOpen}
              setNotificationPanelOpen={setNotificationPanelOpen}
              unreadNotificationCount={unreadNotificationCount}
              inAppNotifications={inAppNotifications}
              markAllNotificationsRead={markAllNotificationsRead}
              openNotification={openNotification}
              user={user}
              signOut={signOut}
              isProfileMenuOpen={isProfileMenuOpen}
              setIsProfileMenuOpen={setIsProfileMenuOpen}
              setStatusModalOpen={setStatusModalOpen}
              openSettings={openSettings}
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
              toggleNotifications={toggleNotifications}
              notificationsEnabled={notificationsEnabled}
            />

            {error ? (
              <div className="error-banner" role="alert">
                <AlertCircle size={16} className="banner-icon" />
                <span>{error}</span>
              </div>
            ) : null}
            {muteLabel ? (
              <div className="warning-banner" role="alert">
                <AlertTriangle size={16} className="banner-icon" />
                <span>{muteLabel}</span>
              </div>
            ) : null}
            {warningLabel ? (
              <div className="warning-banner" role="alert">
                <AlertTriangle size={16} className="banner-icon" />
                <span>{warningLabel}</span>
              </div>
            ) : null}

            <ScreenShareRequestBanner
              screenShareRequest={screenShareRequest}
              onStopSharing={dismissScreenShareRequest}
            />

            <StatusModal
              statusModalOpen={statusModalOpen}
              setStatusModalOpen={setStatusModalOpen}
              editStatus={editStatus}
              setEditStatus={setEditStatus}
              scheduledBusy={scheduledBusy}
              setScheduledBusy={setScheduledBusy}
              saveStatus={saveStatus}
            />

            <NewDmModal
              showNewDm={showNewDm}
              setShowNewDm={setShowNewDm}
              profiles={profiles}
              sessionUserId={sessionUserId}
              openDm={openDm}
            />

            <AnalyticsModal
              analyticsTarget={analyticsTarget}
              onClose={() => { setAnalyticsTarget(null); setAnalyticsData(null); }}
              analyticsData={analyticsData}
              analyticsLoading={analyticsLoading}
            />

            <IncomingCallModal
              incomingCall={incomingCall}
              rejectCall={rejectCall}
              answerCall={answerCall}
            />

            {callStatus === "connected" || callStatus === "calling" ? (
              <ActiveCallBar
                callStatus={callStatus}
                callPartnerName={callPartnerName}
                remoteMuted={remoteMuted}
                remoteScreenStream={remoteScreenStream}
                isSharingScreen={isSharingScreen}
                viewingScreen={viewingScreen}
                setViewingScreen={setViewingScreen}
                callMuted={callMuted}
                toggleCallMute={toggleCallMute}
                toggleScreenShare={toggleScreenShare}
                hangUp={hangUp}
                remoteAudioRef={remoteAudioRef}
              />
            ) : null}

            {groupCallStatus === "connected" ? (
              <GroupCallBar
                audioContainerRef={groupCallAudioContainerRef}
                isP2P={false}
                participants={groupCallParticipants}
                remoteScreenStream={remoteScreenStream}
                isSharingScreen={isSharingScreen}
                viewingScreen={viewingScreen}
                setViewingScreen={setViewingScreen}
                localMuted={groupCallLocalMuted}
                toggleMute={toggleGroupCallMute}
                toggleScreenShare={toggleScreenShare}
                onLeave={leaveGroupCall}
              />
            ) : p2pGroupCallStatus === "connected" ? (
              <GroupCallBar
                audioContainerRef={p2pGroupCallAudioContainerRef}
                isP2P
                hostId={p2pGroupCallHostId}
                participants={p2pGroupCallParticipants}
                remoteScreenStream={remoteScreenStream}
                isSharingScreen={isSharingScreen}
                viewingScreen={viewingScreen}
                setViewingScreen={setViewingScreen}
                localMuted={p2pGroupCallLocalMuted}
                toggleMute={toggleP2PGroupCallMute}
                toggleScreenShare={toggleScreenShare}
                onLeave={leaveP2PGroupCall}
              />
            ) : null}

            <div className="chat-body">
              {viewingScreen && remoteScreenStream ? (
                <ScreenViewer
                  screenSharedByName={screenSharedByName}
                  onBack={() => setViewingScreen(false)}
                  screenVideoRef={screenVideoRef}
                />
              ) : (
                <div className="messages" ref={messagesContainerRef} role="log" aria-live="polite">
                  <MessageList
                    activeChannel={activeChannel}
                    isCurrentUserDeveloper={isCurrentUserDeveloper}
                    isCurrentUserAdmin={isCurrentUserAdmin}
                    messages={messages}
                    isLoadingMore={isLoadingMore}
                    hasMoreMessages={hasMoreMessages}
                    sentinelRef={sentinelRef}
                    profiles={profiles}
                    sessionUserId={sessionUserId}
                    activeName={activeName}
                    openMessageMenuId={openMessageMenuId}
                    setOpenMessageMenuId={setOpenMessageMenuId}
                    setReplyTo={setReplyTo}
                    startEditMessage={startEditMessage}
                    handleDeleteMessage={handleDeleteMessage}
                    handleRsvp={handleRsvp}
                    handleToggleReaction={handleToggleReaction}
                    joinGroupCall={joinGroupCallStable}
                    onJumpToMessage={jumpToReply}
                    onPreviewFile={setFilePreview}
                    dmPartnerName={dmPartnerName}
                    isDmChannel={isDmChannelId(activeChannel)}
                  />
                  {Object.keys(typingUsers).length > 0 ? (
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
                  ) : null}
                  <div ref={endRef} />
                </div>
              )}
              <UsersSidebar
                profiles={profiles}
                sessionUserId={sessionUserId}
                onlineUsers={onlineUsers}
                openUserAnalytics={openUserAnalytics}
                openDm={openDm}
                startCall={startCall}
                callStatus={callStatus}
                toggleUserMute={toggleUserMute}
                isCurrentUserAdmin={isCurrentUserAdmin}
                groupCallStatus={groupCallStatus}
                groupCallParticipants={groupCallParticipants}
                p2pGroupCallStatus={p2pGroupCallStatus}
                p2pGroupCallParticipants={p2pGroupCallParticipants}
              />
            </div>

            <Composer
              editingMessage={editingMessage}
              onCancelEdit={() => { setEditingMessage(null); setMessage(""); }}
              replyTo={replyTo}
              setReplyTo={setReplyTo}
              pendingFiles={pendingFiles}
              removePendingFile={removePendingFile}
              onGamingPost={openGamingPost}
              isRecording={isRecording}
              isRecordingPaused={isRecordingPaused}
              cancelRecording={cancelRecording}
              pauseRecording={pauseRecording}
              resumeRecording={resumeRecording}
              startRecording={startRecording}
              recordingDuration={recordingDuration}
              isSending={isSending}
              message={message}
              onChange={handleComposerChange}
              handleComposerPaste={handleComposerPaste}
              onSubmit={sendMessage}
              supportsRecording={supportsRecording}
              canPostInActiveChannel={canPostInActiveChannel}
              isDmChannel={isDmChannelId(activeChannel)}
              dmPartnerName={dmPartnerName}
              activeName={activeName}
              isCurrentUserAdmin={isCurrentUserAdmin}
              isProfileMuted={isProfileMuted}
              currentProfile={currentProfile}
              maxAttachments={maxAttachments}
              attachMenuRef={attachMenuRef}
              showAttachMenu={showAttachMenu}
              setShowAttachMenu={setShowAttachMenu}
              fileInputRef={fileInputRef}
              addPendingFiles={addPendingFiles}
              composerInputRef={composerInputRef}
              sessionUserId={sessionUserId}
              profiles={profiles}
              isDarkTheme={isDarkTheme}
            />
          </div>
        </section>
      )}
      {isSettingsOpen && user ? (
        <SettingsPage
          onClose={() => setIsSettingsOpen(false)}
          settingsTab={settingsTab}
          setSettingsTab={setSettingsTab}
          isCurrentUserAdmin={isCurrentUserAdmin}
          user={user}
          activeName={activeName}
          settingsName={settingsName}
          setSettingsName={setSettingsName}
          settingsBio={settingsBio}
          setSettingsBio={setSettingsBio}
          settingsSchedule={settingsSchedule}
          setSettingsSchedule={setSettingsSchedule}
          settingsPhotoPreview={settingsPhotoPreview}
          settingsPhotoFile={settingsPhotoFile}
          handlePhotoFileChange={handlePhotoFileChange}
          uploadProfilePicture={uploadProfilePicture}
          clearPendingPhoto={clearPendingPhoto}
          removeProfilePicture={removeProfilePicture}
          isUploadingPhoto={isUploadingPhoto}
          isSavingSettings={isSavingSettings}
          settingsMessage={settingsMessage}
          settingsCurrentPassword={settingsCurrentPassword}
          setSettingsCurrentPassword={setSettingsCurrentPassword}
          settingsPassword={settingsPassword}
          setSettingsPassword={setSettingsPassword}
          saveSettings={saveSettings}
          hasGoogleProvider={hasGoogleProvider}
          hasEmailProvider={hasEmailProvider}
          linkGoogleAccount={linkGoogleAccount}
          unlinkGoogleAccount={unlinkGoogleAccount}
          unlinkPassword={unlinkPassword}
          removeAccount={removeAccount}
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          uiScale={uiScale}
          setUiScale={setUiScale}
          reduceMotion={reduceMotion}
          setReduceMotion={setReduceMotion}
          toggleNotifications={toggleNotifications}
          notificationsEnabled={notificationsEnabled}
          showVersionInHeader={showVersionInHeader}
          setShowVersionInHeader={setShowVersionInHeader}
          appSettings={appSettings}
          toggleSignup={toggleSignup}
          magicLinkEmail={magicLinkEmail}
          setMagicLinkEmail={setMagicLinkEmail}
          generateMagicLink={generateMagicLink}
          isGeneratingLink={isGeneratingLink}
          magicLinkError={magicLinkError}
          magicLinkUrl={magicLinkUrl}
          copyMagicLink={copyMagicLink}
          profiles={profiles}
        />
      ) : null}
      <FilePreviewModal file={filePreview} onClose={() => setFilePreview(null)} />
      <ConfirmDialog
        state={confirmState}
        onConfirm={() => closeConfirm(true)}
        onCancel={() => closeConfirm(false)}
      />
      <GamingPostModal
        showGamingPost={showGamingPost}
        setShowGamingPost={setShowGamingPost}
        gamingPostCard={gamingPostCard}
        setGamingPostCard={setGamingPostCard}
        onSend={async () => {
          await addMessageWithOptimisticState({
            ...gamingPostCard,
            userId: sessionUserId
          });
          setShowGamingPost(false);
          setGamingPostCard(null);
        }}
      />
      <ToastContainer toasts={inAppToasts} onOpen={openToast} onDismiss={dismissToast} />
    </main>
  );
}
