import {
  Bell,
  BellOff,
  Chrome,
  CircleUserRound,
  Copy,
  Eye,
  ImagePlus,
  KeyRound,
  Moon,
  Settings,
  ShieldCheck,
  Trash2,
  Upload,
  X
} from "lucide-react";
import { useState } from "react";
import { getInitials, getProfileName } from "../utils/names.js";
import Dialog from "./Dialog.jsx";
import ScheduleEditor from "./ScheduleEditor.jsx";

function formatAdminValue(value) {
  if (value === null || value === undefined || value === "") return "Not available";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function formatAccountAge(createdAtMs) {
  const createdAt = Number(createdAtMs);
  if (!Number.isFinite(createdAt) || createdAt <= 0) return "Not recorded";

  const sevenths = Math.floor((Date.now() - createdAt) / (1000 / 7));
  const totalSeconds = sevenths / 7;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = (totalSeconds % 60).toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function SettingsPage({
  onClose,
  settingsTab,
  setSettingsTab,
  isCurrentUserAdmin,
  user,
  activeName,
  settingsName,
  setSettingsName,
  settingsBio,
  setSettingsBio,
  settingsSchedule,
  setSettingsSchedule,
  settingsPhotoPreview,
  settingsPhotoFile,
  handlePhotoFileChange,
  uploadProfilePicture,
  clearPendingPhoto,
  removeProfilePicture,
  isUploadingPhoto,
  isSavingSettings,
  settingsMessage,
  settingsCurrentPassword,
  setSettingsCurrentPassword,
  settingsPassword,
  setSettingsPassword,
  saveSettings,
  hasGoogleProvider,
  hasEmailProvider,
  linkGoogleAccount,
  unlinkGoogleAccount,
  unlinkPassword,
  removeAccount,
  isDarkTheme,
  setIsDarkTheme,
  uiScale,
  setUiScale,
  reduceMotion,
  setReduceMotion,
  toggleNotifications,
  notificationsEnabled,
  showVersionInHeader,
  setShowVersionInHeader,
  showSidebarClock,
  setShowSidebarClock,
  showSidebarSeconds,
  setShowSidebarSeconds,
  appSettings,
  toggleSignup,
  magicLinkEmail,
  setMagicLinkEmail,
  generateMagicLink,
  isGeneratingLink,
  magicLinkError,
  magicLinkUrl,
  copyMagicLink,
  profiles,
  adminAccountId,
  setAdminAccountId,
  adminAccountDetails,
  adminAccountPassword,
  setAdminAccountPassword,
  adminAccountMessage,
  isManagingAccount,
  viewAdminAccount,
  changeAdminAccountPassword,
  deleteAdminAccount,
  banAdminAccount,
  unbanAdminAccount
}) {
  const [isScheduleEditorOpen, setIsScheduleEditorOpen] = useState(false);

  return (
    <div className="settings-page">
      <button
        className="settings-close-btn"
        type="button"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <div className="settings-page-inner">
        <nav className="settings-nav">
          <button
            className={`settings-nav-item ${settingsTab === "account" ? "active" : ""}`}
            onClick={() => setSettingsTab("account")}
          >
            <CircleUserRound size={18} />
            <span>Account</span>
          </button>
          <button
            className={`settings-nav-item ${settingsTab === "security" ? "active" : ""}`}
            onClick={() => setSettingsTab("security")}
          >
            <KeyRound size={18} />
            <span>Security</span>
          </button>
          <button
            className={`settings-nav-item ${settingsTab === "appearance" ? "active" : ""}`}
            onClick={() => setSettingsTab("appearance")}
          >
            <Moon size={18} />
            <span>Appearance</span>
          </button>
          <button
            className={`settings-nav-item ${settingsTab === "accessibility" ? "active" : ""}`}
            onClick={() => setSettingsTab("accessibility")}
          >
            <Eye size={18} />
            <span>Accessibility</span>
          </button>
          <button
            className={`settings-nav-item ${settingsTab === "advanced" ? "active" : ""}`}
            onClick={() => setSettingsTab("advanced")}
          >
            <Settings size={18} />
            <span>Advanced</span>
          </button>
          {isCurrentUserAdmin ? (
            <button
              className={`settings-nav-item ${settingsTab === "admin" ? "active" : ""}`}
              onClick={() => setSettingsTab("admin")}
            >
              <ShieldCheck size={18} />
              <span>Admin</span>
            </button>
          ) : null}
        </nav>
        <main className="settings-content">
          <div className="settings-content-header">
            <h2>
              {settingsTab === "account"
                ? "Account"
                : settingsTab === "security"
                  ? "Security"
                  : settingsTab === "appearance"
                    ? "Appearance"
                    : settingsTab === "accessibility"
                      ? "Accessibility"
                      : settingsTab === "advanced"
                        ? "Advanced"
                        : "Admin"}
            </h2>
          </div>
          <form className="settings-form" onSubmit={settingsTab === "admin" ? (event) => event.preventDefault() : saveSettings}>
            {settingsTab === "account" ? (
              <>
                <p className="settings-section-desc">
                  Manage your profile information and photo.
                </p>

                <label htmlFor="settings-name">
                  <CircleUserRound size={18} />
                  <span>Username</span>
                </label>
                <input
                  id="settings-name"
                  type="text"
                  value={settingsName}
                  onChange={(event) => setSettingsName(event.target.value)}
                  maxLength={32}
                  placeholder="Username without spaces"
                />

                <label htmlFor="settings-bio">
                  <CircleUserRound size={18} />
                  <span>Bio</span>
                </label>
                <textarea
                  id="settings-bio"
                  maxLength={280}
                  onChange={(event) => setSettingsBio(event.target.value)}
                  placeholder="A short introduction"
                  rows={3}
                  value={settingsBio}
                />

                <section className="settings-photo-section">
                  <div className="settings-photo-row">
                    <div className="settings-photo-preview" aria-hidden="true">
                      {settingsPhotoPreview ? (
                        <img src={settingsPhotoPreview} alt="" />
                      ) : user?.photoURL ? (
                        <img src={user.photoURL} alt="" />
                      ) : (
                        <span>{getInitials(activeName)}</span>
                      )}
                    </div>
                    <div className="settings-photo-actions">
                      <label className="settings-photo-pick" htmlFor="settings-photo-input">
                        <ImagePlus size={18} />
                        <span>{settingsPhotoFile ? "Choose another" : "Choose image"}</span>
                      </label>
                      <input
                        accept="image/*"
                        id="settings-photo-input"
                        onChange={handlePhotoFileChange}
                        type="file"
                      />
                      {settingsPhotoFile ? (
                        <div className="settings-photo-buttons">
                          <button
                            disabled={isUploadingPhoto || isSavingSettings}
                            onClick={uploadProfilePicture}
                            type="button"
                          >
                            <Upload size={17} />
                            <span>{isUploadingPhoto ? "Uploading..." : "Upload"}</span>
                            <span className="tag tag-safe">Safe</span>
                          </button>
                          <button
                            className="ghost-button"
                            disabled={isUploadingPhoto}
                            onClick={clearPendingPhoto}
                            type="button"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : user?.photoURL ? (
                        <button
                          className="danger-button settings-photo-remove"
                          disabled={isSavingSettings}
                          onClick={removeProfilePicture}
                          type="button"
                        >
                          <Trash2 size={17} />
                          <span>Remove picture</span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <p className="settings-note">
                    JPG, PNG, GIF, or WEBP. Max 5 MB. Stored on Cloudinary.
                  </p>
                </section>

                <section className="settings-section-box schedule-summary">
                  <div>
                    <h3>Schedule</h3>
                    <p>Share when you are usually online and add date-specific changes.</p>
                  </div>
                  <button type="button" onClick={() => setIsScheduleEditorOpen(true)}>
                    Edit schedule
                  </button>
                </section>

                {settingsMessage ? (
                  <div className="error-banner inline-error settings-note">
                    {settingsMessage}
                  </div>
                ) : null}

                <div className="settings-actions">
                  <button type="submit" disabled={isSavingSettings}>
                    Save changes
                  </button>
                </div>
              </>
            ) : null}

            {settingsTab === "security" ? (
              <>
                <p className="settings-section-desc">
                  Manage your password and connected sign-in methods.
                </p>

                <label htmlFor="settings-current-password">
                  <KeyRound size={18} />
                  <span>Current password</span>
                </label>
                <input
                  id="settings-current-password"
                  type="password"
                  value={settingsCurrentPassword}
                  onChange={(event) =>
                    setSettingsCurrentPassword(event.target.value)
                  }
                  maxLength={64}
                  placeholder="Required to change password"
                  autoComplete="current-password"
                />

                <label htmlFor="settings-password">
                  <KeyRound size={18} />
                  <span>New password</span>
                </label>
                <input
                  id="settings-password"
                  type="password"
                  value={settingsPassword}
                  onChange={(event) => setSettingsPassword(event.target.value)}
                  minLength={6}
                  maxLength={64}
                  placeholder="Leave blank to keep current password"
                  autoComplete="new-password"
                />

                {settingsMessage ? (
                  <div className="error-banner inline-error settings-note">
                    {settingsMessage}
                  </div>
                ) : null}

                {!hasGoogleProvider ? (
                  <section className="settings-section-box">
                    <div>
                      <h3>
                        Google account
                        <span className="tag tag-safe">Safe</span>
                      </h3>
                      <p>Connect Google as another way to sign in.</p>
                    </div>
                    <button
                      className="google-button"
                      disabled={isSavingSettings}
                      onClick={linkGoogleAccount}
                      type="button"
                    >
                      <Chrome size={18} />
                      <span>Connect Google</span>
                    </button>
                  </section>
                ) : (
                  <section className="settings-section-box">
                    <div>
                      <h3>
                        Google account
                        <span className="tag tag-danger">Dangerous</span>
                      </h3>
                      <p>Google sign-in is connected.</p>
                    </div>
                    <button
                      className="danger-button"
                      disabled={isSavingSettings}
                      onClick={unlinkGoogleAccount}
                      type="button"
                    >
                      Unlink Google
                    </button>
                  </section>
                )}

                {hasEmailProvider ? (
                  <section className="settings-section-box">
                    <div>
                      <h3>
                        Password sign-in
                        <span className="tag tag-danger">Dangerous</span>
                      </h3>
                      <p>Remove password as a sign-in method.</p>
                    </div>
                    <button
                      className="danger-button"
                      disabled={isSavingSettings || !hasGoogleProvider}
                      onClick={unlinkPassword}
                      title={!hasGoogleProvider ? "Connect Google first to remove password" : ""}
                      type="button"
                    >
                      <KeyRound size={18} />
                      <span>Remove password</span>
                    </button>
                  </section>
                ) : null}

                <section className="settings-section-box">
                  <div>
                    <h3>
                      Remove account
                      <span className="tag tag-danger">Dangerous</span>
                    </h3>
                    <p>Permanently delete your account and all associated data.</p>
                  </div>
                  <button
                    className="danger-button"
                    type="button"
                    onClick={removeAccount}
                    disabled={isSavingSettings}
                  >
                    <Trash2 size={17} />
                    <span>Remove account</span>
                  </button>
                </section>

                <div className="settings-actions">
                  <button type="submit" disabled={isSavingSettings}>
                    Save changes
                  </button>
                </div>
              </>
            ) : null}

            {settingsTab === "appearance" ? (
              <>
                <p className="settings-section-desc">
                  Customize the look and feel of QuadChat.
                </p>

                <section className="settings-section-box">
                  <div>
                    <h3>
                      Theme
                      <span className="tag tag-safe">Safe</span>
                    </h3>
                    <p>Switch between dark and light mode.</p>
                  </div>
                  <label className="toggle-row">
                    <input
                      checked={isDarkTheme}
                      onChange={() => setIsDarkTheme((prev) => !prev)}
                      type="checkbox"
                    />
                    <span>{isDarkTheme ? "Dark mode" : "Light mode"}</span>
                  </label>
                </section>
              </>
              ) : null}

            {settingsTab === "accessibility" ? (
              <>
                <p className="settings-section-desc">
                  Options for a more accessible experience.
                </p>

                <section className="settings-section-box">
                  <div>
                    <h3>
                      UI scale
                      <span className="tag tag-safe">Safe</span>
                    </h3>
                    <p>
                      Shrinks the entire interface. 100% shows every part
                      of the UI on screen at its default size.
                    </p>
                  </div>
                  <label className="scale-row">
                    <input
                      aria-label="UI scale"
                      max="100"
                      min="50"
                      onChange={(event) => setUiScale(Number(event.target.value))}
                      step="5"
                      type="range"
                      value={uiScale}
                    />
                    <output>{uiScale}%</output>
                  </label>
                </section>

                <section className="settings-section-box">
                  <div>
                    <h3>
                      Reduced motion
                      <span className="tag tag-safe">Safe</span>
                    </h3>
                    <p>Minimize animations and transitions throughout the app.</p>
                  </div>
                  <label className="toggle-row">
                    <input
                      checked={reduceMotion}
                      onChange={() => setReduceMotion((prev) => !prev)}
                      type="checkbox"
                    />
                    <span>{reduceMotion ? "On" : "Off"}</span>
                  </label>
                </section>
                <section className="settings-section-box">
                  <div>
                    <h3>
                      Desktop notifications
                      <span className="tag tag-safe">Safe</span>
                    </h3>
                    <p>Receive browser notifications when you get a new message or call.</p>
                  </div>
                  <button
                    className="ghost-button"
                    disabled={isSavingSettings}
                    onClick={toggleNotifications}
                    type="button"
                  >
                    {notificationsEnabled ? (
                      <BellOff size={18} />
                    ) : (
                      <Bell size={18} />
                    )}
                    <span>{notificationsEnabled ? "Disable" : "Enable"}</span>
                  </button>
                </section>
                <section className="settings-section-box">
                  <div>
                    <h3>Sidebar date and time</h3>
                    <p>Show your local weekday, date, and time beneath the user list.</p>
                  </div>
                  <label className="toggle-row">
                    <input checked={showSidebarClock} onChange={() => setShowSidebarClock((value) => !value)} type="checkbox" />
                    <span>{showSidebarClock ? "On" : "Off"}</span>
                  </label>
                </section>
              </>
            ) : null}

            {settingsTab === "advanced" ? (
              <>
                <p className="settings-section-desc">
                  Experimental and power-user options.
                </p>

                <section className="settings-section-box">
                  <div>
                    <h3>
                       Show full version in header
                    </h3>
                    <p>The major version is always shown. Enable this to include minor and patch numbers.</p>
                  </div>
                  <label className="toggle-row">
                    <input
                      checked={showVersionInHeader}
                      onChange={() => setShowVersionInHeader((prev) => !prev)}
                      type="checkbox"
                    />
                    <span>{showVersionInHeader ? "On" : "Off"}</span>
                  </label>
                </section>
                <section className="settings-section-box">
                  <div>
                    <h3>Show seconds in sidebar clock</h3>
                    <p>Add seconds to the local time shown in the users sidebar.</p>
                  </div>
                  <label className="toggle-row">
                    <input checked={showSidebarSeconds} onChange={() => setShowSidebarSeconds((value) => !value)} type="checkbox" />
                    <span>{showSidebarSeconds ? "On" : "Off"}</span>
                  </label>
                </section>
              </>
            ) : null}

            {settingsTab === "admin" && isCurrentUserAdmin ? (
              <>
                <p className="settings-section-desc">
                  Manage app-wide settings and generate sign-in links.
                </p>

                <section className="settings-section-box">
                  <div>
                    <h3>
                      Sign up
                      <span className="tag tag-safe">Safe</span>
                    </h3>
                    <p>Control whether new users can create accounts.</p>
                  </div>
                  <label className="toggle-row">
                    <input
                      checked={appSettings.signupEnabled}
                      onChange={toggleSignup}
                      type="checkbox"
                    />
                    <span>Allow sign up</span>
                  </label>
                </section>
                <section className="settings-section-box">
                  <div>
                    <h3>
                      Magic link
                      <span className="tag tag-safe">Safe</span>
                    </h3>
                    <p>Generate a one-time sign-in link for any user.</p>
                  </div>
                  <div className="magic-link-form">
                    <select
                      value={magicLinkEmail}
                      onChange={(event) => setMagicLinkEmail(event.target.value)}
                    >
                      <option value="">Select a user...</option>
                      {Object.values(profiles).map((profile) => (
                        <option key={profile.id} value={profile.email}>
                          {getProfileName(profile, profile.email || "Unknown")}
                        </option>
                      ))}
                    </select>
                    <button
                      disabled={!magicLinkEmail || isGeneratingLink}
                      onClick={generateMagicLink}
                      type="button"
                    >
                      {isGeneratingLink ? "Generating..." : "Generate magic link"}
                    </button>
                  </div>
                  {magicLinkError ? (
                    <div className="error-banner inline-error" role="alert">{magicLinkError}</div>
                  ) : null}
                  {magicLinkUrl ? (
                    <div className="magic-link-result">
                      <div
                        className="magic-link-url"
                        onClick={copyMagicLink}
                        title="Copy magic link"
                      >
                        <span>********************</span>
                        <Copy size={16} />
                      </div>
                    </div>
                  ) : null}
                </section>
                <section className="settings-section-box admin-account-manager">
                  <div className="admin-account-heading">
                    <h3>Account management</h3>
                    <p>View account details, change passwords, ban, or permanently delete member accounts.</p>
                  </div>
                  <div className="admin-account-controls">
                    <div className="admin-account-picker">
                      <select value={adminAccountId} onChange={(event) => setAdminAccountId(event.target.value)}>
                        <option value="">Select an account...</option>
                        {Object.values(profiles).map((profile) => <option key={profile.id} value={profile.id}>{getProfileName(profile, profile.email || "Unknown")}{profile.isAdmin || profile.isDeveloper ? " (protected)" : ""}</option>)}
                      </select>
                      <button disabled={!adminAccountId || isManagingAccount} onClick={viewAdminAccount} type="button">{isManagingAccount ? "Loading..." : "View details"}</button>
                    </div>
                    {adminAccountDetails ? <div className="admin-account-details">
                      <dl>
                        <div><dt>Account ID</dt><dd>{adminAccountDetails.uid}</dd></div>
                        <div><dt>Email</dt><dd>{adminAccountDetails.email || "Not available"}</dd></div>
                        <div><dt>Email verified</dt><dd>{adminAccountDetails.emailVerified ? "Yes" : "No"}</dd></div>
                        <div><dt>Status</dt><dd><span className={`admin-account-status ${adminAccountDetails.disabled ? "admin-account-status--banned" : ""}`}>{adminAccountDetails.disabled ? "Banned" : "Active"}</span></dd></div>
                        <div><dt>Providers</dt><dd>{adminAccountDetails.providers.join(", ") || "None"}</dd></div>
                        <div><dt>Created</dt><dd>{adminAccountDetails.createdAt || "Not available"}</dd></div>
                        <div><dt>Last sign-in</dt><dd>{adminAccountDetails.lastSignInAt || "Never"}</dd></div>
                        <div><dt>Role</dt><dd>{adminAccountDetails.role}</dd></div>
                        <div><dt>Bio</dt><dd>{adminAccountDetails.bio || "None"}</dd></div>
                      </dl>
                      <details className="admin-account-advanced">
                        <summary>Advanced details</summary>
                        <dl>
                          <div><dt>Auth ID</dt><dd>{adminAccountDetails.uid}</dd></div>
                          <div><dt>Account created</dt><dd>{adminAccountDetails.createdAt || "Not recorded"}</dd></div>
                          <div><dt>Last token refresh</dt><dd>{adminAccountDetails.lastRefreshAt || "Not recorded"}</dd></div>
                          <div><dt>Account age</dt><dd>{formatAccountAge(adminAccountDetails.createdAtMs)}</dd></div>
                          <div><dt>Sessions recorded</dt><dd>{adminAccountDetails.sessions?.length || 0}</dd></div>
                        </dl>
                        <details className="admin-account-sessions">
                          <summary>Sessions ({adminAccountDetails.sessions?.length || 0})</summary>
                          {adminAccountDetails.sessions?.length ? <div className="admin-session-list">
                            {adminAccountDetails.sessions.map((session) => <article key={session.id}>
                              <strong>{session.start || "Start not recorded"}</strong>
                              <span>Ended: {session.end || "Active or not recorded"}</span>
                              <span>Date: {session.date || "Not recorded"}</span>
                              <code>{session.id}</code>
                            </article>)}
                          </div> : <p>No sessions have been recorded.</p>}
                        </details>
                        <details className="admin-account-raw-data">
                          <summary>Raw account and profile data</summary>
                          <pre>{formatAdminValue({ authClaims: adminAccountDetails.authClaims, profile: adminAccountDetails.profile, providerDetails: adminAccountDetails.providerDetails })}</pre>
                        </details>
                      </details>
                      {adminAccountDetails.protected ? <p className="settings-note">Protected admin and developer accounts cannot be changed here.</p> : <>
                        <div className="admin-password-action">
                          <label htmlFor="admin-account-password">Set a new password</label>
                          <div>
                            <input id="admin-account-password" type="password" value={adminAccountPassword} onChange={(event) => setAdminAccountPassword(event.target.value)} minLength={6} maxLength={64} autoComplete="new-password" placeholder="At least 6 characters" />
                            <button disabled={isManagingAccount || adminAccountPassword.length < 6} onClick={changeAdminAccountPassword} type="button">Change password</button>
                          </div>
                        </div>
                        <div className="admin-account-actions">
                          {adminAccountDetails.disabled ? (
                            <button disabled={isManagingAccount} onClick={unbanAdminAccount} type="button">Unban account</button>
                          ) : (
                            <button className="danger-button" disabled={isManagingAccount} onClick={banAdminAccount} type="button">Ban account</button>
                          )}
                          <button className="danger-button" disabled={isManagingAccount} onClick={deleteAdminAccount} type="button"><Trash2 size={17} /><span>Delete account</span></button>
                        </div>
                      </>}
                    </div> : null}
                    {adminAccountMessage ? <div className="settings-note">{adminAccountMessage}</div> : null}
                  </div>
                </section>
              </>
            ) : null}
          </form>
        </main>
      </div>
      {isScheduleEditorOpen ? (
        <Dialog
          ariaLabel="Edit schedule"
          className="schedule-modal"
          onClose={() => setIsScheduleEditorOpen(false)}
        >
          <div className="schedule-modal-header">
            <div>
              <h2>Edit schedule</h2>
              <p>Changes are saved with your account settings.</p>
            </div>
            <button className="modal-close" type="button" onClick={() => setIsScheduleEditorOpen(false)} aria-label="Close schedule editor">
              <X size={18} />
            </button>
          </div>
          <div className="schedule-modal-content">
            <ScheduleEditor schedule={settingsSchedule} setSchedule={setSettingsSchedule} />
          </div>
        </Dialog>
      ) : null}
    </div>
  );
}
