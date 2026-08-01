# QuadChat — Full Project Review

**Date:** 2026-08-01
**Scope:** `src/App.jsx` (5,271 lines), `src/styles.css`, `firebase.js`, `cloudinary.js`, `api/livekit-token.js`, `api/generate-magic-link.js`, `firestore.rules`, `database.rules.json`, `vite.config.js`, `game/`, deployment config.

---

## Ratings at a Glance

| Area | Rating (initial) | Rating (current) |
|---|---|---|
| UI | 7/10 | 7/10 |
| UX | 6/10 | 6.5/10 |
| Performance | 4/10 | 5/10 |
| Security | 5/10 | 6/10 |
| Quota management | 5/10 | 6/10 |

---

## Fix Status (commit `f3dd945`)

| # | Finding | Status |
|---|---|---|
| UX-bug | Typing indicators silently rejected by RTDB rules | ✅ **FIXED** — client now writes `{ isTyping, name, timestamp }` (`App.jsx:4737`) |
| S1 | Admin escalation via unverified admin-email account | ✅ **FIXED** — `email_verified` required in `firestore.rules:37-41` and in `saveUserProfile` (`App.jsx:443-448`) |
| S3 | Stored crash / DoS via unvalidated message field types | ✅ **FIXED** — defensive rendering for `attachments`/`text`/`fileType`/`replyTo` (`App.jsx:4343-4430`) + Firestore rules type validation (`firestore.rules:72-80`) |
| S4 | Voice-recording upload bypasses size limits | ✅ **FIXED** — 10 MB check added in `sendAudioRecording` (`App.jsx:3243-3247`) |
| P2 / Q1 | Unbounded "mods" listener double-reads entire channel history | ✅ **FIXED** — mod listener bounded to the loaded window via `startAfter`+`endAt` (`App.jsx:1211-1219`); live listener now also handles deletions |
| P3 | Unbounded live message growth | ✅ **PARTIAL** — live appends capped at 500 (`MAX_MESSAGES`, `App.jsx:1192-1194`); still not virtualized |
| P3 (race) | Listener leak race on channel switch | ✅ **FIXED** — cancelled guard before unsub ref assignment (`App.jsx:1244`) |
| Q2 | 30s Firestore heartbeat + whole-`users` listener (N²) | ⚠️ **OPEN** — requires moving presence to the WebSocket |
| P4 | Zero memoization, full re-render per keystroke | ⚠️ **OPEN** |
| S2 | Unsigned Cloudinary uploads, no server-side validation | ⚠️ **OPEN** |
| S5 | No rate limiting on token / magic-link endpoints | ⚠️ **OPEN** |

---

## 1. UI — 7/10

### Strengths
- Polished dark/light themes, persisted, with reduced-motion support (`App.jsx:518-521, 783-801`).
- Cohesive design system: custom logo/favicon, theme color, custom styles (`styles.css`, 2,357 lines).
- Rich feature set:
  - 1-to-1 WebRTC voice calls with signaling over RTDB (`App.jsx:1678-2006`)
  - Group calls: LiveKit primary with P2P mesh fallback (`App.jsx:2359-2643`)
  - Screen sharing (1-to-1, group, LiveKit, P2P) (`App.jsx:2026-2081`)
  - Voice messages with pause/resume (MediaRecorder) (`App.jsx:3255-3311`)
  - Attachments up to 4 files / 10 MB via Cloudinary (`App.jsx:116-117, 2960-2998`)
  - Game session cards (Bloxd) with RSVPs (`GameSessionCard.jsx`)
  - Typing indicators, presence dots, scheduled busy status
  - Admin command language executed inline from composer: `?mute @name -t 10m`, `?warn name "action" "reason"` (`App.jsx:3033-3218`)

### Gaps
- No message reactions.
- No search.
- No DMs — only 3 hardcoded channels (`group`, `updates`, `suggestions`).
- No `:focus-visible` styling anywhere in `styles.css`.
- Mobile is bare-minimum: users sidebar is hidden entirely on small screens (`styles.css:1816-1873`), so you can't see presence or start calls from mobile.

---

## 2. UX — 6.5/10

### Strengths
- Robust call lifecycle: 10-second ICE "disconnected" grace period before cleanup, `onDisconnect` handling, renegotiation support.
- Busy scheduling with overlapping-range merging and a 30s poll (`App.jsx:976-993`).
- Presence with WebSocket + `lastOnline` fallback (`App.jsx:876-945`).
- Attachment previews with proper `URL.revokeObjectURL` cleanup.
- ✅ **Typing indicators now work** — previously every write was rejected by the RTDB rules (`database.rules.json:14` required `isTyping`); the client now sends the required shape (`App.jsx:4737`), so indicators appear and clear correctly.

