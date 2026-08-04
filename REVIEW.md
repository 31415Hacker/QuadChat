# QuadChat — In-Depth Review

**Date:** 2026-08-04
**Version:** 1.9.0 (feature HEAD `03b2cc2`)
**Context:** A private group chat for a friend group of ~6 people
**Scope:** `src/App.jsx` (2,900 lines), `src/hooks/` (`useCalls.js` 1,385 lines), `src/components/*`, `src/utils/*`, `src/styles.css` (3,250 lines), `cloudinary.js`, `firebase.js`, `api/*`, `firestore.rules`, `database.rules.json`, `quadchat-worker/` (Cloudflare Durable Object presence server), `game/`, `scripts/`, deploy config.

---

## Ratings at a Glance

| Area | Rating | One-line summary |
|---|---|---|
| **UI** | **9.0/10** | Reactions are native-feeling: the picker lives behind the three-dot menu, chip rows reflect your own selection, and the message row stays uncluttered — no new visual language bolted on. |
| **UX** | **9.1/10** | Missed calls surface in the notification center, profile pictures appear consistently, and presence recovers cleanly after freezes or sleep. |
| **Performance** | **8.0/10** | The keystroke render regression is fixed, the critical path remains stable, and heartbeat traffic is negligible for the current group size. |
| **Security** | **9.1/10** | Reactions and missed calls are rule-scoped, admin profiles cannot be muted, and upload limits are checked server-side. |
| **Overall** | **9.1/10** | The chat now handles abrupt client suspension more honestly while continuing to close the small UX gaps around identity and presence. |

---

## Summary

QuadChat is a private group chat for roughly six friends, and it keeps punching far above its weight: 1-to-1 voice calls, LiveKit group calls with a P2P mesh fallback, screen sharing with a request flow, voice messages with pause/resume, attachments, DMs, typing indicators, presence with statuses and scheduled busy, an in-app notification center, message search with jump-to-result, message editing, threaded replies with jump-to-original, RSVP gaming cards, per-user session analytics, moderation (`?mute`, `?warn`, `?unwarn`, `?purge`), reactions, profile pictures, and missed-call notifications.

This review supersedes the v1.7.20 review and covers the current **v1.8.7** HEAD. Relevant release history:

- **v1.7.16 — documentation only.** The composer and confirm-dialog fixes were written up in `AGENTS.md`.
- **v1.7.17 — composer width fix.** The textarea got `display:block; width:100%` so it fills the full mic↔send column (`styles.css`).
- **v1.7.18 — a four-item batch:** (1) message reactions, (2) `MessageList` memoization, (3) missed-call notifications, (4) dead-package cleanup.
- **v1.7.19 — documentation only.** The v1.7.18 batch was written up in `AGENTS.md`.
- **v1.7.20 — reactions moved behind the menu.** The reaction picker no longer sits as a hover `<Smile>` button on every bubble; it's reached via the three-dot message menu → **React** → the same 6-emoji picker, at the same anchored position the menu used. The message row's hover actions are back to a single overflow button.
- **v1.7.21–v1.7.26 — polish and stability.** The review was refreshed, far-away reply jumps stopped fighting pagination, the chat panel width was tuned to `1100px`, and the version moved to `1.8.0`.
- **v1.8.1–v1.8.6 — identity and layout.** Admin profiles became unmutable in Firestore rules, admin mic controls disappeared, Cloudinary profile pictures were added to the user list, DM tabs, and header avatar, upload limits rose to 50 MB for messages/voice, and header actions were grouped on the right.
- **v1.8.7 — presence heartbeat.** The client sends a ping every 10 seconds; the Durable Object records `lastPing`, checks every 15 seconds, and removes sessions stale for more than 25 seconds.

### The four items of v1.7.18

