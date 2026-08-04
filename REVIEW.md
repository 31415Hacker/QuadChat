# QuadChat — In-Depth Review

**Date:** 2026-08-04
**Version:** 1.7.6 (HEAD `1e1eeb0` after the App.jsx modularization + signed-uploads + worker rework)
**Context:** A private group chat for a friend group of ~6 people
**Scope:** `src/App.jsx` (2,814 lines), `src/hooks/` (`useCalls.js` 1,332 lines), `src/components/*`, `src/utils/*`, `src/styles.css` (3,070 lines), `cloudinary.js`, `firebase.js`, `api/*`, `firestore.rules`, `database.rules.json`, `quadchat-worker/` (Cloudflare Durable Object presence server), `game/`, `scripts/`, deploy config.

---

## Ratings at a Glance

| Area | Rating | One-line summary |
|---|---|---|
| **UI** | **8.5/10** | A cohesive, genuinely attractive dark-first design system, a proper brand splash, and a responsive layout that survives phones. |
| **UX** | **7.5/10** | Feature-dense and forgiving (search, edit, calls, notifications); modal keyboard gaps and `window.confirm` dialogs hold it back. |
| **Performance** | **6.0/10** | The monolith split removed the worst structural risk, but whole-tree re-renders and a 1.48 MB unbundled client still cap it. |
| **Security** | **8.0/10** | Uploads are now signed, the presence worker verifies JWTs, and rules are careful; open signaling nodes and a cosmetic signup gate remain. |
| **Overall** | **7.8/10** | A feature-complete, unusually well-crafted hobby chat that just had its best release cycle yet — now mostly held back by rendering and remaining UX/security polish. |

---

## Summary

QuadChat is a private group chat for roughly six friends, and it keeps punching far above its weight: 1-to-1 voice calls, LiveKit group calls with a P2P mesh fallback, screen sharing with a request flow, voice messages with pause/resume, attachments, DMs, typing indicators, presence with statuses and scheduled busy, an in-app notification center, message search with jump-to-result, message editing, RSVP gaming cards, per-user session analytics, and admin moderation (`?mute`, `?warn`, `?unwarn`, `?purge`).

This review supersedes the 2026-08-03 review (v1.6.24) and covers the entire **v1.7 line**, which was the healthiest stretch of releases yet:

- **v1.7.1 — the monolith finally split.** `App.jsx` went from 6,307 lines to 2,814. Call logic moved into `useCalls.js` (1,332 lines), presence and notifications into hooks, and the UI into 12 extracted components.
- **v1.7.1 — Cloudinary uploads are now signed.** The upload preset + API key are no longer baked into the bundle; the client fetches a server-minted signature from a Vercel endpoint that first verifies the Firebase ID token (`api/cloudinary-signature.js`). This closes the biggest gap called out in the previous review.
- **v1.7.2 — Cloudinary credentials read from `VITE_CLOUDINARY_*` env vars** (plus server-only `CLOUDINARY_API_KEY/SECRET`). No secrets in the client anymore.
- **v1.7.3 — loading splash + error boundary.** The recurring "black screen" failure mode now has a branded splash in `index.html` and a `fatal-error` fallback with a reload button in `main.jsx`.
- **v1.7.4–6 — the presence worker was rebuilt from scratch** (`quadchat-worker/`): a Cloudflare Durable Object WebSocket hub that JWT-verifies Firebase ID tokens, tracks connections with a 10 s offline-grace alarm, and writes `lastOnline` directly to Firestore via a service-account REST call — using an `updateMask` so it can *only* ever touch the `lastOnline` field (structurally immune to the old profile-wiping bug). It even ships smoke tests. The old `presence-worker/` is gone.

The remaining caveats are now about *rendering* rather than *architecture*: `App.jsx` still holds 64 `useState`, 30 `useRef`, and 30 `useEffect`, the entire `users` collection is still one `onSnapshot`, nothing is `React.memo`'d (typing in the composer re-renders the whole message list), and the bundle is still a single 1.48 MB chunk. None of this hurts six friends, but it is the ceiling on further growth.

---

## 1. UI — 8.5/10

### Strengths

