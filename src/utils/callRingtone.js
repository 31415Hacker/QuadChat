const ringtoneAudio = new Audio("/sounds/normal-average-ringtone.mp3");
ringtoneAudio.preload = "auto";
ringtoneAudio.loop = true;
ringtoneAudio.volume = 0.7;

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
  ringtonePlaying = true;
  ringtoneAudio.currentTime = 0;
  ringtoneAudio.play().catch(() => {});
}

export function stopCallRingtone() {
  ringtonePlaying = false;
  ringtoneAudio.pause();
  ringtoneAudio.currentTime = 0;
}
