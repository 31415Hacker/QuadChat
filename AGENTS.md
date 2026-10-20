# Versioning

Current: 2.2.30
Rules:
- Bump patch (last number) by 1 on every non-testing/developing commit
- Patch can go to any number (1.4.10, 1.4.19, etc.)
- Ask before bumping minor (second number) — reserved for big changes
- Saying "upgrade" counts as permission to bump the minor version
- Only bump major (first number) when explicitly told to

# Build & Deploy

- Built with `npm run build` (Vite)
- Deployed on Vercel (auto-deploys from main branch)
- Dev server: `npm run dev` (Vite, --host 0.0.0.0)
- Firebase rules auto-deploy on push to `main` via `.github/workflows/firebase-rules.yml` (path-filtered to `firestore.rules` + `database.rules.json`, uses `FIREBASE_SERVICE_ACCOUNT` secret). Just push rule changes — no manual `firebase deploy` needed.
- Cloudflare worker auto-deploys on push to `main` via `.github/workflows/deploy-cloudflare-worker.yml` (path-filtered to `quadchat-worker/**`, runs worker tests first, then `wrangler deploy`). Uses `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` secrets. The worker URL is in `VITE_PRESENCE_WORKER_URL` — keep both `wss://` (presence websocket) and `https://` (moderation endpoint) in sync.

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
- Note: a stale ring for an offline callee is moved to the owner-only `missed-calls` node and shown in the notification center on reconnect (see Missed-Call Notifications below).

## Confirm Dialog Invisible During Settings
- Root cause: `<ConfirmDialog>` was rendered inside the `.chat-panel` section, and `App.jsx` used to unmount the whole `.chat-panel` while Settings is open — so a pending confirm couldn't render until Settings closed, then popped up "out of nowhere". `.modal-backdrop` (z-index 40) was also below `.settings-close-btn` (50), `.toast-container` (60), and `.attach-menu` (100).
- Note: the `.chat-panel` is no longer unmounted while Settings is open — it stays mounted but hidden via `.chat-panel--hidden` (`display: none`) so in-call audio elements and listeners keep running (see "Settings Open Ends The Call" below). Keep it that way.
- Fix: moved `<ConfirmDialog>` to app-shell level (right before `<GamingPostModal>`), always rendered regardless of Settings state, and raised `.modal-backdrop` to z-index 200 so all dialogs sit above every app layer.
- Watch out: any future modal added *inside* `.chat-panel` will silently fail to show over Settings — render global overlays at app-shell level.

## Settings Open Ends The Call
- Symptom: opening Settings during a 1:1 or group call made it look like the call died — no call bar, no remote audio, and after closing Settings the call stayed silent.
- Root cause: `App.jsx` reverted to rendering `null` for the whole app (Auth/chat panel) whenever `isSettingsOpen && user`, which unmounted `ActiveCallBar`/`GroupCallBar`/`IncomingCallModal` and — critically — the `<audio ref={remoteAudioRef} />` and LiveKit group-call audio container elements the remote stream was attached to. The call itself kept running in `useCalls` (not unmounted), but you lost all remote audio output and the call controls. On closing Settings the bar remounted, but the srcObject re-attach effect (`useCalls.js`, deps `[remoteStream, callStatus]`) doesn't re-run when only the element instance changes, so audio never came back — effectively a dead call.
- Fix: keep `.chat-panel` mounted whenever `user` is set, and hide it with `.chat-panel--hidden` (`display: none`) while Settings is open. SettingsPage renders as a sibling and fills the shell. Because the panel (and the in-call `<audio>` elements inside it) never unmount, audio and controls survive the Settings visit; `display: none` does not pause media playback.
- The `app-shell`/`isSettingsOpen` branch in `App.jsx` was `{isSettingsOpen && user ? null : !isAuthReady || !user ? <AuthScreen/> : <chat-panel/>}` and is now `{!isAuthReady || !user ? <AuthScreen/> : <chat-panel/>}` (panel gets `chat-panel--hidden` when settings open). Don't reintroduce a `null` branch that unmounts the panel while a call can be active.

