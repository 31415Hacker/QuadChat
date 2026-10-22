import { RnnoiseWorkletNode, loadRnnoise } from "@sapphi-red/web-noise-suppressor";
import rnnoiseWorkletUrl from "@sapphi-red/web-noise-suppressor/rnnoiseWorklet.js?url";
import rnnoiseWasmUrl from "@sapphi-red/web-noise-suppressor/rnnoise.wasm?url";
import rnnoiseSimdWasmUrl from "@sapphi-red/web-noise-suppressor/rnnoise_simd.wasm?url";

export const NOISE_MODE_KEY = "quadchat-noise-mode";
export const NOISE_MODES = ["off", "browser", "ai", "deepfilter"];
export const DEFAULT_NOISE_MODE = "browser";

export const NOISE_MODE_LABELS = {
  off: "Off",
  browser: "Standard",
  ai: "AI (RNNoise)",
  deepfilter: "AI (DeepFilterNet)"
};

export const NOISE_MODE_HINTS = {
  off: "Send your microphone untouched. Best in a quiet room.",
  browser: "Use the browser's built-in noise suppression. Low CPU and works everywhere.",
  ai: "Run RNNoise, a neural-network denoiser, on your microphone. Best in noisy rooms, uses more battery.",
  deepfilter: "Run DeepFilterNet locally for stronger voice cleanup. Downloads an approximately 11 MB model the first time and uses more CPU."
};

export function normalizeNoiseMode(mode) {
  return NOISE_MODES.includes(mode) ? mode : DEFAULT_NOISE_MODE;
}

export function getStoredNoiseMode() {
  try {
    return normalizeNoiseMode(localStorage.getItem(NOISE_MODE_KEY));
  } catch (_) {
    return DEFAULT_NOISE_MODE;
  }
}

export function storeNoiseMode(mode) {
  try {
    localStorage.setItem(NOISE_MODE_KEY, normalizeNoiseMode(mode));
  } catch (_) {
    /* storage may be unavailable (private mode); non-fatal */
  }
}

export function isAiNoiseSupported() {
  return (
    typeof window !== "undefined" &&
    typeof window.AudioContext !== "undefined" &&
    typeof window.AudioWorkletNode !== "undefined"
  );
}

/**
 * Extra `getUserMedia` audio constraints for a mode. AI mode deliberately
 * disables the browser denoiser so RNNoise receives the untouched signal;
 * echo cancellation and gain control stay on regardless.
 */
export function captureConstraintsForMode(mode) {
  const normalized = normalizeNoiseMode(mode);
  return {
    echoCancellation: true,
    autoGainControl: true,
    noiseSuppression: normalized === "browser"
  };
}

async function applyCaptureNoiseConstraint(track, mode) {
  if (!track || typeof track.applyConstraints !== "function") return;
  const normalized = normalizeNoiseMode(mode);
  try {
    await track.applyConstraints({ noiseSuppression: normalized === "browser" });
  } catch (_) {
    // Some browsers (notably Safari) reject live changes to noiseSuppression.
    // The capture constraints already set the right value for the next call.
  }
}

// The wasm binary is immutable and expensive to fetch, so cache it across calls.
let wasmBinaryPromise = null;
function loadRnnoiseBinary() {
  if (!wasmBinaryPromise) {
    wasmBinaryPromise = loadRnnoise({
      url: rnnoiseWasmUrl,
      simdUrl: rnnoiseSimdWasmUrl
    }).catch((error) => {
      wasmBinaryPromise = null;
      throw error;
    });
  }
  return wasmBinaryPromise;
}

/**
 * Owns the microphone capture stream and an optional Web Audio denoise
 * pipeline for one call. The `outgoingStream` is the stable stream handed to
 * WebRTC/LiveKit; its single audio track is swapped in place when the mode
 * changes, so callers keep muting / reading the same stream object.
 */
