import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";
import {
  LogOut,
  MessageCircle,
  Send,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { db } from "../firebase.js";

const messagesRef = collection(db, "messages");
const authMode = import.meta.env.VITE_AUTH_MODE || "memory";

function formatTime(timestamp) {
  if (!timestamp?.toDate) {
    return "sending";
  }

  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit"
  }).format(timestamp.toDate());
}

export default function App() {
  const [user, setUser] = useState(null);
  const [draftName, setDraftName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);

  const activeName = useMemo(() => user?.name?.trim() || "", [user]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  function signIn(event) {
    event.preventDefault();
    const cleanName = draftName.trim();

    if (!cleanName) {
      return;
    }

    setUser({
      id: crypto.randomUUID(),
      name: cleanName,
      mode: authMode
    });
    setDraftName("");
    setError("");
  }

  function signOut() {
    setUser(null);
    setDraftName("");
    setMessage("");
    setError("");
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
      await addDoc(messagesRef, {
        text: cleanMessage,
        name: activeName,
        createdAt: serverTimestamp()
      });
      setMessage("");
    } catch (firebaseError) {
      setError(firebaseError.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="app-shell">
      {!user ? (
        <section className="signin-panel" aria-label="Sign in to QuadChat">
          <div className="signin-brand">
            <div className="brand-mark" aria-hidden="true">
              <MessageCircle size={28} strokeWidth={2.3} />
            </div>
            <div>
              <h1>QuadChat</h1>
              <p>Sign in with a test display name to start chatting.</p>
            </div>
          </div>

          <form className="signin-form" onSubmit={signIn}>
            <label htmlFor="signin-name">
              <UserRound size={18} />
              <span>Display name</span>
            </label>
            <input
              id="signin-name"
              type="text"
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              placeholder="Enter your name"
              autoComplete="off"
              maxLength={32}
            />
            <button type="submit" disabled={!draftName.trim()}>
              Sign in
            </button>
          </form>

          <div className="mode-note">
            <ShieldCheck size={18} />
            <span>
              Testing mode: username is stored in memory and clears on refresh.
            </span>
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
        </header>

        {error ? <div className="error-banner">{error}</div> : null}

        <div className="messages" role="log" aria-live="polite">
          {messages.length === 0 ? (
            <div className="empty-state">
              <MessageCircle size={42} />
              <p>No messages yet. Say hello when you are ready.</p>
            </div>
          ) : (
            messages.map((item) => {
              const isMine = item.name === activeName;

              return (
                <article
                  className={`message ${isMine ? "message-mine" : ""}`}
                  key={item.id}
                >
                  <div className="message-meta">
                    <strong>{item.name || "Anonymous"}</strong>
                    <span>{formatTime(item.createdAt)}</span>
                  </div>
                  <p>{item.text}</p>
                </article>
              );
            })
          )}
          <div ref={endRef} />
        </div>

        <form className="composer" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type a message"
            maxLength={500}
          />
          <button
            type="submit"
            aria-label="Send message"
            title="Send message"
            disabled={!message.trim() || !activeName || isSending}
          >
            <Send size={20} />
          </button>
        </form>
      </section>
      )}
    </main>
  );
}
