# QuadChat — In-Depth Review

**Date:** 2026-08-04
**Version:** 1.7.15 (HEAD `396704a`)
**Context:** A private group chat for a friend group of ~6 people
**Scope:** `src/App.jsx` (2,873 lines), `src/hooks/` (`useCalls.js` 1,379 lines), `src/components/*`, `src/utils/*`, `src/styles.css` (3,158 lines), `cloudinary.js`, `firebase.js`, `api/*`, `firestore.rules`, `database.rules.json`, `quadchat-worker/` (Cloudflare Durable Object presence server), `game/`, `scripts/`, deploy config.

---

## Ratings at a Glance

| Area | Rating | One-line summary |
|---|---|---|
| **UI** | **8.8/10** | The composer finally grew up: an auto-growing multiline input, a themed emoji picker, and `@`-mention suggestions that match how messages actually render. |
| **UX** | **8.7/10** | Confirm dialogs now *show up* over Settings — they were rendered inside a panel that unmounts — and the last composer dead-ends (no emoji, no multiline, no mentions) are gone. |
| **Performance** | **7.4/10** | The 276 KB entry stays ~280 KB while the emoji picker ships as a lazy ~510 KB chunk that only downloads on first open. |
| **Security** | **9.0/10** | Unchanged this cycle — the v1.7.13 per-user call-ring design still holds and needs no retouching. |
| **Overall** | **8.6/10** | The composer upgrade plus the confirm-over-Settings fix close the last two "six friends will hit this next" items on the list. |

---

## Summary

QuadChat is a private group chat for roughly six friends, and it keeps punching far above its weight: 1-to-1 voice calls, LiveKit group calls with a P2P mesh fallback, screen sharing with a request flow, voice messages with pause/resume, attachments, DMs, typing indicators, presence with statuses and scheduled busy, an in-app notification center, message search with jump-to-result, message editing, threaded replies with jump-to-original, RSVP gaming cards, per-user session analytics, and admin moderation (`?mute`, `?warn`, `?unwarn`, `?purge`).

This review supersedes the v1.7.13 review and covers the current **v1.7.15** HEAD. Two releases sit between:

- **v1.7.14 — documentation only.** The call-ring privacy fix from v1.7.13 was written up in `AGENTS.md` ("Known Fixes"); no product code changed.
- **v1.7.15 — the composer upgrade and the confirm-dialog bug.** The composer traded its single-line `<input>` for an auto-growing `<textarea>` (Enter sends, Shift+Enter newline, `maxLength={500}`), gained an emoji picker (`@emoji-mart/react` + `@emoji-mart/data`, lazy-loaded) and `@`-mention suggestions fed by the profile list (deduped, prefix match, arrow-key navigation, Enter/Tab to accept). Separately, a real UI bug was fixed: confirm dialogs invoked from Settings never appeared until Settings closed, because `<ConfirmDialog>` was rendered *inside* `.chat-panel`, which `App.jsx` unmounts while Settings is open (`App.jsx:2526`). It now renders at app-shell level right before `<GamingPostModal>` and always shows, and `.modal-backdrop` was raised from z-index 40 to 200 so dialogs paint above the settings close button (50), toasts (60), and the attach menu (100).

Verified against the code (not just the commit message): Enter in the textarea routes through `form.requestSubmit()` guarded by `event.isComposing`, so IME composition can't send mid-word; the mention dropdown closes on Escape and re-derives from the caret position on every keystroke/click/arrow; the emoji picker is a separate lazy chunk (`EmojiPicker-*.js` ~510 KB) fetched only when the picker first opens — the main `index` chunk stays at **280 KB**; the confirm dialog's DOM placement means a pending confirm survives a Settings open/close round-trip and renders on top.

The remaining caveats are now genuinely *next features* rather than gaps: no reactions/pins, the whole `users` collection is still one `onSnapshot`, and 57 production `console.log`s still ship in `useCalls.js`.

---

## 1. UI — 8.8/10

### Strengths

