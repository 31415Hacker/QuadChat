import { Check, LoaderCircle, MessageCircle, Mic, MicOff, Phone, Users } from "lucide-react";
import { useEffect, useState } from "react";
import RelativeTime from "./RelativeTime.jsx";
import { getInitials, getProfileName, isAdminEmail } from "../utils/names.js";
import { getStatusColor, isProfileMuted, isProfileVoiceMuted } from "../utils/profile.js";

export default function UsersSidebar({
  profiles,
  sessionUserId,
  onlineUsers,
  richPresence,
  companionConnectedUserIds,
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
  showSidebarSeconds,
  previewAvatar,
  deploymentNotice,
  refreshForUpdate
}) {
  const [now, setNow] = useState(() => new Date());
  const [openGameUserId, setOpenGameUserId] = useState(null);

  useEffect(() => {
    if (!showSidebarClock) return undefined;
    if (showSidebarSeconds) {
      const interval = window.setInterval(() => setNow(new Date()), 1000);
      return () => window.clearInterval(interval);
    }
    setNow(new Date());
    let timeout;
    const scheduleNextMinuteTick = () => {
      const delay = 60000 - (Date.now() % 60000) + 50;
      timeout = window.setTimeout(() => {
        setNow(new Date());
        scheduleNextMinuteTick();
      }, delay);
    };
    scheduleNextMinuteTick();
    return () => window.clearTimeout(timeout);
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
      {deploymentNotice === "deploying" ? (
        <div className="deployment-notice" role="status">
          <LoaderCircle aria-hidden="true" size={15} />
          <span>Deploying new version...</span>
        </div>
      ) : deploymentNotice === "update" ? (
        <button className="deployment-notice deployment-notice--update" type="button" onClick={refreshForUpdate}>
          <Check aria-hidden="true" size={15} />
          <span>Refresh to update QuadChat!</span>
        </button>
      ) : null}
      <div className="users-sidebar-list">
        {Object.values(profiles).filter((profile) => !profile.banned).map((profile) => {
          const name = getProfileName(profile, profile.email || "");
          const muted = isProfileMuted(profile);
          const voiceMuted = isProfileVoiceMuted(profile);
          const isProfileAdmin = profile.isAdmin === true || isAdminEmail(profile.email);
          const theirMode = profile.status?.mode;
          const isSelf = profile.id === sessionUserId;
          const userActive = isSelf || onlineUsers.has(profile.id);
          const canReceiveCall = userActive || companionConnectedUserIds.has(profile.id);
          const statusMode = userActive ? "active" : (theirMode === "busy" || theirMode === "away" ? theirMode : "offline");
           const isInGroupCall =
            (groupCallStatus === "connected" && groupCallParticipants[profile.id]) ||
             (p2pGroupCallStatus === "connected" && p2pGroupCallParticipants[profile.id]);
           const game = richPresence?.[profile.id];
           const gameDetails = game ? [game.name, game.version, game.detail].filter(Boolean).join(" · ") : "";
          return (
            <div
              className={`user-item ${userActive ? "online" : ""}`}
              key={profile.id}
            >
              {profile.photoURL ? (
                <button
                  className="user-avatar user-avatar--clickable"
                  type="button"
                  onClick={() => previewAvatar({ photoURL: profile.photoURL, name })}
                  title={`View ${name}'s profile picture`}
                >
                  <img src={profile.photoURL} alt="" />
                </button>
              ) : (
                <span className="user-avatar" title={name}>
                  <span>{getInitials(name)}</span>
                </span>
              )}
              <span className="user-dot" style={statusMode !== "offline" ? { background: getStatusColor(statusMode) } : undefined} />
              <div className="user-info">
                <div className="user-name-row">
                  <button
                    className="user-name"
                    type="button"
                    onClick={() => openUserAnalytics(profile)}
                  >
                    <span className="user-name-text" title={name}>{name}</span>
                    {isInGroupCall ? (
                      <span className="group-call-indicator" title="In group call">
                        <Users size={11} />
                      </span>
                    ) : null}
                  </button>
                  {game ? (
                   <span className="user-game-presence">
                     <button
                       className="user-game-badge"
                       type="button"
                       onClick={() => setOpenGameUserId((current) => current === profile.id ? null : profile.id)}
                       title={`Playing ${gameDetails}`}
                       aria-label={`Playing ${gameDetails}`}
                      >
                        <img src={`/game-icons/${game.logo}.svg`} alt="" />
                     </button>
                     {openGameUserId === profile.id ? <span className="user-game-details">Playing {gameDetails}</span> : null}
                    </span>
                  ) : null}
                </div>
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
              {profile.id !== sessionUserId && canReceiveCall && callStatus === "idle" ? (
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
