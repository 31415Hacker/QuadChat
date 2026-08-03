import { Fragment } from "react";
import {
  CornerDownLeft,
  FileText,
  Lightbulb,
  Megaphone,
  MessageCircle,
  MoreVertical,
  Pencil,
  Trash2
} from "lucide-react";
import GameSessionCard from "../GameSessionCard.jsx";
import { formatDayLabel, dayKey, formatTime } from "../utils/format.js";
import { getProfileName } from "../utils/names.js";
import {
  getReplyPreview,
  renderMessageText,
  safeUrl
} from "../utils/messages.jsx";

function MessageItem({
  item,
  senderName,
  isMine,
  isMenuOpen,
  setOpenMessageMenuId,
  setReplyTo,
  startEditMessage,
  handleDeleteMessage,
  isCurrentUserAdmin,
  profiles,
  sessionUserId,
  activeName,
  handleRsvp,
  joinGroupCall
}) {
  return (
    <article
      id={`msg-${item.id}`}
      className={`message ${isMine ? "message-mine" : ""}`}
    >
      <div className="message-meta">
        <strong>{senderName}</strong>
        <span>
          {formatTime(item.createdAt)}
          {item.edited ? <span className="edited-tag"> · edited</span> : null}
        </span>
      </div>
      <div className="message-actions">
        <button
          aria-expanded={isMenuOpen}
          aria-label="Message options"
          className="message-menu-button"
          onClick={() =>
            setOpenMessageMenuId(isMenuOpen ? "" : item.id)
          }
          title="Message options"
          type="button"
        >
          <MoreVertical size={16} />
        </button>
        {isMenuOpen ? (
          <div className="message-menu">
            <button
              onClick={() => {
                setReplyTo({
                  id: item.id,
                  text: getReplyPreview(item.text),
                  userId: item.userId,
                  senderName
                });
                setOpenMessageMenuId("");
              }}
              type="button"
            >
              <CornerDownLeft size={16} />
              <span>Reply</span>
            </button>
            {isMine &&
            typeof item.text === "string" &&
            !item.isFile &&
            item.type !== "game_session_card" ? (
              <button
                onClick={() => startEditMessage(item)}
                type="button"
              >
                <Pencil size={16} />
                <span>Edit</span>
              </button>
            ) : null}
            {(isMine || isCurrentUserAdmin) ? (
              <button
                onClick={() => {
                  setOpenMessageMenuId("");
                  handleDeleteMessage(item.id);
                }}
                type="button"
                className="danger-button"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
      {item.replyTo && typeof item.replyTo === "object" ? (
        <div className="reply-card">
          <strong>{item.replyTo.senderName || "Unknown"}</strong>
          <span>{item.replyTo.text || "Message unavailable"}</span>
        </div>
      ) : null}
      {item.isFile ? (
        typeof item.fileType === "string" && item.fileType.startsWith("video/") ? (
          <video
            controls
            className="message-video"
          >
            <source
              src={safeUrl(item.text)}
              type={item.fileType}
            />
          </video>
        ) : typeof item.fileType === "string" && item.fileType.startsWith("audio/") ? (
          <audio
            controls
            className="message-audio"
            src={safeUrl(item.text)}
          >
            <source
              src={safeUrl(item.text)}
              type={item.fileType}
            />
          </audio>
        ) : (
          <a
            className="message-image-link"
            href={safeUrl(item.text)}
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={safeUrl(item.text)}
              alt={item.fileName || "Uploaded image"}
            />
          </a>
        )
      ) : item.type === "game_session_card" ? (
        <GameSessionCard data={item} sessionUserId={sessionUserId} sessionUserName={activeName} onRsvp={(status, customText) => handleRsvp(item.id, status, customText)} onJoinGroupCall={joinGroupCall} />
      ) : typeof item.text === "string" && item.text ? (
        <p>
          {renderMessageText(item.text, profiles, item.adminCommand, sessionUserId, item.targetUserId)}
        </p>
      ) : null}
      {Array.isArray(item.attachments) && item.attachments.length > 0 ? (
        <div className="message-attachments">
          {item.attachments.map((attachment) =>
            attachment && typeof attachment.type === "string" && attachment.type.startsWith("image/") ? (
              <a
                className="message-image-link"
                href={safeUrl(attachment.url)}
                key={attachment.path || attachment.url}
                rel="noreferrer"
                target="_blank"
              >
                <img src={safeUrl(attachment.url)} alt={attachment.name} />
              </a>
            ) : attachment && typeof attachment.type === "string" && attachment.type.startsWith("video/") ? (
              <video
                controls
                className="message-video"
                key={attachment.path || attachment.url}
              >
                <source
                  src={safeUrl(attachment.url)}
                  type={attachment.type}
                />
              </video>
            ) : (
              <a
                className="message-file-link"
                href={safeUrl(attachment?.viewUrl || attachment?.url)}
                key={attachment?.path || attachment?.url}
                rel="noreferrer"
                target="_blank"
              >
                <FileText size={18} />
                <span>{attachment?.name}</span>
              </a>
            )
          )}
        </div>
      ) : null}
    </article>
  );
}

export default function MessageList({
  activeChannel,
  isCurrentUserDeveloper,
  isCurrentUserAdmin,
  messages,
  isLoadingMore,
  hasMoreMessages,
  sentinelRef,
  messagesContainerRef,
  profiles,
  sessionUserId,
  activeName,
  openMessageMenuId,
  setOpenMessageMenuId,
  setReplyTo,
  startEditMessage,
  handleDeleteMessage,
  handleRsvp,
  joinGroupCall,
  typingUsers,
  endRef,
  dmPartnerName,
  isDmChannel
}) {
  return (
    <div className="messages" ref={messagesContainerRef} role="log" aria-live="polite">
      {activeChannel === "suggestions" ? (
        <div className="channel-description">
          <Lightbulb size={16} />
          <span>
            Share what you'd like to see in the next update. Anyone
            can post suggestions here.
          </span>
        </div>
      ) : activeChannel === "updates" ? (
        <div className="channel-description">
          <Megaphone size={16} />
          <span>
            {isCurrentUserDeveloper
              ? "You're a developer — post announcements and release notes here for everyone to read."
              : "Read official updates from the developer here. Only developers can post."}
          </span>
        </div>
      ) : null}
      {messages.length === 0 && !isLoadingMore ? (
        <div className="empty-state">
          <MessageCircle size={42} />
          <p>
            {activeChannel === "updates"
              ? "No updates yet."
              : activeChannel === "suggestions"
                ? "No suggestions yet. Be the first!"
                : isDmChannel
                  ? `This is the beginning of your private conversation with ${dmPartnerName}.`
                  : "No messages yet. Say hello when you are ready."}
          </p>
        </div>
      ) : (
        <>
          {isLoadingMore ? (
            <div className="loading-more">Loading older messages...</div>
          ) : null}
          {hasMoreMessages && !isLoadingMore ? (
            <div className="sentinel" ref={sentinelRef} />
          ) : null}
          {messages.map((item, index) => {
            const senderProfile = profiles[item.userId];
            const senderName = getProfileName(senderProfile, item.name);
            const isMine = item.userId === sessionUserId;
            const isMenuOpen = openMessageMenuId === item.id;
            const previous = index > 0 ? messages[index - 1] : null;
            const showDaySeparator =
              !previous ||
              (previous.createdAt?.toDate
                ? dayKey(previous.createdAt.toDate()) !==
                  dayKey(item.createdAt?.toDate())
                : false);

            return (
              <Fragment key={item.id}>
                {showDaySeparator ? (
                  <div className="day-separator">
                    {formatDayLabel(item.createdAt)}
                  </div>
                ) : null}
                <MessageItem
                  item={item}
                  senderName={senderName}
                  isMine={isMine}
                  isMenuOpen={isMenuOpen}
                  setOpenMessageMenuId={setOpenMessageMenuId}
                  setReplyTo={setReplyTo}
                  startEditMessage={startEditMessage}
                  handleDeleteMessage={handleDeleteMessage}
                  isCurrentUserAdmin={isCurrentUserAdmin}
                  profiles={profiles}
                  sessionUserId={sessionUserId}
                  activeName={activeName}
                  handleRsvp={handleRsvp}
                  joinGroupCall={joinGroupCall}
                />
              </Fragment>
            );
          })}
          {Object.keys(typingUsers).length > 0 && (
            <div className="typing-indicator">
              <span className="typing-text">
                {Object.values(typingUsers).join(", ")} {Object.keys(typingUsers).length === 1 ? "is" : "are"} typing
              </span>
              <span className="typing-dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </span>
            </div>
          )}
          <div ref={endRef} />
        </>
      )}
    </div>
  );
}