- **The composer is now a proper composer.** The single-line input became an auto-growing `<textarea>` that caps at ~4 rows and scrolls (`styles.css` `.composer-row textarea`, `Composer.jsx:283-310`). The emoji button drops in as a fifth grid column (attach · emoji · mic · input · send), and the picker renders in a themed popover (`theme={isDarkTheme ? "dark" : "light"}`) that reuses the design tokens, so it doesn't feel bolted on.
- **`@`-mention suggestions match the message rendering.** The suggestion dropdown lists profile names with initials avatars, and accepting one inserts `@Name ` — the exact form `renderMessageText` highlights as a `.mention` chip. The dropdown is token-styled (`.mention-suggestions`, `.mention-suggestion--active`), keyed to the caret, and closes cleanly on Escape/outside interaction.
- **Everything else from v1.7.13 still holds:** the quote-inside-bubble reply treatment, on-brand confirm dialogs, the "QC" branded loading splash, responsive breakpoints down to 400 px, and the settings tabs with Safe/Dangerous tags.

### Weaknesses

- **Two design languages still coexist.** The main app uses hand-rolled BEM-ish classes, but `GameSessionCard.jsx` and the Gaming Post modal are pure Tailwind (slate-800 cards, indigo buttons). The token-based emoji picker makes the Tailwind drift stand out a little more.
- **The Gaming Post modal close button is still a literal `"X"` text node** (`Modals.jsx:301`), the only place that hasn't adopted a lucide icon.
- **Dead `MediaRenderer.jsx`** carries its own fourth visual style (light-themed Tailwind) and is never imported anywhere.
- Minor: the users-sidebar DM/call/mute actions use 10–12 px icons that are easy to fat-finger.

### Verdict

The composer upgrade removes the most visible "this is a hobby project" tell. Auto-grow, emoji, and mentions all feel native to the existing design language rather than layered on top of it. The remaining blemishes are the Tailwind drift and the single text-button straggler.

---

## 2. UX — 8.7/10

### Strengths

- **Confirm dialogs finally work from Settings.** Root cause was DOM placement, not z-index alone: `<ConfirmDialog>` lived inside `.chat-panel`, which `App.jsx` unmounts whenever Settings is open, so a pending confirm couldn't render until Settings closed — then it "appeared out of nowhere" (`App.jsx:2656` → moved to app-shell level at `App.jsx:2852`). Combined with `.modal-backdrop` going from z-index 40 → 200 (`styles.css:547`), dangerous actions in Settings (remove photo, unlink account, purge) now show their confirmation immediately and on top of everything, including the settings close button and toasts.
- **Mentions are discoverable and forgiving.** Typing `@` mid-word opens the dropdown; Arrow keys walk it, Enter/Tab accept, Escape dismisses; clicking a suggestion uses `onMouseDown` + `preventDefault` so the textarea keeps focus and the caret lands right after the inserted `@Name `. Wrong query → the list empties and the dropdown disappears on its own.
- **Emoji insertion respects the caret.** `handleEmojiSelect` splices at `selectionStart` and restores focus/position, so you can insert mid-message.
- **Enter semantics are deliberate.** Enter sends (Discord-style), Shift+Enter adds a newline, and the send is guarded by `event.isComposing` so IME composition never fires a half-typed message. `sendMessage` still enforces the empty/attachment guard on its own (`App.jsx:2331-2338`), so the button-disabled logic and the keyboard path can't diverge.
- **Everything from v1.7.13 still holds:** reply-jump reaches scrolled-out messages, all modals are focus-trapped with Escape/backdrop awareness, search is first-class, calls are robust (10 s ICE grace, P2P failover), and the notification stack is complete.

### Weaknesses

