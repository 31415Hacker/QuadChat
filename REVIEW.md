# QuadChat — Full Project Review

**Date:** 2026-08-01
**Version:** 1.6.5 (HEAD `2dbd011`)
**Scope:** `src/App.jsx` (5,960 lines), `src/styles.css` (2,731 lines), `firebase.js`, `cloudinary.js`, `api/livekit-token.js`, `api/generate-magic-link.js`, `firestore.rules`, `database.rules.json`, `vite.config.js`, `game/`, deployment config.

---

## Ratings at a Glance

| Area | Rating (initial) | Rating (current) |
|---|---|---|
| UI | 7/10 | 7.5/10 |
| UX | 6/10 | 7.5/10 |
| Performance | 4/10 | 5/10 |
| Security | 5/10 | 6.5/10 |
| Quota management | 5/10 | 6/10 |

---

## Fix Status (commit `2dbd011`)

| # | Finding | Status |
|---|---|---|
| UX-gap | No private DMs — only 3 hardcoded channels | ✅ **FIXED** — private user-to-user DMs added (`bbe7d3d`); DM docs at `dms/{dmId}`, messages at `messages/{dmId}/messages`, DM tabs + "New DM" flow (`App.jsx:956` `openDm`, `App.jsx:4256-4272`), rules at `firestore.rules:111-125` |
| S6 | DM create denied: probe `getDoc` on nonexistent DM doc | ✅ **FIXED** — reads of nonexistent `dms/{id}` return 403 under the old rule (`uid in resource.data.participants` fails on `resource.data == null`); rule now allows `resource == null` probes + participants-only on existing docs (`firestore.rules:113`); metadata updates decoupled from `participants` (`a2bf04c`, `cf4ea34`) |
| UX-bug | Sent message in a new/empty DM invisible until refresh | ✅ **FIXED** — with no `newestDocSnapRef`, only the bounded mod listener was active and it ignored `added`; it now appends with dedup + `MAX_MESSAGES` cap (`App.jsx:1531-1555`) (`6d7d705`) |
| UX-bug | Black screen on send in *any* channel (message still saved) | ✅ **FIXED** — the sender's local snapshot has `createdAt: null` (unresolved `serverTimestamp`); the day-separator expression `dayKey(item.createdAt?.toDate())` called `dayKey(undefined)` → `undefined.getFullYear()` threw, unmounting React. `dayKey` is now null-guarded (`App.jsx:177-180`) (`a3ab6aa`) |
| UX-gap | No notifications inside the app | ✅ **ADDED** — in-app bell + panel + toasts (keep both with browser notifications): cross-channel/DM watcher, @mentions, scrolled-up alerts, call events (`2dbd011`) |
| UX-gap | No WhatsApp-style day separators | ✅ **ADDED** — day separators with relative labels (`7d16119`, `2f9ff7b`) |
| UX-bug | Typing indicators silently rejected by RTDB rules | ✅ **FIXED** — client now writes `{ isTyping, name, timestamp }` (`App.jsx:4880`) |
| S1 | Admin escalation via unverified admin-email account | ✅ **FIXED** — `email_verified` required in `firestore.rules:37-41` and in `saveUserProfile` |
| S3 | Stored crash / DoS via unvalidated message field types | ✅ **FIXED** — defensive rendering for `attachments`/`text`/`fileType`/`replyTo` + Firestore rules type validation (`firestore.rules:77-96`) |
| S4 | Voice-recording upload bypasses size limits | ✅ **FIXED** — 10 MB check added in `sendAudioRecording` |
| P2 / Q1 | Unbounded "mods" listener double-reads entire channel history | ✅ **FIXED** — mod listener bounded to the loaded window via `startAfter`+`endAt`; live listener also handles deletions |
| P3 | Unbounded live message growth | ⚠️ **PARTIAL** — live appends capped at 500 (`MAX_MESSAGES`, `App.jsx:137`); still not virtualized |
| P3 (race) | Listener leak race on channel switch | ✅ **FIXED** — cancelled guard before unsub ref assignment |
| Q2 | 30s Firestore heartbeat + whole-`users` listener (N²) | ⚠️ **OPEN** — requires moving presence to the WebSocket |
| P4 | Zero memoization, full re-render per keystroke | ⚠️ **OPEN** |
| S2 | Unsigned Cloudinary uploads, no server-side validation | ⚠️ **OPEN** |
| S5 | No rate limiting on token / magic-link endpoints | ⚠️ **OPEN** |

---

## 1. UI — 7.5/10

