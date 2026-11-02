# QuadChat Background Service

This is the native Rust companion for QuadChat. Its first release intentionally only prints a greeting and exits.

It does not install itself or start automatically. Downloaded binaries must be run explicitly by the person who downloaded them.

## Local connection test

Run `cargo run -- --local-connection-test`, then open `http://localhost:5173/service-connection-test.html` while Vite is running.

The harness starts two loopback-only, in-memory endpoints: the companion on `127.0.0.1:43721` and a local OAuth issuer on `127.0.0.1:43722`. The service prints the unique authorization link. Opening that link and clicking **Authorize local service** is the only path that can create a device token. It uses a one-time 60-second authorization code and S256 PKCE exchange. Device tokens last 10 minutes. No Firebase SDK, production URL, environment variable, or database is used.

ChromeOS users can run the Linux build only after enabling the Linux development environment.
