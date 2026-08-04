# QuadChat — In-Depth Review

**Date:** 2026-08-04
**Version:** 1.7.18 (HEAD `76d637b`)
**Context:** A private group chat for a friend group of ~6 people
**Scope:** `src/App.jsx` (2,900 lines), `src/hooks/` (`useCalls.js` 1,385 lines), `src/components/*`, `src/utils/*`, `src/styles.css` (3,250 lines), `cloudinary.js`, `firebase.js`, `api/*`, `firestore.rules`, `database.rules.json`, `quadchat-worker/` (Cloudflare Durable Object presence server), `game/`, `scripts/`, deploy config.

---

## Ratings at a Glance

| Area | Rating | One-line summary |
|---|---|---|
| **UI** | **9.0/10** | Reactions are native-feeling: a hover emoji picker on every bubble and chip rows that reflect your own selection — no new visual language bolted on. |
| **UX** | **9.0/10** | Missed calls now surface in the notification center instead of vanishing, and the last dead-ends in the v1.7.15 composer work (Enter-to-send, mentions, emoji). |
| **Performance** | **7.9/10** | `MessageList` itself is memoized so typing no longer re-runs the message map, and dead deps (`react-pdf`, `cloudinary-react`) are gone. |
| **Security** | **9.0/10** | Reactions are rule-locked to each user's own map key, and `missed-calls` nodes are owner-only read/write. |
| **Overall** | **9.0/10** | The last "six friends will ask for this next" items — reactions and missed calls — are shipped, and the keystroke re-render is gone. |

---

## Summary

QuadChat is a private group chat for roughly six friends, and it keeps punching far above its weight: 1-to-1 voice calls, LiveKit group calls with a P2P mesh fallback, screen sharing with a request flow, voice messages with pause/resume, attachments, DMs, typing indicators, presence with statuses and scheduled busy, an in-app notification center, message search with jump-to-result, message editing, threaded replies with jump-to-original, RSVP gaming cards, per-user session analytics, moderation (`?mute`, `?warn`, `?unwarn`, `?purge`) — and now message reactions and missed-call notifications.

This review supersedes the v1.7.15 review and covers the current **v1.7.18** HEAD. Releases since v1.7.15:

- **v1.7.16 — documentation only.** The composer and confirm-dialog fixes were written up in `AGENTS.md`.
- **v1.7.17 — composer width fix.** The textarea got `display:block; width:100%` so it fills the full mic↔send column (`styles.css`).
- **v1.7.18 — a four-item batch:** (1) message reactions, (2) `MessageList` memoization, (3) missed-call notifications, (4) dead-package cleanup.

### The four items of v1.7.18

1. **Reactions.** A `reactions` map on each message doc maps `uid → emoji`. The `firestore.rules` update path now allows an update that touches only `reactions`, and only keys it owns — the same pattern as the existing `rsvps` clause (`firestore.rules`). `handleToggleReaction` in `App.jsx` writes `reactions.<uid>` or `deleteField()` when tapping your own emoji again. In the UI each bubble gets a hover `<Smile>` button that opens a 6-emoji picker (`👍 ❤️ 😂 😮 😢 🙏`, `.reaction-picker`), and chips render below the content with per-emoji counts and a name tooltip; your own reaction is highlighted (`.reaction-chip--mine`). Tapping a chip toggles your vote, picker outside-click closes, and a second tap on the same emoji in the picker removes it.
2. **Memoized `MessageList`.** The scroll container moved out of `MessageList` into `App.jsx` as a `.messages` wrapper (with the typing indicator and `endRef`). `MessageList` and `MessageItem` are both `memo`'d with stable `useCallback` props, so typing in the composer no longer re-runs `messages.map` or every item's prop comparison.
3. **Missed-call notifications.** When an incoming-call ring goes stale (>20 s), the callee's client now writes it to `missed-calls/<uid>/<callKey>` before clearing the ring (`useCalls.js`). RTDB rules lock the node to the owner (`.read`/`.write: auth.uid === $uid`) and validate `callKey`/`callerId`/`callerName`/`startedAt` types. `App.jsx` listens with `onChildAdded`, pushes a `missed-call` notification into the notification center ("<caller> missed your call", `id: missed-call-<callKey>` so it dedupes), and deletes the node — so offline members learn who tried them on reconnect, and the node self-cleans.
4. **Dead-package cleanup.** `react-pdf`, `cloudinary-react`, and `cloudinary-core` were uninstalled and `src/MediaRenderer.jsx` (never imported) deleted.

---

## 1. UI — 9.0/10

### Strengths

