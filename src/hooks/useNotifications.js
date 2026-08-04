import { useCallback, useEffect, useRef, useState } from "react";
import { timeAgo } from "../utils/format.js";

export function useNotifications({ activeChannel, onOpenChannel }) {
  const [inAppNotifications, setInAppNotifications] = useState([]);
  const [inAppToasts, setInAppToasts] = useState([]);
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const notificationPanelRef = useRef(null);
  const notificationIdsRef = useRef(new Set());
  const toastIdsRef = useRef(new Set());
  const toastTimersRef = useRef(new Map());

  const dismissToast = (id) => {
    setInAppToasts((prev) => prev.filter((toast) => toast.id !== id));
    if (toastTimersRef.current.has(id)) {
      window.clearTimeout(toastTimersRef.current.get(id));
      toastTimersRef.current.delete(id);
    }
  };

  const pushInAppNotification = useCallback(
    ({
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
    },
    []
  );

  const markAllNotificationsRead = () => {
    setInAppNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  const openNotification = (notification) => {
    setInAppNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
    );
    setNotificationPanelOpen(false);
    if (notification.channelId) {
      onOpenChannel(notification.channelId);
    }
  };

  const openToast = (toast) => {
    dismissToast(toast.id);
    if (toast.channelId) {
      onOpenChannel(toast.channelId);
    }
  };

  useEffect(
    () => () => {
      toastTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      toastTimersRef.current.clear();
    },
    []
  );

  const unreadNotificationCount = inAppNotifications.filter((n) => !n.read).length;

  return {
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
  };
}

export function formatNotificationAge(createdAt) {
  return timeAgo(createdAt);
}
