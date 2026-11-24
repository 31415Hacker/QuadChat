import { DEFAULT_NOISE_MODE, normalizeNoiseMode } from "./noiseSuppression.js";

export const USER_SETTINGS_MIGRATION_VERSION = 1;

function boolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}

function number(value, fallback, min, max) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= min && parsed <= max ? parsed : fallback;
}

function sound(value, fallback) {
  return typeof value === "string" && value ? value : fallback;
}

export function readLegacyUserSettings() {
  const storedScale = localStorage.getItem("quadchat-ui-scale");
  const storedMessageVolume = localStorage.getItem("quadchat-message-sound-volume");
  const storedRingtoneVolume = localStorage.getItem("quadchat-ringtone-volume");
  return {
    theme: localStorage.getItem("quadchat-theme") === "light" ? "light" : "dark",
    reduceMotion: localStorage.getItem("quadchat-reduce-motion") === "true",
    showVersionInHeader: localStorage.getItem("quadchat-show-version") === "true",
    showSidebarClock: localStorage.getItem("quadchat-show-sidebar-clock") !== "false",
    showSidebarSeconds: localStorage.getItem("quadchat-show-sidebar-seconds") === "true",
    uiScale: number(storedScale, 100, 50, 100),
    notificationsEnabled: localStorage.getItem("quadchat:notificationsEnabled") === "true",
    noiseMode: normalizeNoiseMode(localStorage.getItem("quadchat-noise-mode")),
    dmSoundsEnabled: localStorage.getItem("quadchat-dm-sound-enabled") !== "false",
    groupSoundsEnabled: localStorage.getItem("quadchat-group-sound-enabled") === "true",
    messageSoundVolume: number(storedMessageVolume, 0.2, 0, 1),
    ringtoneVolume: number(storedRingtoneVolume, 0.2, 0, 1),
    messageSound: { kind: sound(localStorage.getItem("quadchat-dm-sound"), "android"), customUrl: localStorage.getItem("quadchat-dm-sound-custom") || "" },
    callSound: { kind: sound(localStorage.getItem("quadchat-call-sound"), "default"), customUrl: localStorage.getItem("quadchat-call-sound-custom") || "" }
  };
}

export function normalizeUserSettings(value = {}) {
  const fallback = readLegacyUserSettings();
  return {
    theme: value.theme === "light" ? "light" : "dark",
    reduceMotion: boolean(value.reduceMotion, false),
    showVersionInHeader: boolean(value.showVersionInHeader, false),
    showSidebarClock: boolean(value.showSidebarClock, true),
    showSidebarSeconds: boolean(value.showSidebarSeconds, false),
    uiScale: number(value.uiScale, 100, 50, 100),
    notificationsEnabled: boolean(value.notificationsEnabled, false),
    noiseMode: normalizeNoiseMode(value.noiseMode || DEFAULT_NOISE_MODE),
    dmSoundsEnabled: boolean(value.dmSoundsEnabled, true),
    groupSoundsEnabled: boolean(value.groupSoundsEnabled, false),
    messageSoundVolume: number(value.messageSoundVolume, 0.2, 0, 1),
    ringtoneVolume: number(value.ringtoneVolume, 0.2, 0, 1),
    messageSound: { kind: sound(value.messageSound?.kind, "android"), customUrl: typeof value.messageSound?.customUrl === "string" ? value.messageSound.customUrl : fallback.messageSound.customUrl },
    callSound: { kind: sound(value.callSound?.kind, "default"), customUrl: typeof value.callSound?.customUrl === "string" ? value.callSound.customUrl : fallback.callSound.customUrl }
  };
}
