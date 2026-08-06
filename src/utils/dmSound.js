const dmAudio = new Audio("/sounds/discord-notification.mp3");
dmAudio.preload = "auto";
dmAudio.volume = 0.55;

export function playDmReceiveSound() {
  dmAudio.currentTime = 0;
  dmAudio.play().catch(() => {});
}
