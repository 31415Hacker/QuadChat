import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Dialog({
  onClose,
  ariaLabel,
  className = "",
  closeOnBackdrop = true,
  closeOnEscape = true,
  children
}) {
  const dialogRef = useRef(null);
  const restoreFocusRef = useRef(null);

  useEffect(() => {
    restoreFocusRef.current = document.activeElement;
    const dialog = dialogRef.current;
    const firstFocusable = dialog?.querySelector(FOCUSABLE_SELECTOR);
    if (firstFocusable) {
      firstFocusable.focus();
    } else {
      dialog?.focus?.();
    }
    return () => restoreFocusRef.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!closeOnEscape) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose?.();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeOnEscape, onClose]);

  const handleKeyDown = (event) => {
    if (event.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
    if (!focusables?.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="modal-backdrop" onClick={closeOnBackdrop ? onClose : undefined}>
      <div
        ref={dialogRef}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
