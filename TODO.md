# Companion notification rollout

Status: local Firebase Emulator pairing is working. No production companion relay is enabled yet.

## 1. Rust companion client

- [ ] Replace the local-only authorization server with the deployed `/companion/authorize` and `/companion/token` flow.
- [ ] Store `{ deviceId, accessToken, subject, expiresAt }` in the OS credential store.
- [ ] Add authenticated WSS relay connection, exponential reconnect, expiry handling, and revocation handling.
- [ ] Add native message/call notification adapters and incoming-call answer/reject actions.

## 2. QuadChat approval UI

- [ ] Add a signed-in service-approval route in QuadChat.
- [ ] Require explicit approval and show the account and device name.
- [ ] Use the Cloudflare `/companion/authorize` endpoint with S256 PKCE.

## 3. Secure notification relay

- [x] One-time server-side PKCE-code and hashed device-token foundation in the Cloudflare Worker.
- [ ] Add verified DM, group-message, and incoming-call event producers.
- [ ] Verify Firestore/RTDB event ownership and recipients server-side before relay delivery.
- [ ] Route only to the paired recipient account's active devices.

## 4. Device management

- [ ] List paired devices and last-connected timestamps.
- [ ] Revoke one device or every device.
- [ ] Disconnect a revoked companion immediately.

## 5. Automated checks before release

- [ ] Pair/cancel/reuse/expired/wrong-PKCE cases.
- [ ] Keychain persistence and safe keychain failure behavior.
- [ ] Token replay, expiry, refresh/re-pair, and revoke/reconnect rejection.
- [ ] Forged DM/call/group relay events rejected.
- [ ] Correct recipient-only delivery and duplicate-event suppression.
- [ ] End-to-end test account run before production enablement.
