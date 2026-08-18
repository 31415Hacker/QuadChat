import { isSignInWithEmailLink } from "firebase/auth";
import {
  Chrome,
  KeyRound,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { auth } from "../../firebase.js";
import TurnstileWidget from "./TurnstileWidget.jsx";

export default function AuthScreen({
  isAuthReady,
  authView,
  setAuthView,
  appSettings,
  draftName,
  setDraftName,
  email,
  setEmail,
  password,
  setPassword,
  pendingEmailLinkEmail,
  setPendingEmailLinkEmail,
  emailLinkError,
  error,
  setError,
  handleAuth,
  signInWithGoogle,
  handleEmailLinkSignIn,
  signupHoneypot, setSignupHoneypot, signupTurnstileToken, setSignupTurnstileToken, captchaRefreshKey
}) {
  if (!isAuthReady) {
    return (
      <section className="signin-panel" aria-label="Loading QuadChat">
        <div className="signin-brand">
          <div className="brand-mark" aria-hidden="true">
            <img src="/logo.png" alt="QuadChat" className="brand-logo" />
          </div>
          <div>
            <h1>QuadChat</h1>
            <p>Checking your session.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="signin-panel" aria-label="Sign in to QuadChat">
      <div className="signin-brand">
        <div className="brand-mark" aria-hidden="true">
          <img src="/logo.png" alt="QuadChat" className="brand-logo" />
        </div>
        <div>
          <h1>QuadChat</h1>
          {isSignInWithEmailLink(auth, window.location.href) ? (
            <p>Enter your email to complete sign-in with the magic link.</p>
          ) : (
            <p>
              {authView === "signup"
                ? "Create an account to start chatting."
                : "Sign in to continue chatting."}
            </p>
          )}
        </div>
      </div>

      {isSignInWithEmailLink(auth, window.location.href) ? (
        <form className="signin-form" onSubmit={handleEmailLinkSignIn}>
          <label htmlFor="email-link-email">
            <UserRound size={18} />
            <span>Email</span>
          </label>
          <input
            id="email-link-email"
            type="email"
            value={pendingEmailLinkEmail}
            onChange={(event) => setPendingEmailLinkEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={120}
          />
          {emailLinkError ? <div className="error-banner inline-error" role="alert">{emailLinkError}</div> : null}
          <button
            type="submit"
            disabled={!pendingEmailLinkEmail.trim()}
          >
            Sign in with magic link
          </button>
        </form>
      ) : (
        <>
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
                <label className="signup-honeypot" aria-hidden="true" htmlFor="signup-website">Website<input id="signup-website" tabIndex="-1" autoComplete="off" value={signupHoneypot} onChange={(event) => setSignupHoneypot(event.target.value)} /></label>
                <TurnstileWidget siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} onToken={setSignupTurnstileToken} refreshKey={captchaRefreshKey} />
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
            {error ? <div className="error-banner inline-error" role="alert">{error}</div> : null}
            <button
              type="submit"
              disabled={
                !email.trim() ||
                !password.trim() ||
                (authView === "signup" && (!draftName.trim() || !signupTurnstileToken))
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
        </>
      )}

      <div className="auth-footer-links">
        <a href="./privacy.html" rel="noopener noreferrer" target="_blank">
          Privacy Policy
        </a>
      </div>
    </section>
  );
}
