const SOUNDS = {
  default: "/sounds/normal-average-ringtone.mp3"
};

function getCallSoundSrc() {
  const type = localStorage.getItem("quadchat-call-sound") || "default";
  if (type === "custom") {
    return localStorage.getItem("quadchat-call-sound-custom") || SOUNDS.default;
  }
  return SOUNDS[type] || SOUNDS.default;
}

let ringtoneAudio = new Audio(getCallSoundSrc());
function configureRingtone() {
  ringtoneAudio.preload = "auto";
  ringtoneAudio.loop = true;
  ringtoneAudio.volume = 0.7;
}
configureRingtone();

let ringtonePlaying = false;

export function unlockCallAudio() {
  ringtoneAudio.load();
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
  ringtoneAudio.currentTime = 0;
  ringtoneAudio.play().catch(() => {});
}

export function stopCallRingtone() {
  ringtonePlaying = false;
  ringtoneAudio.pause();
  ringtoneAudio.currentTime = 0;
}