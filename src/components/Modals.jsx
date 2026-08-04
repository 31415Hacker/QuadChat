import { Clock, MessageCircle, Phone, PhoneIncoming, PhoneOff, UserRound, X } from "lucide-react";
import GameSessionCard from "../GameSessionCard.jsx";
import Dialog from "./Dialog.jsx";
import { getInitials, getProfileName } from "../utils/names.js";
import { getStatusColor, getStatusLabel } from "../utils/profile.js";

export function StatusModal({
  statusModalOpen,
  setStatusModalOpen,
  editStatus,
  setEditStatus,
  scheduledBusy,
  setScheduledBusy,
  saveStatus
}) {
  if (!statusModalOpen) return null;

  return (
    <Dialog
      onClose={() => setStatusModalOpen(false)}
      ariaLabel="Set status"
      className="status-modal"
    >
        <div className="status-modal-header">
          <Clock size={18} />
          <span>Set status</span>
          <button className="modal-close" type="button" onClick={() => setStatusModalOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="status-picker">
          {["active", "busy", "away"].map((mode) => (
            <button
              key={mode}
              type="button"
              className={`status-option ${editStatus.mode === mode ? "selected" : ""}`}
              onClick={() => setEditStatus((s) => ({ ...s, mode }))}
            >
              <span className="status-dot" style={{ background: getStatusColor(mode) }} />
              <span>{getStatusLabel(mode)}</span>
            </button>
          ))}
        </div>

        <input
          className="status-text-input"
          type="text"
          placeholder="What's your status?"
          value={editStatus.text}
          onChange={(e) => setEditStatus((s) => ({ ...s, text: e.target.value }))}
          maxLength={80}
        />

        <details className="status-schedule-details">
          <summary>Schedule busy time</summary>
          <div className="status-schedule-form">
            <label>
              From
              <input
                type="datetime-local"
                value={editStatus.scheduleStart || ""}
                onChange={(e) => setEditStatus((s) => ({ ...s, scheduleStart: e.target.value }))}
              />
            </label>
            <label>
              To
              <input
                type="datetime-local"
                value={editStatus.scheduleEnd || ""}
                onChange={(e) => setEditStatus((s) => ({ ...s, scheduleEnd: e.target.value }))}
              />
            </label>
            <button
              type="button"
              className="add-schedule-btn"
              disabled={!editStatus.scheduleStart || !editStatus.scheduleEnd}
              onClick={() => {
                if (!editStatus.scheduleStart || !editStatus.scheduleEnd) return;
                const start = new Date(editStatus.scheduleStart);
                const end = new Date(editStatus.scheduleEnd);
                if (end <= start) return;
                setScheduledBusy((prev) => {
                  const all = [...prev, { start, end }].sort((a, b) => a.start - b.start);
                  const merged = [all[0]];
                  for (let i = 1; i < all.length; i++) {
                    const last = merged[merged.length - 1];
                    const cur = all[i];
                    if (cur.start <= last.end) {
                      if (cur.end > last.end) last.end = cur.end;
                    } else {
                      merged.push(cur);
                    }
                  }
                  return merged;
                });
                setEditStatus((s) => ({ ...s, scheduleStart: "", scheduleEnd: "" }));
              }}
            >
              Add
            </button>
          </div>
          {scheduledBusy.length > 0 ? (
            <div className="scheduled-list">
              {scheduledBusy.map((s, i) => (
                <div key={i} className="scheduled-item">
                  <span>
                    {s.start.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                    {" — "}
                    {s.end.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                  </span>
                  <button type="button" className="remove-schedule-btn" onClick={() => setScheduledBusy((prev) => prev.filter((_, j) => j !== i))}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </details>

        <div className="status-modal-actions">
          <button
            type="button"
            className="save-status-btn"
            onClick={saveStatus}
          >
            Save
          </button>
        </div>
    </Dialog>
  );
}

export function NewDmModal({
  showNewDm,
  setShowNewDm,
  profiles,
  sessionUserId,
  openDm
}) {
  if (!showNewDm) return null;

  return (
    <Dialog
      onClose={() => setShowNewDm(false)}
      ariaLabel="Start a conversation"
      className="status-modal"
    >
        <div className="status-modal-header">
          <MessageCircle size={18} />
          <span>Start a conversation</span>
          <button className="modal-close" type="button" onClick={() => setShowNewDm(false)}>
            <X size={18} />
          </button>
        </div>
        <div className="new-dm-list">
          {Object.values(profiles)
            .filter((profile) => profile.id !== sessionUserId)
            .map((profile) => {
              const name = getProfileName(profile, profile.email || "Unknown");
              return (
                <button
                  className="new-dm-user"
                  key={profile.id}
                  type="button"
                  onClick={() => {
                    openDm(profile.id);
                    setShowNewDm(false);
                  }}
                >
                  <span className="new-dm-avatar">{getInitials(name)}</span>
                  <span>{name}</span>
                </button>
              );
            })}
          {Object.keys(profiles).filter((id) => id !== sessionUserId).length === 0 ? (
            <p className="new-dm-empty">No other users yet.</p>
          ) : null}
        </div>
    </Dialog>
  );
}

export function AnalyticsModal({
  analyticsTarget,
  onClose,
  analyticsData,
  analyticsLoading
}) {
  if (!analyticsTarget) return null;

  return (
    <Dialog
      onClose={onClose}
      ariaLabel="User analytics"
      className="analytics-modal"
    >
        <div className="analytics-modal-header">
          <UserRound size={18} />
          <span>{getProfileName(analyticsTarget, analyticsTarget.email || "")}</span>
          <button className="modal-close" type="button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        {analyticsTarget.status?.mode === "busy" || analyticsTarget.status?.mode === "away" ? (
          <div className="analytics-status-note">
            {analyticsTarget.status.mode === "busy" ? "⚠️" : "🟡"} Currently <strong>{getStatusLabel(analyticsTarget.status.mode)}</strong>
            {analyticsTarget.status.text ? ` — ${analyticsTarget.status.text}` : ""}
          </div>
        ) : null}
        <div className="analytics-body">
          {analyticsLoading ? (
            <p className="analytics-loading">Loading...</p>
          ) : analyticsData ? (
            <>
              <div className="analytics-stat">
                <span className="analytics-stat-label">Active days (30d)</span>
                <span className="analytics-stat-value">{analyticsData.days}</span>
              </div>
              <div className="analytics-stat">
                <span className="analytics-stat-label">Sessions tracked</span>
                <span className="analytics-stat-value">{analyticsData.sessionCount}</span>
              </div>
              <div className="analytics-stat">
                <span className="analytics-stat-label">Avg time per day</span>
                <span className="analytics-stat-value">
                  {analyticsData.avgPlayTime > 0
                    ? `${Math.floor(analyticsData.avgPlayTime / 3600000)}h ${Math.round((analyticsData.avgPlayTime % 3600000) / 60000)}m`
                    : "—"}
                </span>
              </div>
              <div className="analytics-stat">
                <span className="analytics-stat-label">Best times to catch them</span>
                <span className="analytics-stat-value analytics-top-hours">
                  {analyticsData.top3.length > 0
                    ? analyticsData.top3.join(" · ")
                    : "Not enough data"}
                </span>
              </div>
            </>
          ) : (
            <p className="analytics-loading">No data available.</p>
          )}
        </div>
    </Dialog>
  );
}

export function IncomingCallModal({ incomingCall, rejectCall, answerCall }) {
  if (!incomingCall) return null;

  return (
    <Dialog
      onClose={rejectCall}
      ariaLabel="Incoming call"
      className="incoming-call"
      closeOnBackdrop={false}
      closeOnEscape={false}
    >
        <PhoneIncoming size={36} />
        <p><strong>{incomingCall.callerName}</strong> is calling...</p>
        <div className="incoming-call-actions">
          <button className="danger-button" type="button" onClick={rejectCall}>
            <PhoneOff size={18} />
            <span>Decline</span>
          </button>
          <button className="save-status-btn" type="button" onClick={answerCall}>
            <Phone size={18} />
            <span>Answer</span>
          </button>
        </div>
    </Dialog>
  );
}

export function GamingPostModal({
  showGamingPost,
  setShowGamingPost,
  gamingPostCard,
  setGamingPostCard,
  onSend
}) {
  if (!showGamingPost || !gamingPostCard) return null;

  return (
    <Dialog
      onClose={() => setShowGamingPost(false)}
      ariaLabel="Create gaming post"
      className="settings-modal"
    >
        <header className="settings-header">
          <div>
            <h2>Gaming Post</h2>
            <p>Edit your session card</p>
          </div>
          <button
            className="modal-close"
            type="button"
            onClick={() => setShowGamingPost(false)}
          >
            X
          </button>
        </header>

        <GameSessionCard
          data={gamingPostCard}
          isEditingMode
          onChange={setGamingPostCard}
        />

        <div className="settings-actions">
          <button
            type="button"
            onClick={onSend}
          >
            Send
          </button>
          <button
            type="button"
            className="danger-button"
            onClick={() => setShowGamingPost(false)}
          >
            Cancel
          </button>
        </div>
    </Dialog>
  );
}
