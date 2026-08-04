# QuadChat — In-Depth Review

**Date:** 2026-08-04
**Version:** 1.7.13 (HEAD `4e3e8e9`)
**Context:** A private group chat for a friend group of ~6 people
**Scope:** `src/App.jsx` (2,874 lines), `src/hooks/` (`useCalls.js` 1,379 lines), `src/components/*`, `src/utils/*`, `src/styles.css` (3,143 lines), `cloudinary.js`, `firebase.js`, `api/*`, `firestore.rules`, `database.rules.json`, `quadchat-worker/` (Cloudflare Durable Object presence server), `game/`, `scripts/`, deploy config.

---

## Ratings at a Glance

| Area | Rating | One-line summary |
|---|---|---|
| **UI** | **8.7/10** | The reply quote settled back inside the bubble in a dark, cohesive treatment, and the new confirm dialogs are fully on-brand. |
| **UX** | **8.4/10** | Reply jumps now work even for messages scrolled out of memory, and the last keyboard dead-ends — modals and `window.confirm` — are gone. |
| **Performance** | **7.4/10** | The message list is memoized and the 1.48 MB single chunk became a 276 KB entry plus lazy firebase/livekit/media chunks. |
| **Security** | **9.0/10** | Call metadata is no longer broadcast to the whole group: detection now runs through per-user, owner-locked ring nodes, and `calls` reads are participant-only again. |
| **Overall** | **8.5/10** | The last review's priority list is fully closed — including the one real privacy leak, which is now gone. |

---

## Summary

QuadChat is a private group chat for roughly six friends, and it keeps punching far above its weight: 1-to-1 voice calls, LiveKit group calls with a P2P mesh fallback, screen sharing with a request flow, voice messages with pause/resume, attachments, DMs, typing indicators, presence with statuses and scheduled busy, an in-app notification center, message search with jump-to-result, message editing, threaded replies with jump-to-original, RSVP gaming cards, per-user session analytics, and admin moderation (`?mute`, `?warn`, `?unwarn`, `?purge`).

This review supersedes the v1.7.12 review and covers the current **v1.7.13** HEAD. Four focused releases sit between the v1.7.9 review and here:

- **v1.7.10 — the reply quote moved back inside the bubble.** The above-bubble card experiment (v1.7.8/9) was reverted; the quote now renders inside the message itself with a dark-tinted background (`--quote-bg` → `rgba(0,0,0,0.25)`, `styles.css:38`), sitting above the content and reading as one unit with the composer's reply banner.
- **v1.7.11 — reply jumps now reach old messages.** Clicking a quote that's out of the loaded window fetches the target doc and reloads the channel with a context window around it (15 before, 25 after), then scrolls and pulses it — the search-jump pattern reused (`App.jsx:2254-2280`, `733-757`, `965-974`). The keyboard path got the same treatment, so Enter/Space now pulses the highlight too.
- **v1.7.12 — security, a11y, and performance batch.** This commit alone closes most of the last review's "top priorities": the signup kill-switch is now enforced server-side in rules, the Cloudinary signature endpoint validates uploads, RTDB call rules are shape-locked and the pair-check is now exact, every `window.confirm` became a real focus-trapped dialog, every modal got a proper `Dialog` wrapper, `MessageItem` is `React.memo`'d with stable callbacks, and the bundle is split.
- **v1.7.13 — call metadata is no longer broadcast.** The one real privacy leak left by v1.7.12 — the whole-`calls` collection read that let any signed-in user see everyone's call metadata and SDP — is gone. Incoming-call detection now runs through per-user `call-rings/<uid>` nodes (`database.rules.json:103-128`): a caller writes a tiny ring entry into the callee's node, the callee listens only on their own node (`useCalls.js:106-190`), and `calls` reads are back to participant-only (`database.rules.json:33`). Each user's ring node is owner-locked, so nobody can read or write anyone else's.

Verified against the code (not just the commit messages): `window.confirm` count is now **zero** across `src/`; the current build emits 4 chunks — `index` **276 KB** (was 1.48 MB), `firebase` 673 KB, lazy `livekit-client` 532 KB, `lucide-react` 28 KB — with livekit loaded only when joining a group call (`useCalls.js:1123`); `firestore.rules` blocks profile creation when `settings/app.signupEnabled` is false, admin-only; the confirm dialog and reply quote both consume the design tokens; and the ring write in `startCall` is rule-compatible (callerId = writer, calleeId = ring owner) with stale rings cleaned by the callee on the 20 s freshness check.

