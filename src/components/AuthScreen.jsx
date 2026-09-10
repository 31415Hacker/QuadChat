import { isSignInWithEmailLink } from "firebase/auth";
import {
  Chrome,
  KeyRound,
  ShieldCheck,
  UserRound,
  UserPlus,
  Ticket
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
  signupCode,
  setSignupCode,
  requestSubmitted,
  setRequestSubmitted,
  pendingEmailLinkEmail,
  setPendingEmailLinkEmail,
  emailLinkError,
  error,
  setError,
  handleAuth,
  signInWithGoogle,
  handleEmailLinkSignIn,
  signupHoneypot, setSignupHoneypot, signupTurnstileToken, setSignupTurnstileToken, captchaRefreshKey,
  googleGateEmail,
  googleGateName,
  handleGoogleGateCode,
  handleGoogleGateRequest,
  cancelGoogleGate,
  handlePasswordReset,
  passwordResetSent,
  setPasswordResetSent
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

  if (authView === "google-gate") {
    return (
      <section className="signin-panel" aria-label="Approve your QuadChat access">
        <div className="signin-brand">
          <div className="brand-mark" aria-hidden="true">
            <img src="/logo.png" alt="QuadChat" className="brand-logo" />
          </div>
          <div>
            <h1>QuadChat</h1>
            <p>Your Google account isn&apos;t approved yet.</p>
          </div>
        </div>
        <div className="google-gate-box">
          <p>
            <strong>{googleGateEmail || "New Google account"}</strong> has no access yet.
            Enter an invite code to join now, or request access for an admin to approve.
          </p>
          <label htmlFor="google-gate-code">
            <Ticket size={18} />
            <span>Invite code</span>
          </label>
          <input
            id="google-gate-code"
            type="text"
            value={signupCode}
            onChange={(event) => setSignupCode(event.target.value)}
            placeholder="Enter your invite code"
            autoComplete="off"
            maxLength={64}
          />
          {error ? <div className="error-banner inline-error" role="alert">{error}</div> : null}
          <button type="button" onClick={() => handleGoogleGateCode(signupCode)} disabled={!signupCode.trim()}>
            Join with invite code
          </button>
          <div className="auth-divider">
            <span>or</span>
          </div>
          <button type="button" onClick={handleGoogleGateRequest}>
            Request access
          </button>
          <button className="google-button" type="button" onClick={cancelGoogleGate}>
            Back
          </button>
        </div>
      </section>
    );
  }

  if (requestSubmitted) {
    return (
      <section className="signin-panel" aria-label="Request submitted">
        <div className="signin-brand">
          <div className="brand-mark" aria-hidden="true">
            <img src="/logo.png" alt="QuadChat" className="brand-logo" />
          </div>
          <div>
            <h1>QuadChat</h1>
            <p>Request sent.</p>
          </div>
        </div>
        <div className="request-submitted-box">
          <UserPlus size={28} />
          <p>
            Your request to join QuadChat has been sent to an admin. You&apos;ll be
            able to sign in once it&apos;s approved. For email/password access, use
            &ldquo;Forgot password?&rdquo; on the sign-in screen to set your
            password after approval.
          </p>
          <button type="button" onClick={() => { setRequestSubmitted(false); setAuthView("signin"); setError(""); }}>
            Back to sign in
          </button>
        </div>
      </section>
    );
  }

  if (passwordResetSent) {
    return (
      <section className="signin-panel" aria-label="Password reset sent">
        <div className="signin-brand">
          <div className="brand-mark" aria-hidden="true">
            <img src="/logo.png" alt="QuadChat" className="brand-logo" />
          </div>
          <div>
            <h1>QuadChat</h1>
            <p>Check your email.</p>
          </div>
        </div>
        <div className="request-submitted-box">
          <KeyRound size={28} />
          <p>
            If an account exists for that email, a password-reset link has been
            sent. Check your inbox and follow the instructions to set your
            password.
          </p>
          <button type="button" onClick={() => { setPasswordResetSent(false); setError(""); }}>
            Back to sign in
          </button>
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
                : authView === "signup-request"
                  ? "Request access to QuadChat."
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
            {appSettings.settingsLoaded && appSettings.signupEnabled ? (
              <>
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
                <button
                  className={authView === "signup-request" ? "active" : ""}
                  type="button"
                  onClick={() => {
                    setAuthView("signup-request");
                    setError("");
                  }}
                >
                  Request access
                </button>
              </>
            ) : null}
          </div>

          <form className="signin-form" onSubmit={handleAuth}>
            {authView === "signup" || authView === "signup-request" ? (
              <>
                {authView === "signup" ? (
                  <div className="invite-code-note">
                    <Ticket size={16} />
                    <span>Enter the invite code an admin gave you.</span>
                  </div>
                ) : (
                  <div className="invite-code-note">
                    <UserPlus size={16} />
                    <span>An admin must approve your request before you can sign in.</span>
                  </div>
                )}
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
              </>
            ) : null}
            {authView === "signup" ? (
              <>
                <label htmlFor="signin-code">
                  <Ticket size={18} />
                  <span>Invite code</span>
                </label>
                <input
                  id="signin-code"
                  type="text"
                  value={signupCode}
                  onChange={(event) => setSignupCode(event.target.value)}
                  placeholder="Enter your invite code"
                  autoComplete="off"
                  maxLength={64}
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
            {authView !== "signup-request" ? (
              <>
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
                  autoComplete={authView === "signup" ? "new-password" : "current-password"}
                  maxLength={64}
                />
              </>
            ) : null}
            {error ? <div className="error-banner inline-error" role="alert">{error}</div> : null}
            {authView === "signup" || authView === "signup-request" ? (
              <TurnstileWidget siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} onToken={setSignupTurnstileToken} refreshKey={captchaRefreshKey} />
            ) : null}
            <button
              type="submit"
              disabled={
                !email.trim() ||
                (authView !== "signup-request" && !password.trim()) ||
                (authView !== "signin" && (!draftName.trim() || !signupTurnstileToken)) ||
                (authView === "signup" && !signupCode.trim())
              }
            >
              {authView === "signup"
                ? "Create account"
                : authView === "signup-request"
                  ? "Send request"
                  : "Sign in"}
            </button>
            {authView === "signin" ? (
              <button
                type="button"
                className="forgot-password-link"
                onClick={handlePasswordReset}
                disabled={!email.trim()}
              >
                Forgot password?
              </button>
            ) : null}
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