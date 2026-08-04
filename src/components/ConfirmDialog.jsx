import Dialog from "./Dialog";

export default function ConfirmDialog({ state, onConfirm, onCancel }) {
  if (!state) return null;

  return (
    <Dialog
      ariaLabel={state.title}
      onClose={onCancel}
      className="confirm-dialog"
    >
      <h3 className="confirm-dialog-title">{state.title}</h3>
      <p className="confirm-dialog-message">{state.message}</p>
      <div className="confirm-dialog-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={onCancel}
        >
          {state.cancelLabel}
        </button>
        <button
          type="button"
          className={state.danger ? "danger-button" : "save-status-btn"}
          onClick={onConfirm}
        >
          {state.confirmLabel}
        </button>
      </div>
    </Dialog>
  );
}
