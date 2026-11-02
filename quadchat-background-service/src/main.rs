use std::io::{Read, Write};
use std::net::TcpListener;
use std::time::Instant;

const TEST_PORT: u16 = 43721;

fn generate_test_token() -> String {
    let mut bytes = [0_u8; 32];
    getrandom::getrandom(&mut bytes).expect("Could not generate a secure local test token");
    bytes.iter().map(|byte| format!("{byte:02x}")).collect()
}

fn respond(stream: &mut std::net::TcpStream, status: &str, body: &str) {
    let response = format!(
        "HTTP/1.1 {status}\r\nContent-Type: application/json\r\nAccess-Control-Allow-Origin: http://localhost:5173\r\nAccess-Control-Allow-Methods: POST, OPTIONS\r\nAccess-Control-Allow-Headers: Content-Type, X-QuadChat-Test-Token\r\nContent-Length: {}\r\n\r\n{body}",
        body.len()
    );
    let _ = stream.write_all(response.as_bytes());
}

fn run_local_connection_test() {
    let token = std::env::var("QUADCHAT_TEST_TOKEN").unwrap_or_else(|_| generate_test_token());
    let listener = TcpListener::bind(("127.0.0.1", TEST_PORT)).expect("Could not bind local test port");
    let started_at = Instant::now();
    let mut authorization_started_at: Option<Instant> = None;
    println!("QuadChat local service test listening on http://127.0.0.1:{TEST_PORT}");
    println!("Test token: {token}");
    println!("Authorize at: http://localhost:5173/service-authorize.html?state={token}");
    let mut paired = false;
    for stream in listener.incoming() {
        let Ok(mut stream) = stream else { continue };
        let mut request = [0_u8; 8192];
        let Ok(size) = stream.read(&mut request) else { continue };
        let request = String::from_utf8_lossy(&request[..size]);
        let request_line = request.lines().next().unwrap_or("<empty request>");
        println!("[LOCAL TEST +{}ms] {request_line}", started_at.elapsed().as_millis());
        if request.starts_with("OPTIONS ") {
            println!("[LOCAL TEST] CORS preflight accepted");
            respond(&mut stream, "204 No Content", "");
        } else if request.starts_with("GET /authorize-url ") {
            authorization_started_at = Some(Instant::now());
            println!("[LOCAL TEST +{}ms] Issued browser authorization URL", started_at.elapsed().as_millis());
            respond(&mut stream, "200 OK", &format!(r#"{{"url":"http://localhost:5173/service-authorize.html?state={token}"}}"#));
        } else if request.starts_with("GET /callback?") {
            if request.contains(&format!("state={token}")) && request.contains("code=") {
                paired = true;
                let authorization_elapsed = authorization_started_at
                    .map(|time| format!(" after {}ms", time.elapsed().as_millis()))
                    .unwrap_or_default();
                println!("[LOCAL TEST +{}ms] Authorization completed{authorization_elapsed}.", started_at.elapsed().as_millis());
                let response = format!("HTTP/1.1 302 Found\r\nLocation: http://localhost:5173/service-connection-test.html?service_token={token}\r\nContent-Length: 0\r\nConnection: close\r\n\r\n");
                let _ = stream.write_all(response.as_bytes());
            } else {
                println!("[LOCAL TEST] Authorization callback rejected: missing/invalid state or code");
                respond(&mut stream, "400 Bad Request", r#"{"error":"Invalid authorization response"}"#);
            }
        } else if request.starts_with("GET /status ") {
            println!("[LOCAL TEST] Status requested; paired={paired}");
            respond(&mut stream, "200 OK", &format!(r#"{{"paired":{paired},"mode":"local-test"}}"#));
        } else if !request.to_ascii_lowercase().contains(&format!("x-quadchat-test-token: {token}")) {
            println!("[LOCAL TEST] Request rejected: test token missing or invalid");
            respond(&mut stream, "401 Unauthorized", r#"{"error":"Invalid test token"}"#);
        } else if request.starts_with("POST /pair ") {
            paired = true;
            println!("Local browser pairing approved.");
            respond(&mut stream, "200 OK", r#"{"paired":true}"#);
        } else if request.starts_with("POST /event ") {
            if !paired {
                println!("[LOCAL TEST] Event rejected: browser has not completed authorization");
                respond(&mut stream, "403 Forbidden", r#"{"error":"Pair this browser first"}"#);
            } else {
                println!("[LOCAL TEST] Accepted local QuadChat test event.");
                respond(&mut stream, "200 OK", r#"{"received":true}"#);
            }
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
