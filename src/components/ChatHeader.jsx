import {
  Bell,
  BellOff,
  CheckCheck,
  Clock,
  LogOut,
  MessageCircle,
  Moon,
  Phone,
  PhoneOff,
  Search,
  Settings,
  Sun,
  UserRound,
  Users,
  X
} from "lucide-react";
import { version as APP_VERSION } from "../../package.json";
import { formatTime, timeAgo } from "../utils/format.js";
import { getInitials, getProfileName } from "../utils/names.js";
import { getStatusColor } from "../utils/profile.js";

export default function ChatHeader({
  activeName,
  showVersionInHeader,
  isCurrentUserDeveloper,
  isCurrentUserAdmin,
  currentProfile,
  isDmChannel,
  groupCallStatus,
  p2pGroupCallStatus,
  groupCallParticipants,
  p2pGroupCallParticipants,
  onToggleGroupCall,
  searchPanelRef,
  searchOpen,
  setSearchOpen,
  searchQuery,
  setSearchQuery,
  runSearch,
  searching,
  searchSearched,
  searchResults,
  profiles,
  jumpToSearchResult,
  notificationPanelRef,
  isNotificationPanelOpen,
  setNotificationPanelOpen,
  unreadNotificationCount,
  inAppNotifications,
  markAllNotificationsRead,
  openNotification,
  user,
  signOut,
  isProfileMenuOpen,
  setIsProfileMenuOpen,
  setStatusModalOpen,
  openSettings,
  isDarkTheme,
  setIsDarkTheme,
  toggleNotifications,
  notificationsEnabled
}) {
  const statusMode = currentProfile?.status?.mode || "active";

  return (
    <header className="chat-header">
      <div className="chat-title">
        <div className="brand-mark" aria-hidden="true">
          <MessageCircle size={26} strokeWidth={2.3} />
        </div>
        <div>
          <h1>{showVersionInHeader ? `QuadChat v${APP_VERSION}` : "QuadChat"}</h1>
          <p>
            Signed in as {activeName}
          </p>
          {isCurrentUserDeveloper ? (
            <span className="admin-badge">Developer</span>
          ) : isCurrentUserAdmin ? (
            <span className="admin-badge">Admin</span>
          ) : null}
        </div>
      </div>
      {!isDmChannel ? (
        <button
          className={`icon-text-button ${groupCallStatus === "connected" || p2pGroupCallStatus === "connected" ? "group-call-active" : ""}`}
          type="button"
          onClick={onToggleGroupCall}
          title={groupCallStatus === "connected" ? "Leave group call" : p2pGroupCallStatus === "connected" ? "Leave group call" : groupCallStatus === "connecting" || p2pGroupCallStatus === "connecting" ? "Connecting..." : "Join group call"}
        >
          {groupCallStatus === "connected" || p2pGroupCallStatus === "connected" ? <PhoneOff size={18} /> : <Users size={18} />}
          <span>
            {groupCallStatus === "connected"
              ? `In call (${Object.keys(groupCallParticipants).length + 1})`
              : p2pGroupCallStatus === "connected"
                ? `In call (${Object.keys(p2pGroupCallParticipants).length + 1})`
                : groupCallStatus === "connecting" || p2pGroupCallStatus === "connecting"
                  ? "Connecting..."
                  : "Group call"}
          </span>
        </button>
      ) : null}
      <div className="search-wrap" ref={searchPanelRef}>
        <button
          className="icon-text-button"
          aria-label="Search messages"
          aria-expanded={searchOpen}
          type="button"
          onClick={() => setSearchOpen((isOpen) => !isOpen)}
          title="Search messages"
        >
          <Search size={18} />
          <span>Search</span>
        </button>
        {searchOpen ? (
          <div className="search-panel" aria-label="Search messages">
            <div className="search-panel-input-row">
              <Search size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    runSearch();
                  }
                }}
                placeholder="Search all messages…"
                maxLength={100}
                autoFocus
              />
              <button
                type="button"
                onClick={runSearch}
                disabled={!searchQuery.trim() || searching}
                title="Search"
              >
                Search
              </button>
            </div>
            {searching ? (
              <div className="search-empty">Searching…</div>
            ) : searchSearched && searchResults.length === 0 ? (
              <div className="search-empty">No results found.</div>
            ) : !searchSearched ? (
              <div className="search-empty">
                Search across all channels and DMs. Press Enter to search.
              </div>
            ) : null}
            {searchResults.map((group) => (
              <div className="search-group" key={group.channelId}>
                <div className="search-group-label">{group.label}</div>
                {group.messages.map((msg) => (
                  <button
                    className="search-result"
                    key={`${group.channelId}-${msg.id}`}
                    type="button"
                    onClick={() => jumpToSearchResult(group, msg)}
                  >
                    <span className="search-result-sender">
                      {getProfileName(profiles[msg.userId], "Someone")}
                      <small>{formatTime(msg.createdAt)}</small>
                    </span>
                    <span className="search-result-preview">{msg.text}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="notif-bell" ref={notificationPanelRef}>
        <button
          className="icon-text-button notif-bell-button"
          aria-label="Notifications"
          aria-expanded={isNotificationPanelOpen}
          type="button"
          onClick={() => setNotificationPanelOpen((isOpen) => !isOpen)}
          title="Notifications"
        >
          <Bell size={18} />
          <span>Notifications</span>
          {unreadNotificationCount > 0 ? (
            <span className="notif-badge">{unreadNotificationCount}</span>
          ) : null}
        </button>
        {isNotificationPanelOpen ? (
          <div className="notif-panel" aria-label="Notifications">
            <div className="notif-panel-header">
              <strong>Notifications</strong>
              {unreadNotificationCount > 0 ? (
                <button type="button" onClick={markAllNotificationsRead}>
                  <CheckCheck size={14} />
                  <span>Mark all read</span>
                </button>
              ) : null}
            </div>
            {inAppNotifications.length === 0 ? (
              <div className="notif-empty">No notifications yet.</div>
            ) : (
              inAppNotifications.map((notification) => (
                <button
                  className={`notif-item ${notification.read ? "" : "notif-item-unread"}`}
                  key={notification.id}
                  type="button"
                  onClick={() => openNotification(notification)}
                >
                  <span className={`notif-item-icon notif-item-icon-${notification.type}`}>
                    {notification.type === "call" ? (
                      <Phone size={15} />
                    ) : notification.type === "mention" ? (
                      <MessageCircle size={15} />
                    ) : (
                      <Users size={15} />
                    )}
                  </span>
                  <span className="notif-item-text">
                    <strong>{notification.channelLabel || notification.senderName}</strong>
                    <span>
                      {notification.type === "call"
                        ? `${notification.senderName} ${notification.body}`
                        : `${notification.senderName}: ${notification.body}`}
                    </span>
                    <small>{timeAgo(notification.createdAt)}</small>
                  </span>
                </button>
              ))
            )}
          </div>
        ) : null}
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
      <div className="profile-actions">
        <div className="avatar-wrapper">
          <button
            className="avatar-button"
            type="button"
            onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
            title="Profile options"
          >
            {user.photoURL ? (
              <img src={user.photoURL} alt="" />
            ) : (
              <span>{getInitials(activeName)}</span>
            )}
          </button>
          <span className="avatar-status-dot" style={{ background: getStatusColor(statusMode) }} />
        </div>
        {isProfileMenuOpen ? (
          <div className="profile-menu">
            <button type="button" onClick={() => { setIsProfileMenuOpen(false); setStatusModalOpen(true); }}>
              <Clock size={17} />
              <span>Set status</span>
            </button>
            <button type="button" onClick={openSettings}>
              <Settings size={17} />
              <span>Settings</span>
            </button>
            <button type="button" onClick={() => setIsDarkTheme((prev) => !prev)}>
              {isDarkTheme ? <Sun size={17} /> : <Moon size={17} />}
              <span>{isDarkTheme ? "Light mode" : "Dark mode"}</span>
            </button>
            <button type="button" onClick={toggleNotifications}>
              {notificationsEnabled ? (
                <BellOff size={17} />
              ) : (
                <Bell size={17} />
              )}
              <span>
                {notificationsEnabled
                  ? "Disable notifications"
                  : "Enable notifications"}
              </span>
            </button>
            <button type="button" onClick={signOut}>
              <LogOut size={17} />
              <span>Sign out</span>
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
