let audioContext = null;
let ringtoneSource = null;

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  audioContext ||= new AudioContextClass();
  return audioContext;
}

export function unlockCallAudio() {
  const context = getAudioContext();
  if (context) {
    context.resume().catch(() => {});
  }
}

export function resumeCallAudio() {
  if (audioContext) {
    audioContext.resume().catch(() => {});
  }
}

function playRingPhrase() {
  if (!audioContext) return;
  const sampleRate = audioContext.sampleRate;
  const duration = 3;
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const samples = buffer.getChannelData(0);

  [0, 0.22].forEach((start, index) => {
    const frequency = index === 0 ? 660 : 880;
    const end = start + 0.42;
    for (let i = Math.floor(start * sampleRate); i < Math.floor(end * sampleRate); i += 1) {
      const time = i / sampleRate - start;
      const envelope = Math.min(time / 0.03, 1, (end - i / sampleRate) / 0.08);
      samples[i] += Math.sin(2 * Math.PI * frequency * time) * envelope * 0.16;
    }
  });

  ringtoneSource = audioContext.createBufferSource();
  ringtoneSource.buffer = buffer;
  ringtoneSource.loop = true;
  ringtoneSource.connect(audioContext.destination);
  ringtoneSource.start();
}

export function startCallRingtone() {
  if (ringtoneSource) return;
  if (!getAudioContext()) return;
  audioContext.resume().catch(() => {});
  playRingPhrase();
}

export function stopCallRingtone() {
  if (ringtoneSource) {
    ringtoneSource.stop();
    ringtoneSource.disconnect();
    ringtoneSource = null;
  }
}