## Message Reactions
- Stored as a `reactions` map on each message doc: `reactions.<uid>` = emoji string (plain map, no nested structure).
- `handleToggleReaction` (`App.jsx`) writes `reactions.<uid>` or `deleteField()` when the same emoji is tapped again.
- Rules: the message `update` path allows a diff whose only changed key is `reactions`, and only `reactions.<request.auth.uid>` — the clause mirrors the `rsvps` one in `firestore.rules`. Add/remove the `reactions` allow clause together with `rsvps` if you ever touch the message update path.
- UI: the three-dot menu's "React" item opens the `.reaction-picker` (6 emojis, outside-click close, same anchored position as the menu); `.reaction-chip` rows show counts + name tooltip, `.reaction-chip--mine` highlights your vote. Tapping a chip toggles it off.
- If you add reaction emoji, keep `REACTION_EMOJIS` in `MessageList.jsx` in sync with any stored values.

## Missed-Call Notifications
- Stale rings (>20 s) are not dropped anymore: the callee's client writes `missed-calls/<uid>/<callKey>` (`useCalls.js`) before `clearRing`, and `App.jsx` drains each into the notification center via `onChildAdded`, then deletes the node.
- Rules (`database.rules.json`): `missed-calls/$uid` is `.read`/`.write` owner-only (`auth.uid === $uid`), `.validate` pins `callKey === $callKey` and type-checks `callerId`/`callerName`/`startedAt`.
- The notification id is `missed-call-<callKey>` (dedupes). Offline users get the missed-call on reconnect; an ignored in-session call only records a missed-call on the staleness-cleanup path (reload or caller status change).
- If you ever change the ring staleness timeout (20 s), the missed-call write lives on that same branch.

## MessageList Memoization
- `.messages` scroll container, typing indicator, and `endRef` live in `App.jsx`; `MessageList` and `MessageItem` are both `memo`'d with stable `useCallback` props so typing doesn't re-run the message map.
- Keep new props passed to `MessageList`/`MessageItem` stable (useCallback) or the memo is defeated. `handleRsvp`, `handleDeleteMessage`, `handleToggleReaction`, `joinGroupCallStable`, `setReplyTo`, `setOpenMessageMenuId` are all stable.
- Don't move the scroll container back inside `MessageList` — it would re-run `messages.map` on every keystroke again.

## Reply Jump — Far-Away Messages Scroll Erratically
- Root cause: loading a remote reply target replaces the current window with messages around that target. The top sentinel could immediately request older messages while `scrollIntoView({ behavior: "smooth" })` and the pagination scroll-preservation adjustment were both running; a stale near-bottom flag could then yank the user back down on the next message update.
- Fix: remote jumps set `isReplyJumpLoadingRef` and clear `isNearBottomRef` before reloading. The sentinel and `loadMoreMessages()` ignore pagination during the jump; once the target is rendered, it is centered immediately, highlighted, and normal pagination resumes. Direct jumps to an already-rendered message also clear the near-bottom flag.
- The remote window includes both target context and the latest `PAGE_SIZE` messages, with separate realtime listeners for each range, so jumping back does not hide recent messages or backfill the skipped middle. `hasTriggeredTopSentinelRef` makes pagination edge-triggered: the sentinel must leave and re-enter view before another page loads.

## Developers Can Mute/Unmute
- Mute controls (`?mute`/`?unmute`/`?mute-v`/`?mute-vt` text commands and the sidebar mute buttons) are open to developers as well as admins.
- Client note: developers already count as admins — `isCurrentUserAdmin` includes `isCurrentUserDeveloper` (`App.jsx`), so buttons/functions needed no client-side change; only the server rules were tightened.
- Rules (`firestore.rules`): the mute-related `users` `create`/`update` branches and the `adminCommand` message-create gate all use `isAdmin() || isDeveloper()`. `isProtectedAdminTarget()` still blocks muting admins, and self-edits cannot escalate `isAdmin`/`isDeveloper`.
- If you ever restrict mute powers again, all three `firestore.rules` spots must change together: the `users` create branch, the `users` update branch, and the messages `adminCommand` gate.

