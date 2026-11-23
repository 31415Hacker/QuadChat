const SOUNDS = {
  android: "/sounds/android-sound-effect-meme_tcbuori.mp3",
  discord: "/sounds/discord-notification.mp3"
};

function getDmSoundSrc() {
  const type = localStorage.getItem("quadchat-dm-sound") || "android";
  if (type === "custom") {
    return localStorage.getItem("quadchat-dm-sound-custom") || SOUNDS.android;
  }
  return SOUNDS[type] || SOUNDS.android;
}

function getMessageVolume() {
  const stored = localStorage.getItem("quadchat-message-sound-volume");
  const volume = stored === null ? NaN : Number(stored);
  return volume >= 0 && volume <= 1 ? volume : 0.2;
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