The remaining caveats are now *aspirational* rather than urgent: the composer is still a single-line input, there are still no reactions/pins, the whole `users` collection is still one `onSnapshot`, and 57 production `console.log`s ship in `useCalls.js`.

---

## 1. UI — 8.7/10

### Strengths

- **A real design system, not a plugin skin.** CSS variables (`styles.css:1-103`), a custom logo/favicon, dark-first palette with a light theme, and a `--ui-scale` knob (50–100%) that actually scales the whole interface.
- **The reply quote finally feels settled.** After the v1.7.8/9 experiment of floating the quote *above* the bubble, the team reverted and put it back *inside*, on a dark-tinted chip with a 3px accent border (`styles.css:1397-1410`). It's the conventional choice (Telegram/Discord style) and the cleaner one: the quote, the bubble, and the composer's "Replying to…" banner all share the same `--quote-*` tokens, so replies read as one system.
- **The new confirm dialogs are properly styled, not a browser default.** `ConfirmDialog` renders a card with a title, message, and Cancel/Confirm buttons that use the tokenized `.secondary-button` / `.danger-button` treatments — it finally looks like part of the app instead of an OS popup (`ConfirmDialog.jsx`, `styles.css:550-592`).
- **The brand splash.** `index.html` ships a styled loading state ("QC" mark, spinner, `prefers-reduced-motion` support) so the app never flashes blank, and the auth screen carries the same visual language.
- **Semantic banners.** Errors (red), mutes, and warnings (amber) with icons and `role="alert"` are visually distinct and correctly used.
- **Responsive down to small phones.** Breakpoints at 900/640/400 px, sidebars collapse to icon rails, and the composer pins to the bottom at any width.
- **Rich inline rendering.** Inline images, video/audio players, autolinked URLs, `@name`/`@everyone` mention highlighting, replies, day separators, attachment cards, and a genuinely nice RSVP gaming card with a live participant roster.
- **Settings organized into tabs** (Account / Security / Appearance / Accessibility / Advanced / Admin) with "Safe" / "Dangerous" tags on destructive actions.

### Weaknesses

- **Two design languages still coexist.** The main app uses hand-rolled BEM-ish classes, but `GameSessionCard.jsx` and the Gaming Post modal are pure Tailwind (slate-800 cards, indigo buttons). The new confirm dialog is token-based, which makes the Gaming Post modal's Tailwind look even more like a bolt-on.
- **The Gaming Post modal close button is still a literal `"X"` text node** (`Modals.jsx:301`), the only place in the app that hasn't adopted the lucide icon.
- **Dead `MediaRenderer.jsx`** carries its own fourth visual style (light-themed Tailwind) and is never imported anywhere.
- Minor: the reply card's hover ring was removed in the revert (the card is now only distinguished by the accent border), and the users-sidebar DM/call/mute actions use 10–12 px icons that are easy to fat-finger.

### Verdict

The quote-inside-bubble decision plus the on-brand confirm dialog complete the reply feature's visual arc. The design identity stays cohesive, dark-first, and responsive; the Tailwind drift and a single text-button straggler are the only real blemishes.

---

## 2. UX — 8.4/10

### Strengths

- **Reply jump now has a fallback — the last real reply gap is closed.** If the original message isn't in the loaded window, clicking the quote fetches the target by id and reloads the channel with a 40-message context window centered on it, then smooth-scrolls and pulses a 2.5s highlight (`App.jsx:2254-2280`). Both mouse and keyboard (Enter/Space, `role="button"`, `tabIndex={0}`) go through the same `onJumpToMessage` path, so keyboard users get the pulse too (`MessageList.jsx:108-124`). Deleted originals degrade to "Message unavailable".
- **All seven `window.confirm` calls are gone** (unlink Google/password, remove photo/account, delete message, purge). `useConfirmDialog` returns a Promise from `ask()`, so the calling code barely changed, but the UI is now a real, styled, focus-managed dialog (`useConfirmDialog.js`, `ConfirmDialog.jsx`).
- **Every modal is now keyboard-usable.** The new `Dialog` wrapper provides focus-on-open, focus restored to the trigger on close, a Tab focus trap (wrap-around), and Escape-to-close — applied to Status, New DM, Analytics, and Gaming Post. The Incoming Call dialog correctly disables both backdrop and Escape so a call can't be dismissed by accident (`Dialog.jsx`, `Modals.jsx`).
- **Search is a first-class feature.** A header button opens a panel that queries every channel and DM, groups results per channel with sender + time, and clicking a result jumps to the exact message with a highlighted pulse — including loading a context window around it.
- **Message editing** with an "(edited)" marker, server-enforced to the author and to `text`/`edited`/`editedAt` only.
- **Calls are robust.** The 10-second ICE grace period before cleanup on `disconnected` (caller and callee) prevents Wi-Fi-blip hang-ups; the P2P group call no longer deletes participants who joined >30 s apart; LiveKit fails over to a P2P mesh automatically.
- **The notification stack is complete**: in-app bell with unread badge, toasts, cross-channel + mention alerts, and desktop notifications — all gated on a sane `document.hidden`/focus heuristic.
- **Forgiving details**: a dedicated voice-message flow with pause/resume/cancel, scheduled busy status, admin mute/warn with in-chat receipts, account-safety guards, and an error boundary with a reload button instead of a black screen.
- **Accessibility baseline is above genre average**: `role="log"` + `aria-live="polite"` on the message list, real `tablist`/`tab` semantics, focus-visible styles, `prefers-reduced-motion`, a UI-scale slider, and now real focus management on dialogs.

