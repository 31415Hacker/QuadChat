import { MessageCircle, Mic, MicOff, Monitor, MonitorOff, Phone, PhoneOff, Users } from "lucide-react";

export function ScreenShareRequestBanner({ screenShareRequest, onStopSharing }) {
  if (!screenShareRequest) return null;

  return (
    <div className="screen-share-request">
      <span>{screenShareRequest.name} wants to share their screen. Stop sharing and let them share instead?</span>
      <div className="screen-share-request-actions">
        <button className="call-action-btn" type="button" onClick={onStopSharing}>
          Stop sharing
        </button>
      </div>
    </div>
  );
}

export function ActiveCallBar({
  callStatus,
  callPartnerName,
  remoteMuted,
  remoteScreenStream,
  isSharingScreen,
  viewingScreen,
  setViewingScreen,
  callMuted,
  toggleCallMute,
  toggleScreenShare,
  hangUp,
  remoteAudioRef,
  screenAudioRef
}) {
  return (
    <div className="active-call-bar">
      <audio ref={remoteAudioRef} autoPlay />
      <audio ref={screenAudioRef} autoPlay />
      <div className="active-call-info">
        <Phone size={15} />
        <span>{callStatus === "calling" ? "Calling" : "On call with"} <strong>{callPartnerName}</strong></span>
      </div>
      <div className="active-call-actions">
        {remoteMuted ? <MicOff size={14} className="remote-muted-icon" title="Other party is muted" /> : null}
        {remoteScreenStream && !isSharingScreen ? (
          <button className="call-action-btn" type="button" onClick={() => setViewingScreen(!viewingScreen)} title={viewingScreen ? "Back to chat" : "View screen"}>
            {viewingScreen ? <MessageCircle size={16} /> : <Monitor size={16} />}
          </button>
        ) : null}
        <button
          className="call-action-btn"
          type="button"
          onClick={toggleCallMute}
          title={callMuted ? "Unmute" : "Mute"}
        >
          {callMuted ? <MicOff size={16} /> : <Mic size={16} />}
        </button>
        <button
          className="call-action-btn"
          type="button"
          onClick={toggleScreenShare}
          title={isSharingScreen ? "Stop sharing" : "Share screen"}
        >
          {isSharingScreen ? <MonitorOff size={16} /> : <Monitor size={16} />}
        </button>
        <button className="call-action-btn call-end-btn" type="button" onClick={hangUp} title="End call">
          <PhoneOff size={16} />
        </button>
      </div>
    </div>
  );
}

export function GroupCallBar({
  audioContainerRef,
  isP2P,
  hostId,
  participants,
  remoteScreenStream,
  isSharingScreen,
  viewingScreen,
  setViewingScreen,
  localMuted,
  toggleMute,
  toggleScreenShare,
  onLeave
}) {
  return (
    <div className="active-call-bar group-call-bar">
      <div ref={audioContainerRef} style={{ display: "none" }} />
      <div className="active-call-info">
        <Users size={15} />
        {isP2P && hostId ? <span className="p2p-call-host-indicator" title="P2P host">📡</span> : null}
        <span>Group call — <strong>{Object.keys(participants).length + 1}</strong> participant{Object.keys(participants).length + 1 === 1 ? "" : "s"}</span>
      </div>
      <div className="active-call-actions">
        {remoteScreenStream && !isSharingScreen ? (
          <button className="call-action-btn" type="button" onClick={() => setViewingScreen(!viewingScreen)} title={viewingScreen ? "Back to chat" : "View screen"}>
            {viewingScreen ? <MessageCircle size={16} /> : <Monitor size={16} />}
          </button>
        ) : null}
        <button
          className="call-action-btn"
          type="button"
          onClick={toggleMute}
          title={localMuted ? "Unmute" : "Mute"}
        >
          {localMuted ? <MicOff size={16} /> : <Mic size={16} />}
        </button>
        <button
          className="call-action-btn"
          type="button"
          onClick={toggleScreenShare}
          title={isSharingScreen ? "Stop sharing" : "Share screen"}
        >
          {isSharingScreen ? <MonitorOff size={16} /> : <Monitor size={16} />}
        </button>
        <button className="call-action-btn call-end-btn" type="button" onClick={onLeave} title="Leave group call">
          <PhoneOff size={16} />
        </button>
      </div>
    </div>
  );
}

export function ScreenViewer({ screenSharedByName, onBack, screenVideoRef }) {
  return (
    <div className="screen-view-container">
      <div className="screen-view-header">
        <span>{screenSharedByName ? `${screenSharedByName}'s screen` : "Screen share"}</span>
        <button className="screen-view-close-btn" type="button" onClick={onBack}>
          Back to chat
        </button>
      </div>
      <video ref={screenVideoRef} className="screen-view-video" autoPlay playsInline />
    </div>
  );
}