- **Reactions look and feel native.** The hover picker uses the same `--text-tertiary` icon-button treatment as the overflow menu, sits in the same top-right actions row, and opens upward in a `.reaction-picker` pill that uses the surface/border/radius tokens. The chip row below a message reuses the bubble's `--bg-hover`/`--border-color` language with a blue tint for your own vote. Nothing introduces a fourth design language.
- **The picker is forgiving.** Outside-click closes it, each option has an `aria-label`, and the toggle button reports `aria-expanded`. The chips' `title` lists who reacted ("Alice, Bob reacted with 👍") using the same `getProfileName` logic that renders names everywhere else.
- **All of v1.7.15–17 still holds:** the multiline composer with auto-grow, the themed lazy emoji picker, caret-aware `@`-mentions that match message rendering, and the confirm dialogs that now show over Settings.

### Weaknesses

- **The two design languages still coexist.** The main app is hand-rolled BEM-ish tokens; `GameSessionCard.jsx` and the Gaming Post modal are pure Tailwind. Reactions were built in the token language, which makes the Tailwind drift stand out a little more.
- **The Gaming Post modal close button is still a literal `"X"` text node** (`Modals.jsx:301`).
- Minor: the users-sidebar DM/call/mute actions use 10–12 px icons that are easy to fat-finger.

### Verdict

Reactions were the most-requested missing feature and they landed without a design compromise: the picker and chips are token-native, accessible at the button level, and trivially discoverable on hover.

---

## 2. UX — 9.0/10

### Strengths

- **Missed calls are no longer silent.** The v1.7.13 ring design fire-and-forgets stale rings; v1.7.18 persists them to an owner-locked `missed-calls/<uid>` node and the client drains each into the notification center as a "missed your call" item, then deletes it. An offline user reconnects and sees who tried them; the center item uses a distinct red phone icon and dedupes per `callKey`.
- **The keystroke cost is gone.** Memoizing `MessageList` means typing in the composer no longer maps over every message and prop-compares every item — the lag on older conversations disappears.
- **Reactions are two taps and reversible.** Hover → tap an emoji, or tap an existing chip to toggle your vote off; the picker outside-click and Escape-free single-close behavior match the message menu.
- **Everything from v1.7.15 still holds:** confirm dialogs render over Settings, Enter-sends/Shift+Enter-newline is IME-safe, mentions walk with arrows, reply-jump reaches scrolled-out messages, and calls survive the 10 s ICE grace.

### Weaknesses

- **No pins** — the natural next ask after reactions.
- **The message menu popover and notification panel still aren't keyboard-navigable** (no arrow-key handling, no menu semantics).
- **An ignored in-session call still doesn't notify until reload or a status change** — the missed-call record is created by the staleness/cleanup path, so a call you watch ring past 20 s without the caller giving up only surfaces as "missed" on reconnect.
- **The confirm dialog still defaults to danger styling** for benign asks like "Replace profile picture?".
- Some error paths still surface raw `firebaseError.message`.

### Verdict

Reactions and missed calls are the two features a friend group most plausibly asks for next, and both shipped. The notification center — once just call/mention/user events — now serves as the app's missed-call inbox, which is a real behavioral win for an asynchronous group.

---

## 3. Performance — 7.9/10

### Strengths

- **`MessageList` is now memoized at the top level.** The `.messages` scroll container (and the typing indicator, `endRef`) moved up into `App.jsx`, and both `MessageList` and `MessageItem` are wrapped in `React.memo` with stable `useCallback` props — the pre-batch gap (O(messages) map + per-item prop diff on every keystroke) is closed. Typing re-renders only the typing indicator.
- **Dead install-time weight is gone.** `react-pdf`/pdf.js, `cloudinary-react`, and `cloudinary-core` were removed from `package.json` (package-lock shrank ~380 lines) and `MediaRenderer.jsx` was deleted.
- **The bundle layout holds:**
  - `index` **283 KB** (87 KB gzip) — app code
  - `firebase` 674 KB (156 KB gzip) — manual chunk
  - `livekit-client` 532 KB (139 KB gzip) — **lazy**, group call only
  - `EmojiPicker` **510 KB** (111 KB gzip) — **lazy**, emoji picker only
  - `media` 29 KB — lucide icons
  - CSS 58 KB (11 KB gzip)
  - Critical path ≈ 310 KB gzip (index + firebase + media + CSS).
- Reaction updates are single-doc `updateDoc` writes with no list re-read; the memoized list reflects them without a full re-render.

### Weaknesses

