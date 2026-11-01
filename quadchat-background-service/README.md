# QuadChat Background Service

This is the native Rust companion for QuadChat. Its first release intentionally only prints a greeting and exits.

It does not install itself or start automatically. Downloaded binaries must be run explicitly by the person who downloaded them.

## Local connection test

Run `cargo run -- --local-connection-test`, then open `http://localhost:5173/service-connection-test.html` while Vite is running. The page can pair with the local service and send a test event; this is development-only and is not the production pairing protocol.

ChromeOS users can run the Linux build only after enabling the Linux development environment.