### Weaknesses

- **The composer is still a single-line `<input type="text">`** with `maxLength={500}` (`Composer.jsx:236, 247`): no Shift+Enter, no markdown, no `@`-mention suggestions.
- **No reactions, no pins, no emoji picker** — the features friends will ask for next.
- **The message menu popover and notification panel** still aren't keyboard-navigable (no arrow-key handling, no menu semantics), even though the modals around them are now first-class.
- **Search is capped at the newest 2,000 messages per channel** and re-runs the full sequential query on every Enter.
- **`Dialog` focus handling is good but not perfect**: focus lands on the first focusable (the close button in Status/New DM/Analytics) rather than a semantically-chosen element, and the Settings page is a full-screen panel rather than a modal, so it has no trap (fine for a full page, but its content is still part of the same tab order).
- **The confirm dialog defaults to danger styling** (`danger: options.danger !== false`), so benign asks like "Replace profile picture?" render a red confirm button.
- Some error paths still surface raw `firebaseError.message`, while the auth flow is nicely mapped via `getAuthErrorMessage`.

### Verdict

This is the biggest UX jump in the project's history: reply-jump works for any message, every dialog is focus-managed, and the browser confirm spam is gone. The remaining friction — a richer composer, reactions, keyboard-navigable popovers — is now squarely "next feature" territory rather than "fix the basics."

---

## 3. Performance — 7.4/10

### Strengths

- **The message list is memoized.** `MessageItem` is wrapped in `React.memo` (`MessageList.jsx:21`), and the props it receives are now referentially stable: `handleRsvp`, `handleDeleteMessage`, `startEditMessage`, and `jumpToReply` are `useCallback`s, and `joinGroupCall` is passed through a ref-stable wrapper (`App.jsx:352-360`). Typing in the composer — which lives in `App` — no longer re-renders the subtree of every message.
- **The bundle is finally split.** The 1.48 MB single chunk became:
  - `index` **276 KB** (84 KB gzip) — app code
  - `firebase` 673 KB (156 KB gzip) — manual chunk (`vite.config.js:20-33`)
  - `livekit-client` 532 KB (139 KB gzip) — **lazy**, via `await import("livekit-client")` inside the join-call path (`useCalls.js:1123`), so group-call code only downloads when someone joins a call
  - `media` 28 KB — lucide-react icons
  - CSS 56 KB (11 KB gzip)
  - Critical path ≈ 308 KB gzip (index + firebase + media + CSS).
- **The architecture risk is retired.** Splitting 6,300 lines of `App()` into hooks and components removed the worst structural failure mode; the P2P-call bug class lived in that monolith.
- **Presence no longer causes re-renders.** `lastOnline` is written once by the worker on disconnect (10 s grace), not by every client on a timer; the live "…m ago" labels live in the small self-contained `RelativeTime` component instead of a global tick.
- Message list is paginated (`PAGE_SIZE=30`, `MAX_MESSAGES=500`) with scroll-position preservation; object URLs are revoked; channel-switch listeners use a cancelled guard; `?purge` deletes sequentially.
- Voice calls are aggressively bandwidth-budgeted (opus ~25 kbps), and the P2P host is picked by a computed "capability" score.

### Weaknesses

