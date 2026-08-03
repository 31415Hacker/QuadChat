import { MessageCircle, Phone, Users, X } from "lucide-react";

export default function ToastContainer({ toasts, onOpen, onDismiss }) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <button
          className={`toast toast-${toast.type}`}
          key={toast.id}
          type="button"
          onClick={() => onOpen(toast)}
        >
          <span className="toast-icon">
            {toast.type === "call" ? (
              <Phone size={16} />
            ) : toast.type === "mention" ? (
              <MessageCircle size={16} />
            ) : (
              <Users size={16} />
            )}
          </span>
          <span className="toast-text">
            <strong>{toast.channelLabel || toast.senderName}</strong>
            <span>
              {toast.type === "call"
                ? `${toast.senderName} ${toast.body}`
                : `${toast.senderName}: ${toast.body}`}
            </span>
          </span>
          <span
            className="toast-close"
            role="button"
            tabIndex={0}
            title="Dismiss"
            onClick={(event) => {
              event.stopPropagation();
              onDismiss(toast.id);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.stopPropagation();
                onDismiss(toast.id);
              }
            }}
          >
            <X size={14} />
          </span>
        </button>
      ))}
    </div>
  );
}
