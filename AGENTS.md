# Versioning

Current: 1.7.16
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

## Confirm Dialog Invisible During Settings
- Root cause: `<ConfirmDialog>` was rendered inside the `.chat-panel` section, and `App.jsx` unmounts the whole `.chat-panel` while Settings is open — so a pending confirm couldn't render until Settings closed, then popped up "out of nowhere". `.modal-backdrop` (z-index 40) was also below `.settings-close-btn` (50), `.toast-container` (60), and `.attach-menu` (100).
- Fix: moved `<ConfirmDialog>` to app-shell level (right before `<GamingPostModal>`), always rendered regardless of Settings state, and raised `.modal-backdrop` to z-index 200 so all dialogs sit above every app layer.
- Watch out: any future modal added *inside* `.chat-panel` will silently fail to show over Settings — render global overlays at app-shell level.

# Composer

- Multiline `<textarea>` (auto-grows to ~4 rows), Enter sends, Shift+Enter newline, `maxLength={500}`.
- Emoji picker via `@emoji-mart/react` + `@emoji-mart/data`, lazy-loaded (`EmojiPicker.jsx`) so it's a separate ~510 KB chunk fetched only when opened.
- `@`-mention suggestions: typing `@` with a caret inside a word triggers a dropdown of profile names (deduped, prefix match, max 8). Arrow keys navigate, Enter/Tab accept, Escape closes.
- Grid note: `.composer-row` has 5 columns by default (`50px 50px 50px minmax(0,1fr) 50px` = attach, emoji, mic, input, send); `--no-mic` drops a column, `--recording` swaps the buttons for the recording bar. Keep the mobile breakpoints (40px/36px) in sync when changing these.
