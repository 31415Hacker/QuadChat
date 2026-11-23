const SOUNDS = {
  default: "/sounds/normal-average-ringtone.mp3",
  samsung: "/sounds/samsung-ringtone.mp3",
  iphone: "/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
};

function getCallSoundSrc() {
  const type = localStorage.getItem("quadchat-call-sound") || "default";
  if (type === "custom") {
    return localStorage.getItem("quadchat-call-sound-custom") || SOUNDS.default;
  }
  return SOUNDS[type] || SOUNDS.default;
}

function getRingtoneVolume() {
  const stored = localStorage.getItem("quadchat-ringtone-volume");
  const volume = stored === null ? NaN : Number(stored);
  return volume >= 0 && volume <= 1 ? volume : 0.2;
}

let ringtoneAudio = new Audio(getCallSoundSrc());
function configureRingtone() {
  ringtoneAudio.preload = "auto";
  ringtoneAudio.loop = true;
  ringtoneAudio.volume = getRingtoneVolume();
}
configureRingtone();

let ringtonePlaying = false;

export function unlockCallAudio() {
  if (ringtonePlaying) return;
  ringtoneAudio.load();
  // Browsers only grant audible media playback from a real user gesture.
  // Calls start after async media/signalling work, so merely calling play()
  // there is commonly blocked. Prime this audio element silently while we are
  // still inside the click/tap/key gesture that started the call.
  const wasMuted = ringtoneAudio.muted;
  ringtoneAudio.muted = true;
  ringtoneAudio.play().then(() => {
    ringtoneAudio.pause();
    ringtoneAudio.currentTime = 0;
    ringtoneAudio.muted = wasMuted;
  }).catch(() => {
    ringtoneAudio.muted = wasMuted;
  });
}

export function resumeCallAudio() {
  if (ringtonePlaying) {
    ringtoneAudio.play().catch(() => {});
  }
}

export function startCallRingtone() {
  if (ringtonePlaying) return;
  const src = getCallSoundSrc();
  if (ringtoneAudio.src !== new URL(src, location.origin).href) {
    ringtoneAudio = new Audio(src);
    configureRingtone();
  }
  ringtonePlaying = true;
  ringtoneAudio.volume = getRingtoneVolume();
  ringtoneAudio.currentTime = 0;
  ringtoneAudio.play().catch(() => {});
}

export function stopCallRingtone() {
  ringtonePlaying = false;
  ringtoneAudio.pause();
  ringtoneAudio.currentTime = 0;
}
