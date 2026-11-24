const SOUNDS = {
  android: "/sounds/android-sound-effect-meme_tcbuori.mp3",
  discord: "/sounds/discord-notification.mp3"
};

let customSoundUrl = "";
let soundType = "android";
let messageVolume = 0.2;

export function setDmSoundPreference({ kind, customUrl, volume } = {}) {
  soundType = kind || "android";
  customSoundUrl = customUrl || "";
  messageVolume = Number.isFinite(Number(volume)) ? Math.max(0, Math.min(1, Number(volume))) : 0.2;
}

function getDmSoundSrc() {
  if (soundType === "custom") {
    return customSoundUrl || SOUNDS.android;
  }
  return SOUNDS[soundType] || SOUNDS.android;
}

function getMessageVolume() {
  return messageVolume;
}

let dmAudio = new Audio(getDmSoundSrc());
dmAudio.preload = "auto";
dmAudio.volume = getMessageVolume();

export function playDmReceiveSound() {
  const src = getDmSoundSrc();
  if (dmAudio.src !== new URL(src, location.origin).href) {
    dmAudio = new Audio(src);
    dmAudio.preload = "auto";
  }
  dmAudio.volume = getMessageVolume();
  dmAudio.currentTime = 0;
  dmAudio.play().catch(() => {});
}