export function createNoiseController({
  rawStream,
  outgoingStream,
  initialMode,
  onOutgoingTrackChange,
  onError
}) {
  const rawTrack = rawStream.getAudioTracks()[0];
  let mode = normalizeNoiseMode(initialMode);
  let pipeline = null;
  let destroyed = false;
  let queue = Promise.resolve();

  function currentOutgoingTrack() {
    return outgoingStream.getAudioTracks()[0] || rawTrack;
  }

  function setOutgoingTrack(track) {
    outgoingStream.getAudioTracks().forEach((existing) => outgoingStream.removeTrack(existing));
    outgoingStream.addTrack(track);
    onOutgoingTrackChange?.(track);
  }

  async function buildPipeline(model) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) throw new Error("AudioContext is unavailable");
    // Both neural filters run at 48 kHz; the context resamples the microphone.
    const ctx = new AudioCtx({ sampleRate: 48000 });
    let source;
    let node;
    let dest;
    let dispose;
    try {
      if (model === "deepfilter") {
        const { createDeepFilterNetAudioWorklet } = await import("@workadventure/noise-suppression/deepfilternet");
        const deepFilter = await createDeepFilterNetAudioWorklet(ctx);
        await deepFilter.ready;
        node = deepFilter.node;
        dispose = deepFilter.dispose;
      } else {
        const wasmBinary = await loadRnnoiseBinary();
        await ctx.audioWorklet.addModule(rnnoiseWorkletUrl);
        node = new RnnoiseWorkletNode(ctx, { maxChannels: 2, wasmBinary });
      }
      if (destroyed) {
        await ctx.close().catch(() => {});
        return null;
      }
      source = ctx.createMediaStreamSource(rawStream);
      dest = ctx.createMediaStreamDestination();
      source.connect(node);
      node.connect(dest);
      if (ctx.state === "suspended") {
        await ctx.resume().catch(() => {});
      }
      return { ctx, source, node, dest, dispose, track: dest.stream.getAudioTracks()[0] };
    } catch (error) {
      try { source?.disconnect(); } catch (_) { /* already detached */ }
      try { node?.disconnect(); } catch (_) { /* already detached */ }
      try { dispose?.(); } catch (_) { /* already disposed */ }
      await ctx.close().catch(() => {});
      throw error;
    }
  }

  async function teardownPipeline() {
    const active = pipeline;
    pipeline = null;
    if (!active) return;
    try { active.source.disconnect(); } catch (_) { /* already gone */ }
    try { active.node.disconnect(); } catch (_) { /* already gone */ }
    try { active.node.destroy?.(); } catch (_) { /* already gone */ }
    try { active.dispose?.(); } catch (_) { /* already disposed */ }
    try { active.track.stop(); } catch (_) { /* already ended */ }
    active.dest.stream.getTracks().forEach((track) => {
      try { track.stop(); } catch (_) { /* already ended */ }
    });
    await active.ctx.close().catch(() => {});
  }

  async function activateAi(model) {
    if (pipeline) return true;
    let built;
    try {
      built = await buildPipeline(model);
    } catch (error) {
      console.warn("[NOISE] AI suppression unavailable, falling back to standard:", error);
      mode = "browser";
      onError?.(error);
      return false;
    }
    if (!built) return false;
    if (destroyed) {
      try { built.track.stop(); } catch (_) { /* already ended */ }
      await built.ctx.close().catch(() => {});
      return false;
    }
    pipeline = built;
    setOutgoingTrack(built.track);
    return true;
  }

  async function deactivateAi(nextMode) {
    if (pipeline) {
      // Hand WebRTC/LiveKit back to the raw microphone before the graph dies,
      // otherwise the sender would briefly hold a stopped track.
      setOutgoingTrack(rawTrack);
      await teardownPipeline();
    }
    await applyCaptureNoiseConstraint(rawTrack, nextMode);
  }

  async function doSetMode(nextMode) {
    if (destroyed) return mode;
    const normalized = normalizeNoiseMode(nextMode);
    if (normalized === "ai" || normalized === "deepfilter") {
      await applyCaptureNoiseConstraint(rawTrack, normalized);
      mode = normalized;
      await activateAi(normalized);
    } else {
      mode = normalized;
      await deactivateAi(normalized);
    }
    return mode;
  }

  function setMode(nextMode) {
    const run = () => doSetMode(nextMode);
    queue = queue.then(run, run);
    return queue;
  }

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    teardownPipeline();
    rawStream.getTracks().forEach((track) => {
      try { track.stop(); } catch (_) { /* already ended */ }
    });
  }

  return {
    setMode,
    destroy,
    getMode: () => mode,
    getOutgoingTrack: currentOutgoingTrack,
    isAiActive: () => Boolean(pipeline)
  };
}

/**
 * Creates an RNNoise pipeline for received call audio. Unlike the microphone
 * controller, it never owns or stops the incoming remote stream.
 */
export async function createRemoteNoiseController({ inputStream, onOutputStream }) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) throw new Error("AudioContext is unavailable");
  const ctx = new AudioCtx({ sampleRate: 48000 });
  let source;
  let node;
  let dest;
  try {
    const wasmBinary = await loadRnnoiseBinary();
    await ctx.audioWorklet.addModule(rnnoiseWorkletUrl);
    source = ctx.createMediaStreamSource(inputStream);
    node = new RnnoiseWorkletNode(ctx, { maxChannels: 2, wasmBinary });
    dest = ctx.createMediaStreamDestination();
    source.connect(node);
    node.connect(dest);
    if (ctx.state === "suspended") await ctx.resume();
    onOutputStream(dest.stream);
  } catch (error) {
    try { source?.disconnect(); } catch (_) { /* already detached */ }
    try { node?.disconnect(); } catch (_) { /* already detached */ }
    try { node?.destroy?.(); } catch (_) { /* already destroyed */ }
    await ctx.close().catch(() => {});
    throw error;
  }

  return {
    destroy() {
      try { source.disconnect(); } catch (_) { /* already detached */ }
      try { node.disconnect(); } catch (_) { /* already detached */ }
      try { node.destroy?.(); } catch (_) { /* already destroyed */ }
      dest.stream.getTracks().forEach((track) => track.stop());
      ctx.close().catch(() => {});
    }
  };
}