- **A real design system, not a plugin skin.** CSS variables (`styles.css:1-103`), a custom logo/favicon, theme color, dark-first palette with a light theme, and a `--ui-scale` knob (50–100%) that actually scales the whole interface.
- **The brand splash.** `index.html` ships a styled loading state ("QC" mark, spinner, `prefers-reduced-motion` support) so the app never flashes blank, and the auth screen carries the same visual language.
- **Semantic banners.** Errors (red), mutes, and warnings (amber) with icons and `role="alert"` are visually distinct and correctly used.
- **Responsive down to small phones.** Breakpoints at 900/640/400 px, sidebars collapse to icon rails, and the composer pins to the bottom at any width — a long, hard-won battle (v1.6.8–1.6.16 were almost entirely responsive fixes) that paid off.
- **Rich inline rendering.** Inline images, video/audio players, autolinked URLs, `@name`/`@everyone` mention highlighting, replies, day separators, attachment cards, and a genuinely nice RSVP gaming card (`GameSessionCard.jsx`) with a live participant roster.
- **Settings organized into tabs** (Account / Security / Appearance / Accessibility / Advanced / Admin) instead of one long scroll, with "Safe" / "Dangerous" tags on destructive actions and a version-in-header toggle.

### Weaknesses

- **Two design languages coexist.** The main app uses hand-rolled BEM-ish classes, but `GameSessionCard.jsx` and the Gaming Post modal are pure Tailwind (slate-800 cards, indigo buttons). Both live side-by-side in the same layout and subtly clash.
- **Dead `MediaRenderer.jsx`** carries its own fourth visual style (light-themed Tailwind) and is never imported anywhere — dead weight in every sense.
- **The Gaming Post modal close button is a literal `"X"`** text node (`Modals.jsx:292`), not an icon button.
- Minor polish: the users-sidebar DM/call/mute actions use 10–12 px icons that are easy to fat-finger.

### Verdict

For a hobby project this is a genuinely polished, recognizable visual identity — dark-first, warm, cohesive, and responsive. The two-style drift is the only thing keeping it from an even higher score.

---

## 2. UX — 7.5/10

### Strengths

- **Search is a first-class feature.** A header button opens a panel that queries every channel and DM, groups results per channel with sender + time, and clicking a result jumps to the exact message with a highlighted pulse — including loading a context window around it (`App.jsx:2212-2227`, `720-746`).
- **Message editing** with an "(edited)" marker, server-enforced to the author and to `text`/`edited`/`editedAt` only.
- **Calls are robust.** The 10-second ICE grace period before cleanup on `disconnected` (caller and callee, `useCalls.js:415-437, 582-604`) prevents the old Wi-Fi-blip hang-ups; the P2P group call no longer deletes participants who joined >30 s apart; LiveKit fails over to a P2P mesh automatically.
- **The notification stack is complete**: in-app bell with unread badge, toasts, cross-channel + mention alerts, and desktop notifications — all gated on a sane `document.hidden`/focus heuristic (`App.jsx:1057-1103`).
- **Forgiving details**: a dedicated voice-message flow with pause/resume/cancel, scheduled busy status that auto-flips to Busy, an admin mute/warn system with in-chat receipts, a `window.confirm` gate before `?purge`, account-safety guards (re-auth to change password, provider-orphan protection), and an error boundary with a reload button instead of a black screen.
- **Accessibility baseline is above genre average**: `role="log"` + `aria-live="polite"` on the message list, real `tablist`/`tab` semantics, focus-visible styles, `prefers-reduced-motion`, and a UI-scale slider.

### Weaknesses

- **Modals still aren't keyboard-usable.** Status, New DM, Analytics, and Incoming Call dialogs have no focus trap, no focus-on-open, and no Escape-to-close (only the search panel gets Escape, `App.jsx:1012-1016`). The Gaming Post modal has `role="dialog" aria-modal` but no trap either.
- **Seven `window.confirm` calls** for destructive actions (unlink Google/password, remove photo/account, delete message, purge). They block the thread and aren't screen-reader friendly.
- **The composer is a single-line `<input type="text">`** with `maxLength={500}` (`Composer.jsx:234-248`): no Shift+Enter, no markdown, no `@`-mention suggestions.
- **No reactions, no pins, no emoji picker** — the features friends will ask for next.
- **Search is capped at the newest 2,000 messages per channel** (`App.jsx:2183-2185`) and re-runs the full sequential query on every Enter; fine now, brittle later.
- Some error paths still surface raw `firebaseError.message` (e.g. `App.jsx:449, 559, 610`), while the auth flow is nicely mapped via `getAuthErrorMessage`.

### Verdict