1. **Reactions.** A `reactions` map on each message doc maps `uid → emoji`. The `firestore.rules` update path now allows an update that touches only `reactions`, and only keys it owns — the same pattern as the existing `rsvps` clause (`firestore.rules`). `handleToggleReaction` in `App.jsx` writes `reactions.<uid>` or `deleteField()` when tapping your own emoji again. The three-dot menu's "React" item opens a 6-emoji picker (`👍 ❤️ 😂 😮 😢 🙏`, `.reaction-picker`), and chips render below the content with per-emoji counts and a name tooltip; your own reaction is highlighted (`.reaction-chip--mine`). Tapping a chip toggles your vote, picker outside-click closes, and a second tap on the same emoji in the picker removes it. (Moved behind the menu in v1.7.20.)
2. **Memoized `MessageList`.** The scroll container moved out of `MessageList` into `App.jsx` as a `.messages` wrapper (with the typing indicator and `endRef`). `MessageList` and `MessageItem` are both `memo`'d with stable `useCallback` props, so typing in the composer no longer re-runs `messages.map` or every item's prop comparison.
3. **Missed-call notifications.** When an incoming-call ring goes stale (>20 s), the callee's client now writes it to `missed-calls/<uid>/<callKey>` before clearing the ring (`useCalls.js`). RTDB rules lock the node to the owner (`.read`/`.write: auth.uid === $uid`) and validate `callKey`/`callerId`/`callerName`/`startedAt` types. `App.jsx` listens with `onChildAdded`, pushes a `missed-call` notification into the notification center ("<caller> missed your call", `id: missed-call-<callKey>` so it dedupes), and deletes the node — so offline members learn who tried them on reconnect, and the node self-cleans.
4. **Dead-package cleanup.** `react-pdf`, `cloudinary-react`, and `cloudinary-core` were uninstalled and `src/MediaRenderer.jsx` (never imported) deleted.

### Presence heartbeat in v1.8.7

The presence worker now stores `{ userId, lastPing }` per WebSocket session. The React `usePresence` hook sends `{"type":"ping"}` every 10 seconds while the connection is open and clears the interval on close, error, reconnect, and unmount. The Durable Object checks sessions every 15 seconds and closes/cleans up any session that has not sent a message for more than 25 seconds. Failed broadcasts use the same disconnect path, so abrupt freezes, lid sleep, and broken sockets no longer leave users falsely online indefinitely.

---

## 1. UI — 9.0/10

### Strengths

- **Reactions look and feel native.** Since v1.7.20 the picker lives behind the three-dot menu — a "React" item with a `<Smile>` icon — so the hover actions on a bubble are back to a single overflow button. The `.reaction-picker` pill opens at the exact position the menu used, with the same surface/border/radius tokens. The chip row below a message reuses the bubble's `--bg-hover`/`--border-color` language with a blue tint for your own vote. Nothing introduces a fourth design language.
- **The picker is forgiving.** Outside-click closes it, each option has an `aria-label`, and the picker swaps into the menu's slot cleanly (the menu and picker are mutually exclusive states). The chips' `title` lists who reacted ("Alice, Bob reacted with 👍") using the same `getProfileName` logic that renders names everywhere else.
- **All of v1.7.15–17 still holds:** the multiline composer with auto-grow, the themed lazy emoji picker, caret-aware `@`-mentions that match message rendering, and the confirm dialogs that now show over Settings.
- **Identity is consistent.** The users sidebar, DM tabs, and top-right profile control use Cloudinary-backed profile pictures with initials fallback.

### Weaknesses

- **The two design languages still coexist.** The main app is hand-rolled BEM-ish tokens; `GameSessionCard.jsx` and the Gaming Post modal are pure Tailwind. Reactions were built in the token language, which makes the Tailwind drift stand out a little more.
- **The Gaming Post modal close button is still a literal `"X"` text node** (`Modals.jsx:301`).
- Minor: the users-sidebar DM/call/mute actions use 10–12 px icons that are easy to fat-finger.

### Verdict

Reactions were the most-requested missing feature and they landed without a design compromise: the picker and chips are token-native, accessible at the button level, and — per the v1.7.20 change — tucked behind the overflow menu so the message row stays clean.

---

## 2. UX — 9.0/10

### Strengths

- **Missed calls are no longer silent.** The v1.7.13 ring design fire-and-forgets stale rings; v1.7.18 persists them to an owner-locked `missed-calls/<uid>` node and the client drains each into the notification center as a "missed your call" item, then deletes it. An offline user reconnects and sees who tried them; the center item uses a distinct red phone icon and dedupes per `callKey`.
- **Presence no longer trusts a dead socket.** A 10-second client ping and 15-second worker sweep mean a frozen or sleeping browser is removed after roughly 25 seconds instead of remaining online until an eventual socket event.
- **The keystroke cost is gone.** Memoizing `MessageList` means typing in the composer no longer maps over every message and prop-compares every item — the lag on older conversations disappears.
- **Reactions are three taps and reversible.** Menu → React → pick an emoji, or tap an existing chip to toggle your vote off; the picker outside-click and single-close behavior match the message menu.
- **Everything from v1.7.15 still holds:** confirm dialogs render over Settings, Enter-sends/Shift+Enter-newline is IME-safe, mentions walk with arrows, reply-jump reaches scrolled-out messages, and calls survive the 10 s ICE grace.

