import { useEffect, useState } from "react";
import { off, onValue, ref as rtdbRef } from "firebase/database";
import { Globe, Lock, Phone, Plus, Trash2 } from "lucide-react";
import { rtdb } from "../../firebase.js";

function useCallMemberCount(callKey) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const membersRef = rtdbRef(rtdb, `group-calls/${callKey}/participants`);
    const unsub = onValue(membersRef, (snap) => {
      const val = snap.val();
      setCount(val ? Object.keys(val).length : 0);
    });
    return () => {
      off(membersRef);
      unsub();
    };
  }, [callKey]);
  return count;
}

function CallRow({ call, isCurrent, sessionUserId, onJoinCall, onDeleteCall }) {
  const count = useCallMemberCount(call.callKey);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const isOwner = call.ownerId === sessionUserId;

  function handleJoin() {
    if (busy) return;
    if (call.isProtected && !showPassword) {
      setShowPassword(true);
      return;
    }
    setBusy(true);
    setError("");
    onJoinCall(call.callKey, call.isProtected ? password : undefined)
      .catch((e) => {
        setError(e?.message || "Could not join the call.");
        setBusy(false);
        if (call.isProtected && e?.message?.toLowerCase().includes("password")) {
          setShowPassword(true);
        }
      });
  }

  return (
    <div className={`call-row${isCurrent ? " call-row--current" : ""}`}>
      <div className="call-row-head">
        <span className={`call-badge ${call.isProtected ? "call-badge--locked" : "call-badge--public"}`}>
          {call.isProtected ? <Lock size={12} /> : <Globe size={12} />}
          {call.isProtected ? "Private" : "Public"}
        </span>
        {isOwner ? (
          <button
            className="call-row-delete"
            type="button"
            title="Delete this call"
            onClick={() => onDeleteCall(call.callKey)}
          >
            <Trash2 size={14} />
          </button>
        ) : null}
      </div>
      <strong className="call-row-title">{call.title}</strong>
      <span className="call-row-meta">
        {call.ownerName} · {count} {count === 1 ? "person" : "people"}
      </span>
      {isCurrent ? (
        <span className="call-row-incall">In this call</span>
      ) : (
        <button className="call-row-join" type="button" disabled={busy} onClick={handleJoin}>
          <Phone size={14} />
          {busy ? "Joining…" : call.isProtected ? "Join with password" : "Join"}
        </button>
      )}
      {call.isProtected && showPassword ? (
        <div className="call-row-password">
          <input
            autoFocus
            placeholder="Call password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleJoin();
            }}
          />
          <button type="button" disabled={busy || !password} onClick={handleJoin}>
            Enter
          </button>
        </div>
      ) : null}
      {error ? <span className="call-row-error">{error}</span> : null}
    </div>
  );
}

export default function CallsSidebar({
  calls,
  activeCallsLabel,
  groupCallStatus,
  currentCallKey,
  sessionUserId,
  onCreateCall,
  onJoinCall,
  onDeleteCall,
  onLeaveCall
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [isProtected, setIsProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  function handleCreate() {
    if (creating) return;
    if (!title.trim()) return;
    if (isProtected && !password.trim()) return;
    setCreating(true);
    setError("");
    onCreateCall({ title, password: isProtected ? password : "" })
      .catch((e) => {
        setError(e?.message || "Could not create the call.");
        setCreating(false);
      });
  }

  return (
    <aside className="channel-sidebar calls-sidebar" aria-label="Calls">
      <div className="channel-sidebar-current">
        <span>Group calls</span>
        <strong>{activeCallsLabel}</strong>
      </div>
      <div className="calls-body">
        <div className="calls-create-box">
          {!showCreate ? (
            <button className="calls-create-button" type="button" onClick={() => setShowCreate(true)}>
              <Plus size={16} />
              Create a call
            </button>
          ) : (
            <div className="calls-create-form">
              <label className="calls-field">
                <span>Call name</span>
                <input
                  autoFocus
                  maxLength={50}
                  placeholder="e.g. Weekend hangout"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <div className="calls-visibility">
                <button
                  className={`calls-visibility-option ${!isProtected ? "active" : ""}`}
                  type="button"
                  onClick={() => setIsProtected(false)}
                >
                  <Globe size={14} />
                  Public
                </button>
                <button
                  className={`calls-visibility-option ${isProtected ? "active" : ""}`}
                  type="button"
                  onClick={() => setIsProtected(true)}
                >
                  <Lock size={14} />
                  Private
                </button>
              </div>
              {isProtected ? (
                <label className="calls-field">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Protect this call"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              ) : null}
              <div className="calls-create-actions">
                <button
                  className="calls-submit"
                  type="button"
                  disabled={creating || !title.trim() || (isProtected && !password.trim())}
                  onClick={handleCreate}
                >
                  <Phone size={14} />
                  {creating ? "Creating…" : "Create & join"}
                </button>
                <button className="calls-cancel" type="button" onClick={() => setShowCreate(false)}>
                  Cancel
                </button>
              </div>
              {error ? <span className="call-row-error">{error}</span> : null}
            </div>
          )}
        </div>

        {groupCallStatus === "connected" || groupCallStatus === "connecting" ? (
          <button className="calls-leave" type="button" onClick={onLeaveCall}>
            Leave current call
          </button>
        ) : null}

        <div className="dm-section-heading">Active calls</div>
        {calls.length === 0 ? (
          <div className="calls-empty">No active calls. Create one to get started.</div>
        ) : (
          <div className="calls-list">
            {calls.map((call) => (
              <CallRow
                call={call}
                isCurrent={call.callKey === currentCallKey}
                key={call.callKey}
                onDeleteCall={onDeleteCall}
                onJoinCall={onJoinCall}
                sessionUserId={sessionUserId}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}