## Mute Down With `Missing or insufficient permissions` for Old Profiles
- Symptom: the admin could mute some users but not others, all of them standard users. The ones that failed were exactly the profiles that predate the `isAdmin` field and therefore have no `isAdmin` key stored.
- Root cause: `isProtectedAdminTarget()` (`firestore.rules`) read `resource.data.isAdmin == true` unguarded. In the rules engine, accessing a missing map field yields `undefined`, and `undefined == true` is `undefined`, so `!(isProtectedAdminTarget() && diff.hasAny(muteKeys))` failed (denied) whenever the mute keys were in the diff — while non-mute writes short-circuited to allowed. Reproduced against the live ruleset (Rules `:test` API) and against live Firestore as the admin UID: same doc shape with/without `isAdmin` flipped 200/403.
- Fix: guard every read with `in` — `('isAdmin' in resource.data && resource.data.isAdmin == true)`. Also guarded the equivalent unguarded read in the `users` `create` clause. Now any profile (with or without the field) can be muted, and targets whose doc has `isAdmin == true` remain protected.
- Watch out: never read `resource.data.<field>` / `request.resource.data.<field>` without an `in` guard when the field may be absent; the whole rule fails (deny) whenever the value's truthiness is required. This codebase already guards everywhere else (`isNotMuted`, `isActiveUser`) — keep that convention.

## Muted Users Could Still Talk (Voice Mute Expiry Bug)
- Symptom: an admin or developer voice-muted someone (`?mute-v` / sidebar mic button) but the target could still talk in voice chat.
- Root cause: `useCalls.js` computed the mute expiry from `voiceMutedUntil`, but `toggleVoiceMute` writes `voiceMutedUntil: null` for a permanent mute. `new Date(null).getTime()` = `0`, so `setTimeout(..., 0)` fired immediately, set `voiceMuteExpired = true`, and the mute never applied.
- Fix: the expiry effect early-returns when `voiceMutedUntil` is falsy (permanent mute = never expires). Same guard added to the temporary-mute effect.
- Keep the guard when touching expiry logic — a null/absent `until` means "permanent", not epoch 0.

## Group Call Owner/Admin Mutes
- The owner of a group call OR an admin (admin/developer) can mute/unmute any participant live from the call bar, via a new serverless endpoint `api/group-mute.js`.
- Flow: the muter's client POSTs to `/api/group-mute` (`{ callKey, targetUid, targetName, muted }`, Bearer idToken). The server verifies the caller is the call owner (`call-directory/<callKey>.ownerId`) or an admin (`users/<caller>.isAdmin === true || isDeveloper === true`), then writes `group-calls/<callKey>/mutes/<targetUid>` = `{ muted, mutedBy, mutedByName, targetName, updatedAt }` with the admin SDK.
- RTDB rules (`database.rules.json`): `mutes` under `group-calls/$id` is `.read: auth != null` (every client reads all mutes to enforce their own) and `.write: false` — clients can NEVER write mutes directly. All mute writes happen server-side with the SDK.
- Enforcement is client-side: `useCalls.js` subscribes to `group-calls/<callKey>/mutes` on join; when the current user's entry has `muted: true`, their published audio track is disabled (`enabled = false`), `setGroupCallLocalMuted(true)` is set, and `toggleGroupCallMute` is blocked while force-muted. Unmuting re-enables (unless the global voice mute also applies). The listener is unsubscribed + forced-mute state reset in `cleanupGroupCall()`.
- The mute is durable for the room: it lives in the call node keyed by target uid, so a reloading victim re-applies it on rejoin until the owner/admin unmutes. Stale mutes persist per call (owner must unmute manually).
- UI: `GroupCallBar` (`src/components/CallUI.jsx`) renders per-participant chips with a mic button when `canMute` (owner or admin). `App.jsx` computes `canMuteGroupParticipants` from `isCurrentUserAdmin || call.ownerId === sessionUserId` and passes `mutes`, `canMute`, `onMuteParticipant` (wraps `setGroupCallParticipantMute` with a toast on error). P2P group calls (unreachable legacy) don't get the buttons.
- If you shrink access later, change `api/group-mute.js` (the only write path) + the `canMute` computation in `App.jsx`.