- **No reactions, no pins** — the next things friends will ask for.
- **The message menu popover and notification panel** still aren't keyboard-navigable (no arrow-key handling, no menu semantics).
- **The mention list rebuilds on every keystroke** — trivially cheap at 6 profiles, but it's O(profiles) per input event with no memo on the profile list itself.
- **`Dialog` focus handling lands on the first focusable** rather than a semantically-chosen element, and the Settings page is a full-screen panel with no trap (fine for a full page).
- **The confirm dialog still defaults to danger styling** (`danger: options.danger !== false`), so benign asks like "Replace profile picture?" render a red confirm button.
- Some error paths still surface raw `firebaseError.message`.

### Verdict

This is the biggest UX jump since reply-jump: the last two "obvious missing" features — a real composer and dialogs you can actually trigger from Settings — are both closed. The remaining friction is now squarely next-feature territory (reactions, keyboard-navigable popovers) rather than "fix the basics."

---

## 3. Performance — 7.4/10

### Strengths

- **The emoji picker is properly lazy.** `Composer.jsx` imports the picker via `React.lazy(() => import("./EmojiPicker.jsx"))`, so `@emoji-mart/data` (~510 KB minified) becomes its own chunk fetched only when the emoji button is first clicked (`Composer.jsx:20-22`, `EmojiPicker.jsx`). The main `index` chunk grew only 276 → **280 KB** despite the feature.
- **The bundle layout remains:**
  - `index` **280 KB** (86 KB gzip) — app code
  - `firebase` 673 KB (156 KB gzip) — manual chunk (`vite.config.js:20-33`)
  - `livekit-client` 532 KB (139 KB gzip) — **lazy**, only when a group call is joined
  - `EmojiPicker` **510 KB** (111 KB gzip) — **lazy**, only on first emoji-picker open
  - `media` 28 KB — lucide icons
  - CSS 59 KB (11 KB gzip)
  - Critical path ≈ 311 KB gzip (index + firebase + media + CSS).
- **The message list is still memoized** (`MessageItem` in `React.memo`, stable `useCallback` props), so typing in the composer doesn't re-render every bubble.
- Presence writes only on disconnect (10 s grace), messages paginate (`PAGE_SIZE=30`, `MAX_MESSAGES=500`) with scroll preservation, object URLs are revoked, and call bandwidth stays budgeted.

### Weaknesses

1. **The list map still runs on every keystroke.** `MessageList` itself is not memoized, so typing re-runs the `messages.map` and prop-comparison per item. Memoizing `MessageList` (or moving composer state down into `Composer`) would remove the iteration cost entirely.
2. **`renderMessageText` rebuilds the name map from all profiles for every message** (`messages.jsx:36-38`) — O(profiles × messages) per render; the memo hides most of the cost but it's still wasted work.
3. **Whole-collection users listener** (`App.jsx:607-626`) plus a cross-channel watcher that holds tail listeners on every channel and DM. Fine for 6 users; won't scale past it.
4. **`experimentalForceLongPolling: true`** (`firebase.js:20`) disables Firestore's WebSocket streaming.
5. **No optimistic UI.** Sends render only after `addDoc` resolves; attachments go Cloudinary → Firestore serially.
6. **57 production `console.log`s in `useCalls.js`** ship to prod.
7. **Dead weight in `package.json`:** `react-pdf`/pdf.js, `cloudinary-react`, and `cloudinary-core` are install-time bloat (not in the bundle) and should be dropped.

### Verdict

The one performance risk this feature could have introduced — a 500 KB emoji dataset in the critical path — was avoided with a lazy import. The lived experience for six friends is still instant; the list is the same iterative fix list as before.

---

## 4. Security — 9.0/10

### Strengths

