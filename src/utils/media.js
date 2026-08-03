import { OPUS_BITRATE } from "../constants.js";

export function applyOpusBitrate(description, bitrate = OPUS_BITRATE) {
  return new RTCSessionDescription({
    type: description.type,
    sdp: description.sdp.replace(
      /a=fmtp:111\s*(.*)/g,
      (_, params) => `a=fmtp:111 ${params.replace(/;maxaveragebitrate=\d+/g, '')};maxaveragebitrate=${bitrate}`
    )
  });
}

export function computeCapability() {
  const cpu = navigator.hardwareConcurrency || 1;
  const downlink = navigator.connection?.downlink || 10;
  return Math.round(cpu * 1000 + downlink * 100);
}