## Group Call Delete Felt Like It Needed Spam-Clicking
- Symptom: clicking the call row's delete button did nothing visible for several seconds, so users clicked repeatedly.
- Root causes: (1) the delete request runs under a per-call server lock and does sequential LiveKit revocation, so it can take seconds while the list only updates after the request resolves; (2) the delete button had no disabled/busy state, so repeated clicks hit the lock (409) and showed error toasts; (3) the server revoked participants sequentially.
- Fixes: `CallsSidebar.jsx` removes the row optimistically while its key is in `deletingKey` (and re-adds it if the delete fails); `App.jsx` `handleDeleteCall` retries on 409 (3 attempts, backoff) and logs the underlying error; `server/calls/service.js` revokes all issued participants with `Promise.all` instead of a sequential loop.

## 1:1 Call — Renegotiation Offer Races Initial Offer
- Symptom: `[CALL-RENEGO] createOffer failed: InvalidAccessError: ... The order of m-lines in subsequent offer doesn't match order from previous offer/answer.` logged right after the initial offer (call still connects, but any later real renegotiation — camera on, screen share — can fail the same way).
- Root cause: `pc.addTrack()` inside `createPeerConnection()` fires `onnegotiationneeded` asynchronously **before** the initial offer/answer exists. The renegotiation handler's `createOffer` + `setLocalDescription` then races the initial `setLocalDescription` from `startCall`/`answerCall`, and Chrome rejects the second local description. Same race exists on the callee side against the incoming offer.
- Fix: a per-connection `initialDescriptionPending` flag (exposed as `pc.__initialDescriptionSet()`) makes `onnegotiationneeded` bail until the first `setLocalDescription` completes. The tracks are already in the initial description, so no negotiation is skipped. Set in `startCall` (after the offer) and `answerCall` (after the answer).

## 1:1 Call — Renegotiation Offer Races Initial Offer
- Symptom: `[CALL-RENEGO] createOffer failed: InvalidAccessError: ... The order of m-lines in subsequent offer doesn't match order from previous offer/answer.` logged right after the initial offer (call still connects, but any later real renegotiation — camera on, screen share — can fail the same way).
- Root cause: `pc.addTrack()` inside `createPeerConnection()` fires `onnegotiationneeded` asynchronously **before** the initial offer/answer exists. The renegotiation handler's `createOffer` + `setLocalDescription` then races the initial `setLocalDescription` from `startCall`/`answerCall`, and Chrome rejects the second local description. Same race exists on the callee side against the incoming offer.
- Fix: a per-connection `initialDescriptionPending` flag (exposed as `pc.__initialDescriptionSet()`) makes `onnegotiationneeded` bail until the first `setLocalDescription` completes. The tracks are already in the initial description, so no negotiation is skipped. Set in `startCall` (after the offer) and `answerCall` (after the answer).

## Calls View Crash — useState Not Imported
- Symptom: clicking "Switch to calls" showed "QuadChat hit a problem. useState is not defined" and the calls view never rendered.
- Root cause: `CallsSidebar.jsx` called `useState` (password form, create form, busy state) but only imported the lucide icons — no React import.
- Fix: added `import { useState } from "react";`. Audited every `src/components`/`src/hooks`/`src/utils` file for hooks used without a React import — this was the only one.

## Admins Can Edit Any Message
- The message menu's "Edit" button now shows for `isMine || isCurrentUserAdmin` (`MessageList.jsx`), and `firestore.rules` adds an admin OR-branch to the `messages` update path: `(isAdmin() || isDeveloper())` may change only `text` / `edited` / `editedAt` on any message.
- The existing edit write path (`App.jsx` `sendMessage`) already writes exactly those three fields and skips the profanity check for admins, so no client write change was needed.
- Like the mute powers, this uses the combined `isAdmin() || isDeveloper()` on the rules side and `isCurrentUserAdmin` (which includes developers) on the client side — keep the two in sync if you ever restrict it.