- **Unchanged from v1.7.13, and still the strongest area.** Call metadata is never broadcast: incoming-call detection runs through per-user, owner-locked `call-rings/<uid>/<callKey>` nodes, `.validate` pins `callerId` to the writer and `calleeId` to the ring owner, and `calls` reads are participant-only (`database.rules.json:33, 103-128`). Rings self-clean on answer/reject/status-change and the 20 s staleness check.
- **The signup kill-switch is enforced server-side** in `firestore.rules`, the Cloudinary signature endpoint validates upload metadata (kind/size/type/name, active-content blocklist, caps), signaling rules are shape-locked, and the group-call pair check uses exact `startsWith`/`endsWith` matches.
- **No new surface in v1.7.15.** The composer writes only text (newlines and `@`-names) through the same `sendMessage` path; emoji and mentions are pure client-side editing — nothing new hits Firestore or RTDB, and the new emoji/mention UI renders through React's auto-escaping (no new XSS vector).
- **No credentials in the bundle.** Cloudinary and LiveKit keys stay server-side; the presence worker verifies Firebase ID tokens end-to-end against Google's JWKS with a `lastOnline`-only `updateMask`.

### Weaknesses

1. **Any signed-in user can still create a call targeting any `calleeId`** (and now write a ring into that user's node) — targeted notification spam, mitigated only by the 20 s freshness filter.
2. **Unknown keys under `group-calls` nodes remain writable** — `.validate` blocks only named keys (`database.rules.json:140`).
3. **Upload validation trusts client-reported MIME** — a modified client can claim `text/plain` for an HTML payload.
4. **Presence token rides in the URL query string** (`usePresence.js:25`) — can leak into logs/referrers.
5. **Client admin check ignores `email_verified`** while rules require it.
6. **No rate limiting** beyond Firebase/Cloudflare defaults.
7. **Admin identity is public** in both the rules and the client bundle.
8. **No missed-call surface** — rings to offline users are silently discarded on reconnect.

### Verdict

Nothing in this release touches the trust boundary, and the v1.7.13 ring design still reads as clean. The open items are the same small-court list, all acceptable until the circle stops being trusted.

---

## 5. Overall — 8.6/10

**What it is:** a feature-complete, visually polished private group chat that keeps out-performing its own humble scope. Chat, DMs, voice, group calls with graceful fallback, screen share, files, voice notes, search, editing, replies with jump-to-original that works even for old messages, gaming sessions, per-user analytics, moderation — and now a real composer with emoji and mentions.

**Why this release matters:** v1.7.15 closes the two things a friend group was most likely to bump into next. The composer went from a single line of text to a proper multiline input with Enter-to-send, an on-theme emoji picker, and `@`-mention suggestions that match how mentions actually render — all without growing the critical-path bundle, because the picker is a lazy chunk. And a genuine bug — confirm dialogs silently failing to appear over Settings because they were rendered inside an unmounted panel — is fixed at the structural level (render global overlays at app-shell level) with the modal backdrop raised above every other layer. Both are verified against the code and a fresh build.

**What holds it back:** no reactions or pins, the whole `users` collection is one listener, the message list map still runs on every keystroke, and `useCalls.js` ships 57 production `console.log`s. None of it matters to six friends; all of it is the difference between "great hobby chat" and "the next thing."

### Top priorities if you keep building

1. **Reactions.** The data model already stores per-user state safely (the RSVP card proves the pattern); a `reactions` map on messages with rule coverage is the smallest high-value feature left.
2. **Keyboard-navigable menus.** Give the message menu popover and the notification panel real menu semantics (arrow keys, Home/End, Escape) to match the modals.
3. **Scope the users listener + memoize the list.** Replace the whole-collection `onSnapshot` with per-render-needed fetches (or a per-channel filter), memo `MessageList` itself so typing doesn't run the full map, and cache the per-message name-map build.
4. **Finish the upload story.** Have the signature endpoint (or a small worker) sniff the file content so a lying client can't upload HTML as `text/plain`; drop `react-pdf`/`cloudinary-react`/`cloudinary-core` from `package.json`.
5. **Add a missed-call surface.** Rings are currently fire-and-forget; persist recent rings (or reuse the notification center) so offline members learn who tried them.
6. **Delete dead code.** Remove `MediaRenderer.jsx` and its dependencies, convert the last `"X"` text button, and strip or gate the `useCalls.js` console logs.

---

*Review written 2026-08-04 against v1.7.15 (`git rev-parse HEAD` = `396704a`), superseding the v1.7.13 review.*