### Weaknesses

- **Reactions lost hover discoverability.** Hiding the picker behind the three-dot menu (v1.7.20) declutters the bubble but means a friend has to know the menu exists to find reactions. The chip row still advertises them once someone else has reacted — and it's the exact trade-off the user asked for.
- **Heartbeat detection is intentionally bounded.** A healthy connection can be marked offline after a little over 25 seconds without traffic, which is the intended trade-off for clearing frozen sessions quickly.
- **No pins** — the natural next ask after reactions.
- **The message menu popover and notification panel still aren't keyboard-navigable** (no arrow-key handling, no menu semantics).
- **An ignored in-session call still doesn't notify until reload or a status change** — the missed-call record is created by the staleness/cleanup path, so a call you watch ring past 20 s without the caller giving up only surfaces as "missed" on reconnect.
- **The confirm dialog still defaults to danger styling** for benign asks like "Replace profile picture?".
- Some error paths still surface raw `firebaseError.message`.

### Verdict

Reactions and missed calls are the two features a friend group most plausibly asks for next, and both shipped. The notification center — once just call/mention/user events — now serves as the app's missed-call inbox, which is a real behavioral win for an asynchronous group.

---

## 3. Performance — 8.0/10

### Strengths

- **`MessageList` is now memoized at the top level.** The `.messages` scroll container (and the typing indicator, `endRef`) moved up into `App.jsx`, and both `MessageList` and `MessageItem` are wrapped in `React.memo` with stable `useCallback` props — the pre-batch gap (O(messages) map + per-item prop diff on every keystroke) is closed. Typing re-renders only the typing indicator.
- **Dead install-time weight is gone.** `react-pdf`/pdf.js, `cloudinary-react`, and `cloudinary-core` were removed from `package.json` (package-lock shrank ~380 lines) and `MediaRenderer.jsx` was deleted.
- **The bundle layout holds:**
  - `index` **284 KB** (87 KB gzip) — app code
  - `firebase` 674 KB (156 KB gzip) — manual chunk
  - `livekit-client` 532 KB (139 KB gzip) — **lazy**, group call only
  - `EmojiPicker` **510 KB** (111 KB gzip) — **lazy**, emoji picker only
  - `media` 29 KB — lucide icons
  - CSS 58 KB (11 KB gzip)
  - Critical path ≈ 310 KB gzip (index + firebase + media + CSS).
- Reaction updates are single-doc `updateDoc` writes with no list re-read; the memoized list reflects them without a full re-render.

### Remaining Performance Risks

1. **The first message-list render still does avoidable profile work.** `renderMessageText` rebuilds a name map while rendering messages (`messages.jsx:36-38`), but this is now an initial/render-window cost rather than a cost paid on every composer keystroke.
2. **The users listener is intentionally broad.** The whole-collection users listener (`App.jsx`) and cross-channel tail watchers are appropriate for six people, but should be scoped before the app grows materially.
3. **`experimentalForceLongPolling: true`** (`firebase.js:20`) trades transport efficiency for compatibility and disables Firestore's WebSocket streaming.
4. **No optimistic message UI.** Sends appear after `addDoc` resolves, and attachments still upload to Cloudinary before the Firestore message is written.
5. **Heartbeat work is bounded but not free.** Each active browser sends one small ping every 10 seconds and the Durable Object scans its active sessions every 15 seconds; this is negligible at the current scale, but the sweep should be revisited if the presence room becomes large.

### Verdict

The major user-facing performance issue from the previous review — remapping every message while typing — is resolved. The remaining criticisms are measured trade-offs: initial profile-map work, broad listeners, long polling, and the lack of optimistic writes. None is currently large enough to outweigh the responsive experience for a six-person room.

---

## 4. Security — 9.0/10

### Strengths

