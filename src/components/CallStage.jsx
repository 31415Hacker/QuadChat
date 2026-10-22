import { useEffect, useRef } from "react";
import { AudioLines, CameraOff, MonitorUp, Phone } from "lucide-react";

function Avatar({ src, label }) {
  if (!src) {
    return (
      <div className="call-stage-placeholder">
        <CameraOff size={28} />
      </div>
    );
  }
  return (
    <div className="call-stage-avatar" title={label}>
      <img src={src} alt={label || ""} referrerPolicy="no-referrer" />
    </div>
  );
}

function VideoTile({ stream, label, avatarUrl, local = false, muted = false, screen = false, speaking = false, noiseSuppressionEnabled = false, canToggleNoiseSuppression = false, onToggleNoiseSuppression }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream || null;
  }, [stream]);

  return (
    <div className={`call-stage-tile${screen ? " call-stage-tile--screen" : ""}${speaking ? " call-stage-tile--speaking" : ""}`}>
      {stream ? (
        <video ref={videoRef} autoPlay muted={local} playsInline />
      ) : (
        <Avatar src={avatarUrl} label={label} />
      )}
      <span className="call-stage-label">{label}{muted ? " (muted)" : ""}</span>
      {canToggleNoiseSuppression ? (
        <button
          aria-label={`${noiseSuppressionEnabled ? "Turn off" : "Turn on"} RNNoise for ${label}`}
          aria-pressed={noiseSuppressionEnabled}
          className={`call-stage-noise-button${noiseSuppressionEnabled ? " call-stage-noise-button--active" : ""}`}
          onClick={onToggleNoiseSuppression}
          title={noiseSuppressionEnabled ? "RNNoise is filtering this person's audio" : "Filter this person's audio with RNNoise"}
          type="button"
        >
          <AudioLines size={17} />
        </button>
      ) : null}
    </div>
  );
}

export default function CallStage({
  active,
  activeName,
  callPartnerName,
  callPartnerId,
  profiles,
  localId,
  speakingMap,
  callMuted,
  groupParticipants,
  groupVideoStreams,
  localCameraStream,
  localScreenStream,
  remoteCameraStream,
  remoteScreenStream,
  remoteMuted,
  screenSharedByName,
  remoteNoiseSuppression,
  remoteAudioParticipants,
  onToggleRemoteNoiseSuppression
}) {
  if (!active) {
    return (
      <div className="calls-stage-empty">
        <Phone size={34} />
        <h2>No calls yet.</h2>
        <p>Create a call or join an active one from the sidebar.</p>
      </div>
    );
  }

  const screenStream = remoteScreenStream || localScreenStream;
  const screenLabel = remoteScreenStream
    ? `${screenSharedByName || callPartnerName || "Someone"}'s screen`
    : "You're presenting";
  const isSpeaking = (id) => speakingMap?.[id] === true;
  const avatarFor = (id) => profiles?.[id]?.photoURL || "";
  const remoteTiles = callPartnerName
    ? [{ id: "private", label: callPartnerName, stream: remoteCameraStream, muted: remoteMuted, avatarUrl: avatarFor(callPartnerId), speaking: isSpeaking("private") }]
    : Object.entries(groupParticipants || {}).map(([id, participant]) => ({
      id,
      label: participant.name || id,
      stream: groupVideoStreams?.[id]?.stream || null,
      muted: participant.isMuted,
      avatarUrl: avatarFor(id),
      speaking: isSpeaking(id)
    }));

  return (
    <div className="call-stage">
      {screenStream ? (
        <div className="call-stage-screen-wrap">
          <VideoTile stream={screenStream} label={screenLabel} screen />
          <MonitorUp className="call-stage-screen-icon" size={18} />
        </div>
      ) : null}
      <div className={`call-stage-grid${screenStream ? " call-stage-grid--with-screen" : ""}`}>
        <VideoTile stream={localCameraStream} label={`${activeName} (You)`} local muted={callMuted} avatarUrl={avatarFor(localId)} speaking={isSpeaking(localId)} />
        {remoteTiles.map((tile) => (
          <VideoTile
            key={tile.id}
            stream={tile.stream}
            label={tile.label}
            muted={tile.muted}
            avatarUrl={tile.avatarUrl}
            speaking={tile.speaking}
            canToggleNoiseSuppression={Boolean(remoteAudioParticipants?.[tile.id])}
            noiseSuppressionEnabled={remoteNoiseSuppression?.[tile.id] === true}
            onToggleNoiseSuppression={() => onToggleRemoteNoiseSuppression(tile.id)}
          />
        ))}
      </div>
    </div>
  );
}