### Strengths
- Polished dark/light themes, persisted, with reduced-motion support.
- Cohesive design system: custom logo/favicon, theme color, custom styles (`styles.css`, 2,731 lines).
- Rich feature set:
  - Private user-to-user DMs with avatar tabs, "New DM" picker, and per-DM last-message metadata (`App.jsx:956-1001`, `App.jsx:4256-4272`)
  - In-app notification center: header bell with unread badge, dropdown panel, mark-all-read, and slide-in toasts (`App.jsx:4329-4405`, `styles.css` notification block)
  - WhatsApp-style day separators with relative labels ("Today", "Yesterday", "n days ago") (`App.jsx:4593-4613`)
  - 1-to-1 WebRTC voice calls with signaling over RTDB
  - Group calls: LiveKit primary with P2P mesh fallback
  - Screen sharing (1-to-1, group, LiveKit, P2P)
  - Voice messages with pause/resume (MediaRecorder)
  - Attachments up to 4 files / 10 MB via Cloudinary
  - Game session cards (Bloxd) with RSVPs (`GameSessionCard.jsx`)
  - Typing indicators, presence dots, scheduled busy status
  - Admin command language executed inline from composer: `?mute @name -t 10m`, `?warn name "action" "reason"`

### Gaps
- No message reactions.
- No search.
- Notification bell/panel has no keyboard navigation (arrow keys, Escape); toasts auto-dismiss without pause-on-hover.
- No `:focus-visible` styling anywhere in `styles.css`.
- Mobile is bare-minimum: users sidebar is hidden entirely on small screens, so you can't see presence or start calls from mobile.

---

## 2. UX — 7.5/10

### Strengths
- **In-app notifications** (added `2dbd011`): cross-channel/DM watcher alerts you to messages in channels you're not viewing; @mentions (`@name`, `@everyone`) alert even in the active channel; scrolled-up readers get pinged for new messages; call events (incoming, ended, group leave) are captured. Everything also lands in the bell panel even when the tab is hidden, while toasts appear only when visible (`App.jsx:875-911`, `App.jsx:1679-1755`, `App.jsx:1781-1840`). Browser OS notifications are unchanged.
- DMs flow: create via user menu/New DM, partner name resolved from `dms.participants` (UIDs can contain `_`), metadata updates gated to participants (`App.jsx:956-1001`).
- Robust call lifecycle: 10-second ICE "disconnected" grace period before cleanup, `onDisconnect` handling, renegotiation support.
- Busy scheduling with overlapping-range merging and a 30s poll.
- Presence with WebSocket + `lastOnline` fallback.
- Attachment previews with proper `URL.revokeObjectURL` cleanup.
- ✅ **Typing indicators now work** (previously rejected by RTDB rules).

### Weaknesses
- **No focus management**: status/analytics/incoming-call modals have no focus trap, no focus-on-open, no focus restore, no Escape-to-close. Only the gaming modal has `role="dialog" aria-modal`.
- Message menu and notification panel are not keyboard-navigable.
- `window.confirm` used for destructive actions — blocks the main thread and is inaccessible.
- Error banners are not `role="alert"`, so screen readers don't announce them.
- Composer is single-line (`type="text"`, maxLength 500) — no Shift+Enter, no markdown, no @mention suggestions.

---

## 3. Performance — 5/10

### Fixed
- **Black screen on send** — the day-separator render crash (`dayKey(undefined)`) that blanked the whole app on every send is fixed (`App.jsx:177-180`). This was the worst stability bug in the app.
- **P2. Mods listener double-read** — the listener now covers only the loaded window (`startAfter(oldest) → endAt(newest)`) instead of re-reading the entire channel tail. Initial read cost is bounded to the loaded window, and new messages are handled by the new-message listener only (~1 read/message instead of ~2).
- **P3 (live growth).** Live appends are capped at `MAX_MESSAGES = 500` (`App.jsx:137`), preventing unbounded DOM/memory growth on busy channels.
- **Listener leak race** on channel switch fixed with a cancelled guard.
- **Deletions** of new messages are now reflected immediately (removed-type handling in the live listener).

### Remaining findings

**P1. Full-`users`-collection listener × 30s heartbeat = N² amplification** (OPEN, HIGHEST)
- `App.jsx:1115-1125` — `onSnapshot(usersRef)` reads every user document with no `where`/`limit`.
- `App.jsx:1027/1036/1289/1291/3927` — every client writes `{ lastOnline }` to Firestore every 30 seconds (and per send).
- Every heartbeat write re-fires the full users listener in every other client and rebuilds the whole `profiles` object → full app re-render. U online users = U writes/30s, each fanning out a U-doc snapshot download to all clients.

