# QuadChat — Full Project Review

**Date:** 2026-08-01
**Scope:** `src/App.jsx` (5,271 lines), `src/styles.css`, `firebase.js`, `cloudinary.js`, `api/livekit-token.js`, `api/generate-magic-link.js`, `firestore.rules`, `database.rules.json`, `vite.config.js`, `game/`, deployment config.

---

## Ratings at a Glance

| Area | Rating |
|---|---|
| UI | 7/10 |
| UX | 6/10 |
| Performance | 4/10 |
| Security | 5/10 |
| Quota management | 5/10 |

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

## 2. UX — 6/10

### Strengths
- Robust call lifecycle: 10-second ICE "disconnected" grace period before cleanup, `onDisconnect` handling, renegotiation support.
- Busy scheduling with overlapping-range merging and a 30s poll (`App.jsx:976-993`).
- Presence with WebSocket + `lastOnline` fallback (`App.jsx:876-945`).
- Attachment previews with proper `URL.revokeObjectURL` cleanup.

### Weaknesses
- **No focus management**: status/analytics/incoming-call modals have no focus trap, no focus-on-open, no focus restore, no Escape-to-close. Only the gaming modal has `role="dialog" aria-modal`.
- Message menu is not keyboard-navigable (no arrow keys, no Escape).
- `window.confirm` used for destructive actions (`App.jsx:1497, 1527, 2786, 2934, 3418`) — blocks the main thread and is inaccessible.
- Error banners are not `role="alert"`, so screen readers don't announce them.
- Composer is single-line (`type="text"`, maxLength 500) — no Shift+Enter, no markdown, no @mention suggestions.
- **Bug — typing indicators silently broken:** client writes `{ name, timestamp }` (`App.jsx:4714`) but RTDB rules require `{ isTyping, timestamp }` (`database.rules.json:14`), so every typing write is rejected by the rules and swallowed by `.catch(() => {})`.

---

## 3. Performance — 4/10

### Critical findings

**P1. Full-`users`-collection listener × 30s heartbeat = N² amplification** (HIGHEST)
- `App.jsx:855-874` — `onSnapshot(usersRef)` reads every user document with no `where`/`limit`.
- `App.jsx:998-1000` — every client writes `{ lastOnline }` to Firestore every 30 seconds.
- Every heartbeat write re-fires the full users listener in every other client and rebuilds the whole `profiles` object → full app re-render. U online users = U writes/30s, each fanning out a U-doc snapshot download to all clients.

**P2. Unbounded "mods" listener double-reads entire channel history**
- `App.jsx:1200-1201` — `onSnapshot(orderBy("createdAt","asc"), startAfter(oldestDocSnapRef.current))` with **no `limit()`**. The initial snapshot re-reads everything newer than the oldest loaded message (the entire channel tail), and every new message is billed to both the new-message listener (`App.jsx:1161-1165`) and this mod listener → ~2 reads/message/client.

**P3. Unbounded, non-virtualized message list**
- `App.jsx:3387` prepends older pages with no cap; `App.jsx:1180-1188` appends live messages with no cap.
- The list is a plain `messages.map` of `<article>`s (`App.jsx:4259-4409`) — no virtualization, no windowing, no cap. Long channels produce unbounded DOM + memory growth; every new message re-renders all of them.

**P4. Zero memoization + controlled composer = full re-render per keystroke**
- Only one `useMemo` in 5,271 lines (`activeName`, `App.jsx:732-735`); zero `useCallback` / `React.memo`.
- Composer is a controlled input bound to top-level `message` state (`App.jsx:4701-4715`) → each keystroke re-renders the whole app.
- `renderMessageText` (`App.jsx:360-401`) rebuilds usernames from all profiles and URL-parses every token for *every* message on *every* render: O(messages × users × tokens).

**P5. O(n) notification scan on every change**
- `App.jsx:1346-1403` — on every `messages` change rebuilds a Set of all message IDs and filters every message; the effect also re-runs whenever `profiles` churns (constant, per P1).

### Other performance notes
- No `loading="lazy"` on images; no `preload="none"` on videos — every media asset in the (unbounded) list loads immediately, even off-screen.
- `scrollIntoView({behavior:"smooth"})` fires on every messages/typing change (`App.jsx:1273-1277`).
- LiveKit (`App.jsx:93`) is eagerly imported and never code-split; `vite.config.js` has no `manualChunks`.
- **Bundle: single 1.4 MB JS file** (`dist/assets/index-DgWSDUEk.js`) + 44 KB CSS.
- `experimentalForceLongPolling: true` (`firebase.js:19-21`) — safer on flaky networks, higher latency/cost than WebSockets.
- Heavy `console.log` in call paths survives into production builds.
- `MediaRenderer.jsx` (imports `react-pdf`) is dead code — not imported anywhere.

---

## 4. Security — 5/10

### Strengths
- **XSS posture is strong:** no `dangerouslySetInnerHTML`/`innerHTML`/`eval` anywhere in `src/`; message text rendered via React JSX escaping.
- URL protocol whitelist (`http:`/`https:`) (`App.jsx:387-395`), links use `rel="noopener noreferrer"`.
- `safeUrl()` blocks `javascript:` protocol on attachment URLs — this was the stored-XSS fix (commit `ccecd0b`).
- RSVP writes keyed to the caller's own UID by rules (`firestore.rules:73-80`) — spoofing blocked.
- No private keys in client code; Firebase/Cloudinary values are public-by-design.

### Critical findings

