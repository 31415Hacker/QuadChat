import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FileText, File, Download, X } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function safeUrl(str) {
  if (typeof str !== "string" || !str.trim()) return "";
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:" ? str : "";
  } catch {
    return "";
  }
}

export default function MediaRenderer({ url, fileName, fileType }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const safeMediaUrl = safeUrl(url);

  const onDocumentLoadSuccess = useCallback(({ numPages: n }) => {
    setNumPages(n);
  }, []);

  if (fileType?.startsWith("image/")) {
    return (
      <a href={safeMediaUrl} rel="noreferrer" target="_blank" className="block max-w-md">
        <img src={safeMediaUrl} alt={fileName} className="rounded-lg w-full h-auto object-cover max-h-80" />
      </a>
    );
  }

  if (fileType === "video/mp4" || fileType === "video/quicktime") {
    return (
      <video controls className="rounded-lg max-w-md w-full max-h-80 bg-black">
        <source src={safeMediaUrl} type={fileType} />
      </video>
    );
  }

  if (fileType === "application/pdf") {
    return (
      <>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-left"
        >
          <FileText size={20} className="text-red-500 shrink-0" />
          <span className="text-sm font-medium text-gray-800 truncate max-w-48">{fileName}</span>
        </button>

        {modalOpen ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-800 truncate">{fileName}</span>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center gap-4">
                <Document file={safeMediaUrl} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from({ length: numPages || 1 }, (_, i) => (
                    <Page
                      key={i}
                      pageNumber={i + 1}
                      className="shadow-md rounded-md mb-4"
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={Math.min(700, window.innerWidth - 80)}
                    />
                  ))}
                </Document>
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 text-xs text-gray-500">
                <span>{numPages ? `${numPages} page${numPages > 1 ? "s" : ""}` : "Loading..."}</span>
                <a
                  href={safeMediaUrl}
                  download={fileName}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <a
      href={safeMediaUrl}
      download={fileName}
      className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
    >
      <File size={20} className="text-gray-500 shrink-0" />
      <span className="text-sm font-medium text-gray-800 truncate max-w-40">{fileName}</span>
      <Download size={16} className="text-gray-400 ml-auto shrink-0" />
    </a>
  );
}