**P4. Zero memoization + controlled composer = full re-render per keystroke**
- Only a handful of `useMemo` in 5,960 lines; zero `useCallback` / `React.memo`.
- Composer is a controlled input bound to top-level `message` state → each keystroke re-renders the whole app.
- `renderMessageText` (`App.jsx:419-474`) rebuilds usernames from all profiles and URL-parses every token for *every* message on *every* render: O(messages × users × tokens).

**P5. Notification scans on every change**
- `App.jsx:1679-1755` — the active-channel notification effect rebuilds a Set of all message IDs and scans every message on every `messages`/`profiles` change (profiles churns constantly, per P1).
- The cross-channel watcher (`App.jsx:1781-1840`) adds one `limit(10)` tail subscription per public channel **and per DM**, growing with the user's DM count; each fires on every channel change. It is correctly seeded/deduped with per-channel known-ID sets and a 30s recency guard, so no stale spam — but the subscription count is unbounded with DM growth.

### Other performance notes
- No `loading="lazy"` on images; no `preload="none"` on videos.
- `scrollIntoView({behavior:"smooth"})` fires on every messages/typing change (`App.jsx:1607`).
- LiveKit is eagerly imported and never code-split; `vite.config.js` has no `manualChunks`.
- **Bundle: single ~1.45 MB JS file** + ~44 KB CSS (hash changes per deploy).
- `experimentalForceLongPolling: true` (`firebase.js:20-21`) — safer on flaky networks, higher latency/cost than WebSockets.
- Heavy `console.log` in call paths survives into production builds.
- `MediaRenderer.jsx` (imports `react-pdf`) is dead code — not imported anywhere.

---

## 4. Security — 6.5/10

### Strengths
- **XSS posture is strong:** no `dangerouslySetInnerHTML`/`innerHTML`/`eval` anywhere in `src/`; message text rendered via React JSX escaping.
- URL protocol whitelist (`http:`/`https:`), links use `rel="noopener noreferrer"`.
- `safeUrl()` blocks `javascript:` protocol on attachment URLs — this was the stored-XSS fix (commit `ccecd0b`).
- RSVP writes keyed to the caller's own UID by rules — spoofing blocked.
- No private keys in client code; Firebase/Cloudinary values are public-by-design.
- **DM model is rule-enforced and tight** (`firestore.rules:111-125`):
  - `dms` read: allows `resource == null` (the `openDm` existence probe — note reads of nonexistent docs return 403 without this) and otherwise `request.auth.uid in resource.data.participants`.
  - `dms` create: exactly 2 participants, requester is one of them, `dmId == "dm_" + participants.join("_")`, `hasOnly` of the 5 allowed keys.
  - `dms` update: requester is a participant and only `names`/`lastMessage`/`lastSenderId`/`updatedAt` can change — `participants` is immutable.
  - `messages/{dmId}/messages` reads/writes are additionally gated by `isDmParticipant` (`firestore.rules:65-67, 75, 96`).

### Fixed
- **S1. Admin escalation via unverified email** — `isAdminEmail()` now requires `request.auth.token.email_verified == true` (`firestore.rules:37-41`), and `saveUserProfile` only auto-promotes verified emails.
- **S3. Stored crash / DoS** — message rendering is defensive against malformed `attachments`/`text`/`fileType`/`replyTo`; Firestore rules reject non-string/non-list types at write time (`firestore.rules:87-94`).
- **S4. Voice recording size bypass** — `sendAudioRecording` now rejects recordings over 10 MB.
- **S6. DM create permission-denied** — rooted in the nonexistent-doc read semantics; fixed with the `resource == null` read allowance (`firestore.rules:113`), verified against the live API.

### Remaining findings

**S2. Unsigned Cloudinary uploads — no server-side validation** (HIGH)
- `cloudinary.js` — unsigned `upload_preset` + `auto/upload`; preset and cloud name are compiled into the public bundle.
- Anyone (no app account needed) can upload arbitrary files and burn Cloudinary storage. Client caps are cosmetic.
- **Fix requires a signed-upload endpoint** (server-side), which is out of the current bug-fix scope.

**S5. Unlimited token / magic-link minting** (MEDIUM)
- `api/livekit-token.js` — ID token verified, but no rate limit, no user-existence check, and every token grants `canPublish` in the shared `"global"` room.
- `api/generate-magic-link.js` — same missing rate limiting; mints links for any email (silent account creation).
- Both return raw `err.message` (mild info disclosure).

