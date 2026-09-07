# Versioning

Current: 2.2.0
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

## DM Sound Selection
- The DM receive sound is chosen in Settings (Accessibility tab) and persisted to `localStorage` under `quadchat-dm-sound` (`"android"`, `"discord"`, or `"custom"`).
- `src/utils/dmSound.js` (`playDmReceiveSound`) reads the current value from `localStorage` on each play; it rebuilds the `Audio` element lazily when the source changes. The `"custom"` source is stored as a data URL in `quadchat-dm-sound-custom` (uploaded in the same settings UI).
- State lives in `App.jsx` (`dmSoundType`/`setDmSoundType`, persisted via a `useEffect` writing `quadchat-dm-sound`) and is threaded down to `SettingsPage.jsx`.
- If you add more built-in sounds, extend the `SOUNDS` map in `dmSound.js` and add a matching radio row in `SettingsPage.jsx`.

## Message & Ringtone Sound Volume / Channel Toggles
- The same `playDmReceiveSound()` sound is used for both DM and group-chat message alerts; separately toggled by `dmSoundsEnabled` (default on) and `groupSoundsEnabled` (default off), persisted in `quadchat-dm-sound-enabled` / `quadchat-group-sound-enabled` (`"true"`/`"false"`). Keep those defaults — DM sounds on, group sounds off, is the intended baseline.
- `dmSound.js` reads message-sound volume from `quadchat-message-sound-volume` (0–1, default `0.55`) at each play; the ringtone volume lives in `callRingtone.js` under `quadchat-ringtone-volume` (0–1, default `0.7`), applied on ringtone rebuild and on `startCallRingtone`.
- The call sites gate on `dmSoundsEnabledRef.current`/`groupSoundsEnabledRef.current` (`App.jsx`): the active-channel listener plays a sound only when `!messageVisible`, and the background-channels listener (`watcherChannels`, which excludes the active channel) plays for every new non-self message. Refs are kept in sync in the same `useEffect` that syncs `profilesRef`/`activeChannelRef` — keep that pattern so the listeners don't re-subscribe on toggle.
- The Settings UI lives in the Accessibility tab: "Message sounds" toggles + a message volume slider, and a "Ringtone volume" slider inside the "Call ringtone" section. Preview buttons play at the configured volume.
- If you change these keys, keep the readers (`dmSound.js`, `callRingtone.js`) and writers (`App.jsx` effects) in sync. The group-sound alert intentionally reuses the DM sound selection — there is no separate group-sound picker.

## Call Ringtone Selection
- The call ringtone is chosen in Settings (Accessibility tab) and persisted to `localStorage` under `quadchat-call-sound` (`"default"` or `"custom"`).
- `src/utils/callRingtone.js` (`startCallRingtone`) reads the current value from `localStorage` on each start; it rebuilds the `Audio` element lazily when the source changes. The `"custom"` source is stored as a data URL in `quadchat-call-sound-custom` (uploaded in the same settings UI).
- State lives in `App.jsx` (`callSoundType`/`setCallSoundType`, persisted via a `useEffect` writing `quadchat-call-sound`) and is threaded down to `SettingsPage.jsx`.
- If you add more built-in ringtones, extend the `SOUNDS` map in `callRingtone.js` and add a matching radio row in `SettingsPage.jsx`.

# Composer

- Multiline `<textarea>` (auto-grows to ~4 rows), Enter sends, Shift+Enter newline, `maxLength={500}`.
- Emoji picker via `@emoji-mart/react` + `@emoji-mart/data`, lazy-loaded (`EmojiPicker.jsx`) so it's a separate ~510 KB chunk fetched only when opened.
- `@`-mention suggestions: typing `@` with a caret inside a word triggers a dropdown of profile names (deduped, prefix match, max 8). Arrow keys navigate, Enter/Tab accept, Escape closes.
- Grid note: `.composer-row` has 5 columns by default (`50px 50px 50px minmax(0,1fr) 50px` = attach, emoji, mic, input, send); `--no-mic` drops a column, `--recording` swaps the buttons for the recording bar. Keep the mobile breakpoints (40px/36px) in sync when changing these.