1. **`renderMessageText` still rebuilds the name map from all profiles for every message** (`messages.jsx:36-38`) — O(profiles × messages) per render; the memo hides most of the cost but it's still wasted work on the first paint.
2. **Whole-collection users listener** (`App.jsx:607-626`) plus a cross-channel watcher that holds tail listeners on every channel and DM. Fine for 6 users; won't scale past it.
3. **`experimentalForceLongPolling: true`** (`firebase.js:20`) disables Firestore's WebSocket streaming.
4. **No optimistic UI.** Sends render only after `addDoc` resolves; attachments go Cloudinary → Firestore serially.
5. **57 production `console.log`s in `useCalls.js`** still ship to prod.

### Verdict

The two structural items on the performance list — memoize the message list and drop the dead deps — are both done. What remains is the scaling story (users listener, name-map rebuild) that only matters past six friends.

---

## 4. Security — 9.0/10

### Strengths

- **Reactions are rule-safe with zero new trust surface.** The update clause allows only `reactions` as the changed key and only `request.auth.uid` as the sub-key (`.affectedKeys().hasOnly(["reactions"])` + the `reactions.<uid>` diff) — mirroring the proven `rsvps` pattern. A user can change their own reaction map key and nothing else on the message.
- **`missed-calls` nodes are owner-locked.** Reads and writes both require `auth.uid === $uid`, so a caller can't write a fake missed-call into someone else's node, and `.validate` pins `callKey` to the key and type-checks `callerId`/`callerName`/`startedAt`. The callee's client drains and deletes the node, so it's also self-cleaning.
- **Everything from v1.7.13–15 holds:** call metadata is never broadcast (per-user rings, participant-only `calls` reads), the signup kill-switch is server-side, the Cloudinary signature endpoint validates metadata, signaling rules are shape-locked, and no credentials ship in the bundle.
- **No new XSS vector.** Reactions render as text through React's auto-escaping and are stored as plain emoji strings.

### Weaknesses

1. **Any signed-in user can still start a call targeting any `calleeId`** (and write a ring into that user's node) — targeted notification spam, mitigated only by the 20 s freshness filter. (The resulting missed-call record is still written only by the callee's own client.)
2. **Unknown keys under `group-calls` nodes remain writable** — `.validate` blocks only named keys.
3. **Upload validation trusts client-reported MIME** — a modified client can claim `text/plain` for an HTML payload.
4. **Presence token rides in the URL query string** (`usePresence.js:25`) — can leak into logs/referrers.
5. **Client admin check ignores `email_verified`** while rules require it.
6. **No rate limiting** beyond Firebase/Cloudflare defaults.
7. **Admin identity is public** in both the rules and the client bundle.

### Verdict

Both new surfaces — reactions and missed-call records — were designed to the existing rule discipline (sub-key ownership, owner-locked nodes) rather than bolted on, and neither widens the trust boundary.

---

## 5. Overall — 9.0/10

**What it is:** a feature-complete, visually polished private group chat that keeps out-performing its own humble scope. Chat, DMs, voice, group calls with graceful fallback, screen share, files, voice notes, search, editing, replies with jump-to-original, gaming sessions, analytics, moderation — and now reactions, missed-call notifications, a memoized message list, and a leaner dependency tree.

**Why this release matters:** v1.7.18 is the "ask for it next" release. Reactions were the #1 item on the list and they arrived rule-safe and design-native; missed calls turned a silent failure (rings to offline users vanished) into a first-class notification-center event; and the keystroke re-render that had grown visible on long threads is gone because `MessageList` is memoized at the top. The dead packages went with it — the same commit that added features removed bloat.

**What holds it back:** pins are the natural next feature; the message menu and notification panel still aren't keyboard-navigable; an ignored in-session call doesn't notify until reconnect; and the scaling story (whole-collection users listener, per-message name-map rebuild) still waits past six friends. None of it matters to the current circle.

### Top priorities if you keep building

1. **Pins.** The natural follow-up to reactions; the data model is the same per-user-sub-key pattern.
2. **Keyboard-navigable menus.** Give the message menu popover and the notification panel real menu semantics (arrow keys, Home/End, Escape).
3. **Persist an ignored in-session call.** When a ring ages past 20 s while the callee is online but unresponsive, write the missed-call record on a timer rather than only on the staleness-cleanup path.
4. **Scope the users listener + cache the name map.** Replace the whole-collection `onSnapshot` with per-render-needed fetches, and cache the per-message name-map build in `renderMessageText`.
5. **Finish the upload story.** Sniff file content server-side so a lying client can't upload HTML as `text/plain`.
6. **Strip or gate the `useCalls.js` console logs** and convert the last `"X"` text button.

---

*Review written 2026-08-04 against v1.7.18 (`git rev-parse HEAD` = `76d637b`), superseding the v1.7.15 review.*
