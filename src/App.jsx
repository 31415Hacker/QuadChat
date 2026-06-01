import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutOfFirebase,
  updateProfile
} from "firebase/auth";
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
import { auth, db } from "../firebase.js";

const messagesRef = collection(db, "messages");
const authMode = import.meta.env.VITE_AUTH_MODE || "production";

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
      return "Email/password auth is not enabled in Firebase.";
    default:
      return firebaseError.message;
  }
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
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);

  const activeName = useMemo(
    () => user?.displayName?.trim() || user?.email || "",
    [user]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthReady(true);
    });

    return unsubscribe;
  }, []);

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

  async function handleAuth(event) {
    event.preventDefault();
    const cleanName = draftName.trim();
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    const isSigningUp = authView === "signup";

    if (!cleanEmail || !cleanPassword || (isSigningUp && !cleanName)) {
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

  async function signOut() {
    try {
      await signOutOfFirebase(auth);
      setMessage("");
      setError("");
    } catch (firebaseError) {
      setError(getAuthErrorMessage(firebaseError));
    }
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
        userId: user.uid,
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
                  placeholder="Enter your name"
                  autoComplete="name"
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
                ? item.userId === user.uid
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
