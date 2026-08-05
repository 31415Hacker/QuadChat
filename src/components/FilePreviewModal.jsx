import { useEffect, useState } from "react";
import { Download, FileText, X } from "lucide-react";
import Dialog from "./Dialog.jsx";
import { safeUrl } from "../utils/messages.jsx";

const IMAGE_EXTENSIONS = new Set([
  "avif",
  "bmp",
  "gif",
  "heic",
  "heif",
  "jpe",
  "jpeg",
  "jpg",
  "jxl",
  "png",
  "tif",
  "tiff",
  "webp"
]);

const TEXT_EXTENSIONS = new Set([
  "c",
  "cc",
  "conf",
  "cpp",
  "css",
  "csv",
  "html",
  "java",
  "js",
  "json",
  "jsx",
  "log",
  "md",
  "mjs",
  "py",
  "sh",
  "sql",
  "tex",
  "text",
  "ts",
  "tsx",
  "txt",
  "xml",
  "yaml",
  "yml"
]);

const DOCUMENT_EXTENSIONS = new Set(["doc", "docx", "odt", "pdf", "rtf"]);

function extensionOf(name = "") {
  return name.split(".").pop()?.toLowerCase() || "";
}

export function getFileKind(file) {
  const type = String(file?.type || "").toLowerCase();
  const extension = extensionOf(file?.name);
  if (type.startsWith("image/") || IMAGE_EXTENSIONS.has(extension)) return "image";
  if (type.startsWith("text/") || TEXT_EXTENSIONS.has(extension)) return "text";
  if (type === "application/pdf" || DOCUMENT_EXTENSIONS.has(extension)) return "document";
  return "file";
}

export function getImagePreviewUrl(url) {
  const validUrl = safeUrl(url);
  if (!validUrl || !validUrl.includes("res.cloudinary.com/") || !validUrl.includes("/upload/")) {
    return validUrl;
  }
  return validUrl.replace("/upload/", "/upload/f_auto/");
}

export default function FilePreviewModal({ file, onClose }) {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const url = safeUrl(file?.url);
  const kind = getFileKind(file);

  useEffect(() => {
    if (!file || kind !== "text" || !url) return undefined;
    const controller = new AbortController();
    setText("");
    setError("");
    setIsLoading(true);
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Preview unavailable (${response.status})`);
        return response.text();
      })
      .then(setText)
      .catch((previewError) => {
        if (previewError.name !== "AbortError") setError(previewError.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });
    return () => controller.abort();
  }, [file, kind, url]);

  if (!file) return null;

  return (
    <Dialog className={`file-preview-modal file-preview-modal--${kind}`} onClose={onClose} ariaLabel={`Preview ${file.name || "file"}`}>
      <div className="file-preview-header">
        <div className="file-preview-title">
          <FileText size={18} />
          <strong>{file.name || "File preview"}</strong>
        </div>
        <div className="file-preview-actions">
          {url ? (
            <a className="file-preview-download" href={url} download={file.name} target="_blank" rel="noreferrer" title="Open original file">
              <Download size={16} />
              <span>Open original</span>
            </a>
          ) : null}
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close preview">
            <X size={18} />
          </button>
        </div>
      </div>
      {kind === "image" ? (
        <div className="file-preview-image-wrap">
          <img src={getImagePreviewUrl(url)} alt={file.name || "Image preview"} />
        </div>
      ) : kind === "text" ? (
        <div className="file-preview-text-wrap">
          {isLoading ? <p className="file-preview-status">Loading text preview…</p> : null}
          {error ? <p className="file-preview-status file-preview-status--error">{error}</p> : null}
          {!isLoading && !error ? <pre>{text}</pre> : null}
        </div>
      ) : kind === "document" && url ? (
        <iframe className="file-preview-document" src={url} title={file.name || "Document preview"} />
      ) : (
        <div className="file-preview-status">This file type cannot be previewed in the browser.</div>
      )}
    </Dialog>
  );
}