**S1. Admin privilege escalation via unverified admin-email account** (HIGHEST)
- `firestore.rules:37-40` — `isAdminEmail()` trusts `request.auth.token.email` with **no `email_verified`** check.
- `firestore.rules:90-96` — the create rule lets any user with that email create a profile **including** `isAdmin`/`isDeveloper` keys.
- The admin email is hardcoded in the shipped client bundle (`App.jsx:106-107`) and auto-written by `saveUserProfile` (`App.jsx:442-465`).
- If Firebase's "one account per email address" is disabled (or the admin email isn't provisioned), anyone can `createUserWithEmailAndPassword(adminEmail)` and become full admin: mute/warn/delete, toggle signup, mint magic links.

**S2. Unsigned Cloudinary uploads — no server-side validation** (HIGH)
- `cloudinary.js:1-22` — unsigned `upload_preset` + `auto/upload`; preset and cloud name are compiled into the public bundle.
- Anyone (no app account needed) can upload arbitrary files and burn Cloudinary storage. Client caps (`App.jsx:117, 2976-2983`) are cosmetic.

**S3. Stored crash / DoS via unvalidated message field types** (MEDIUM-HIGH)
- `firestore.rules:61-71` allows any value type for `text`/`attachments`. A message with `attachments: "x"` passes the rule, then `item.attachments?.length > 0` (`App.jsx:4368`) and `.map(...)` (`App.jsx:4370`) throw → white-screens every viewer of the channel.

**S4. Voice-recording upload bypasses all size limits** (MEDIUM)
- `App.jsx:3220-3253` uploads the MediaRecorder blob with no size/duration check; the 10 MB cap only applies to `addPendingFiles`. Arbitrarily large `.webm` hits Cloudinary.

**S5. Unlimited token / magic-link minting** (MEDIUM)
- `api/livekit-token.js:22-35` — ID token verified, but no rate limit, no user-existence check, and every token grants `canPublish` in the shared `"global"` room.
- `api/generate-magic-link.js:33-41` — same missing rate limiting; mints links for any email (silent account creation).
- Both return raw `err.message` (mild info disclosure).

### Honorable mentions
- RTDB `group-calls` root readable/writable by all authenticated users; `$connId.contains(auth.uid)` substring auth is weak (`database.rules.json:84-85`).
- Encrypted-but-committed service-account key: `quadchat-cf697-firebase-adminsdk-fbsvc-bfa0a4e8be.json.gpg`.
- Display names are not enforced unique — name-impersonation possible.

---

## 5. Quota Management (limited/free-tier service budgets) — 5/10

### Strengths
- Message pagination: initial `limitToLast(30)` (`App.jsx:1132-1136`), older pages `limit(30)` (`App.jsx:3365-3370`).
- Typing indicators debounced well (max 1 write per 2s, auto-clear 3s) — though currently rejected by rules (see UX bug).
- Analytics query capped at `limit(500)` (`App.jsx:571-577`).
- **Excellent LiveKit media-level cost controls:** `adaptiveStream: true`, `dynacast: true` (`App.jsx:2519`), Opus capped at 25 kbps (`App.jsx:123, 1699, 2620`), `dtx: true` (`App.jsx:2615`), P2P fallback when LiveKit fails (`App.jsx:2637-2642`).

### Critical findings

**Q1. Unbounded modQuery double-read on every channel load** (HIGHEST)
- `App.jsx:1200-1201` — `onSnapshot(startAfter(oldest))` with no `limit()` re-reads the entire message tail on load (≥2× the initial 30), and every new message is billed to both `newQuery` and `modQuery` → ~2 reads/message/client across all connected clients.
- Fix: limit the mod listener to the loaded window (e.g., `limitToLast(PAGE_SIZE)`) and cap `newQuery`.

**Q2. Whole-`users`-collection listener + 30s heartbeat**
- `App.jsx:855-874` reads N user docs per client per session; `App.jsx:995-1002` writes a heartbeat every 30s (~2,900 writes/user/day), plus another write per message send (`App.jsx:3456`). Heartbeat fan-out multiplies with the full-listener.

**Q3. RTDB call signaling fan-out to all online clients**
- `App.jsx:1041` — `onChildAdded` on the entire `calls` path for every client, plus per-call status listeners, and per-ICE-candidate writes broadcast to everyone. RTDB bandwidth grows with N clients × calls.

**Q4. Cloudinary quota has no app-level governor**
- Unsigned preset usable by anyone; no compression before upload (`App.jsx:414-418`); originals displayed untransformed (no `f_auto`/`q_auto`/`w_`); voice blobs unbounded. Storage/bandwidth quota is open-ended.

**Q5. No rate limiting or backoff on expensive ops**
- No throttles on message writes, uploads, LiveKit token requests, or magic-link generation. The only exponential backoff in the app is the presence WebSocket reconnect (`App.jsx:925-931`).

---

## Top Recommended Fixes (highest ROI)

1. **Security:** add `email_verified` to `isAdminEmail()` and stop trusting client-writable `isAdmin`/`isDeveloper` profile keys — check custom claims instead.
2. **Quota/Perf:** add `limit()` to the mods query and cap the message list (virtualize or cap at N hundred).
3. **Quota/Perf:** move presence heartbeats out of Firestore — you already have a presence WebSocket; use it instead of 30s `setDoc` writes.
4. **Perf:** memoize the message list (`React.memo`), memoize `renderMessageText`, and split the composer state out of the top-level component.
5. **Security:** add server-side validation for Cloudinary (signed uploads / allowed formats) and enforce voice-message size.
6. **UX:** fix the typing-indicator rules/client mismatch, and add focus management to modals.

---

## Verdict

The app has **impressive feature breadth and genuinely good call infrastructure**, and its rendering XSS defenses are solid. The dominant problems are architectural: a monolithic un-memoized component, whole-collection listeners combined with heartbeats (the single biggest cost/performance driver), and an admin trust model built on an unverified email claim.
