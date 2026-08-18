import { MessageCircle, Mic, MicOff, Phone, Users } from "lucide-react";
import { useEffect, useState } from "react";
import RelativeTime from "./RelativeTime.jsx";
import { getInitials, getProfileName, isAdminEmail, isDeveloperEmail } from "../utils/names.js";
import { getStatusColor, isProfileMuted, isProfileVoiceMuted } from "../utils/profile.js";

export default function UsersSidebar({
  profiles,
  sessionUserId,
  onlineUsers,
  openUserAnalytics,
  openDm,
  startCall,
  callStatus,
  toggleUserMute,
  toggleVoiceMute,
  isCurrentUserAdmin,
  groupCallStatus,
  groupCallParticipants,
  p2pGroupCallStatus,
  p2pGroupCallParticipants,
  showSidebarClock,
  showSidebarSeconds
}) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (!showSidebarClock) return undefined;
    const interval = window.setInterval(() => setNow(new Date()), showSidebarSeconds ? 1000 : 30000);
    return () => window.clearInterval(interval);
  }, [showSidebarClock, showSidebarSeconds]);

  const clockTime = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    ...(showSidebarSeconds ? { second: "2-digit" } : {})
  }).format(now);
  const clockDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).format(now);

  return (
    <aside className="users-sidebar">
      <div className="users-sidebar-header">
        <Users size={16} />
        <span>Users</span>
      </div>
      <div className="users-sidebar-list">
        {Object.values(profiles).filter((profile) => !profile.banned).map((profile) => {
          const name = getProfileName(profile, profile.email || "");
          const muted = isProfileMuted(profile);
          const voiceMuted = isProfileVoiceMuted(profile);
          const isProfileAdmin = profile.isAdmin === true || isAdminEmail(profile.email);
          const isProfileDeveloper = profile.isDeveloper === true || isDeveloperEmail(profile.email);
          const roleMarker = isProfileDeveloper ? "DEV" : isProfileAdmin ? "ADMIN" : "USER";
          const theirMode = profile.status?.mode;
          const isSelf = profile.id === sessionUserId;
          const userActive = isSelf || onlineUsers.has(profile.id);
          const statusMode = userActive ? "active" : (theirMode === "busy" || theirMode === "away" ? theirMode : "offline");
          const isInGroupCall =
            (groupCallStatus === "connected" && groupCallParticipants[profile.id]) ||
            (p2pGroupCallStatus === "connected" && p2pGroupCallParticipants[profile.id]);
          return (
            <div
              className={`user-item ${userActive ? "online" : ""}`}
              key={profile.id}
            >
              <span className="user-avatar" title={name}>
                {profile.photoURL ? (
                  <img src={profile.photoURL} alt="" />
                ) : (
                  <span>{getInitials(name)}</span>
                )}
              </span>
              <span className="user-dot" style={statusMode !== "offline" ? { background: getStatusColor(statusMode) } : undefined} />
              <div className="user-info">
                <button
                  className="user-name"
                  type="button"
                  onClick={() => openUserAnalytics(profile)}
                >
                   <span className="user-name-text" title={name}>{name}</span>
                   <span className={`user-role-marker user-role-marker--${roleMarker.toLowerCase()}`}>
                     {roleMarker}
                   </span>
                   {profile.status?.text ? (
                    <span className="user-status-text" title={profile.status.text}>{profile.status.text}</span>
                  ) : null}
                  {isInGroupCall ? (
                    <span className="group-call-indicator" title="In group call">
                      <Users size={11} />
                    </span>
                  ) : null}
                </button>
                {isInGroupCall && !isProfileAdmin && isCurrentUserAdmin ? (
                  <button
                    className="user-voice-mic-btn"
                    type="button"
                    onClick={() => toggleVoiceMute(profile)}
                    title={voiceMuted ? `Unmute ${name} in the group call` : `Mute ${name} in the group call`}
                  >
                    {voiceMuted ? <MicOff size={11} /> : <Mic size={11} />}
                  </button>
                ) : null}
                <span className="user-last-online">
                  {userActive ? "" : profile.lastOnline ? <RelativeTime timestamp={profile.lastOnline} /> : "unmeasured"}
                </span>
              </div>
              {profile.id !== sessionUserId ? (
                <button
                  className="user-dm-btn"
                  type="button"
                  onClick={() => openDm(profile.id)}
                  title={`Message ${name}`}
                >
                  <MessageCircle size={10} />
                </button>
              ) : null}
              {profile.id !== sessionUserId && userActive && callStatus === "idle" ? (
                <button
                  className="user-call-btn"
                  type="button"
                  onClick={() => startCall(profile.id, name)}
                  title={`Call ${name}`}
                >
                  <Phone size={10} />
                </button>
              ) : null}
              {isProfileAdmin ? null : isCurrentUserAdmin ? (
                <button
                  className="user-mic-btn"
                  type="button"
                  onClick={() => toggleUserMute(profile)}
                  title={muted ? `Unmute ${name}` : `Mute ${name}`}
                >
                  {muted ? (
                    <MicOff
                      aria-label={`${name} is muted`}
                      className="user-mic user-mic-muted"
                      size={12}
                    />
                  ) : (
                    <Mic
                      aria-label={`${name} can speak`}
                      className="user-mic"
                      size={12}
                    />
                  )}
                </button>
              ) : muted ? (
                <MicOff
                  aria-label={`${name} is muted`}
                  className="user-mic user-mic-muted"
                  size={12}
                />
              ) : (
                <Mic
                  aria-label={`${name} can speak`}
                  className="user-mic"
                  size={12}
                />
              )}
            </div>
          );
        })}
      </div>
      {showSidebarClock ? (
        <div className="sidebar-clock" aria-label={`Local time: ${clockDate}, ${clockTime}`}>
          <strong>{clockTime}</strong>
          <span>{clockDate}</span>
        </div>
      ) : null}
      <div className="commit-fineprint">commit {__COMMIT_HASH__}</div>
    </aside>
  );
}
