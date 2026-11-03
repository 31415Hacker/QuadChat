# Firebase Emulator Suite

This mode keeps QuadChat's browser client on localhost and sends Firebase Auth, Firestore, and Realtime Database traffic only to local emulators. It does not contact the live Firebase project or the newly-created `quadchat-test` project.

## Start locally

```bash
cp .env.emulator.example .env.emulator
npm run emulators
```

In a second terminal:

```bash
npm run seed:emulator
npm run dev:emulator
```

Open QuadChat at the Vite URL, normally `http://localhost:5173`. Sign in with:

```text
Email: tester@quadchat.local
Password: test-password-change-me
```

The Emulator UI is at `http://127.0.0.1:14000`.

`seed:emulator` refuses to run unless the emulator host variables are explicitly set. It creates only a local Auth user and local Firestore profile/settings record.

## Pair the local companion to this test account

While the emulators and `npm run dev:emulator` are running, start the companion in a third terminal:

```bash
cd quadchat-background-service
cargo run -- --local-connection-test
```

Open the link printed by the companion. The approval page must show `tester@quadchat.local`; it refuses to authorize when no Firebase Emulator user is signed in. On approval, the local issuer verifies the Firebase Emulator ID token before it issues a one-time PKCE authorization code.

## Safety boundary

`VITE_USE_FIREBASE_EMULATORS=true` causes the client to explicitly connect Auth, Firestore, Realtime Database, and Functions clients to localhost. Do not set this variable in Vercel or production builds.