- **Reactions are rule-safe with zero new trust surface.** The update clause allows only `reactions` as the changed key and only `request.auth.uid` as the sub-key (`.affectedKeys().hasOnly(["reactions"])` + the `reactions.<uid>` diff) — mirroring the proven `rsvps` pattern. A user can change their own reaction map key and nothing else on the message.
- **`missed-calls` nodes are owner-locked.** Reads and writes both require `auth.uid === $uid`, so a caller can't write a fake missed-call into someone else's node, and `.validate` pins `callKey` to the key and type-checks `callerId`/`callerName`/`startedAt`. The callee's client drains and deletes the node, so it's also self-cleaning.
- **Everything from v1.7.13–15 holds:** call metadata is never broadcast (per-user rings, participant-only `calls` reads), the signup kill-switch is server-side, the Cloudinary signature endpoint validates metadata, signaling rules are shape-locked, and no credentials ship in the bundle.
- **Admin mute protection is server-enforced.** Firestore rejects mute-state changes when the target is an admin profile, including an attempted demotion-and-mute in the same write. The UI hides admin mic status and mute controls as well.
- **Presence cleanup is server-authoritative.** The Durable Object, rather than only the browser, decides when a session has gone stale and broadcasts the offline transition.
- **No new XSS vector.** Reactions render as text through React's auto-escaping and are stored as plain emoji strings.

### Weaknesses

1. **Any signed-in user can still start a call targeting any `calleeId`** (and write a ring into that user's node) — targeted notification spam, mitigated only by the 20 s freshness filter. (The resulting missed-call record is still written only by the callee's own client.)
2. **Unknown keys under `group-calls` nodes remain writable** — `.validate` blocks only named keys.
3. **Upload validation trusts client-reported size and MIME** — the 50 MB server check rejects honest oversized requests, but a modified client can still lie about metadata because the signature endpoint does not inspect file bytes.
4. **Presence token rides in the URL query string** (`usePresence.js:25`) — can leak into logs/referrers.
5. **Client admin check ignores `email_verified`** while rules require it.
6. **No rate limiting** beyond Firebase/Cloudflare defaults.
7. **Admin identity is public** in both the rules and the client bundle.

### Verdict

Both new surfaces — reactions and missed-call records — were designed to the existing rule discipline (sub-key ownership, owner-locked nodes) rather than bolted on, and neither widens the trust boundary.

---

## 5. Overall — 9.0/10

**What it is:** a feature-complete, visually polished private group chat that keeps out-performing its own humble scope. Chat, DMs, voice, group calls with graceful fallback, screen share, files, voice notes, search, editing, replies with jump-to-original, gaming sessions, analytics, moderation — and now reactions, missed-call notifications, a memoized message list, and a leaner dependency tree.

**Why this release matters:** v1.7.18 shipped the major reaction, missed-call, memoization, and dependency cleanup batch. The v1.8.x polish then made identity consistent across avatars, protected admins from mute writes, expanded message/voice uploads to 50 MB, and grouped the header controls. v1.8.7 addresses the hardest presence failure mode: an operating-system freeze or laptop sleep that never delivers a clean WebSocket close. The client ping plus server-side stale-session sweep now gives that failure a deterministic recovery path.

**What holds it back:** pins are the natural next feature; the message menu and notification panel still aren't keyboard-navigable; upload metadata is still client-reported; and the scaling story (whole-collection users listener, per-message name-map rebuild) still waits past six friends. None of it matters to the current circle.

### Top priorities if you keep building

1. **Pins.** The natural follow-up to reactions; the data model is the same per-user-sub-key pattern.
2. **Keyboard-navigable menus.** Give the message menu popover and the notification panel real menu semantics (arrow keys, Home/End, Escape).
3. **Persist an ignored in-session call.** When a ring ages past 20 s while the callee is online but unresponsive, write the missed-call record on a timer rather than only on the staleness-cleanup path.
4. **Scope the users listener + cache the name map.** Replace the whole-collection `onSnapshot` with per-render-needed fetches, and cache the per-message name-map build in `renderMessageText`.
5. **Finish the upload story.** Sniff file content server-side so a lying client can't upload HTML as `text/plain`.
6. **Deploy the Cloudflare worker automatically.** Add the path-scoped GitHub Actions workflow for `quadchat-worker/**` with Cloudflare credentials and worker tests before `wrangler deploy`.
7. **Strip or gate the `useCalls.js` console logs** and convert the last `"X"` text button.

---

*Review written 2026-08-04 for v1.9.0, covering feature HEAD `03b2cc2` and superseding the v1.7.20 review.*