### Weaknesses
- **No focus management**: status/analytics/incoming-call modals have no focus trap, no focus-on-open, no focus restore, no Escape-to-close. Only the gaming modal has `role="dialog" aria-modal`.
- Message menu is not keyboard-navigable (no arrow keys, no Escape).
- `window.confirm` used for destructive actions (`App.jsx:1497, 1527, 2786, 2934, 3418`) — blocks the main thread and is inaccessible.
- Error banners are not `role="alert"`, so screen readers don't announce them.
- Composer is single-line (`type="text"`, maxLength 500) — no Shift+Enter, no markdown, no @mention suggestions.

---

## 3. Performance — 5/10

### Fixed
- **P2. Mods listener double-read** — the listener now covers only the loaded window (`startAfter(oldest) → endAt(newest)`, `App.jsx:1211-1219`) instead of re-reading the entire channel tail. Initial read cost is bounded to the loaded window, and new messages are handled by the new-message listener only (~1 read/message instead of ~2).
- **P3 (live growth).** Live appends are capped at `MAX_MESSAGES = 500` (`App.jsx:1192-1194`), preventing unbounded DOM/memory growth on busy channels.
- **Listener leak race** on channel switch fixed with a cancelled guard (`App.jsx:1244`).
- **Deletions** of new messages are now reflected immediately (removed-type handling in the live listener, `App.jsx:1177-1180`).

### Remaining findings

**P1. Full-`users`-collection listener × 30s heartbeat = N² amplification** (OPEN, HIGHEST)
- `App.jsx:855-874` — `onSnapshot(usersRef)` reads every user document with no `where`/`limit`.
- `App.jsx:998-1000` — every client writes `{ lastOnline }` to Firestore every 30 seconds.
- Every heartbeat write re-fires the full users listener in every other client and rebuilds the whole `profiles` object → full app re-render. U online users = U writes/30s, each fanning out a U-doc snapshot download to all clients.

**P4. Zero memoization + controlled composer = full re-render per keystroke**
- Only one `useMemo` in 5,271 lines (`activeName`, `App.jsx:732-735`); zero `useCallback` / `React.memo`.
- Composer is a controlled input bound to top-level `message` state (`App.jsx:4724-4738`) → each keystroke re-renders the whole app.
- `renderMessageText` (`App.jsx:360-401`) rebuilds usernames from all profiles and URL-parses every token for *every* message on *every* render: O(messages × users × tokens).

**P5. O(n) notification scan on every change**
- `App.jsx:1346-1403` — on every `messages` change rebuilds a Set of all message IDs and filters every message; the effect also re-runs whenever `profiles` churns (constant, per P1).

### Other performance notes
- No `loading="lazy"` on images; no `preload="none"` on videos — every media asset in the (capped) list loads immediately, even off-screen.
- `scrollIntoView({behavior:"smooth"})` fires on every messages/typing change (`App.jsx:1273-1277`).
- LiveKit (`App.jsx:93`) is eagerly imported and never code-split; `vite.config.js` has no `manualChunks`.
- **Bundle: single 1.45 MB JS file** (`dist/assets/index-HjLqAWrF.js`) + 44 KB CSS.
- `experimentalForceLongPolling: true` (`firebase.js:19-21`) — safer on flaky networks, higher latency/cost than WebSockets.
- Heavy `console.log` in call paths survives into production builds.
- `MediaRenderer.jsx` (imports `react-pdf`) is dead code — not imported anywhere.

---

## 4. Security — 6/10

### Strengths
- **XSS posture is strong:** no `dangerouslySetInnerHTML`/`innerHTML`/`eval` anywhere in `src/`; message text rendered via React JSX escaping.
- URL protocol whitelist (`http:`/`https:`) (`App.jsx:387-395`), links use `rel="noopener noreferrer"`.
- `safeUrl()` blocks `javascript:` protocol on attachment URLs — this was the stored-XSS fix (commit `ccecd0b`).
- RSVP writes keyed to the caller's own UID by rules (`firestore.rules:73-80`) — spoofing blocked.
- No private keys in client code; Firebase/Cloudinary values are public-by-design.

### Fixed
- **S1. Admin escalation via unverified email** — `isAdminEmail()` now requires `request.auth.token.email_verified == true` (`firestore.rules:37-41`), and `saveUserProfile` only auto-promotes verified emails (`App.jsx:443-448`). An attacker can no longer self-provision an `isAdmin` profile by registering the admin email with an unverified account.
- **S3. Stored crash / DoS** — message rendering is defensive against malformed `attachments` (must be an array), `text`/`fileType` (must be strings), and `replyTo` (must be an object) (`App.jsx:4343-4430`); Firestore rules now reject non-string `text`/`fileType`/`fileName`/`type`/`title`/`note`/`googleMeetLink` and non-list `attachments` at write time (`firestore.rules:72-80`).
- **S4. Voice recording size bypass** — `sendAudioRecording` now rejects recordings over 10 MB (`App.jsx:3243-3247`).

### Remaining findings