1. **The list map still runs on every keystroke.** `MessageList` itself is not memoized, so typing re-runs the `messages.map` and prop-comparison for every item — the per-item renders are skipped, but the iteration cost remains. Memoizing `MessageList` (or moving composer state down into `Composer`) would remove it entirely.
2. **`renderMessageText` rebuilds the name map from all profiles for every message** (`messages.jsx:36-38`) — O(profiles × messages) per render. It was the same last review; the memo now hides most of the cost, but it's still wasted work.
3. **Whole-collection users listener** (`App.jsx:607-626`) plus a cross-channel watcher that holds tail listeners on *every* channel and *every* DM. Fine for 6 users; won't scale past it.
4. **`experimentalForceLongPolling: true`** (`firebase.js:20`) disables Firestore's WebSocket streaming — a workaround that costs latency and throughput.
5. **No optimistic UI.** Sends render only after `addDoc` resolves, and attachments go Cloudinary → Firestore serially, so sends feel latent.
6. **57 production `console.log`s in `useCalls.js`** ship to prod. Useful during development and pure noise after; they're concentrated in the call state machine now.
7. **Dead weight in `package.json`:** `react-pdf`/pdf.js, `cloudinary-react`, and `cloudinary-core` are still dependencies — only used by the never-imported `MediaRenderer.jsx`, so they're not in the bundle, but they're install-time bloat and should be dropped.

### Verdict

The two highest-leverage performance items from the last review — per-message memoization and bundle splitting — are done, and the lived experience for six friends is instant. What's left is iterative: memoize the list itself, scope the users listener, cache the name map, and drop the dead packages.

---

## 4. Security — 9.0/10

### Strengths

- **Call metadata is never broadcast.** This was the one real privacy leak, and v1.7.13 removed it. Incoming-call detection no longer listens on the shared `calls` collection; instead a caller writes a minimal ring entry (`callerId`, `calleeId`, names, `startedAt`, `callKey`) into the callee's own `call-rings/<uid>/<callKey>` node, and each client listens only on its own node (`useCalls.js:106-190`). Rules lock rings down: read is owner-only, writes are owner-or-verified-caller, and `.validate` pins `callerId` to the writer and `calleeId` to the ring owner (`database.rules.json:103-128`). `calls` reads are back to participant-only (`database.rules.json:33`), so nobody can see a call's SDP or who's calling whom unless they're in the call. Rings self-clean: the callee removes them on answer/reject/status-change and on the 20 s staleness check (`useCalls.js:101-104`).
- **The signup kill-switch is now real, enforced server-side.** The rules gate profile *creation* on `signupEnabled()`, which reads the admin-only `/settings/app` doc (`firestore.rules:54-61, 150-157`); the admin UI toggle writes it and is itself admin-gated (`App.jsx:1557-1577`). Turning signup off now blocks even direct SDK/API profile creation, not just hiding the tab. The admin email path intentionally bypasses the gate so admins can always bootstrap their own profile.
- **Upload validation moved onto the server.** `/api/cloudinary-signature` now verifies the ID token *and* validates client-reported kind/size/type/name before signing: a blocklist of active-content types (html, js, svg, exe, php, swf, …), extension blocklist, 10 MB cap for message/voice, 5 MB cap for profile, profile must be an image, voice must be audio (`api/cloudinary-signature.js:29-90`). `uploadToCloudinary` now sends the metadata (`cloudinary.js:11-20`).
- **Signaling rules are shape-locked.** The 1-to-1 `calls` node now validates `offer`/`answer`/`status`/`startedAt`/mute flags/`screenShare*` types (`database.rules.json:49-78`); `group-calls` participants require `name` + `joinedAt`, `createdAt` is type-checked, and `screenShareActive`/`screenShareRequest` are validated (`database.rules.json:142-150`).
- **The group-call pair check is now exact.** `connections` access uses `$connId.startsWith(auth.uid + '_') || $connId.endsWith('_' + auth.uid)` instead of `contains()`, so a uid like `ab` can no longer read a pair node `a_b` it doesn't belong to (uids are `[A-Za-z0-9]`-only, making the `_` delimiter safe) (`database.rules.json:165-172`).
- **No credentials in the bundle.** Cloudinary cloud name/preset come from `VITE_`-prefixed env vars; `apiKey`/`apiSecret` are server-only. The service account and LiveKit keys never touch the client.
- **The presence worker verifies identity end-to-end.** Clients send a Firebase ID token and the Durable Object verifies `aud`/`iss`/`exp` and the RSA signature against Google's JWKS before using the verified `sub`. Its Firestore write uses an `updateMask` limited to `lastOnline`, so the old profile-wipe bug is structurally impossible.
- **Server endpoints verify identity.** LiveKit tokens and magic links both require a verified ID token (magic links also get a server-side admin check).
- **No XSS vector.** All text renders through React (auto-escaped), no `dangerouslySetInnerHTML`/`eval` in the app, every URL runs through `safeUrl` (http/https only), and attachments are URLs. The reply quote renders as plain text.

### Weaknesses

