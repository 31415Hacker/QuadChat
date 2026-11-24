const SOUNDS = {
  default: "/sounds/normal-average-ringtone.mp3",
  samsung: "/sounds/samsung-ringtone.mp3",
  iphone: "/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
};

let customSoundUrl = "";
let soundType = "default";
let ringtoneVolume = 0.2;

export function setCallSoundPreference({ kind, customUrl, volume } = {}) {
  soundType = kind || "default";
  customSoundUrl = customUrl || "";
  ringtoneVolume = Number.isFinite(Number(volume)) ? Math.max(0, Math.min(1, Number(volume))) : 0.2;
}

function getCallSoundSrc() {
  if (soundType === "custom") {
    return customSoundUrl || SOUNDS.default;
  }
  return SOUNDS[soundType] || SOUNDS.default;
}

function getRingtoneVolume() {
  return ringtoneVolume;
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
