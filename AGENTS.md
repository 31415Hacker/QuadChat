# Versioning

Current: 1.7.13
Rules:
- Bump patch (last number) by 1 on every non-testing/developing commit
- Patch can go to any number (1.4.10, 1.4.19, etc.)
- Ask before bumping minor (second number) — reserved for big changes
- Only bump major (first number) when explicitly told to

# Build & Deploy

- Built with `npm run build` (Vite)
- Deployed on Vercel (auto-deploys from main branch)
- Dev server: `npm run dev` (Vite, --host 0.0.0.0)

# UI

- Commit hash shown at bottom of users sidebar (`.commit-fineprint`): `commit {__COMMIT_HASH__}`
  - Injected by Vite at build time from `git rev-parse --short HEAD`
  - Styled in `styles.css`: left-aligned, subtle opacity

# Known Fixes

## P2P Group Call — Second Person Can't Connect
- Root cause: stale participant cleanup in `joinP2PGroupCall()` removed any participant with `joinedAt` older than 30s — if two people joined more than 30s apart, the second person deleted the first from the participants list and never connected.
- Fix: removed the stale cleanup entirely. `onDisconnect().remove()` already handles abandoned participants.

## 1-to-1 Call — Sudden Disconnects
- Root cause: `oniceconnectionstatechange` called `cleanupCall()` immediately on `"disconnected"`, which is often transient (Wi-Fi blip, lag spike).
- Fix: added a 10-second grace period before cleaning up on `"disconnected"`. If ICE recovers to `"connected"` or `"completed"` within 10s, the cleanup is cancelled. Only `"failed"` cleans up immediately.
- Applies to both caller and callee sides.

## 1-to-1 Call — Incoming-Call Detection Broadcast Call Metadata
- Root cause: the client listened with `onChildAdded` on the whole `calls` collection to detect incoming calls. RTDB grants read at the path you listen on, not per child, so this forced a `.read: auth != null` on `calls` — every signed-in user could read every call's metadata and SDP.
- Fix: per-user `call-rings/<uid>/<callKey>` nodes. The caller writes a minimal ring (caller/callee ids + names, `startedAt`, `callKey`) into the callee's node (`useCalls.js` `startCall`); the callee listens only on `call-rings/<ownUid>` (`useCalls.js` detect effect). Rules lock rings to the owner (reads) and to the owner-or-verified-caller (writes), and `calls` reads are participant-only again (`database.rules.json`). Rings self-clean on answer/reject/status-change and via the 20s staleness check.
- Note: a ring for an offline callee is silently discarded on reconnect — there is no missed-call surface yet.