The feature-to-annoyance ratio is excellent, and the recent additions (search, edit, error boundary) were exactly the right calls. The remaining friction is accessibility plumbing: focus-managed modals and a multi-line composer would move this up a full point.

---

## 3. Performance — 6.0/10

### Strengths

- **The architecture risk is largely retired.** Splitting 6,307 lines of `App()` into hooks and components didn't just help maintainability — the P2P-call bug class lived in that monolith, and there's far less surface for that kind of mistake now.
- **Presence no longer causes re-renders.** `lastOnline` is written once by the worker on disconnect (10 s grace), not by every client on a timer; the live "…m ago" labels live in the small self-contained `RelativeTime` component instead of a global tick.
- Message list is paginated (`PAGE_SIZE=30`, `MAX_MESSAGES=500`) with scroll-position preservation; object URLs are revoked; channel-switch listeners use a cancelled guard; `?purge` deletes sequentially.
- Voice calls are aggressively bandwidth-budgeted (opus ~25 kbps), and the P2P host is picked by a computed "capability" score.

### Weaknesses

1. **Whole-app re-render on every keystroke.** `App.jsx` still owns the composer text state and passes it down; with no `React.memo` anywhere, each keystroke re-renders the auth/header/modals/sidebars *and* the entire message list.
2. **`renderMessageText` rebuilds the name map from all profiles for every message** (`messages.jsx:36-38`) — O(profiles × messages) per render, still.
3. **Whole-collection users listener** (`App.jsx:596-615`) plus a cross-channel watcher that holds tail listeners on *every* channel and *every* DM (`App.jsx:1118-1185`). Fine for 6 users; won't scale past it.
4. **1.48 MB single JS chunk, no code splitting.** `dist/assets/index-DffNM-xc.js` ≈ 1.48 MB (Firestore + Auth + RTDB + LiveKit + React in one file). No dynamic `import()` anywhere.
5. **~77 production `console.log`s in `useCalls.js` alone** ship to prod (plus a handful elsewhere). They're useful during development and pure noise after.
6. **`experimentalForceLongPolling: true`** (`firebase.js:19-21`) disables Firestore's WebSocket streaming — a workaround that costs latency and throughput.
7. **No optimistic UI.** Sends render only after `addDoc` resolves, and attachments go Cloudinary → Firestore serially, so sends feel latent.
8. **Dead weight in `package.json`:** `react-pdf`/pdf.js (used only by the never-imported `MediaRenderer.jsx`), `cloudinary-react`, and `cloudinary-core` inflate lockfile and confuse audits.

### Verdict

For six users everything responds instantly, so this score understates the lived experience. The good news: the highest-leverage fix from the last review — splitting the component — is done. The next ones are pure rendering wins (memoize the message list, scope the users listener) and a bundle diet.

---

## 4. Security — 8.0/10

### Strengths

- **Uploads are now signed.** The browser can no longer upload directly with a public preset; it must fetch a signature from `/api/cloudinary-signature`, which verifies a Firebase ID token first (`cloudinary.js:9-26`, `api/cloudinary-signature.js:22-46`). The previous review's #1 gap is closed.
- **No credentials in the bundle.** Cloudinary cloud name/preset now come from `VITE_`-prefixed env vars; `apiKey`/`apiSecret` are server-only. The service account and LiveKit keys never touch the client.
- **The presence worker verifies identity end-to-end.** Clients send a Firebase ID token and the Durable Object verifies `aud`/`iss`/`exp` and the RSA signature against Google's JWKS before using the verified `sub` (`quadchat-worker/src/index.js:47-91`). The worker's Firestore write uses an `updateMask` limited to `lastOnline` (`index.js:177-214`), so it cannot clobber profile fields — the profile-wipe bug is structurally impossible.
- **Server endpoints verify identity.** LiveKit tokens (`api/livekit-token.js:23-24`) and magic links (`api/generate-magic-link.js:22-31`, with a server-side admin check) both require a verified ID token.
- **Firestore rules are still meticulous.** Message creates are allow-listed field-by-field and force `userId == request.auth.uid`; admin-command keys require admin; mutes are enforced server-side; message updates are locked to the author's `rsvps` key or the author editing their own `text`/`edited`; DM ids must match the canonical sorted-participant id and be readable/writable only by participants (`firestore.rules:74-135`). The self-edit of `warning`/`mute`/admin fields remains blocked (`firestore.rules:149-155`).
- **No XSS vector.** All text renders through React (auto-escaped), no `dangerouslySetInnerHTML`/`eval` in the app, every URL runs through `safeUrl` (http/https only), and attachments are URLs.
- **RTDB signaling is tighter than before.** `group-calls` participants are locked to their own entries and `connections` to pair members (`database.rules.json:69-88`).