**S2. Unsigned Cloudinary uploads — no server-side validation** (HIGH)
- `cloudinary.js:1-22` — unsigned `upload_preset` + `auto/upload`; preset and cloud name are compiled into the public bundle.
- Anyone (no app account needed) can upload arbitrary files and burn Cloudinary storage. Client caps (`App.jsx:117, 2976-2983`) are cosmetic.
- **Fix requires a signed-upload endpoint** (server-side), which is out of the current bug-fix scope.

**S5. Unlimited token / magic-link minting** (MEDIUM)
- `api/livekit-token.js:22-35` — ID token verified, but no rate limit, no user-existence check, and every token grants `canPublish` in the shared `"global"` room.
- `api/generate-magic-link.js:33-41` — same missing rate limiting; mints links for any email (silent account creation).
- Both return raw `err.message` (mild info disclosure).

### Honorable mentions
- RTDB `group-calls` root readable/writable by all authenticated users; `$connId.contains(auth.uid)` substring auth is weak (`database.rules.json:84-85`).
- Encrypted-but-committed service-account key: `quadchat-cf697-firebase-adminsdk-fbsvc-bfa0a4e8be.json.gpg`.
- Display names are not enforced unique — name-impersonation possible.

---

## 5. Quota Management (limited/free-tier service budgets) — 6/10

### Strengths
- Message pagination: initial `limitToLast(30)` (`App.jsx:1132-1136`), older pages `limit(30)` (`App.jsx:3365-3370`).
- Typing indicators debounced well (max 1 write per 2s, auto-clear 3s) — and now accepted by the rules.
- Analytics query capped at `limit(500)` (`App.jsx:571-577`).
- **Excellent LiveKit media-level cost controls:** `adaptiveStream: true`, `dynacast: true` (`App.jsx:2519`), Opus capped at 25 kbps (`App.jsx:123, 1699, 2620`), `dtx: true` (`App.jsx:2615`), P2P fallback when LiveKit fails (`App.jsx:2637-2642`).

### Fixed
- **Q1. Unbounded modQuery double-read** — the mods listener is now bounded to the loaded window (`App.jsx:1211-1219`): channel loads no longer re-read the entire history, and new messages are delivered once instead of twice. This is the biggest read-cost reduction in the app.

### Remaining findings

**Q2. Whole-`users`-collection listener + 30s heartbeat**
- `App.jsx:855-874` reads N user docs per client per session; `App.jsx:995-1002` writes a heartbeat every 30s (~2,900 writes/user/day), plus another write per message send (`App.jsx:3456`). Heartbeat fan-out multiplies with the full-listener.
- **Fix:** move presence heartbeats to the existing presence WebSocket; only fall back to `lastOnline` writes.

**Q3. RTDB call signaling fan-out to all online clients**
- `App.jsx:1041` — `onChildAdded` on the entire `calls` path for every client, plus per-call status listeners, and per-ICE-candidate writes broadcast to everyone. RTDB bandwidth grows with N clients × calls.

**Q4. Cloudinary quota has no app-level governor**
- Unsigned preset usable by anyone; no compression before upload (`App.jsx:414-418`); originals displayed untransformed (no `f_auto`/`q_auto`/`w_`); voice blobs bounded but uncompressed. Storage/bandwidth quota is open-ended.

**Q5. No rate limiting or backoff on expensive ops**
- No throttles on message writes, uploads, LiveKit token requests, or magic-link generation. The only exponential backoff in the app is the presence WebSocket reconnect (`App.jsx:925-931`).

---

## Top Recommended Fixes (remaining, highest ROI)

1. **Quota/Perf (HIGHEST):** move presence heartbeats out of Firestore — you already have a presence WebSocket; use it instead of 30s `setDoc` writes. This removes the N² read/write amplification (P1/Q2).
2. **Security:** add server-side validation for Cloudinary — move to signed uploads via a serverless function (or at least an `allowed_formats` restriction on the preset) (S2).
3. **Security/Quota:** add rate limiting and user-existence checks to `api/livekit-token.js` and `api/generate-magic-link.js` (S5/Q5).
4. **Perf:** memoize the message list (`React.memo`), memoize `renderMessageText`, and split the composer state out of the top-level component (P4).
5. **Perf:** add `loading="lazy"` / `preload="none"` to media, and code-split LiveKit with dynamic imports.
6. **UX:** add focus management (trap + Escape-to-close) to modals, and replace `window.confirm` with an accessible dialog.

---

## Verdict

The app has **impressive feature breadth and genuinely good call infrastructure**, and its rendering XSS defenses are solid. The bug-fix pass (commit `f3dd945`) closed the two highest-risk security issues (admin escalation, stored crash/DoS), fixed the broken typing indicators, enforced the voice-message size limit, and cut the worst read-cost amplifier (the unbounded mods listener). The dominant remaining issues are architectural: a monolithic un-memoized component, whole-collection listeners combined with Firestore heartbeats (the single biggest remaining cost/performance driver), and no rate limiting or server-side upload validation.