1. **Any signed-in user can still create a call targeting *any* `calleeId`** (`database.rules.json:36-40`), which now also writes a ring into that user's node — enabling targeted notification spam. Mitigated only by the 20 s freshness filter and the ring's tiny payload.
2. **Unknown keys under a `group-calls` node are still writable by anyone.** `.validate` blocks only the keys it names; `createdAt`, `screenShareActive`, `screenShareRequest`, `participants`, and `connections` are locked, but a new key (e.g. `evil`) passes the open `.write: auth != null` parent rule (`database.rules.json:140`).
3. **Upload validation is auth-only and trusts client metadata.** The signature endpoint validates what the browser *reports* — a modified client can claim `text/plain` for an HTML payload. True server-side inspection (sniff the file) is still not there.
4. **Presence token rides in the URL query string** (`usePresence.js:25`) — tokens can leak into logs/referrers.
5. **Client admin check still ignores `email_verified`** while rules require it — an unverified account holding the admin email sees admin UI but fails writes.
6. **No rate limiting** on the three API endpoints or the worker beyond Firebase/Cloudflare's own defaults.
7. **Admin identity is still public** — the hardcoded admin email lives in both the rules and the client bundle.
8. **Rings only fire for users who are online.** A call placed to someone who's offline leaves a ring that's silently discarded on their next connect (stale >20 s), so there's no missed-call surface. That's a feature gap, not a security gap, but worth noting as the ring design's tradeoff.

### Verdict

Every gap from the last review's priority list is closed. The `calls` read-widening — the one spot where v1.7.12 traded privacy for function — is fully reversed with a clean per-user ring design, and the ring nodes are locked down tighter than the call nodes they announce. What remains is the usual small-court list (spam-capable call creation, client-trusted upload MIME, no rate limiting, public admin email), all acceptable until the circle stops being trusted.

---

## 5. Overall — 8.5/10

**What it is:** a feature-complete, visually polished private group chat that keeps out-performing its own humble scope. Chat, DMs, voice, group calls with graceful fallback, screen share, files, voice notes, search, editing, replies with jump-to-original that works even for old messages, gaming sessions, per-user analytics, and moderation — all in a cohesive package with an actual design identity.

**Why this is the best release cycle yet:** the v1.7.12 batch took the last review's priority list and closed nearly all of it, and v1.7.13 closed the one item it left open. Reply-jump now reaches scrolled-out messages (v1.7.11). The signup kill-switch is enforced by Firestore rules, uploads are validated by the server, and the RTDB signaling rules are shape-locked and exact-match. Every modal is focus-trapped and Escape/backdrop-aware, and every `window.confirm` is a real, styled dialog. The message list is memoized, and the single 1.48 MB chunk became a 276 KB entry with lazy livekit. And incoming-call detection — which briefly required broadcasting call metadata to the whole group — now runs through per-user, owner-locked ring nodes, so nobody can see who's calling whom. All of it is verified against the code and a fresh build — not just the commit messages.

**What holds it back:** the composer is still one line of text, there are still no reactions or pins, the whole `users` collection is one listener, and `useCalls.js` ships 57 production `console.log`s. None of it matters to six friends; all of it is the difference between "great hobby chat" and "the next thing."

### Top priorities if you keep building

1. **Make the composer a real composer.** Multi-line with Shift+Enter, an emoji picker, and `@`-mention suggestions. This is the single most-requested-sounding feature a friend group will hit next, and it's adjacent to replies (the composer already holds the reply banner).
2. **Reactions.** The data model already stores per-user state safely (the RSVP card proves the pattern); a `reactions` map on messages with rule coverage is the smallest high-value feature left.
3. **Scope the users listener + memoize the list.** Replace the whole-collection `onSnapshot` with per-render-needed fetches (or at least a per-channel filter), and memo `MessageList` itself so typing doesn't run the full map. Then cache the per-message name-map build.
4. **Finish the upload story.** Have the signature endpoint (or a small worker) sniff the file content so a lying client can't upload HTML as `text/plain`; and drop `react-pdf`/`cloudinary-react`/`cloudinary-core` from `package.json`.
5. **Add a missed-call surface.** Rings are currently fire-and-forget: a call to an offline user is silently discarded on reconnect. Persist recent rings (or reuse the notification center) so offline members learn who tried them.
6. **Delete dead code.** Remove `MediaRenderer.jsx` and its dependencies, convert the last `"X"` text button, and strip or gate the `useCalls.js` console logs.

---

*Review written 2026-08-04 against v1.7.13 (`git rev-parse HEAD` = `4e3e8e9`), superseding the v1.7.12 review.*
