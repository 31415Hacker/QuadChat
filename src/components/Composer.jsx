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
  Trash2,
  X
} from "lucide-react";
import { getReplyPreview } from "../utils/messages.jsx";
import { formatDuration } from "../utils/format.js";

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
  sessionUserId
}) {
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
          <input
            ref={composerInputRef}
            type="text"
            value={message}
            onChange={(event) => onChange(event.target.value)}
            onPaste={handleComposerPaste}
            placeholder={
              editingMessage
                ? "Edit message…"
                : isDmChannel
                  ? `Message ${dmPartnerName}`
                  : "Type a message"
            }
            maxLength={500}
          />
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
