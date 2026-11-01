use std::io::{Read, Write};
use std::net::TcpListener;

const TEST_PORT: u16 = 43721;

fn respond(stream: &mut std::net::TcpStream, status: &str, body: &str) {
    let response = format!(
        "HTTP/1.1 {status}\r\nContent-Type: application/json\r\nAccess-Control-Allow-Origin: http://localhost:5173\r\nAccess-Control-Allow-Methods: POST, OPTIONS\r\nAccess-Control-Allow-Headers: Content-Type, X-QuadChat-Test-Token\r\nContent-Length: {}\r\n\r\n{body}",
        body.len()
    );
    let _ = stream.write_all(response.as_bytes());
}

fn run_local_connection_test() {
    let token = std::env::var("QUADCHAT_TEST_TOKEN").unwrap_or_else(|_| "quadchat-local-test".to_owned());
    let listener = TcpListener::bind(("127.0.0.1", TEST_PORT)).expect("Could not bind local test port");
    println!("QuadChat local service test listening on http://127.0.0.1:{TEST_PORT}");
    println!("Test token: {token}");
    for stream in listener.incoming() {
        let Ok(mut stream) = stream else { continue };
        let mut request = [0_u8; 8192];
        let Ok(size) = stream.read(&mut request) else { continue };
        let request = String::from_utf8_lossy(&request[..size]);
        if request.starts_with("OPTIONS ") {
            respond(&mut stream, "204 No Content", "");
        } else if !request.contains(&format!("X-QuadChat-Test-Token: {token}")) {
            respond(&mut stream, "401 Unauthorized", r#"{"error":"Invalid test token"}"#);
        } else if request.starts_with("POST /pair ") {
            println!("Local browser pairing approved.");
            respond(&mut stream, "200 OK", r#"{"paired":true}"#);
        } else if request.starts_with("POST /event ") {
            println!("Received local QuadChat test event.");
            respond(&mut stream, "200 OK", r#"{"received":true}"#);
        } else {
            respond(&mut stream, "404 Not Found", r#"{"error":"Unknown endpoint"}"#);
        }
    }
}

fn main() {
    if std::env::args().any(|arg| arg == "--local-connection-test") {
        run_local_connection_test();
    } else {
        println!("Hello, World from the QuadChat Background Service!");
        println!("Run with --local-connection-test to start the localhost test harness.");
    }
}
