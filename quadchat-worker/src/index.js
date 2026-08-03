export default {
  async fetch(request, env, ctx) {
    // Route WebSocket upgrades to our Durable Object
    if (request.headers.get("Upgrade") === "websocket") {
      // Use a single global room instance to track online status across users
      const id = env.PRESENCE.idFromName("global-presence");
      const stub = env.PRESENCE.get(id);
      return stub.fetch(request);
    }

    return new Response("QuadChat Presence Server running!", { status: 200 });
  },
};

export class PresenceServer {
  constructor(state, env) {
    this.state = state;
    this.sessions = new Map(); // Maps WebSocket -> userId
  }

  async fetch(request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return new Response("Missing userId query parameter", { status: 400 });
    }

    // Set up WebSocket connection
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    this.handleSession(server, userId);

    return new Response(null, { status: 101, webSocket: client });
  }

  handleSession(webSocket, userId) {
    webSocket.accept();
    this.sessions.set(webSocket, userId);

    // 🔴 1. Broadcast "ONLINE" event to everyone
    this.broadcast({ type: "presence", userId: userId, status: "online" });

    // Send the joining user a list of currently connected users
    const onlineUsers = Array.from(new Set(this.sessions.values()));
    webSocket.send(JSON.stringify({ type: "sync", onlineUsers }));

    const handleDisconnect = () => {
      if (this.sessions.has(webSocket)) {
        this.sessions.delete(webSocket);
        
        // Check if user has no remaining active connections (e.g. closed all tabs)
        const isStillConnected = Array.from(this.sessions.values()).includes(userId);
        if (!isStillConnected) {
          // 🔴 2. Broadcast "OFFLINE" event
          this.broadcast({ type: "presence", userId: userId, status: "offline" });
        }
      }
    };

    webSocket.addEventListener("close", handleDisconnect);
    webSocket.addEventListener("error", handleDisconnect);
  }

  broadcast(data) {
    const payload = JSON.stringify(data);
    for (const [ws] of this.sessions) {
      try {
        ws.send(payload);
      } catch (err) {
        this.sessions.delete(ws);
      }
    }
  }
}