## Calls View Stage — Avatars & Speaking Ring
- The calls view stage (`src/components/CallStage.jsx`) shows a circular profile-picture avatar (`.call-stage-avatar`) in place of the old `CameraOff` placeholder whenever a tile has no video stream — local tile (own `profiles[sessionUserId].photoURL`), 1:1 remote tile (`profiles[callPartnerId].photoURL`), and group tiles (`profiles[participantId].photoURL`). The CameraOff placeholder remains only as a fallback for users with no photo.
- Blue speaking ring (Google Meet style): `.call-stage-tile--speaking` adds a `2px #3b82f6` border + glow. Driven by a `speakingMap` prop (participant id → bool; the 1:1 remote tile uses the `"private"` key, the local tile uses the local uid).
- Group calls: `useCalls.js` subscribes to LiveKit `RoomEvent.ActiveSpeakersChanged` — the emitted array is the *complete* current speaker list and **includes the local participant**, so the map reset + mark logic is correct even when only changed speakers are emitted. State is `groupCallSpeaking`, reset in `cleanupGroupCall()`.
- 1:1 calls (P2P WebRTC has no speaker events): `useCalls.js` polls RMS audio levels every 120ms through an `AudioContext` `AnalyserNode` (float time-domain data with byte fallback for Safari), one analyser per stream (remote audio `remoteStream`, local mic `localStreamRef`). Hysteresis thresholds `0.025` on / `0.012` off plus a 250ms hold prevent flicker; state is `callSpeaking = { local, remote }`, reset when `callStatus !== "connected"`. Muted mics naturally read silent (track disabled → level 0).
- Camera off→on restore: group-call remote video tracks previously set `track.onMuted` to delete the stream entry but had **no `onunmuted`** handler, so after a camera off→on cycle the avatar stayed forever. Same gap existed on the 1:1 remote camera track (`onmute`/`onended` without `onunmute`). Fixed in `useCalls.js`.

## DM Sound Selection
- The DM receive sound is chosen in Settings (Accessibility tab) and persisted to `localStorage` under `quadchat-dm-sound` (`"android"`, `"discord"`, or `"custom"`).
- `src/utils/dmSound.js` (`playDmReceiveSound`) reads the current value from `localStorage` on each play; it rebuilds the `Audio` element lazily when the source changes. The `"custom"` source is stored as a data URL in `quadchat-dm-sound-custom` (uploaded in the same settings UI).
- State lives in `App.jsx` (`dmSoundType`/`setDmSoundType`, persisted via a `useEffect` writing `quadchat-dm-sound`) and is threaded down to `SettingsPage.jsx`.
- If you add more built-in sounds, extend the `SOUNDS` map in `dmSound.js` and add a matching radio row in `SettingsPage.jsx`.

## Message & Ringtone Sound Volume / Channel Toggles
- The same `playDmReceiveSound()` sound is used for both DM and group-chat message alerts; separately toggled by `dmSoundsEnabled` (default on) and `groupSoundsEnabled` (default off), persisted in `quadchat-dm-sound-enabled` / `quadchat-group-sound-enabled` (`"true"`/`"false"`). Keep those defaults — DM sounds on, group sounds off, is the intended baseline.
- `dmSound.js` reads message-sound volume from `quadchat-message-sound-volume` (0–1, default `0.2`) at each play; the ringtone volume lives in `callRingtone.js` under `quadchat-ringtone-volume` (0–1, default `0.2`), applied on ringtone rebuild and on `startCallRingtone`.
- The call sites gate on `dmSoundsEnabledRef.current`/`groupSoundsEnabledRef.current` (`App.jsx`): the active-channel listener plays a sound only when `!messageVisible`, and the background-channels listener (`watcherChannels`, which excludes the active channel) plays for every new non-self message. Refs are kept in sync in the same `useEffect` that syncs `profilesRef`/`activeChannelRef` — keep that pattern so the listeners don't re-subscribe on toggle.
- The Settings UI lives in the Accessibility tab: "Message sounds" toggles + a message volume slider, and a "Ringtone volume" slider inside the "Call ringtone" section. Preview buttons play at the configured volume.
- If you change these keys, keep the readers (`dmSound.js`, `callRingtone.js`) and writers (`App.jsx` effects) in sync. The group-sound alert intentionally reuses the DM sound selection — there is no separate group-sound picker.

## Call Ringtone Selection
- The call ringtone is chosen in Settings (Accessibility tab) and persisted to `localStorage` under `quadchat-call-sound` (`"default"` or `"custom"`).
- `src/utils/callRingtone.js` (`startCallRingtone`) reads the current value from `localStorage` on each start; it rebuilds the `Audio` element lazily when the source changes. The `"custom"` source is stored as a data URL in `quadchat-call-sound-custom` (uploaded in the same settings UI).
- State lives in `App.jsx` (`callSoundType`/`setCallSoundType`, persisted via a `useEffect` writing `quadchat-call-sound`) and is threaded down to `SettingsPage.jsx`.
- If you add more built-in ringtones, extend the `SOUNDS` map in `callRingtone.js` and add a matching radio row in `SettingsPage.jsx`.

