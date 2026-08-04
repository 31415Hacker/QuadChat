import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCheck,
  FileText,
  Film,
  Gamepad2,
  Image,
  Mic,
  Pause,
  Play,
  Plus,
  Send,
  Smile,
  Trash2,
  X
} from "lucide-react";
import { getReplyPreview } from "../utils/messages.jsx";
import { getInitials, getProfileName } from "../utils/names.js";
import { formatDuration } from "../utils/format.js";

const EmojiPicker = lazy(() => import("./EmojiPicker.jsx"));

const NAVIGATION_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End"];

export default function Composer({
  editingMessage,
  onCancelEdit,
  replyTo,
  setReplyTo,
  pendingFiles,
  removePendingFile,
  onGamingPost,
  isRecording,
  isRecordingPaused,
  cancelRecording,
  pauseRecording,
  resumeRecording,
  startRecording,
  recordingDuration,
  isSending,
  message,
  onChange,
  handleComposerPaste,
  onSubmit,
  supportsRecording,
  canPostInActiveChannel,
  isDmChannel,
  dmPartnerName,
  activeName,
  isCurrentUserAdmin,
  isProfileMuted,
  currentProfile,
  maxAttachments,
  attachMenuRef,
  showAttachMenu,
  setShowAttachMenu,
  fileInputRef,
  addPendingFiles,
  composerInputRef,
  sessionUserId,
  profiles,
  isDarkTheme
}) {
  const caretRef = useRef(null);
  const emojiRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [mention, setMention] = useState(null);
  const [mentionIndex, setMentionIndex] = useState(0);

  useEffect(() => {
    const el = composerInputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [message, composerInputRef]);

  useEffect(() => {
    if (!showEmojiPicker) return undefined;
    const onPointerDown = (event) => {
      if (!emojiRef.current?.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [showEmojiPicker]);

  const mentionCandidates = useMemo(() => {
    if (!mention) return [];
    const seen = new Set();
    const names = [];
    for (const profile of Object.values(profiles)) {
      const name = getProfileName(profile, "").trim();
      if (!name) continue;
      const lower = name.toLowerCase();
      if (seen.has(lower)) continue;
      seen.add(lower);
      names.push(name);
    }
    const query = mention.query.toLowerCase();
    return names
      .filter((name) => name.toLowerCase().startsWith(query))
      .slice(0, 8);
  }, [mention, profiles]);

  const activeMentionIndex = Math.min(
    mentionIndex,
    Math.max(mentionCandidates.length - 1, 0)
  );

  function refreshMention() {
    const el = composerInputRef.current;
    if (!el) return;
    const value = el.value;
    const caret = el.selectionStart ?? value.length;
    caretRef.current = caret;
    const before = value.slice(0, caret);
    const atIndex = before.lastIndexOf("@");
    const prefixBefore = atIndex > 0 ? before[atIndex - 1] : "";
    const between = atIndex === -1 ? "" : before.slice(atIndex + 1);
    const active =
      atIndex !== -1 &&
      (atIndex === 0 || /\s/.test(prefixBefore)) &&
      !/\s/.test(between);

    setMention((prev) => {
      const next = active ? { start: atIndex, query: between } : null;
      const changed =
        (prev === null) !== (next === null) ||
        (next !== null &&
          (prev.start !== next.start || prev.query !== next.query));
      return changed ? next : prev;
    });
    if (active) setMentionIndex(0);
  }

  function insertMention(name) {
    const el = composerInputRef.current;
    if (!el || !mention) return;
    const caret = caretRef.current ?? el.selectionStart ?? message.length;
    const inserted = `@${name} `;
    onChange(
      message.slice(0, mention.start) +
        inserted +
        message.slice(caret)
    );
    setMention(null);
    requestAnimationFrame(() => {
      el.focus();
      const pos = mention.start + inserted.length;
      el.setSelectionRange(pos, pos);
    });
  }

  function handleChange(event) {
    const value = event.target.value;
    caretRef.current = event.target.selectionStart ?? value.length;
    onChange(value);
    refreshMention();
  }

  function handleKeyDown(event) {
    const composing = event.nativeEvent?.isComposing;
    const count = mentionCandidates.length;

    if (count > 0) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setMentionIndex((index) => (index + 1) % count);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setMentionIndex((index) => (index - 1 + count) % count);
        return;
      }
      if (event.key === "Tab") {
        event.preventDefault();
        insertMention(mentionCandidates[activeMentionIndex]);
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        setMention(null);
        return;
      }
      if (event.key === "Enter" && !event.shiftKey && !composing) {
        event.preventDefault();
        insertMention(mentionCandidates[activeMentionIndex]);
        return;
      }
    }

    if (event.key === "Enter" && !event.shiftKey && !composing) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit?.();
    }
  }

  function handleKeyUp(event) {
    if (NAVIGATION_KEYS.includes(event.key)) {
      refreshMention();
    } else if (
      !mention &&
      (event.key === "ArrowUp" || event.key === "ArrowDown")
    ) {
      refreshMention();
    }
  }

  function handleEmojiSelect(emoji) {
    const insertion = emoji.native || emoji.id || "";
    if (!insertion) return;
    const el = composerInputRef.current;
    const caret = el?.selectionStart ?? message.length;
    onChange(message.slice(0, caret) + insertion + message.slice(caret));
    setShowEmojiPicker(false);
    requestAnimationFrame(() => {
      el?.focus();
      const pos = caret + insertion.length;
      el?.setSelectionRange(pos, pos);
    });
  }

  return (
    <form className="composer" onSubmit={onSubmit}>
      {editingMessage ? (
        <div className="edit-composer">
          <div className="reply-composer-text">
            <strong>Editing message</strong>
            <span>{getReplyPreview(editingMessage.text)}</span>
          </div>
          <button
            aria-label="Cancel editing"
            onClick={onCancelEdit}
            title="Cancel edit"
            type="button"
          >
            <X size={16} />
          </button>
        </div>
      ) : replyTo ? (
        <div className="reply-composer">
          <div className="reply-composer-text">
            <strong>Replying to {replyTo.senderName}</strong>
            <span>{replyTo.text}</span>
          </div>
          <button
            aria-label="Cancel reply"
            onClick={() => setReplyTo(null)}
            title="Cancel reply"
            type="button"
          >
            <X size={16} />
          </button>
        </div>
      ) : null}
      {pendingFiles.length > 0 ? (
        <div className="attachment-preview-list">
          {pendingFiles.map((pendingFile) => (
            <div className="attachment-preview" key={pendingFile.id}>
              {pendingFile.previewUrl ? (
                pendingFile.file.type.startsWith("video/") ? (
                  <Film size={18} />
                ) : (
                  <img src={pendingFile.previewUrl} alt="" />
                )
              ) : (
                <FileText size={22} />
              )}
              <span>{pendingFile.file.name}</span>
              <button
                aria-label={`Remove ${pendingFile.file.name}`}
                onClick={() => removePendingFile(pendingFile.id)}
                title="Remove file"
                type="button"
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      ) : null}
      <div
        className={`composer-row${isRecording || isRecordingPaused ? " composer-row--recording" : ""}${supportsRecording ? "" : " composer-row--no-mic"}`}
      >
        {isRecording || isRecordingPaused ? (
          <button
            type="button"
            className="recording-cancel-btn"
            onClick={cancelRecording}
            title="Delete recording"
            aria-label="Delete recording"
            disabled={isSending}
          >
            <Trash2 size={20} />
          </button>
        ) : (
          <>
            <div className="attach-wrapper" ref={attachMenuRef}>
              <button
                aria-label="Attach files"
                className="attach-button"
                onClick={() => setShowAttachMenu((prev) => !prev)}
                title="Attach files"
                type="button"
                disabled={
                  pendingFiles.length >= maxAttachments ||
                  isSending ||
                  !canPostInActiveChannel
                }
              >
                <Plus size={22} />
              </button>
              {showAttachMenu && (
                <div className="attach-menu">
                  <button
                    type="button"
                    onClick={() => {
                      fileInputRef.current.accept = "image/*,video/*";
                      fileInputRef.current.click();
                      setShowAttachMenu(false);
                    }}
                  >
                    <Image size={20} />
                    <span>Photos &amp; Videos</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      fileInputRef.current.accept = "";
                      fileInputRef.current.click();
                      setShowAttachMenu(false);
                    }}
                  >
                    <FileText size={20} />
                    <span>Document</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAttachMenu(false);
                      onGamingPost();
                    }}
                  >
                    <Gamepad2 size={20} />
                    <span>Gaming Post</span>
                  </button>
                </div>
              )}
            </div>
            <div className="emoji-wrapper" ref={emojiRef}>
              <button
                aria-label="Add emoji"
                className="emoji-button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                title="Add emoji"
                type="button"
                disabled={isSending || !canPostInActiveChannel}
              >
                <Smile size={22} />
              </button>
              {showEmojiPicker && (
                <div className="emoji-picker-popover">
                  <Suspense fallback={<div className="emoji-picker-loading">Loading emoji…</div>}>
                    <EmojiPicker
                      theme={isDarkTheme ? "dark" : "light"}
                      onSelect={handleEmojiSelect}
                    />
                  </Suspense>
                </div>
              )}
            </div>
            {supportsRecording ? (
              <button
                aria-label="Record voice message"
                className="mic-button"
                onClick={startRecording}
                title="Record voice message"
                type="button"
                disabled={isSending || !canPostInActiveChannel}
              >
                <Mic size={22} />
              </button>
            ) : null}
          </>
        )}
        <input
          ref={fileInputRef}
          className="file-input"
          type="file"
          multiple
          onChange={(event) => addPendingFiles(event.target.files)}
        />
        {isRecording || isRecordingPaused ? (
          <div className="recording-bar">
            <span className="recording-dot" />
            <span className="recording-timer">
              {formatDuration(recordingDuration)}
            </span>
            <button
              type="button"
              className="recording-pause-btn"
              onClick={
                isRecordingPaused ? resumeRecording : pauseRecording
              }
              title={
                isRecordingPaused
                  ? "Resume recording"
                  : "Pause recording"
              }
              aria-label={
                isRecordingPaused
                  ? "Resume recording"
                  : "Pause recording"
              }
            >
              {isRecordingPaused ? (
                <Play size={18} />
              ) : (
                <Pause size={18} />
              )}
            </button>
          </div>
        ) : (
          <div className="composer-input-wrap">
            <textarea
              ref={composerInputRef}
              rows={1}
              value={message}
              onChange={handleChange}
              onPaste={handleComposerPaste}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              onMouseUp={refreshMention}
              onClick={refreshMention}
              placeholder={
                editingMessage
                  ? "Edit message…"
                  : isDmChannel
                    ? `Message ${dmPartnerName}`
                    : "Type a message"
              }
              maxLength={500}
            />
            {mentionCandidates.length > 0 ? (
              <div className="mention-suggestions" role="listbox">
                {mentionCandidates.map((name, index) => (
                  <button
                    key={name}
                    type="button"
                    className={`mention-suggestion${index === activeMentionIndex ? " mention-suggestion--active" : ""}`}
                    role="option"
                    aria-selected={index === activeMentionIndex}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      insertMention(name);
                    }}
                    onMouseEnter={() => setMentionIndex(index)}
                  >
                    <span className="mention-suggestion-avatar">
                      {getInitials(name)}
                    </span>
                    <span className="mention-suggestion-name">{name}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        )}
        <button
          type="submit"
          aria-label={editingMessage ? "Save edits" : "Send message"}
          title={editingMessage ? "Save edits" : "Send message"}
          disabled={
            editingMessage
              ? !message.trim()
              : ((!message.trim() &&
                  pendingFiles.length === 0 &&
                  !isRecording &&
                  !isRecordingPaused) ||
                  !activeName ||
                  isSending ||
                  !sessionUserId ||
                  (!isCurrentUserAdmin && isProfileMuted(currentProfile)) ||
                  !canPostInActiveChannel)
          }
        >
          {editingMessage ? <CheckCheck size={20} /> : <Send size={20} />}
        </button>
      </div>
    </form>
  );
}
