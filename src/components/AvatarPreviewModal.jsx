import { X } from "lucide-react";
import Dialog from "./Dialog.jsx";
import { getImagePreviewUrl } from "./FilePreviewModal.jsx";

export default function AvatarPreviewModal({ profile, onClose }) {
  if (!profile?.photoURL) return null;

  return (
    <Dialog className="avatar-preview-modal" onClose={onClose} ariaLabel={`Profile picture of ${profile.name}`}>
      <div className="avatar-preview-header">
        <strong>{profile.name}</strong>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close preview">
          <X size={18} />
        </button>
      </div>
      <div className="avatar-preview-image-wrap">
        <img src={getImagePreviewUrl(profile.photoURL)} alt={`Profile picture of ${profile.name}`} />
      </div>
    </Dialog>
  );
}