### Weaknesses

1. **The 1-to-1 `calls` node still lets any signed-in user create a call with *any* `calleeId`** (`database.rules.json:28-32`), enabling targeted notification spam — mitigated only by a 20 s freshness filter.
2. **`group-calls` root write is still `auth != null`** (`database.rules.json:64-67`). `participants` and `connections` are locked, but any other key under a call node (e.g. `screenShareActive`) can be written by anyone — spoofing "X is sharing screen" or polluting the shared `global_p2p` room.
3. **The signup kill-switch is cosmetic.** Hiding the signup tab (`AuthScreen.jsx:102-113`) does not stop someone from creating a Firebase Auth account directly and writing their own profile — the rules allow any signed-in user to self-create a non-admin profile (`firestore.rules:141-147`). `settings/app` write is admin-only, but nothing enforces `signupEnabled` server-side.
4. **Upload validation is auth-only.** The signature endpoint verifies the caller but not the file; type/size checks remain client-side (`App.jsx:1657-1663`). Any signed-in user can push arbitrary content into the Cloudinary account.
5. **Presence token rides in the URL query string** (`usePresence.js:25`) — tokens can leak into logs/referrers. Minor, but moving it to a subprotocol or a short-lived one-shot would be cleaner.
6. **Client admin check still ignores `email_verified`** (`App.jsx:232-235`) while rules require it (`firestore.rules:37-41`) — an unverified account holding the admin email sees admin UI but fails writes. Confusing, not an escalation.
7. **No rate limiting** on the three API endpoints or the worker beyond Firebase/Cloudflare's own defaults. Low risk at this scale.
8. **Admin identity is still public** — the hardcoded admin email lives in both the rules and the client bundle (`constants.js:7-8`).

### Verdict

This is comfortably above average for a hobby chat, and the v1.7 work specifically closed the two most meaningful gaps (unsigned uploads, unauthenticated worker). For a trusted circle of six it's plenty. If the app ever opens up, the priority order is: server-enforced signup gating, signed uploads with file-type/size validation, and tightening the `calls`/`group-calls` signaling rules.

---

## 5. Overall — 7.8/10

**What it is:** a feature-complete, visually polished private group chat that keeps out-performing its own humble scope. Chat, DMs, voice, group calls with graceful fallback, screen share, files, voice notes, search, editing, gaming sessions, per-user analytics, and moderation — all in a cohesive package with an actual design identity. The v1.7 line was the project's best release cycle: a 6,300-line monolith became a sane component/hook tree, uploads went signed, the presence backend was rebuilt as a properly authenticated, tested Durable Object, and the black-screen failure mode got both a splash and an error boundary.

**What holds it back:** rendering and remaining polish. The message list re-renders on every keystroke, the whole `users` collection is listened to at once, the bundle is 1.48 MB of single-chunk JS with ~77 production `console.log`s, modals aren't keyboard-manageable, and destructive actions still lean on `window.confirm`. Security is above average for the genre; the leftover gaps (open signaling nodes, cosmetic signup gate) only matter if the group stops being a small trusted circle.

### Top priorities if you keep building

1. **Tame the re-render.** `React.memo` the message list + stable callbacks, or move composer state into the `Composer` and scope the users listener to visible profiles + online dots; cache the per-message name-map build. The monolith split was step one; this is the highest-leverage step two.
2. **Tighten signaling rules.** Restrict `calls` creation to a caller/callee pair and validate `group-calls` top-level keys — the last two security gaps that would matter if the app ever opened up.
3. **Make the signup gate real.** Enforce `signupEnabled` server-side (Firestore trigger or a custom-claim/auth block) and add file-type/size validation at the signature endpoint.
4. **Modal accessibility.** Focus traps + focus-on-open + Escape-to-close on all dialogs, replace the `window.confirm`s, and make the message menu / notification panel keyboard-navigable.
5. **Trim the bundle.** Drop `react-pdf`, `cloudinary-react`, `cloudinary-core`, and dead `MediaRenderer.jsx`; add route-level code splitting; strip the production `console.log`s.

---

*Review written 2026-08-04 against v1.7.6 (`git rev-parse HEAD` = `1e1eeb0`), superseding the 2026-08-03 review of v1.6.24.*