### Honorable mentions
- RTDB `group-calls` root readable/writable by all authenticated users; `$connId.contains(auth.uid)` substring auth is weak (`database.rules.json:84-85`).
- Encrypted-but-committed service-account key: `quadchat-cf697-firebase-adminsdk-fbsvc-bfa0a4e8be.json.gpg`.
- Display names are not enforced unique — name-impersonation possible.
- In-app notification watcher reads every channel/DM the user can already see — no additional data exposure (still participant-gated for DMs by rules).

---

## 5. Quota Management (limited/free-tier service budgets) — 6/10

### Strengths
- Message pagination: initial `limitToLast(30)` (`App.jsx:136, 1436`), older pages `limit(30)`.
- Typing indicators debounced well (max 1 write per 2s, auto-clear 3s) — and now accepted by the rules.
- Analytics query capped at `limit(500)`.
- **Excellent LiveKit media-level cost controls:** `adaptiveStream: true`, `dynacast: true`, Opus capped at 25 kbps, `dtx: true`, P2P fallback when LiveKit fails.
- In-app notification watcher reads are cheap individually (`limit(10)` tail per channel) and deduped by known-ID sets with a 30s recency guard (`App.jsx:1781-1840`).

### Fixed
- **Q1. Unbounded modQuery double-read** — the mods listener is now bounded to the loaded window: channel loads no longer re-read the entire history, and new messages are delivered once instead of twice. This is the biggest read-cost reduction in the app.

### Remaining findings

**Q2. Whole-`users`-collection listener + 30s heartbeat**
- `App.jsx:1115-1125` reads N user docs per client per session; `App.jsx:1027/1289/3927` writes a heartbeat every 30s (~2,900 writes/user/day), plus another write per message send. Heartbeat fan-out multiplies with the full-listener.
- **Fix:** move presence heartbeats to the existing presence WebSocket; only fall back to `lastOnline` writes.

**Q3. RTDB call signaling fan-out to all online clients**
- `onChildAdded` on the entire `calls` path for every client, plus per-call status listeners, and per-ICE-candidate writes broadcast to everyone. RTDB bandwidth grows with N clients × calls.

**Q4. Cloudinary quota has no app-level governor**
- Unsigned preset usable by anyone; no compression before upload; originals displayed untransformed (no `f_auto`/`q_auto`/`w_`); voice blobs bounded but uncompressed. Storage/bandwidth quota is open-ended.

**Q5. No rate limiting or backoff on expensive ops**
- No throttles on message writes, uploads, LiveKit token requests, or magic-link generation. The only exponential backoff in the app is the presence WebSocket reconnect. The notification watcher's subscription count also grows linearly with the user's DM count (see P5).

---

## Top Recommended Fixes (remaining, highest ROI)

1. **Quota/Perf (HIGHEST):** move presence heartbeats out of Firestore — you already have a presence WebSocket; use it instead of 30s `setDoc` writes. This removes the N² read/write amplification (P1/Q2).
2. **Security:** add server-side validation for Cloudinary — move to signed uploads via a serverless function (or at least an `allowed_formats` restriction on the preset) (S2).
3. **Security/Quota:** add rate limiting and user-existence checks to `api/livekit-token.js` and `api/generate-magic-link.js` (S5/Q5).
4. **Perf:** memoize the message list (`React.memo`), memoize `renderMessageText`, and split the composer state out of the top-level component (P4).
5. **Perf:** add `loading="lazy"` / `preload="none"` to media, and code-split LiveKit with dynamic imports.
6. **Quota/Perf:** cap or consolidate the in-app notification watcher (e.g., share one recent-window listener per channel with the active channel's subscription, and bound total DM listeners) so subscription count doesn't grow unbounded with DMs (P5).
7. **UX:** add focus management (trap + Escape-to-close) to modals, keyboard navigation to the notification panel, and replace `window.confirm` with an accessible dialog.

---

## Verdict

QuadChat has **impressive feature breadth** — private DMs, in-app notifications, day separators, genuinely good call infrastructure (grace periods, P2P fallback), and solid rendering XSS defenses. The latest passes closed the DM permission-denied path (`resource == null` probe), the "sent message invisible in empty channels" gap, and — most importantly — the **black-screen-on-send crash** that blanked the entire app on any message send. DM security is now rule-enforced end-to-end (participants-only reads, immutable `participants`, `hasOnly` key lists). The dominant remaining issues are architectural: a monolithic un-memoized component, whole-collection listeners combined with Firestore heartbeats (the single biggest remaining cost/performance driver), an unbounded notification-watcher subscription count, and no rate limiting or server-side upload validation.
