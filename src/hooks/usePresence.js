import { useEffect, useState } from "react";

export function usePresence(user) {
  const [onlineUsers, setOnlineUsers] = useState(new Set());
  const [presenceReady, setPresenceReady] = useState(false);
  const [richPresence, setRichPresence] = useState({});

  useEffect(() => {
    if (!user) {
      setOnlineUsers(new Set());
      setPresenceReady(false);
      setRichPresence({});
      return;
    }

    const presenceUrl = import.meta.env.VITE_PRESENCE_WORKER_URL;
    if (!presenceUrl) {
      setPresenceReady(false);
      return;
    }

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
        ws = new WebSocket(presenceUrl);
        ws.onopen = () => {
          ws.send(JSON.stringify({ type: "auth", token }));
        };
      } catch (e) {
        if (!closed) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempt), maxReconnectDelay);
          reconnectAttempt++;
          reconnectTimeout = setTimeout(connect, delay);
        }
        return;
      }

      let authenticated = false;

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "sync") {
            authenticated = true;
            reconnectAttempt = 0;
            clearPingInterval();
            setOnlineUsers(new Set(data.onlineUsers));
            setRichPresence(data.richPresence && typeof data.richPresence === "object" ? data.richPresence : {});
            setPresenceReady(true);
            pingInterval = setInterval(() => {
              if (ws?.readyState !== WebSocket.OPEN || !authenticated) {
                clearPingInterval();
                return;
              }
              ws.send(JSON.stringify({ type: "ping" }));
            }, 10000);
          } else if (data.type === "presence") {
            if (!authenticated) return;
            setOnlineUsers((prev) => {
              const next = new Set(prev);
              if (data.status === "online") {
                next.add(data.userId);
              } else {
                next.delete(data.userId);
              }
              return next;
            });
          } else if (data.type === "rich_presence") {
            if (!authenticated || typeof data.userId !== "string") return;
            setRichPresence((previous) => {
              const next = { ...previous };
              if (data.game && typeof data.game === "object") next[data.userId] = data.game;
              else delete next[data.userId];
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

  return [onlineUsers, setOnlineUsers, presenceReady, richPresence];
}
