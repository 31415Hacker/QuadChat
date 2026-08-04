import { useCallback, useRef, useState } from "react";

export default function useConfirmDialog() {
  const [confirmState, setConfirmState] = useState(null);
  const resolveRef = useRef(null);

  const ask = useCallback((message, options = {}) => {
    setConfirmState({
      message,
      title: options.title || "Are you sure?",
      confirmLabel: options.confirmLabel || "Confirm",
      cancelLabel: options.cancelLabel || "Cancel",
      danger: options.danger !== false
    });
    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  }, []);

  const closeConfirm = useCallback((result) => {
    resolveRef.current?.(result);
    resolveRef.current = null;
    setConfirmState(null);
  }, []);

  return { confirmState, ask, closeConfirm };
}
