import { useEffect, useState } from "react";

export function usePresence(user) {
  const [onlineUsers, setOnlineUsers] = useState(new Set());

  useEffect(() => {
    if (!user) {
      setOnlineUsers(new Set());
      return;
    }

    const presenceUrl = import.meta.env.VITE_PRESENCE_WORKER_URL;
    if (!presenceUrl) return;

    let ws = null;
    let reconnectTimeout = null;
    let reconnectAttempt = 0;
    const maxReconnectDelay = 30000;
    let closed = false;
    let pingInterval = null;

    function clearPingInterval() {
      if (pingInterval) {
        clearInterval(pingInterval);
        pingInterval = null;
      }
    }

    async function connect() {
      if (closed) return;
      try {
        const token = await user.getIdToken();
        const wsUrl = `${presenceUrl}?token=${encodeURIComponent(token)}`;
        ws = new WebSocket(wsUrl);
      } catch (e) {
        if (!closed) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempt), maxReconnectDelay);
          reconnectAttempt++;
          reconnectTimeout = setTimeout(connect, delay);
        }
        return;
      }

      ws.onopen = () => {
        reconnectAttempt = 0;
        clearPingInterval();
        pingInterval = setInterval(() => {
          if (ws?.readyState !== WebSocket.OPEN) {
            clearPingInterval();
            return;
          }
          ws.send(JSON.stringify({ type: "ping" }));
        }, 10000);
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
          }
        } catch (e) {
          console.error("Presence WS parse error:", e);
        }
      };

      ws.onclose = () => {
        clearPingInterval();
        if (!closed) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempt), maxReconnectDelay);
          reconnectAttempt++;
          reconnectTimeout = setTimeout(connect, delay);
        }
      };

      ws.onerror = () => {
        clearPingInterval();
        ws.close();
      };
    }

    connect();

    return () => {
      closed = true;
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
      clearPingInterval();
      if (ws) ws.close();
    };
  }, [user]);

  return [onlineUsers, setOnlineUsers];
}
