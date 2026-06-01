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
  KeyRound,
  LogOut,
  MessageCircle,
  Send,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { db } from "../firebase.js";

const messagesRef = collection(db, "messages");
const authMode = import.meta.env.VITE_AUTH_MODE || "browser";
const usersStorageKey = "quadchat:users";
const sessionStorageKey = "quadchat:current-user";

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function getStoredUser() {
  return readJson(sessionStorageKey, null);
}

function getStoredUsers() {
  return readJson(usersStorageKey, {});
}

function saveStoredUsers(users) {
  localStorage.setItem(usersStorageKey, JSON.stringify(users));
}

function saveSession(user) {
  localStorage.setItem(sessionStorageKey, JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem(sessionStorageKey);
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

export default function App() {
  const [user, setUser] = useState(getStoredUser);
  const [draftName, setDraftName] = useState("");
  const [password, setPassword] = useState("");
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
    const cleanPassword = password.trim();

    if (!cleanName || !cleanPassword) {
      return;
    }

    const userKey = cleanName.toLowerCase();
    const storedUsers = getStoredUsers();
    const existingUser = storedUsers[userKey];

    if (existingUser && existingUser.password !== cleanPassword) {
      setError("That password does not match this test user.");
      return;
    }

    const nextUser = existingUser || {
      id: crypto.randomUUID(),
      name: cleanName,
      password: cleanPassword,
      mode: authMode
    };

    storedUsers[userKey] = nextUser;
    saveStoredUsers(storedUsers);
    saveSession(nextUser);

    setUser(nextUser);
    setDraftName("");
    setPassword("");
    setError("");
  }

  function signOut() {
    clearSession();
    setUser(null);
    setDraftName("");
    setPassword("");
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
        userId: user.id,
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
              <p>Sign in with a browser-stored test account to start chatting.</p>
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
            <label htmlFor="signin-password">
              <KeyRound size={18} />
              <span>Password</span>
            </label>
            <input
              id="signin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter a test password"
              autoComplete="current-password"
              maxLength={64}
            />
            {error ? <div className="error-banner inline-error">{error}</div> : null}
            <button type="submit" disabled={!draftName.trim() || !password.trim()}>
              Sign in
            </button>
          </form>

          <div className="mode-note">
            <ShieldCheck size={18} />
            <span>
              Testing mode: accounts are stored in this browser only.
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
              const isMine = item.userId
                ? item.userId === user.id
                : item.name === activeName;

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
