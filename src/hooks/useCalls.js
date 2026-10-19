import { useEffect, useRef, useState } from "react";
import {
  get as rtdbGet,
  off,
  onValue,
  ref as rtdbRef,
  set,
  onDisconnect,
  push,
  onChildAdded,
  onChildRemoved,
  update,
  remove
} from "firebase/database";
import { rtdb } from "../../firebase.js";
import { notificationIcon, OPUS_BITRATE, rtcConfig } from "../constants.js";
import { applyOpusBitrate, computeCapability } from "../utils/media.js";
import { callApi } from "../utils/callApi.js";
import {
  captureConstraintsForMode,
  createNoiseController,
  normalizeNoiseMode
} from "../utils/noiseSuppression.js";

export function useCalls({
  sessionUserId,
  activeName,
  user,
  pushInAppNotification,
  notificationsEnabled,
  notificationPermission,
  onCallError,
  onScreenShareConflict,
  isVoiceMuted,
  voiceMutedUntil,
  isVoiceTemporarilyMuted,
  voiceMutedTemporaryUntil,
  onTemporaryVoiceUnmute,
  noiseMode,
  setNoiseMode
}) {
  const [callStatus, setCallStatus] = useState("idle");
  const [callPartnerId, setCallPartnerId] = useState(null);
  const [callPartnerName, setCallPartnerName] = useState("");
  const [callMuted, setCallMuted] = useState(false);
  const [remoteMuted, setRemoteMuted] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);
  const peerRef = useRef(null);
  const localStreamRef = useRef(null);
  const noiseControllerRef = useRef(null);
  const currentOutgoingTrackRef = useRef(null);
  const noiseModeRef = useRef(normalizeNoiseMode(noiseMode));
  const [remoteStream, setRemoteStream] = useState(null);
  const callNodeRef = useRef(null);
  const seenCallIdsRef = useRef(new Set());
  const isCallerRef = useRef(false);
  const callCleanupsRef = useRef([]);
  const startCallLockRef = useRef(false);
  const answerCallLockRef = useRef(false);
  const remoteAudioRef = useRef(null);
  const screenAudioRef = useRef(null);
  const screenVideoRef = useRef(null);
  const screenStreamRef = useRef(null);
  const localCameraStreamRef = useRef(null);
  const [localCameraStream, setLocalCameraStream] = useState(null);
  const [remoteCameraStream, setRemoteCameraStream] = useState(null);
  const [groupCallVideoStreams, setGroupCallVideoStreams] = useState({});
  const [groupCallSpeaking, setGroupCallSpeaking] = useState({});
  const [localScreenStream, setLocalScreenStream] = useState(null);
  const groupCallCameraTrackRef = useRef(null);
  const [isSharingScreen, setIsSharingScreen] = useState(false);
  const isSharingScreenRef = useRef(false);
  const [remoteScreenStream, setRemoteScreenStream] = useState(null);
  const [viewingScreen, setViewingScreen] = useState(false);
  const [screenSharedByName, setScreenSharedByName] = useState(null);
  const [screenShareRequest, setScreenShareRequest] = useState(null);
  const screenShareRequestTimerRef = useRef(null);
  const callStatusRef = useRef(callStatus);
  const remoteScreenShareActiveRef = useRef(false);

  const [groupCallStatus, setGroupCallStatus] = useState("idle");
  const groupCallRoomRef = useRef(null);
  const groupCallSoloTimeoutRef = useRef(null);
  const [groupCallParticipants, setGroupCallParticipants] = useState({});
  const [groupCallLocalMuted, setGroupCallLocalMuted] = useState(false);
  const groupCallLocalStreamRef = useRef(null);
  const groupCallPublishedTrackRef = useRef(null);
  const groupCallAudioContainerRef = useRef(null);
  const groupCallCleaningRef = useRef(false);
  const [activeGroupCallKey, setActiveGroupCallKey] = useState(null);
  const groupCallPresenceRef = useRef(null);
  const groupCallLeaseRef = useRef(null);
  const refreshCallsRef = useRef(null);

  const [activeCalls, setActiveCalls] = useState([]);

  const [p2pGroupCallStatus, setP2pGroupCallStatus] = useState("idle");
  const [p2pGroupCallHostId, setP2pGroupCallHostId] = useState(null);
  const [p2pGroupCallParticipants, setP2pGroupCallParticipants] = useState({});
  const [p2pGroupCallLocalMuted, setP2pGroupCallLocalMuted] = useState(false);
  const [voiceMuteExpired, setVoiceMuteExpired] = useState(false);
  const [temporaryVoiceMuteExpired, setTemporaryVoiceMuteExpired] = useState(false);
  const p2pGroupCallStreamRef = useRef(null);
  const p2pGroupCallConnectionsRef = useRef({});
  const p2pGroupCallAudioContainerRef = useRef(null);
  const p2pGroupCallNodeRef = useRef(null);
  const p2pGroupCallCleaningRef = useRef(false);
  const p2pGroupCallUnsubsRef = useRef([]);

  useEffect(() => {
    callStatusRef.current = callStatus;
    if (callStatus === "idle") {
      console.log("[CALL] status → idle");
    }
  }, [callStatus]);

  const [callSpeaking, setCallSpeaking] = useState({ local: false, remote: false });

  useEffect(() => {
    if (remoteAudioRef.current && remoteStream) {
      console.log("[CALL] setting audio element srcObject");
      remoteAudioRef.current.srcObject = remoteStream;
    }
  }, [remoteStream, callStatus]);

  useEffect(() => {
    if (callStatus !== "connected") {
      setCallSpeaking({ local: false, remote: false });
      return undefined;
    }

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return undefined;

    const ctx = new AudioContextCtor();
    const remoteAnalyser = ctx.createAnalyser();
    const localAnalyser = ctx.createAnalyser();
    for (const analyser of [remoteAnalyser, localAnalyser]) {
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.55;
    }

    const attach = (stream, analyser) => {
      try {
        const source = ctx.createMediaStreamSource(stream);
        source.connect(analyser);
        return source;
      } catch (_e) { return null; }
    };

    const remoteSource = attach(remoteStream, remoteAnalyser);
    const localSource = attach(localStreamRef.current, localAnalyser);

    const floatData = new Float32Array(remoteAnalyser.fftSize);
    const byteData = new Uint8Array(remoteAnalyser.fftSize);
    const supportsFloat = typeof remoteAnalyser.getFloatTimeDomainData === "function";
    const THRESHOLD_ON = 0.025;
    const THRESHOLD_OFF = 0.012;
    const HOLD_MS = 250;
    let remoteOn = false;
    let localOn = false;
    let remoteSpeechAt = 0;
    let localSpeechAt = 0;

    const measure = (analyser) => {
      try {
        if (supportsFloat) {
          analyser.getFloatTimeDomainData(floatData);
          let sum = 0;
          for (let i = 0; i < floatData.length; i += 1) sum += floatData[i] * floatData[i];
          return Math.sqrt(sum / floatData.length);
        }
        analyser.getByteTimeDomainData(byteData);
        let sum = 0;
        for (let i = 0; i < byteData.length; i += 1) {
          const centered = (byteData[i] - 128) / 128;
          sum += centered * centered;
        }
        return Math.sqrt(sum / byteData.length);
      } catch (_e) { return 0; }
    };

    const tick = () => {
      if (ctx.state === "suspended") ctx.resume().catch(() => {});

      const remoteRms = remoteSource ? measure(remoteAnalyser) : 0;
      if (!remoteOn && remoteRms >= THRESHOLD_ON) {
        remoteOn = true;
        remoteSpeechAt = Date.now();
      } else if (remoteOn && remoteRms >= THRESHOLD_OFF) {
        remoteSpeechAt = Date.now();
      } else if (remoteOn && remoteRms < THRESHOLD_OFF) {
        remoteOn = false;
      }
      const remoteSpeaking = remoteOn || Date.now() - remoteSpeechAt < HOLD_MS;

      const localRms = localSource ? measure(localAnalyser) : 0;
      if (!localOn && localRms >= THRESHOLD_ON) {
        localOn = true;
        localSpeechAt = Date.now();
      } else if (localOn && localRms >= THRESHOLD_OFF) {
        localSpeechAt = Date.now();
      } else if (localOn && localRms < THRESHOLD_OFF) {
        localOn = false;
      }
      const localSpeaking = localOn || Date.now() - localSpeechAt < HOLD_MS;

      setCallSpeaking((prev) =>
        prev.local === localSpeaking && prev.remote === remoteSpeaking
          ? prev
          : { local: localSpeaking, remote: remoteSpeaking }
      );
    };

    const timer = setInterval(tick, 120);
    return () => {
      clearInterval(timer);
      try { remoteSource?.disconnect(); localSource?.disconnect(); } catch (_e) { /* already detached */ }
      remoteAnalyser.disconnect();
      localAnalyser.disconnect();
      ctx.close().catch(() => {});
    };
  }, [callStatus, remoteStream]);

  useEffect(() => {
    if (screenAudioRef.current) {
      screenAudioRef.current.srcObject = remoteScreenStream || null;
    }
  }, [remoteScreenStream, callStatus]);

  useEffect(() => {
    isSharingScreenRef.current = isSharingScreen;
  }, [isSharingScreen]);

  useEffect(() => {
    setVoiceMuteExpired(false);
    if (!isVoiceMuted) return;
    // A null/absent `voiceMutedUntil` means a permanent mute with no expiry.
    // Do NOT treat it as epoch 0 (new Date(null) -> 0) or the mute instantly expires.
    if (!voiceMutedUntil) return;
    const expiresAt = voiceMutedUntil.toDate
      ? voiceMutedUntil.toDate().getTime()
      : new Date(voiceMutedUntil).getTime();
    if (!Number.isFinite(expiresAt)) return;
    const timer = window.setTimeout(() => setVoiceMuteExpired(true), Math.max(0, expiresAt - Date.now()));
    return () => window.clearTimeout(timer);
  }, [isVoiceMuted, voiceMutedUntil]);

  useEffect(() => {
    setTemporaryVoiceMuteExpired(false);
    if (!isVoiceTemporarilyMuted) return;
    if (!voiceMutedTemporaryUntil) return;
    const expiresAt = voiceMutedTemporaryUntil.toDate
      ? voiceMutedTemporaryUntil.toDate().getTime()
      : new Date(voiceMutedTemporaryUntil).getTime();
    if (!Number.isFinite(expiresAt)) return;
    const timer = window.setTimeout(() => setTemporaryVoiceMuteExpired(true), Math.max(0, expiresAt - Date.now()));
    return () => window.clearTimeout(timer);
  }, [isVoiceTemporarilyMuted, voiceMutedTemporaryUntil]);

  const lockedVoiceMuteActive = isVoiceMuted && !voiceMuteExpired;
  const voiceMuteActive = lockedVoiceMuteActive || (
    isVoiceTemporarilyMuted && !temporaryVoiceMuteExpired
  );
  const voiceMuteActiveRef = useRef(voiceMuteActive);
  voiceMuteActiveRef.current = voiceMuteActive;

  // Replace the outgoing microphone track on every active sender. Used when
  // the noise-suppression mode swaps between the raw track and the AI output.
  function replaceOutgoingTrack(nextTrack) {
    if (!nextTrack) return;
    const prevTrack = currentOutgoingTrackRef.current;
    if (prevTrack && prevTrack !== nextTrack) {
      // Preserve the current mute state (track.enabled) across the swap.
      nextTrack.enabled = prevTrack.enabled;
      const replaceOnPc = (pc) => {
        if (!pc) return;
        pc.getSenders().forEach((sender) => {
          if (sender.track === prevTrack) {
            sender.replaceTrack(nextTrack).catch((error) =>
              console.error("[NOISE] replaceTrack failed:", error)
            );
          }
        });
      };
      replaceOnPc(peerRef.current);
      Object.values(p2pGroupCallConnectionsRef.current).forEach(replaceOnPc);
      const published = groupCallPublishedTrackRef.current;
      if (published) {
        published.replaceTrack(nextTrack).catch((error) =>
          console.error("[NOISE] LiveKit replaceTrack failed:", error)
        );
      }
    }
    currentOutgoingTrackRef.current = nextTrack;
  }

  function removeCameraSenders(pc, cameraTrack) {
    if (!pc || !cameraTrack) return;
    pc.getSenders().forEach((sender) => {
      if (sender.track === cameraTrack) pc.removeTrack(sender);
    });
  }

  async function stopCamera() {
    const stream = localCameraStreamRef.current;
    if (!stream) return;
    const cameraTrack = stream.getVideoTracks()[0];

    if (groupCallRoomRef.current && cameraTrack) {
      await groupCallRoomRef.current.localParticipant.unpublishTrack(cameraTrack).catch(() => {});
      groupCallCameraTrackRef.current = null;
    }
    removeCameraSenders(peerRef.current, cameraTrack);
    Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) =>
      removeCameraSenders(pc, cameraTrack)
    );
    stream.getTracks().forEach((track) => track.stop());
    localCameraStreamRef.current = null;
    setLocalCameraStream(null);
  }

  async function toggleCamera() {
    if (localCameraStreamRef.current) {
      await stopCamera();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      const cameraTrack = stream.getVideoTracks()[0];
      if (!cameraTrack) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      cameraTrack.onended = () => {
        if (localCameraStreamRef.current === stream) {
          localCameraStreamRef.current = null;
          setLocalCameraStream(null);
        }
      };

      if (groupCallRoomRef.current) {
        await groupCallRoomRef.current.localParticipant.publishTrack(cameraTrack, { source: "camera" });
        groupCallCameraTrackRef.current = cameraTrack;
      } else if (peerRef.current) {
        peerRef.current.addTrack(cameraTrack, stream);
      } else {
        Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => pc.addTrack(cameraTrack, stream));
      }

      localCameraStreamRef.current = stream;
      setLocalCameraStream(stream);
    } catch (error) {
      if (error?.name !== "NotAllowedError" && error?.name !== "AbortError") {
        console.error("[CAMERA] failed to start:", error);
      }
      onCallError?.("Could not start your camera.");
    }
  }

  async function acquireMicStream() {
    const rawStream = await navigator.mediaDevices.getUserMedia({
      audio: captureConstraintsForMode(noiseModeRef.current),
      video: false
    });
    const outgoingStream = new MediaStream(rawStream.getAudioTracks());
    currentOutgoingTrackRef.current = outgoingStream.getAudioTracks()[0];
    noiseControllerRef.current?.destroy();
    const controller = createNoiseController({
      rawStream,
      outgoingStream,
      initialMode: noiseModeRef.current,
      onOutgoingTrackChange: replaceOutgoingTrack,
      onError: () => {
        noiseModeRef.current = "browser";
        setNoiseMode?.("browser");
        pushInAppNotification({
          type: "call",
          channelId: null,
          channelLabel: null,
          senderName: "Noise suppression",
          body: "AI mode is unavailable — switched to Standard.",
          id: `noise-ai-fallback-${Date.now()}`
        });
      }
    });
    noiseControllerRef.current = controller;
    // Build the AI pipeline in the background so the call connects immediately.
    controller.setMode(noiseModeRef.current).catch((error) =>
      console.error("[NOISE] initial mode setup failed:", error)
    );
    return outgoingStream;
  }

  useEffect(() => {
    noiseModeRef.current = normalizeNoiseMode(noiseMode);
    const controller = noiseControllerRef.current;
    if (!controller) return;
    controller.setMode(noiseModeRef.current).catch((error) =>
      console.error("[NOISE] failed to switch mode:", error)
    );
  }, [noiseMode]);

  const [groupCallForcedMuted, setGroupCallForcedMuted] = useState(false);
  const groupCallForcedMutedRef = useRef(false);
  const [groupCallMutes, setGroupCallMutes] = useState({});
  const groupCallMutesUnsubRef = useRef(null);

  useEffect(() => {
    const applyVoiceMute = (stream, setMuted) => {
      const audioTrack = stream?.getAudioTracks()[0];
      if (!audioTrack) return;
      const shouldMute = voiceMuteActive || groupCallForcedMutedRef.current;
      audioTrack.enabled = !shouldMute;
      setMuted(shouldMute);
    };

    applyVoiceMute(groupCallLocalStreamRef.current, setGroupCallLocalMuted);
    applyVoiceMute(p2pGroupCallStreamRef.current, setP2pGroupCallLocalMuted);
  }, [voiceMuteActive, groupCallForcedMuted]);

  useEffect(() => {
    if (screenVideoRef.current && remoteScreenStream) {
      screenVideoRef.current.srcObject = remoteScreenStream;
    }
    if (!remoteScreenStream && viewingScreen) {
      setViewingScreen(false);
    }
  }, [remoteScreenStream, viewingScreen]);

  function clearRemoteScreenShare() {
    remoteScreenShareActiveRef.current = false;
    setRemoteScreenStream(null);
    setViewingScreen(false);
    setScreenSharedByName(null);
  }

  function clearRing(calleeId, callKey) {
    if (!calleeId || !callKey) return;
    remove(rtdbRef(rtdb, `call-rings/${calleeId}/${callKey}`)).catch(() => {});
  }

  useEffect(() => {
    if (callStatus !== "idle") return;
    const ringsRef = rtdbRef(rtdb, `call-rings/${sessionUserId}`);
    const statusUnsubs = {};

    const unsub = onChildAdded(ringsRef, async (snap) => {
      const ring = snap.val();
      const callKey = snap.key;
      if (!ring || !callKey) return;

      console.log(`[CALL-DETECT] new ring key=${callKey} callerName=${ring.callerName} startedAt=${ring.startedAt} age=${Date.now() - ring.startedAt}ms`);

      if (ring.calleeId !== sessionUserId || seenCallIdsRef.current.has(callKey)) {
        clearRing(sessionUserId, callKey);
        return;
      }
      seenCallIdsRef.current.add(callKey);

      if (Date.now() - ring.startedAt >= 20000) {
        console.log(`[CALL-DETECT] filtering out stale ring key=${callKey}`);
        set(rtdbRef(rtdb, `missed-calls/${sessionUserId}/${callKey}`), {
          callerId: ring.callerId,
          callerName: ring.callerName,
          startedAt: ring.startedAt,
          callKey
        }).catch(() => {});
        clearRing(sessionUserId, callKey);
        return;
      }

      let data;
      try {
        const callSnap = await rtdbGet(rtdbRef(rtdb, `calls/${callKey}`));
        if (!callSnap.exists()) {
          console.log(`[CALL-DETECT] call node gone, clearing ring key=${callKey}`);
          clearRing(sessionUserId, callKey);
          return;
        }
        data = { key: callKey, ...callSnap.val() };
      } catch (firebaseError) {
        console.error("[CALL-DETECT] failed to read call node:", firebaseError);
        clearRing(sessionUserId, callKey);
        return;
      }

      if (data.calleeId !== sessionUserId || data.status !== "calling") {
        clearRing(sessionUserId, callKey);
        return;
      }

      const statusRef = rtdbRef(rtdb, `calls/${callKey}/status`);
      statusUnsubs[callKey] = onValue(statusRef, (statusSnap) => {
        const currentStatus = statusSnap.exists() ? statusSnap.val() : null;
        console.log(`[CALL-STATUS] key=${callKey} status=${currentStatus} callStatusRef=${callStatusRef.current}`);

        if (currentStatus === "calling" && callStatusRef.current === "idle" && Date.now() - data.startedAt < 20000) {
          console.log(`[CALL-STATUS] showing incoming call modal for key=${callKey}`);
          if (notificationsEnabled && notificationPermission === "granted") {
            new Notification("QuadChat", {
              body: `${data.callerName} is calling you`,
              icon: notificationIcon,
              tag: `incoming-call-${callKey}`,
            });
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: data.callerName,
            body: "is calling you",
            id: `call-${callKey}`
          });
          setIncomingCall({ key: callKey, ...data });
        } else {
          console.log(`[CALL-STATUS] clearing incoming call for key=${callKey} reason=${!currentStatus ? "no-status" : currentStatus !== "calling" ? "not-calling" : "busy-or-expired"}`);
          setIncomingCall((prev) => prev?.key === callKey ? null : prev);
          if (statusUnsubs[callKey]) {
            statusUnsubs[callKey]();
            delete statusUnsubs[callKey];
          }
          clearRing(sessionUserId, callKey);
        }
      });
    });

    return () => {
      console.log("[CALL-DETECT] cleaning up incoming call listener");
      off(ringsRef);
      Object.values(statusUnsubs).forEach(fn => fn());
    };
  }, [sessionUserId, callStatus]);

  function cleanupCall() {
    console.log("[CALL-CLEANUP] start");
    callCleanupsRef.current.forEach(fn => fn());
    callCleanupsRef.current = [];
    console.log("[CALL-CLEANUP] listeners detached");

    if (peerRef.current) {
      console.log("[CALL-CLEANUP] closing peer connection");
      if (peerRef.current._unsubAnswer) {
        peerRef.current._unsubAnswer();
        delete peerRef.current._unsubAnswer;
      }
      peerRef.current.close();
      peerRef.current = null;
    }
    if (localStreamRef.current) {
      console.log("[CALL-CLEANUP] stopping local stream");
      localStreamRef.current.getTracks().forEach((t) => t.stop());
      localStreamRef.current = null;
    }
    stopCamera();
    if (noiseControllerRef.current) {
      noiseControllerRef.current.destroy();
      noiseControllerRef.current = null;
    }
    currentOutgoingTrackRef.current = null;
    const nodeRef = callNodeRef.current;
    callNodeRef.current = null;
    if (nodeRef) {
      console.log("[CALL-CLEANUP] cancelling onDisconnect + writing ended + removing node");
      onDisconnect(nodeRef).cancel();
      update(nodeRef, { status: "ended" }).then(() => remove(nodeRef)).catch(() => {});
      if (!isCallerRef.current) {
        clearRing(sessionUserId, nodeRef.key);
      }
    }
    console.log("[CALL-CLEANUP] resetting state variables");
    setRemoteStream(null);
    setRemoteCameraStream(null);
    setRemoteScreenStream(null);
    setScreenSharedByName(null);
    stopScreenShare();
    setCallStatus("idle");
    setCallPartnerId(null);
    setCallPartnerName("");
    setCallMuted(false);
    setRemoteMuted(false);
    setIncomingCall(null);
  }

  function hangUp() {
    console.log("[CALL] hangUp called");
    cleanupCall();
  }

  async function createPeerConnection(callNodeRefVal, isCaller) {
    const pc = new RTCPeerConnection(rtcConfig);
    peerRef.current = pc;
    let renegotiating = false;

    pc.onicecandidate = (e) => {
      if (e.candidate && callNodeRefVal) {
        if (import.meta.env.DEV) {
          console.log(`[CALL-ICE] sending ${isCaller ? "caller" : "callee"} candidate`);
        }
        const candidateRef = rtdbRef(rtdb, `calls/${callNodeRefVal.key}/candidates/${isCaller ? "caller" : "callee"}/${Date.now()}`);
        set(candidateRef, e.candidate.toJSON());
      }
    };

    pc.ontrack = (e) => {
      const stream = e.streams[0];
      if (e.track.kind === "video") {
        if (remoteScreenShareActiveRef.current) {
          console.log("[CALL] ontrack — screen video received");
          setRemoteScreenStream(stream);
          e.track.onmute = clearRemoteScreenShare;
          e.track.onended = clearRemoteScreenShare;
        } else {
          console.log("[CALL] ontrack — camera video received");
          setRemoteCameraStream(stream);
          e.track.onmute = () => setRemoteCameraStream(null);
          e.track.onunmute = () => setRemoteCameraStream(stream);
          e.track.onended = () => setRemoteCameraStream(null);
        }
      } else if (stream?.getVideoTracks().length) {
        // Display audio shares a MediaStream with the screen video. Do not
        // replace the microphone stream used by the normal call audio.
        console.log("[CALL] ontrack — screen audio received");
        setRemoteScreenStream(stream);
      } else {
        console.log("[CALL] ontrack — remote audio received");
        setRemoteStream(stream);
      }
    };

    pc.onnegotiationneeded = async () => {
      if (renegotiating) return;
      renegotiating = true;
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        const reofferRef = rtdbRef(rtdb, `calls/${callNodeRefVal.key}/renego/offer_${sessionUserId}`);
        await set(reofferRef, { type: offer.type, sdp: offer.sdp });
        const reanswerRef = rtdbRef(rtdb, `calls/${callNodeRefVal.key}/renego/answer_${sessionUserId}`);
        const unsub = onValue(reanswerRef, async (snap) => {
          const val = snap.val();
          if (val && val.type) {
            unsub();
            try {
              await pc.setRemoteDescription(new RTCSessionDescription(val));
            } catch (e) {
              console.error("[CALL-RENEGO] setRemoteDescription failed:", e);
            }
            renegotiating = false;
          }
        });
        callCleanupsRef.current.push(unsub);
      } catch (e) {
        console.error("[CALL-RENEGO] createOffer failed:", e);
        renegotiating = false;
      }
    };

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, localStreamRef.current));
    }

    return pc;
  }

  async function startCall(calleeId, calleeName) {
    console.log(`[CALL-START] starting call to ${calleeId} (${calleeName})`);
    if (callStatus !== "idle" || startCallLockRef.current) {
      console.log(`[CALL-START] blocked: callStatus=${callStatus} lock=${startCallLockRef.current}`);
      return;
    }
    startCallLockRef.current = true;

    try {
      const stream = await acquireMicStream();
      console.log("[CALL-START] got local media stream");
      localStreamRef.current = stream;

      const callRef = push(rtdbRef(rtdb, "calls"));
      callNodeRef.current = callRef;
      isCallerRef.current = true;
      onDisconnect(callRef).update({ status: "ended" });
      console.log(`[CALL-START] callRef key=${callRef.key}`);

      const pc = await createPeerConnection(callRef, true);

      const offer = applyOpusBitrate(await pc.createOffer(), OPUS_BITRATE);
      await pc.setLocalDescription(offer);
      console.log("[CALL-START] created and set local offer");

      await set(callRef, {
        callerId: sessionUserId,
        calleeId,
        callerName: activeName,
        calleeName,
        status: "calling",
        startedAt: Date.now(),
        offer: { type: offer.type, sdp: offer.sdp }
      });
      console.log("[CALL-START] call data written to RTDB");

      await set(rtdbRef(rtdb, `call-rings/${calleeId}/${callRef.key}`), {
        callerId: sessionUserId,
        calleeId,
        callerName: activeName,
        calleeName,
        startedAt: Date.now(),
        callKey: callRef.key
      }).catch(() => {});
      console.log("[CALL-START] ring written for callee");

      setCallStatus("calling");
      setCallPartnerId(calleeId);
      setCallPartnerName(calleeName);

      const answerRef = rtdbRef(rtdb, `calls/${callRef.key}/answer`);
      const unsubAnswer = onValue(answerRef, async (snap) => {
        if (snap.exists() && pc.signalingState !== "stable") {
          console.log("[CALL-START] received answer, setting remote description");
          const ans = snap.val();
          await pc.setRemoteDescription(new RTCSessionDescription(ans));
          if (notificationsEnabled && notificationPermission === "granted") {
            new Notification("QuadChat", {
              body: `${calleeName} picked up your call`,
              icon: notificationIcon,
              tag: `call-picked-${callRef.key}`,
            });
          }
          setCallStatus("connected");
        }
      });
      peerRef.current._unsubAnswer = unsubAnswer;

      const candidatesRef = rtdbRef(rtdb, `calls/${callRef.key}/candidates/callee`);
      const unsubCandidates = onChildAdded(candidatesRef, (snap) => {
        try {
          if (pc.signalingState === "closed") return;
          const candidate = new RTCIceCandidate(snap.val());
          pc.addIceCandidate(candidate).catch(e => console.error("[CALL-ICE] addIceCandidate error (caller receiving callee):", e));
        } catch (e) {
          console.error("[CALL-ICE] bad candidate data (caller):", e, snap.val());
        }
      });
      callCleanupsRef.current.push(unsubCandidates);

      const calleeMuteRef = rtdbRef(rtdb, `calls/${callRef.key}/calleeMuted`);
      const unsubMute = onValue(calleeMuteRef, (snap) => { console.log(`[CALL-START] remote mute changed: ${!!snap.val()}`); setRemoteMuted(!!snap.val()); });
      callCleanupsRef.current.push(unsubMute);

      const screenShareRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareActive`);
      const unsubScreen = onValue(screenShareRef, (snap) => {
        const val = snap.val();
        if (val && typeof val === "object") {
          remoteScreenShareActiveRef.current = true;
          setScreenSharedByName(val.name);
        } else {
          remoteScreenShareActiveRef.current = false;
          clearRemoteScreenShare();
        }
      });
      callCleanupsRef.current.push(unsubScreen);

      const screenShareReqRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareRequest`);
      const unsubScreenReq = onValue(screenShareReqRef, (snap) => {
        const val = snap.val();
        if (val && val.uid && val.uid !== user.uid && isSharingScreenRef.current) {
          setScreenShareRequest(val);
          clearTimeout(screenShareRequestTimerRef.current);
          screenShareRequestTimerRef.current = setTimeout(() => {
            set(screenShareReqRef, null).catch(() => {});
            setScreenShareRequest(null);
          }, 5000);
        } else if (!val) {
          setScreenShareRequest(null);
          clearTimeout(screenShareRequestTimerRef.current);
        }
      });
      callCleanupsRef.current.push(unsubScreenReq);

      const cancelRef = rtdbRef(rtdb, `calls/${callRef.key}/status`);
      let cleaningUp = false;
      const unsubCancel = onValue(cancelRef, (snap) => {
        const s = snap.exists() ? snap.val() : null;
        console.log(`[CALL-START] cancel listener: status=${s} cleaningUp=${cleaningUp} nodeRef=${!!callNodeRef.current}`);
        if (cleaningUp) return;
        if ((!snap.exists() || snap.val() === "ended" || snap.val() === "declined") && callNodeRef.current) {
          cleaningUp = true;
          const wasDeclined = snap.val() === "declined";
          if (typeof Notification !== "undefined") {
            try {
              new Notification("QuadChat", {
                body: wasDeclined
                  ? `${calleeName} declined your call.`
                  : `${calleeName} has ended the call.`
              });
            } catch (_) {}
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: calleeName,
            body: wasDeclined ? "declined your call" : "has ended the call",
            id: `call-${wasDeclined ? "declined" : "end"}-${callRef.key}`
          });
          console.log("[CALL-START] cancel listener → cleanupCall");
          cleanupCall();
        }
      });
      callCleanupsRef.current.push(unsubCancel);

      const renegoRef = rtdbRef(rtdb, `calls/${callRef.key}/renego/offer_${calleeId}`);
      let handlingRenego = false;
      const unsubRenego = onValue(renegoRef, async (snap) => {
        const val = snap.val();
        if (!val || !val.type || handlingRenego) return;
        handlingRenego = true;
        try {
          if (pc.signalingState !== "stable") {
            console.log("[CALL-START] renego: rolling back stale signaling state");
            await pc.setLocalDescription({ type: "rollback" });
          }
          await pc.setRemoteDescription(new RTCSessionDescription(val));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await set(rtdbRef(rtdb, `calls/${callRef.key}/renego/answer_${calleeId}`), { type: answer.type, sdp: answer.sdp });
        } catch (e) {
          console.error("[CALL-START] renego handler failed:", e);
        }
        handlingRenego = false;
      });
      callCleanupsRef.current.push(unsubRenego);

      let disconnectTimeout;
      pc.oniceconnectionstatechange = () => {
        console.log(`[CALL-START] ICE state: ${pc.iceConnectionState}`);
        if (pc.iceConnectionState === "disconnected") {
          disconnectTimeout = setTimeout(() => {
            if (pc.iceConnectionState === "disconnected" && !cleaningUp) {
              console.log("[CALL-START] ICE still disconnected after 10s → cleanupCall");
              if (typeof Notification !== "undefined") {
                try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
              }
              cleanupCall();
            }
          }, 10000);
        } else if (pc.iceConnectionState === "connected" || pc.iceConnectionState === "completed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
        } else if (pc.iceConnectionState === "failed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
          if (!cleaningUp) {
            console.log("[CALL-START] ICE failed → cleanupCall");
            if (typeof Notification !== "undefined") {
              try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
            }
            cleanupCall();
          }
        }
      };
    } catch (e) {
      console.error("[CALL-START] error:", e);
      cleanupCall();
    } finally {
      startCallLockRef.current = false;
    }
  }

  async function answerCall() {
    console.log("[CALL-ANSWER] answerCall called", incomingCall?.key);
    if (!incomingCall || answerCallLockRef.current) {
      console.log(`[CALL-ANSWER] blocked: incomingCall=${!!incomingCall} lock=${answerCallLockRef.current}`);
      return;
    }
    answerCallLockRef.current = true;

    try {
      clearRing(sessionUserId, incomingCall.key);
      const stream = await acquireMicStream();
      console.log("[CALL-ANSWER] got local media stream");
      localStreamRef.current = stream;

      const callRef = rtdbRef(rtdb, `calls/${incomingCall.key}`);
      callNodeRef.current = callRef;
      isCallerRef.current = false;
      onDisconnect(callRef).update({ status: "ended" });
      console.log(`[CALL-ANSWER] callRef key=${incomingCall.key}`);

      const offer = incomingCall.offer;
      if (!offer) {
        console.log("[CALL-ANSWER] no offer in incomingCall, aborting");
        onCallError?.("Call no longer available.");
        setIncomingCall(null);
        answerCallLockRef.current = false;
        return;
      }

      const pc = await createPeerConnection(callRef, false);
      console.log("[CALL-ANSWER] peer connection created");

      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      console.log("[CALL-ANSWER] remote description set");

      const answer = applyOpusBitrate(await pc.createAnswer(), OPUS_BITRATE);
      await pc.setLocalDescription(answer);
      console.log("[CALL-ANSWER] local description set (answer)");

      await update(callRef, { answer: { type: answer.type, sdp: answer.sdp }, status: "connected" });
      console.log("[CALL-ANSWER] answer written to RTDB, status → connected");

      setCallStatus("connected");
      setCallPartnerId(incomingCall.callerId);
      setCallPartnerName(incomingCall.callerName);
      setIncomingCall(null);

      const candidatesRef = rtdbRef(rtdb, `calls/${callRef.key}/candidates/caller`);
      const unsubCandidates = onChildAdded(candidatesRef, (snap) => {
        try {
          if (pc.signalingState === "closed") return;
          const candidate = new RTCIceCandidate(snap.val());
          pc.addIceCandidate(candidate).catch(e => console.error("[CALL-ICE] addIceCandidate error (callee receiving caller):", e));
        } catch (e) {
          console.error("[CALL-ICE] bad candidate data (callee):", e, snap.val());
        }
      });
      callCleanupsRef.current.push(unsubCandidates);

      const callerMuteRef = rtdbRef(rtdb, `calls/${callRef.key}/callerMuted`);
      const unsubMute = onValue(callerMuteRef, (snap) => { console.log(`[CALL-ANSWER] remote mute changed: ${!!snap.val()}`); setRemoteMuted(!!snap.val()); });
      callCleanupsRef.current.push(unsubMute);

      const screenShareRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareActive`);
      const unsubScreen = onValue(screenShareRef, (snap) => {
        const val = snap.val();
        if (val && typeof val === "object") {
          remoteScreenShareActiveRef.current = true;
          setScreenSharedByName(val.name);
        } else {
          remoteScreenShareActiveRef.current = false;
          clearRemoteScreenShare();
        }
      });
      callCleanupsRef.current.push(unsubScreen);

      const screenShareReqRef = rtdbRef(rtdb, `calls/${callRef.key}/screenShareRequest`);
      const unsubScreenReq = onValue(screenShareReqRef, (snap) => {
        const val = snap.val();
        if (val && val.uid && val.uid !== user.uid && isSharingScreenRef.current) {
          setScreenShareRequest(val);
          clearTimeout(screenShareRequestTimerRef.current);
          screenShareRequestTimerRef.current = setTimeout(() => {
            set(screenShareReqRef, null).catch(() => {});
            setScreenShareRequest(null);
          }, 5000);
        } else if (!val) {
          setScreenShareRequest(null);
          clearTimeout(screenShareRequestTimerRef.current);
        }
      });
      callCleanupsRef.current.push(unsubScreenReq);

      const renegoRef = rtdbRef(rtdb, `calls/${callRef.key}/renego/offer_${incomingCall.callerId}`);
      let handlingRenego = false;
      const unsubRenego = onValue(renegoRef, async (snap) => {
        const val = snap.val();
        if (!val || !val.type || handlingRenego) return;
        handlingRenego = true;
        try {
          if (pc.signalingState !== "stable") {
            console.log("[CALL-ANSWER] renego: rolling back stale signaling state");
            await pc.setLocalDescription({ type: "rollback" });
          }
          await pc.setRemoteDescription(new RTCSessionDescription(val));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await set(rtdbRef(rtdb, `calls/${callRef.key}/renego/answer_${incomingCall.callerId}`), { type: answer.type, sdp: answer.sdp });
        } catch (e) {
          console.error("[CALL-ANSWER] renego handler failed:", e);
        }
        handlingRenego = false;
      });
      callCleanupsRef.current.push(unsubRenego);

      const cancelRef2 = rtdbRef(rtdb, `calls/${callRef.key}/status`);
      let cleaningUp2 = false;
      const unsubCancel = onValue(cancelRef2, (snap) => {
        const s = snap.exists() ? snap.val() : null;
        console.log(`[CALL-ANSWER] cancel listener: status=${s} cleaningUp=${cleaningUp2} nodeRef=${!!callNodeRef.current}`);
        if (cleaningUp2) return;
        if ((!snap.exists() || snap.val() === "ended") && callNodeRef.current) {
          cleaningUp2 = true;
          if (typeof Notification !== "undefined") {
            try { new Notification("QuadChat", { body: `${incomingCall.callerName} has ended the call.` }); } catch (_) {}
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: incomingCall.callerName,
            body: "has ended the call",
            id: `call-end-${callRef.key}`
          });
          console.log("[CALL-ANSWER] cancel listener → cleanupCall");
          cleanupCall();
        }
      });
      callCleanupsRef.current.push(unsubCancel);

      let disconnectTimeout;
      pc.oniceconnectionstatechange = () => {
        console.log(`[CALL-ANSWER] ICE state: ${pc.iceConnectionState}`);
        if (pc.iceConnectionState === "disconnected") {
          disconnectTimeout = setTimeout(() => {
            if (pc.iceConnectionState === "disconnected" && !cleaningUp2) {
              console.log("[CALL-ANSWER] ICE still disconnected after 10s → cleanupCall");
              if (typeof Notification !== "undefined") {
                try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
              }
              cleanupCall();
            }
          }, 10000);
        } else if (pc.iceConnectionState === "connected" || pc.iceConnectionState === "completed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
        } else if (pc.iceConnectionState === "failed") {
          if (disconnectTimeout) { clearTimeout(disconnectTimeout); disconnectTimeout = null; }
          if (!cleaningUp2) {
            console.log("[CALL-ANSWER] ICE failed → cleanupCall");
            if (typeof Notification !== "undefined") {
              try { new Notification("QuadChat", { body: "You have disconnected from the private call. You may be lagging." }); } catch (_) {}
            }
            cleanupCall();
          }
        }
      };
    } catch (e) {
      console.error("[CALL-ANSWER] error:", e);
      cleanupCall();
    } finally {
      answerCallLockRef.current = false;
    }
  }

  function rejectCall() {
    console.log("[CALL-REJECT] rejecting incoming call", incomingCall?.key);
    if (incomingCall) {
      clearRing(sessionUserId, incomingCall.key);
      update(rtdbRef(rtdb, `calls/${incomingCall.key}`), { status: "declined" }).catch(() => {});
      setIncomingCall(null);
    }
  }

  function toggleGroupCallMute() {
    if (groupCallForcedMutedRef.current) return;
    if (groupCallLocalStreamRef.current) {
      const audioTrack = groupCallLocalStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        if (lockedVoiceMuteActive && !audioTrack.enabled) return;
        if (!audioTrack.enabled && isVoiceTemporarilyMuted) {
          onTemporaryVoiceUnmute?.();
        }
        audioTrack.enabled = !audioTrack.enabled;
        setGroupCallLocalMuted(!audioTrack.enabled);
      }
    }
  }

  async function toggleScreenShare() {
    if (isSharingScreen) {
      stopScreenShare();
      return;
    }
    if (!isSharingScreen && screenSharedByName !== null) {
      const shouldRequest = await onScreenShareConflict?.(screenSharedByName);
      if (!shouldRequest) return;
      const reqPath = callNodeRef.current
        ? `calls/${callNodeRef.current.key}/screenShareRequest`
        : p2pGroupCallNodeRef.current
          ? `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareRequest`
          : null;
      if (reqPath) {
        const reqRef = rtdbRef(rtdb, reqPath);
        set(reqRef, { uid: user.uid, name: activeName }).catch(() => {});
        setTimeout(() => set(reqRef, null).catch(() => {}), 5000);
      }
      return;
    }
    try {
      // `audio: true` makes browsers offer the "share this tab's audio"
      // checkbox when the caller selects a browser tab.
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      screenStreamRef.current = stream;
      setLocalScreenStream(stream);
      const track = stream.getVideoTracks()[0];
      if (!track) return;

      track.onended = () => stopScreenShare();

      // Signal before adding the video track so private/P2P receivers can
      // classify the incoming video as a screen share rather than a camera.
      const sharePresenceWrites = [];
      if (callNodeRef.current) {
        sharePresenceWrites.push(
          set(rtdbRef(rtdb, `calls/${callNodeRef.current.key}/screenShareActive`), { name: activeName })
        );
      }
      if (p2pGroupCallNodeRef.current) {
        sharePresenceWrites.push(
          set(rtdbRef(rtdb, `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareActive`), { name: activeName })
        );
      }
      await Promise.all(sharePresenceWrites.map((write) => write.catch(() => {})));

      stream.getTracks().forEach((shareTrack) => {
        if (callStatus !== "idle" && peerRef.current) {
          peerRef.current.addTrack(shareTrack, stream);
        }
        Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => {
          try { pc.addTrack(shareTrack, stream); } catch (_) {}
        });
        if (groupCallRoomRef.current) {
          groupCallRoomRef.current.localParticipant.publishTrack(shareTrack, {
            source: shareTrack.kind === "audio" ? "screen_share_audio" : "screen_share",
          }).catch((e) => console.error("[SCREEN] publish to LiveKit failed:", e));
        }
      });

      setIsSharingScreen(true);
    } catch (e) {
      if (e.name !== "NotAllowedError" && e.name !== "AbortError") {
        console.error("[SCREEN] share failed:", e);
      }
    }
  }

  function stopScreenShare() {
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((t) => t.stop());
      screenStreamRef.current = null;
    }
    setLocalScreenStream(null);
    if (callNodeRef.current) {
      set(rtdbRef(rtdb, `calls/${callNodeRef.current.key}/screenShareActive`), false).catch(() => {});
      set(rtdbRef(rtdb, `calls/${callNodeRef.current.key}/screenShareRequest`), null).catch(() => {});
    }
    if (p2pGroupCallNodeRef.current) {
      set(rtdbRef(rtdb, `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareActive`), false).catch(() => {});
      set(rtdbRef(rtdb, `group-calls/${p2pGroupCallNodeRef.current.key}/screenShareRequest`), null).catch(() => {});
    }
    clearTimeout(screenShareRequestTimerRef.current);
    setScreenShareRequest(null);
    setIsSharingScreen(false);
  }

  function dismissScreenShareRequest() {
    clearTimeout(screenShareRequestTimerRef.current);
    setScreenShareRequest(null);
    stopScreenShare();
  }

  function cleanupGroupCall() {
    if (groupCallCleaningRef.current) return;
    groupCallCleaningRef.current = true;
    clearTimeout(groupCallSoloTimeoutRef.current);
    groupCallSoloTimeoutRef.current = null;
    if (groupCallLeaseRef.current) {
      clearInterval(groupCallLeaseRef.current.timer);
      groupCallLeaseRef.current = null;
    }
    if (groupCallPresenceRef.current) {
      remove(groupCallPresenceRef.current).catch(() => {});
      groupCallPresenceRef.current = null;
    }
    if (groupCallRoomRef.current) {
      groupCallRoomRef.current.disconnect();
      groupCallRoomRef.current = null;
    }
    if (groupCallLocalStreamRef.current) {
      groupCallLocalStreamRef.current.getTracks().forEach((t) => t.stop());
      groupCallLocalStreamRef.current = null;
    }
    stopCamera();
    if (noiseControllerRef.current) {
      noiseControllerRef.current.destroy();
      noiseControllerRef.current = null;
    }
    currentOutgoingTrackRef.current = null;
    groupCallPublishedTrackRef.current = null;
    if (groupCallAudioContainerRef.current) {
      groupCallAudioContainerRef.current.querySelectorAll("audio").forEach((el) => {
        el.srcObject = null;
        el.remove();
      });
    }
    if (groupCallMutesUnsubRef.current) {
      groupCallMutesUnsubRef.current();
      groupCallMutesUnsubRef.current = null;
    }
    groupCallForcedMutedRef.current = false;
    setGroupCallForcedMuted(false);
    setGroupCallMutes({});
    setGroupCallVideoStreams({});
    setGroupCallSpeaking({});
    setGroupCallParticipants({});
    setGroupCallLocalMuted(false);
    setActiveGroupCallKey(null);
    setRemoteScreenStream(null);
    setScreenSharedByName(null);
    stopScreenShare();
    setGroupCallStatus("idle");
    groupCallCleaningRef.current = false;
  }

  function scheduleSoloGroupCallTimeout() {
    clearTimeout(groupCallSoloTimeoutRef.current);
    groupCallSoloTimeoutRef.current = setTimeout(() => {
      groupCallSoloTimeoutRef.current = null;
      if (groupCallRoomRef.current?.remoteParticipants.size === 0) {
        cleanupGroupCall();
      }
    }, 10 * 60 * 1000);
  }

  function cleanupP2PGroupCall() {
    if (p2pGroupCallCleaningRef.current) return;
    p2pGroupCallCleaningRef.current = true;

    p2pGroupCallUnsubsRef.current.forEach((fn) => fn());
    p2pGroupCallUnsubsRef.current = [];

    Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => {
      pc.close();
    });
    p2pGroupCallConnectionsRef.current = {};

    if (p2pGroupCallStreamRef.current) {
      p2pGroupCallStreamRef.current.getTracks().forEach((t) => t.stop());
      p2pGroupCallStreamRef.current = null;
    }
    stopCamera();
    if (noiseControllerRef.current) {
      noiseControllerRef.current.destroy();
      noiseControllerRef.current = null;
    }
    currentOutgoingTrackRef.current = null;

    if (p2pGroupCallAudioContainerRef.current) {
      p2pGroupCallAudioContainerRef.current.querySelectorAll("audio").forEach((el) => {
        el.srcObject = null;
        el.remove();
      });
    }

    if (p2pGroupCallNodeRef.current) {
      remove(p2pGroupCallNodeRef.current).catch(() => {});
      p2pGroupCallNodeRef.current = null;
    }

    setP2pGroupCallParticipants({});
    setP2pGroupCallHostId(null);
    setP2pGroupCallLocalMuted(false);
    setRemoteScreenStream(null);
    setRemoteCameraStream(null);
    setScreenSharedByName(null);
    stopScreenShare();
    setP2pGroupCallStatus("idle");
    p2pGroupCallCleaningRef.current = false;
  }

  function createP2PConnection(remoteUid, callKey) {
    const pc = new RTCPeerConnection(rtcConfig);
    const connId = [sessionUserId, remoteUid].sort().join("_");
    let renegotiating = false;

    if (p2pGroupCallStreamRef.current) {
      p2pGroupCallStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, p2pGroupCallStreamRef.current));
    }
    if (localCameraStreamRef.current) {
      localCameraStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, localCameraStreamRef.current));
    }
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, screenStreamRef.current));
    }

    pc.onicecandidate = (e) => {
      if (e.candidate) {
        set(
          rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/candidates_${sessionUserId}/${Date.now()}`),
          e.candidate.toJSON()
        ).catch(() => {});
      }
    };

    pc.ontrack = (e) => {
      if (e.track.kind === "video") {
        if (remoteScreenShareActiveRef.current) {
          console.log("[P2P] ontrack — screen video from", remoteUid);
          setRemoteScreenStream(e.streams[0]);
          e.track.onmute = clearRemoteScreenShare;
          e.track.onended = clearRemoteScreenShare;
        } else {
          setRemoteCameraStream(e.streams[0]);
          e.track.onmute = () => setRemoteCameraStream(null);
          e.track.onended = () => setRemoteCameraStream(null);
        }
      } else {
        const audio = document.createElement("audio");
        audio.srcObject = e.streams[0];
        audio.autoplay = true;
        audio.setAttribute("data-p2p-participant", remoteUid);
        p2pGroupCallAudioContainerRef.current?.appendChild(audio);
        if (e.streams[0]?.getVideoTracks().length) {
          console.log("[P2P] ontrack — screen audio from", remoteUid);
          audio.setAttribute("data-p2p-screen-share", "true");
          e.track.onended = () => {
            audio.srcObject = null;
            audio.remove();
          };
        }
      }
    };

    pc.onnegotiationneeded = async () => {
      if (renegotiating) return;
      renegotiating = true;
      try {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        const reofferRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/renego/offer_${sessionUserId}`);
        await set(reofferRef, { type: offer.type, sdp: offer.sdp });
        const reanswerRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/renego/answer_${sessionUserId}`);
        const unsub = onValue(reanswerRef, async (snap) => {
          const val = snap.val();
          if (val && val.type) {
            unsub();
            try {
              await pc.setRemoteDescription(new RTCSessionDescription(val));
            } catch (e) {
              console.error("[P2P-RENEGO] setRemoteDescription failed:", e);
            }
            renegotiating = false;
          }
        });
        p2pGroupCallUnsubsRef.current.push(unsub);
      } catch (e) {
        console.error("[P2P-RENEGO] createOffer failed:", e);
        renegotiating = false;
      }
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "failed" || pc.connectionState === "disconnected") {
        p2pGroupCallAudioContainerRef.current?.querySelectorAll(
          `[data-p2p-participant="${remoteUid}"]`
        ).forEach((el) => { el.srcObject = null; el.remove(); });
        delete p2pGroupCallConnectionsRef.current[remoteUid];
      }
    };

    p2pGroupCallConnectionsRef.current[remoteUid] = pc;
    return pc;
  }

  function listenForRemoteCandidates(remoteUid, callKey, pc) {
    const connId = [sessionUserId, remoteUid].sort().join("_");
    const candidatePath = `group-calls/${callKey}/connections/${connId}/candidates_${remoteUid}`;
    const unsub = onChildAdded(rtdbRef(rtdb, candidatePath), (snap) => {
      if (pc.remoteDescription && snap.val()) {
        pc.addIceCandidate(new RTCIceCandidate(snap.val())).catch(() => {});
      }
    });
    p2pGroupCallUnsubsRef.current.push(unsub);
  }

  function listenForP2PRenego(remoteUid, callKey, pc) {
    const connId = [sessionUserId, remoteUid].sort().join("_");
    const renegoOfferPath = `group-calls/${callKey}/connections/${connId}/renego/offer_${remoteUid}`;
    let handlingRenego = false;
    const unsub = onValue(rtdbRef(rtdb, renegoOfferPath), async (snap) => {
      const val = snap.val();
      if (!val || !val.type || handlingRenego) return;
      handlingRenego = true;
      try {
        if (pc.signalingState !== "stable") {
          await pc.setLocalDescription({ type: "rollback" });
        }
        await pc.setRemoteDescription(new RTCSessionDescription(val));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        const reanswerRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}/renego/answer_${remoteUid}`);
        await set(reanswerRef, { type: answer.type, sdp: answer.sdp });
      } catch (e) {
        console.error("[P2P-RENEGO] handling offer failed:", e);
      }
      handlingRenego = false;
    });
    p2pGroupCallUnsubsRef.current.push(unsub);
  }

  async function negotiateP2PConnection(remoteUid, callKey) {
    const connId = [sessionUserId, remoteUid].sort().join("_");
    const connRef = rtdbRef(rtdb, `group-calls/${callKey}/connections/${connId}`);

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        console.error(`[P2P-NEGO] timeout ${sessionUserId}→${remoteUid}`);
        unsub();
        reject(new Error("negotiation timeout"));
      }, 20000);

      let done = false;

      const unsub = onValue(connRef, async (snap) => {
        if (done) return;
        const data = snap.val();
        if (!data) {
          if (sessionUserId > remoteUid) {
            const pc = createP2PConnection(remoteUid, callKey);
            listenForRemoteCandidates(remoteUid, callKey, pc);
            listenForP2PRenego(remoteUid, callKey, pc);
            console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: writing offer (empty node)`);
            const offer = applyOpusBitrate(await pc.createOffer(), OPUS_BITRATE);
            await pc.setLocalDescription(offer);
            await update(connRef, { offer: { type: offer.type, sdp: offer.sdp } });
          }
          return;
        }

        console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: offer=${!!data.offer} answer=${!!data.answer} higher=${sessionUserId > remoteUid}`);

        if (data.offer && data.answer && !done) {
          done = true;
          clearTimeout(timeout);
          unsub();
          resolve();
          return;
        }

        if (sessionUserId > remoteUid) {
          if (!data.offer) {
            const pc = createP2PConnection(remoteUid, callKey);
            listenForRemoteCandidates(remoteUid, callKey, pc);
            listenForP2PRenego(remoteUid, callKey, pc);
            console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: writing offer`);
            const offer = applyOpusBitrate(await pc.createOffer(), OPUS_BITRATE);
            await pc.setLocalDescription(offer);
            await update(connRef, { offer: { type: offer.type, sdp: offer.sdp } });
          }
        } else {
          if (data.offer && !data.answer) {
            console.log(`[P2P-NEGO] ${sessionUserId}→${remoteUid}: writing answer`);
            const pc = createP2PConnection(remoteUid, callKey);
            listenForRemoteCandidates(remoteUid, callKey, pc);
            listenForP2PRenego(remoteUid, callKey, pc);
            await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
            const answer = applyOpusBitrate(await pc.createAnswer(), OPUS_BITRATE);
            await pc.setLocalDescription(answer);
            await update(connRef, { answer: { type: answer.type, sdp: answer.sdp } });
          }
        }
      });
    });
  }

  async function connectToPeer(uid, callKey) {
    if (uid === sessionUserId || p2pGroupCallConnectionsRef.current[uid]) return;
    await negotiateP2PConnection(uid, callKey);
  }

  async function ensureP2PAudioStream() {
    if (p2pGroupCallStreamRef.current) return;
    try {
      const stream = await acquireMicStream();
      p2pGroupCallStreamRef.current = stream;
      if (voiceMuteActive) {
        stream.getAudioTracks().forEach((track) => { track.enabled = false; });
        setP2pGroupCallLocalMuted(true);
      }
      Object.values(p2pGroupCallConnectionsRef.current).forEach((pc) => {
        stream.getTracks().forEach((t) => pc.addTrack(t, stream));
      });
    } catch (e) {
      console.error("[P2P] getUserMedia failed:", e);
    }
  }

  async function joinP2PGroupCall() {
    if (p2pGroupCallStatus !== "idle" || p2pGroupCallCleaningRef.current) return;
    setP2pGroupCallStatus("connecting");

    try {
      if (callStatus !== "idle") cleanupCall();

      const callKey = "global_p2p";
      const capability = computeCapability();
      const now = Date.now();

      const callRef = rtdbRef(rtdb, `group-calls/${callKey}`);
      const myParticipantRef = rtdbRef(rtdb, `group-calls/${callKey}/participants/${sessionUserId}`);

      await update(callRef, { createdAt: now });
      await set(myParticipantRef, {
        name: activeName,
        capability,
        joinedAt: now,
      });
      onDisconnect(myParticipantRef).remove();
      p2pGroupCallNodeRef.current = callRef;

      const snap = await rtdbGet(callRef);
      const existingParticipants = snap.val()?.participants || {};

      console.log(`[P2P-JOIN] participants keys=${Object.keys(existingParticipants)} now=${now} gotStream=${!!p2pGroupCallStreamRef.current}`);
      const otherUids = Object.keys(existingParticipants).filter((uid) => uid !== sessionUserId);

      const allCaps = { ...existingParticipants };
      allCaps[sessionUserId] = { capability, name: activeName };
      const hostUid = Object.keys(allCaps).reduce((best, uid) =>
        (allCaps[uid]?.capability || 0) > (allCaps[best]?.capability || 0) ? uid : best
      );
      setP2pGroupCallHostId(hostUid);
      const { [sessionUserId]: _self, ...otherParticipants } = existingParticipants;
      setP2pGroupCallParticipants(otherParticipants);

      if (otherUids.length === 0) {
        setP2pGroupCallStatus("connected");
      } else {
        await ensureP2PAudioStream();
        for (const uid of otherUids) {
          await connectToPeer(uid, callKey);
        }
        setP2pGroupCallStatus("connected");
      }

      const unsubAdded = onChildAdded(
        rtdbRef(rtdb, `group-calls/${callKey}/participants`),
        async (snap) => {
          const uid = snap.key;
          if (uid === sessionUserId || p2pGroupCallConnectionsRef.current[uid]) return;
          const pData = snap.val();
          setP2pGroupCallParticipants((prev) => ({ ...prev, [uid]: pData }));
          await ensureP2PAudioStream();
          connectToPeer(uid, callKey);
        }
      );
      p2pGroupCallUnsubsRef.current.push(unsubAdded);

      const unsubRemoved = onChildRemoved(
        rtdbRef(rtdb, `group-calls/${callKey}/participants`),
        (snap) => {
          const uid = snap.key;
          const pData = snap.val();
          if (uid === sessionUserId) {
            if (!p2pGroupCallCleaningRef.current && typeof Notification !== "undefined") {
              try { new Notification("QuadChat", { body: "You have disconnected from the group call. You may be lagging." }); } catch (_) {}
            }
            return;
          }
          const displayName = pData?.name || uid;
          if (typeof Notification !== "undefined") {
            try { new Notification("QuadChat", { body: `${displayName} has left the group call.` }); } catch (_) {}
          }
          pushInAppNotification({
            type: "call",
            channelId: null,
            channelLabel: null,
            senderName: displayName,
            body: "has left the group call",
            id: `call-leave-${callKey}-${uid}`
          });
          setP2pGroupCallParticipants((prev) => {
            const { [uid]: _, ...rest } = prev;
            return rest;
          });
          if (p2pGroupCallConnectionsRef.current[uid]) {
            p2pGroupCallConnectionsRef.current[uid].close();
            delete p2pGroupCallConnectionsRef.current[uid];
          }
          p2pGroupCallAudioContainerRef.current?.querySelectorAll(
            `[data-p2p-participant="${uid}"]`
          ).forEach((el) => { el.srcObject = null; el.remove(); });
        }
      );
      p2pGroupCallUnsubsRef.current.push(unsubRemoved);

      const p2pScreenShareRef = rtdbRef(rtdb, `group-calls/${callKey}/screenShareActive`);
      const unsubP2pScreen = onValue(p2pScreenShareRef, (snap) => {
        const val = snap.val();
        if (val && typeof val === "object") {
          remoteScreenShareActiveRef.current = true;
          setScreenSharedByName(val.name);
        } else {
          remoteScreenShareActiveRef.current = false;
          clearRemoteScreenShare();
        }
      });
      p2pGroupCallUnsubsRef.current.push(unsubP2pScreen);

      const p2pScreenShareReqRef = rtdbRef(rtdb, `group-calls/${callKey}/screenShareRequest`);
      const unsubP2pScreenReq = onValue(p2pScreenShareReqRef, (snap) => {
        const val = snap.val();
        if (val && val.uid && val.uid !== user.uid && isSharingScreenRef.current) {
          setScreenShareRequest(val);
          clearTimeout(screenShareRequestTimerRef.current);
          screenShareRequestTimerRef.current = setTimeout(() => {
            set(p2pScreenShareReqRef, null).catch(() => {});
            setScreenShareRequest(null);
          }, 5000);
        } else if (!val) {
          setScreenShareRequest(null);
          clearTimeout(screenShareRequestTimerRef.current);
        }
      });
      p2pGroupCallUnsubsRef.current.push(unsubP2pScreenReq);
    } catch (e) {
      console.error("[P2P-GROUP-CALL] join error:", e);
      cleanupP2PGroupCall();
    }
  }

  function leaveP2PGroupCall() {
    cleanupP2PGroupCall();
  }

  function toggleP2PGroupCallMute() {
    if (p2pGroupCallStreamRef.current) {
      const audioTrack = p2pGroupCallStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        if (lockedVoiceMuteActive && !audioTrack.enabled) return;
        if (!audioTrack.enabled && isVoiceTemporarilyMuted) {
          onTemporaryVoiceUnmute?.();
        }
        audioTrack.enabled = !audioTrack.enabled;
        setP2pGroupCallLocalMuted(!audioTrack.enabled);
      }
    } else {
      setP2pGroupCallLocalMuted((prev) => !prev);
    }
  }

  useEffect(() => {
    if (!user || !sessionUserId) return;
    let cancelled = false;
    let loading = false;
    const refresh = async () => {
      if (loading) return;
      loading = true;
      try {
        const { calls } = await callApi(user, "list-calls");
        if (!cancelled) setActiveCalls(calls);
      } catch (error) {
        if (!cancelled && (error.status === 401 || error.status === 403)) setActiveCalls([]);
      } finally { loading = false; }
    };
    refreshCallsRef.current = refresh;
    refresh();
    const timer = setInterval(refresh, 15_000);
    return () => {
      cancelled = true;
      clearInterval(timer);
      refreshCallsRef.current = null;
    };
  }, [user, sessionUserId]);

  async function createGroupCall({ title = "", password = "" } = {}) {
    const { callKey } = await callApi(user, "create-call", { title: title.trim() || "Group call", password });
    refreshCallsRef.current?.();
    return callKey;
  }

  async function deleteGroupCall(callKey) {
    if (groupCallStatus === "connected" && activeGroupCallKey === callKey) {
      cleanupGroupCall();
    }
    await callApi(user, "delete-call", { callKey });
    refreshCallsRef.current?.();
  }

  async function joinSessionGroupCall(sessionTitle = "") {
    const now = Date.now();
    const existing = activeCalls.find(
      (call) =>
        !call.isProtected && !call.needsRecreation &&
        call.ownerId === sessionUserId &&
        call.title.toLowerCase() === (sessionTitle.trim().toLowerCase() || "group call") &&
        now - call.createdAt < 10 * 60 * 1000
    );
    const callKey = existing?.callKey || (await createGroupCall({ title: sessionTitle }));
    await joinGroupCall(callKey);
    return callKey;
  }

  async function joinGroupCall(callKey, password) {
    if (groupCallCleaningRef.current) return;
    if (groupCallStatus !== "idle") {
      cleanupGroupCall();
    }
    setGroupCallStatus("connecting");

    try {
      if (callStatus !== "idle") {
        cleanupCall();
      }

      const { Room, RoomEvent } = await import("livekit-client");
      const { token, url, session, accessExpiresAt } = await callApi(user, "livekit-token", {
        room: callKey, ...(password ? { password } : {})
      });

      const stream = await acquireMicStream();
      groupCallLocalStreamRef.current = stream;
      if (voiceMuteActive) {
        stream.getAudioTracks().forEach((track) => { track.enabled = false; });
        setGroupCallLocalMuted(true);
      }

      const room = new Room({ adaptiveStream: true, dynacast: true });
      async function publishAudio() {
        if (!room.localParticipant.permissions?.canPublish || groupCallRoomRef.current !== room) return;
        if (groupCallPublishedTrackRef.current) return;
        for (const track of stream.getAudioTracks()) {
          const pub = await room.localParticipant.publishTrack(track, { dtx: true });
          if (pub.track) groupCallPublishedTrackRef.current = pub.track;
          try {
            const sender = pub.track?.sender;
            if (sender) {
              const params = sender.getParameters();
              params.encodings = [{ maxBitrate: OPUS_BITRATE }];
              await sender.setParameters(params);
            }
          } catch (_e) { /* some LiveKit versions ignore setParameters for audio */ }
        }
      }
      room.on(RoomEvent.ParticipantPermissionsChanged, (_previous, participant) => {
        if (participant !== room.localParticipant) return;
        if (!participant.permissions?.canPublish) {
          groupCallPublishedTrackRef.current = null;
        } else {
          publishAudio().catch((error) => onCallError?.(error.message));
        }
      });

      room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        if (track.kind === "video") {
          const stream = new MediaStream([track.mediaStreamTrack]);
          const isScreen = String(publication.source || "").includes("screen");
          if (isScreen) {
            console.log("[LIVEKIT] subscribed to screen video from", participant.identity);
            setRemoteScreenStream(stream);
            setScreenSharedByName(participant.name || participant.identity);
            track.onMuted = clearRemoteScreenShare;
          } else {
            setGroupCallVideoStreams((prev) => ({
              ...prev,
              [participant.identity]: { name: participant.name || participant.identity, stream }
            }));
            track.onMuted = () => setGroupCallVideoStreams((prev) => {
              const next = { ...prev };
              delete next[participant.identity];
              return next;
            });
            track.onunmuted = () => setGroupCallVideoStreams((prev) => {
              if (prev[participant.identity]) return prev;
              return {
                ...prev,
                [participant.identity]: { name: participant.name || participant.identity, stream }
              };
            });
          }
        } else {
          const audio = document.createElement("audio");
          audio.srcObject = new MediaStream([track.mediaStreamTrack]);
          audio.autoplay = true;
          audio.setAttribute("data-participant", participant.identity);
          if (publication.trackSid) audio.setAttribute("data-track-sid", publication.trackSid);
          groupCallAudioContainerRef.current?.appendChild(audio);
        }
      });

      room.on(RoomEvent.TrackUnsubscribed, (track, publication, participant) => {
        if (track.kind === "video") {
          if (String(publication.source || "").includes("screen")) {
            clearRemoteScreenShare();
          } else {
            setGroupCallVideoStreams((prev) => {
              const next = { ...prev };
              delete next[participant.identity];
              return next;
            });
          }
          return;
        }
        const selector = publication.trackSid
          ? `[data-track-sid="${publication.trackSid}"]`
          : `[data-participant="${participant.identity}"]`;
        groupCallAudioContainerRef.current?.querySelectorAll(selector).forEach((el) => {
          el.srcObject = null;
          el.remove();
        });
      });

      room.on(RoomEvent.ParticipantConnected, (participant) => {
        clearTimeout(groupCallSoloTimeoutRef.current);
        groupCallSoloTimeoutRef.current = null;
        setGroupCallParticipants((prev) => ({
          ...prev,
          [participant.identity]: {
            identity: participant.identity,
            name: participant.name || participant.identity,
            isMuted: participant.isMuted || false,
          },
        }));
        if (notificationsEnabled && notificationPermission === "granted") {
          const name = participant.name || participant.identity;
          new Notification("QuadChat", {
            body: `${name} joined the group call`,
            icon: notificationIcon,
            tag: `group-join-${participant.identity}`,
          });
        }
      });

      room.on(RoomEvent.ParticipantDisconnected, (participant) => {
        setGroupCallParticipants((prev) => {
          const next = { ...prev };
          delete next[participant.identity];
          return next;
        });
        setGroupCallVideoStreams((prev) => {
          const next = { ...prev };
          delete next[participant.identity];
          return next;
        });
        groupCallAudioContainerRef.current?.querySelectorAll(
          `[data-participant="${participant.identity}"]`
        ).forEach((el) => {
          el.srcObject = null;
          el.remove();
        });
        if (notificationsEnabled && notificationPermission === "granted") {
          const name = participant.name || participant.identity;
          new Notification("QuadChat", {
            body: `${name} left the group call`,
            icon: notificationIcon,
            tag: `group-leave-${participant.identity}`,
          });
        }
        if (room.remoteParticipants.size === 0) {
          scheduleSoloGroupCallTimeout();
        }
      });

      room.on(RoomEvent.AudioMuted, (participant) => {
        setGroupCallParticipants((prev) => {
          if (!prev[participant.identity]) return prev;
          return { ...prev, [participant.identity]: { ...prev[participant.identity], isMuted: true } };
        });
      });

      room.on(RoomEvent.AudioUnmuted, (participant) => {
        setGroupCallParticipants((prev) => {
          if (!prev[participant.identity]) return prev;
          return { ...prev, [participant.identity]: { ...prev[participant.identity], isMuted: false } };
        });
      });

      room.on(RoomEvent.ActiveSpeakersChanged, (speakers) => {
        const speaking = {};
        speaking[room.localParticipant.identity] = false;
        (room.remoteParticipants || new Map()).forEach((p) => {
          speaking[p.identity] = false;
        });
        speakers.forEach((participant) => {
          speaking[participant.identity] = true;
        });
        setGroupCallSpeaking(speaking);
      });

      room.on(RoomEvent.ConnectionStateChanged, (state) => {
        if (state === "disconnected") {
          cleanupGroupCall();
        }
      });

      await room.connect(url, token);
      groupCallRoomRef.current = room;
      setActiveGroupCallKey(callKey);
      const lease = { session, expiresAt: accessExpiresAt, timer: null, pending: false };
      groupCallLeaseRef.current = lease;
      lease.timer = setInterval(async () => {
        if (lease.pending || groupCallLeaseRef.current !== lease) return;
        lease.pending = true;
        try {
          const result = await callApi(user, "renew-call", { room: callKey, session });
          lease.expiresAt = result.accessExpiresAt;
        } catch (error) {
          if (groupCallLeaseRef.current === lease && ([401, 403, 404].includes(error.status) || Date.now() >= lease.expiresAt)) {
            cleanupGroupCall();
            onCallError?.(error.message);
          }
        } finally { lease.pending = false; }
      }, 25_000);

      const presenceRef = rtdbRef(
        rtdb,
        `group-calls/${callKey}/participants/${sessionUserId}`
      );
      await onDisconnect(presenceRef).remove();
      await set(presenceRef, { name: activeName, joinedAt: Date.now() });
      groupCallPresenceRef.current = presenceRef;

      const mutesRef = rtdbRef(rtdb, `group-calls/${callKey}/mutes`);
      groupCallMutesUnsubRef.current?.();
      await new Promise((resolve) => {
        groupCallMutesUnsubRef.current = onValue(
          mutesRef,
          (snap) => {
            const mutes = snap.val() || {};
            setGroupCallMutes(mutes);
            const forced = mutes[sessionUserId]?.muted === true;
            groupCallForcedMutedRef.current = forced;
            setGroupCallForcedMuted(forced);
            const audioTrack = groupCallLocalStreamRef.current?.getAudioTracks()[0];
            if (audioTrack) {
              const shouldMute = forced || voiceMuteActiveRef.current;
              audioTrack.enabled = !shouldMute;
              setGroupCallLocalMuted(shouldMute);
            }
            resolve();
          },
          () => { cleanupGroupCall(); resolve(); }
        );
      });

      groupCallPublishedTrackRef.current = null;
      if (groupCallRoomRef.current !== room) throw new Error("Call access was revoked");
      await publishAudio();

      // The AI pipeline may have finished building while we were publishing;
      // make sure the published track matches the current outgoing track.
      const controller = noiseControllerRef.current;
      const desiredTrack = controller?.getOutgoingTrack?.();
      const publishedTrack = groupCallPublishedTrackRef.current;
      if (desiredTrack && publishedTrack && desiredTrack !== publishedTrack.mediaStreamTrack) {
        await publishedTrack.replaceTrack(desiredTrack).catch((error) =>
          console.error("[NOISE] LiveKit reconcile failed:", error)
        );
      }

      const participants = {};
      (room.remoteParticipants || new Map()).forEach((p) => {
        participants[p.identity] = {
          identity: p.identity,
          name: p.name || p.identity,
          isMuted: p.isMuted || false,
        };
      });
      setGroupCallParticipants(participants);

      setGroupCallStatus("connected");
      if (room.remoteParticipants.size === 0) {
        scheduleSoloGroupCallTimeout();
      }
    } catch (e) {
      console.error("[GROUP-CALL] join error:", e);
      cleanupGroupCall();
      throw e;
    }
  }

  function leaveGroupCall() {
    if (p2pGroupCallStatus === "connected") {
      leaveP2PGroupCall();
      return;
    }
    cleanupGroupCall();
  }

  async function setGroupCallParticipantMute(callKeyVal, targetUid, targetName, muted) {
    await callApi(user, "group-mute", {
      callKey: callKeyVal,
      targetUid,
      targetName,
      muted,
    });
  }

  function toggleCallMute() {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        const muted = !audioTrack.enabled;
        console.log(`[CALL-MUTE] toggled: ${muted} isCaller=${isCallerRef.current} hasNode=${!!callNodeRef.current}`);
        setCallMuted(muted);
        if (callNodeRef.current) {
          const muteField = isCallerRef.current ? "callerMuted" : "calleeMuted";
          update(callNodeRef.current, { [muteField]: muted }).catch(() => {});
        }
      }
    }
  }

  useEffect(() => {
    return () => { cleanupGroupCall(); };
  }, []);

  return {
    callStatus,
    callPartnerId,
    callPartnerName,
    callSpeaking,
    callMuted,
    remoteMuted,
    incomingCall,
    remoteStream,
    remoteCameraStream,
    localCameraStream,
    isSharingScreen,
    localScreenStream,
    remoteScreenStream,
    viewingScreen,
    setViewingScreen,
    screenSharedByName,
    screenShareRequest,
    remoteAudioRef,
    screenAudioRef,
    screenVideoRef,
    groupCallStatus,
    groupCallParticipants,
    groupCallVideoStreams,
    groupCallSpeaking,
    groupCallLocalMuted,
    groupCallAudioContainerRef,
    groupCallMutes,
    activeGroupCallKey,
    activeCalls,
    createGroupCall,
    deleteGroupCall,
    joinSessionGroupCall,
    p2pGroupCallStatus,
    p2pGroupCallHostId,
    p2pGroupCallParticipants,
    p2pGroupCallLocalMuted,
    p2pGroupCallAudioContainerRef,
    startCall,
    answerCall,
    rejectCall,
    hangUp,
    toggleCallMute,
    toggleCamera,
    toggleScreenShare,
    stopScreenShare,
    dismissScreenShareRequest,
    toggleGroupCallMute,
    joinGroupCall,
    leaveGroupCall,
    setGroupCallParticipantMute,
    joinP2PGroupCall,
    leaveP2PGroupCall,
    toggleP2PGroupCallMute
  };
}