## Swear Word Filter — Cloudflare API Auto-Mute
- When a non-admin sends or edits a text message, `App.jsx` (`sendMessage`, both the new-message and the edit branch) calls `checkMessageProfanity(user, text, channel)` (`src/utils/profanity.js`) *before* writing to Firestore. If the API reports the text as profane, the message is blocked client-side (never written to chat, never displayed) and the sender is auto-muted for 24 hours.
- The check is done by a **remote API, not a local dictionary**, and runs **on the Cloudflare Worker, not Vercel**: the client POSTs to `https://<worker>/moderate` (HTTP base derived from `VITE_PRESENCE_WORKER_URL`, the existing presence env var — keep them in sync), and `quadchat-worker/src/index.js` (`checkProfanity` + `handleModerate`) calls the free PurgoMalum API (`https://www.purgomalum.com/service/json`). The worker verifies the caller's Firebase ID token via its existing JWKS helper, so only real signed-in users can trigger a moderation. CORS is handled on the `/moderate` route.
- **Standalone-word rule (no dictionary).** PurgoMalum does substring matching (`containsprofanity` returns true for `fhrsogrsgosdj(shit)reijgwsldkmg`), so `checkProfanity` requests `fill_char=*` and feeds original + censored text into `findStandaloneProfanity` (`exported for tests`). A whitespace-delimited chunk only counts if its censored version contains `*` AND has no remaining alphanumeric characters — i.e. the entire chunk is a profane word `(shit)` → caught, while a keyboard smash `fhrsogrsgosdj(shit)reijgwsldkmg` → letters remain → NOT caught. This also kills PurgoMalum false positives like `class`/`password`. If you change the profanity provider, keep this chunk rule (it's what implements the "block `(word) you`, not `sdj(word)reij` smash" requirement) or the filter will over-block.
- The worker writes flagged messages to **`bad-messages/<uuid>`** (Firestore): `text`, `channel`, `userId`, `words` (caught profanities), `createdAt` server-time. Firestore rules (`firestore.rules`) make `bad-messages` admin-read / no-client-write — clients can't read or write it, only the Admin-SDK-style worker REST writes land there. There is no app UI to review it yet — admins can read it directly.
- On a flag the worker also writes the 24h auto-mute via Firestore REST to `users/<uid>`: `muted: true`, `mutedUntil` = timestamp now+24h, `mutedBy: "__auto-mod__"`, `mutedUpdatedAt` server-time. Same fields as the manual `?mute`/sidebar mute, so every existing mute UI/label/expiry path treats it identically. Both the bad-message write and the mute are one atomic `documents:commit`.
- Admins and developers (via the caller's `users/<uid>` doc `isAdmin`/`isDeveloper`) are exempt **on both ends**: the client skips the check for `isCurrentUserAdmin`, and the worker never auto-mutes an admin (a tampered client can't mute an admin via the endpoint) — their flagged text is still filed to `bad-messages` for the record.
- "Only people with mute/unmute perms can unmute" is enforced by the existing Firestore rules, not new code: regular users can only self-clear `voiceMutedTemporary*` fields, never `muted`/`mutedUntil`, so the auto-mute can only be lifted by an admin/dev (`?unmute`, the sidebar mute toggle). The `isProtectedAdminTarget()` guard in `firestore.rules` still prevents muting admins.
- Fail-open: if PurgoMalum (or the worker's `/moderate`) is unreachable, `checkProfanity` returns null → the client allows the message (`checkMessageProfanity` returns null → not flagged). Chat never breaks on a moderation outage.
- The old Vercel `api/check-profanity.js` was *removed* — there is exactly one moderation path (the worker). Don't reintroduce a second one.
- Enforcement is client-initiated for the block (same trust model as message sending) but the auto-mute write is server-only and cannot be erased by the target.

# Signup Gating

- Deployment: `api/[action].js` routes the six signup-management URLs to modules in `server/signup/`, keeping the existing URLs while deploying only one function for these handlers. Keep helper handlers outside `api/` so they do not count as additional Vercel functions. `api/signup.js` remains a separate function.

- Signup requires either (a) an admin-approved request or (b) a one-time invite code. Both password and Google sign-up are gated.
- **Approvals are bound to a specific Firebase account, not just an email.** Every `approved-users/<email>` doc pins the `uid` (+ `provider`) of the exact account that was approved, and both the client gate and the Firestore rules require `approved-users/<email>.uid == auth.uid`. This closes an account-takeover hole where an identity that merely *shares* an approved email (e.g. the real owner of `secret@gmail.com` winning access via a **password** test account that was approved for that email, signing in with Google) could create a profile and get in. Google gate, `google-signup.js`, and `approve-request.js`'s Google branch all require the requester's uid to exist first.
- Server endpoints (`api/`):
  - `signup-request.js` — prospective member submits request (`{ provider, displayName, email, uid?, password?, turnstileToken? }`). Google requests require `uid` (bound at submission) and skip captcha (email already verified by popup). Password requests are captcha-gated; password is optional at request time.
  - `approve-request.js` — admin approves. Password: server creates auth user + writes profile + `approved-users/<email>` with the created `uid` (when no password was supplied, a random throwaway password is set and the member uses "Forgot password?"). Google: writes `approved-users/<email>` with the request's `uid`.
  - `reject-request.js` — admin deletes request.
  - `create-code.js` — admin creates invite code, optionally restricted to a single email. Writes `signup-codes/<code>` (the code string is the doc ID).
  - `revoke-code.js` — admin deletes code.
  - `signup.js` — requires `{ code, email, password, displayName }`. Validates code, creates auth user, writes `approved-users/<email>` with the created `uid`, marks code used.
  - `google-signup.js` — requires `{ code, email, uid }` (no idToken). Validates the code, verifies via Admin SDK that `uid` is a real Google account whose email matches, writes `approved-users/<email>` with that `uid`, marks code used.
- Firestore collections:
  - `approved-users/<lowercaseEmail>` — server-only writes, read only own email (rules check `request.auth.token.email.lower() == email`). Each doc contains `uid` + `provider`; the entry only grants access to that exact account.
  - `signup-requests/<requestId>` — server-only writes, admin-only reads. Google requests carry the requester's `uid`.
  - `signup-codes/<code>` — server-only writes, admin-only reads.
- Client flow (`App.jsx`): AuthScreen has a single "Sign up" tab with display name, email, password, invite code, and turnstile. Submitting "Create account" (requires an invite code) POSTs to `/api/signup` then signs in via Firebase. The "Request access" button (`handleRequestAccess`) POSTs to `/api/signup-request` (password optional) with the same form data and shows a pending state. Sign in uses `/api/signin`.
- Google gate: `signInWithGoogle` checks for existing profile. If none, checks `approved-users/<email>` — if approved **and** `approved-users/<email>.uid == credential.user.uid`, creates profile client-side. Otherwise shows `.google-gate-box` screen where the user enters a code (`/api/google-signup`, sending the uid) or requests access (`/api/signup-request`, sending the uid), then signs in again. The gate uid is tracked in `googleGateUid`.
- Rules gating: `users` create for regular users requires `(isApprovedSignup() || isAdminEmail()) && userId == request.auth.uid`. `isApprovedSignup()` checks `signupEnabled()` + `approved-users/<email>.uid == auth.uid` (guarded with `'uid' in ...` — never read the field unguarded).
- Admin settings (SettingsPage): "Signup requests" section (accept/reject), "Invite codes" section (create with optional email restriction, copy, revoke).
- `users/create` server path (`saveUserProfile`) still works for admins via the `(isAdmin() || isDeveloper())` OR branch, so admin-created profiles bypass the approval check entirely.

# Composer

- Multiline `<textarea>` (auto-grows to ~4 rows), Enter sends, Shift+Enter newline, `maxLength={500}`.
- Emoji picker via `@emoji-mart/react` + `@emoji-mart/data`, lazy-loaded (`EmojiPicker.jsx`) so it's a separate ~510 KB chunk fetched only when opened.
- `@`-mention suggestions: typing `@` with a caret inside a word triggers a dropdown of profile names (deduped, prefix match, max 8). Arrow keys navigate, Enter/Tab accept, Escape closes.
- Grid note: `.composer-row` has 5 columns by default (`50px 50px 50px minmax(0,1fr) 50px` = attach, emoji, mic, input, send); `--no-mic` drops a column, `--recording` swaps the buttons for the recording bar. Keep the mobile breakpoints (40px/36px) in sync when changing these.

# Separate Group Calls (calls directory)

- The header "Group call" button is replaced by a **Switch to calls / Switch to channels** toggle (`callsView` state in `App.jsx`). When in calls view, the left sidebar becomes `CallsSidebar` (`src/components/CallsSidebar.jsx`) instead of `ChannelSidebar`.
- Group calls are **server-authorized rooms**. The RTDB `call-directory/<callKey>` node is **server-only** (`.read: false, .write: false` in `database.rules.json`) and stores `{ callKey, title, ownerId, ownerName, createdAt, securityVersion: 2, livekitRoom, passwordVerifier? }`. `passwordVerifier` is a scrypt hash (`{ salt, hash }`) — never exposed to clients. `livekitRoom` is a separate UUID-based room name, never the `callKey` itself.
- **All client call operations go through serverless endpoints** (`server/calls/service.js` + `server/calls/handler.js`):
  - `api/create-call` — creates the directory entry with a scrypt password verifier if private.
  - `api/list-calls` — returns sanitized call listings (no password material, no `livekitRoom`) with `participantCount`.
  - `api/livekit-token` — verifies active membership + password, issues a 60-second LiveKit token with `canPublish` based on mute state, and writes a `call-access/<callKey>/<uid>` lease.
  - `api/renew-call` — extends the lease for a connected LiveKit participant (verified via `rooms.getParticipant`).
  - `api/group-mute` — owner/admin mutes/unmutes a participant. Writes the mute record, calls `rooms.updateParticipant` to revoke `canPublish`, and on mute calls `rooms.removeParticipant` with `revokeTokenTs` to invalidate pre-mute credentials.
  - `api/delete-call` — tombstones the directory entry, revokes all issued tokens via `rooms.removeParticipant` + `rooms.deleteRoom`, removes `call-access`, `call-issued`, and `group-calls/<callKey>`.
- **RTDB rules** (`database.rules.json`): `group-calls/<id>/participants` and `mutes` are readable only when the caller has a valid `call-access` lease (server-written, `expiresAt > now`). Participants can only write their own entry. `mutes` is server-write-only. `connections` (legacy P2P) is fully disabled. `call-directory`, `call-access`, `call-issued`, `call-locks`, `call-rate-limits` are all `.read: false, .write: false`.
- **Firestore rules** (`firestore.rules`): DM typing lives at `dms/<dmId>/typing/<userId>` with read/write gated on `isDmParticipant(dmId)`. Channel typing remains in RTDB under `typing/<channel>/<uid>`.
- **LiveKit Cloud required**: the server enforces `LIVEKIT_URL` ends with `.livekit.cloud` because self-hosted LiveKit does not support token revocation (`revokeTokenTs`). Without it, pre-mute/deleted-room credentials could be replayed.
- **Token TTL**: 60 seconds. The client polls `api/renew-call` every 25 seconds while connected. Leases expire after 90 seconds.
- **Legacy calls**: directory entries with `securityVersion !== 2` (pre-migration) have `needsRecreation: true` in the API response. The sidebar shows an error prompting the owner to recreate the call with a new password.
- `CallsSidebar` shows a create form (name + public/private + password for private), a live list of active calls with `participantCount` from the API, inline password prompt for private calls, an owner-only delete button, and highlights the call you're currently in.
- `cleanupGroupCall()` clears the lease timer, presence node, and `activeGroupCallKey`. The old LiveKit→P2P fallback is gone — `joinGroupCall` rethrows so callers surface join/password failures.
- The old shared "global" LiveKit room and the P2P group-call triggers are gone; `joinP2PGroupCall`/`leaveP2PGroupCall`/`toggleP2PGroupCallMute` remain in `useCalls.js` but are no longer reachable from the UI.
