use std::collections::HashMap;
use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::{Duration, Instant};

use sha2::{Digest, Sha256};

const SERVICE_PORT: u16 = 43721;
const AUTH_PORT: u16 = 43722;
const LAB_ORIGIN: &str = "http://localhost:5173";
const CALLBACK_URI: &str = "http://127.0.0.1:43721/callback";
const CODE_TTL: Duration = Duration::from_secs(60);
const TOKEN_TTL: Duration = Duration::from_secs(600);

#[derive(Clone)]
struct PendingAuthorization {
    redirect_uri: String,
    state: String,
    code_challenge: String,
    created_at: Instant,
}

struct AuthorizationCode {
    code_challenge: String,
    expires_at: Instant,
}

struct LocalAuthStore {
    pending: HashMap<String, PendingAuthorization>,
    codes: HashMap<String, AuthorizationCode>,
    tokens: HashMap<String, Instant>,
}

impl LocalAuthStore {
    fn new() -> Self {
        Self { pending: HashMap::new(), codes: HashMap::new(), tokens: HashMap::new() }
    }

    fn exchange_code(&mut self, code: &str, verifier: &str) -> Result<(String, u64), &'static str> {
        let Some(authorization_code) = self.codes.remove(code) else {
            return Err("Authorization code is invalid, expired, or was already used");
        };
        if Instant::now() > authorization_code.expires_at {
            return Err("Authorization code has expired");
        }
        if pkce_challenge(verifier) != authorization_code.code_challenge {
            return Err("PKCE verifier does not match the authorization code");
        }
        let token = random_hex(32);
        self.tokens.insert(token.clone(), Instant::now() + TOKEN_TTL);
        Ok((token, TOKEN_TTL.as_secs()))
    }

    fn revoke(&mut self, token: &str) -> bool {
        self.tokens.remove(token).is_some()
    }
}

fn random_hex(byte_count: usize) -> String {
    let mut bytes = vec![0_u8; byte_count];
    getrandom::getrandom(&mut bytes).expect("Could not generate secure local test data");
    bytes.iter().map(|byte| format!("{byte:02x}")).collect()
}

fn base64_url(bytes: &[u8]) -> String {
    const TABLE: &[u8; 64] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let mut output = String::new();
    for chunk in bytes.chunks(3) {
        let value = (u32::from(chunk[0]) << 16)
            | (u32::from(*chunk.get(1).unwrap_or(&0)) << 8)
            | u32::from(*chunk.get(2).unwrap_or(&0));
        output.push(TABLE[((value >> 18) & 63) as usize] as char);
        output.push(TABLE[((value >> 12) & 63) as usize] as char);
        if chunk.len() > 1 { output.push(TABLE[((value >> 6) & 63) as usize] as char); }
        if chunk.len() > 2 { output.push(TABLE[(value & 63) as usize] as char); }
    }
    output
}

fn pkce_challenge(verifier: &str) -> String {
    base64_url(&Sha256::digest(verifier.as_bytes()))
}

fn percent_decode(value: &str) -> String {
    let mut output = Vec::new();
    let bytes = value.as_bytes();
    let mut index = 0;
    while index < bytes.len() {
        if bytes[index] == b'%' && index + 2 < bytes.len() {
            if let Ok(hex) = u8::from_str_radix(&value[index + 1..index + 3], 16) {
                output.push(hex);
                index += 3;
                continue;
            }
        }
        output.push(if bytes[index] == b'+' { b' ' } else { bytes[index] });
        index += 1;
    }
    String::from_utf8_lossy(&output).into_owned()
}

fn parameters(value: &str) -> HashMap<String, String> {
    value.split('&').filter_map(|pair| {
        let (key, value) = pair.split_once('=')?;
        Some((percent_decode(key), percent_decode(value)))
    }).collect()
}

fn request_parts(request: &str) -> (&str, &str, HashMap<String, String>, &str) {
    let (head, body) = request.split_once("\r\n\r\n").unwrap_or((request, ""));
    let mut lines = head.lines();
    let first = lines.next().unwrap_or("");
    let mut first_parts = first.split_whitespace();
    let method = first_parts.next().unwrap_or("");
    let target = first_parts.next().unwrap_or("");
    let headers = lines.filter_map(|line| {
        let (name, value) = line.split_once(':')?;
        Some((name.trim().to_ascii_lowercase(), value.trim().to_owned()))
    }).collect();
    (method, target, headers, body)
}

fn respond(stream: &mut TcpStream, status: &str, body: &str, cors: bool) {
    let cors_headers = if cors {
        format!("Access-Control-Allow-Origin: {LAB_ORIGIN}\r\nAccess-Control-Allow-Methods: GET, POST, OPTIONS\r\nAccess-Control-Allow-Headers: Content-Type\r\n")
    } else { String::new() };
    let response = format!("HTTP/1.1 {status}\r\nContent-Type: application/json\r\n{cors_headers}Content-Length: {}\r\nConnection: close\r\n\r\n{body}", body.len());
    let _ = stream.write_all(response.as_bytes());
}

fn redirect(stream: &mut TcpStream, location: &str) {
    let response = format!("HTTP/1.1 302 Found\r\nLocation: {location}\r\nContent-Length: 0\r\nConnection: close\r\n\r\n");
    let _ = stream.write_all(response.as_bytes());
}

fn read_stream(stream: &mut TcpStream) -> Option<String> {
    let _ = stream.set_read_timeout(Some(Duration::from_secs(2)));
    let mut bytes = vec![0_u8; 16_384];
    let size = stream.read(&mut bytes).ok()?;
    if size == 0 { return None; }
    Some(String::from_utf8_lossy(&bytes[..size]).into_owned())
}

fn run_local_auth_server(store: Arc<Mutex<LocalAuthStore>>, started_at: Instant) {
    let listener = TcpListener::bind(("127.0.0.1", AUTH_PORT)).expect("Could not bind local OAuth test server");
    println!("Local OAuth test server listening on http://127.0.0.1:{AUTH_PORT}");
    for stream in listener.incoming() {
        let Ok(mut stream) = stream else { continue };
        let Some(request) = read_stream(&mut stream) else { continue };
        let (method, target, _, body) = request_parts(&request);
        println!("[LOCAL OAUTH +{}ms] {method} {target}", started_at.elapsed().as_millis());
        let (path, query) = target.split_once('?').unwrap_or((target, ""));
        if method == "GET" && path == "/authorize" {
            let params = parameters(query);
            let valid = params.get("response_type") == Some(&"code".to_owned())
                && params.get("client_id") == Some(&"quadchat-local-service".to_owned())
                && params.get("redirect_uri") == Some(&CALLBACK_URI.to_owned())
                && params.get("code_challenge_method") == Some(&"S256".to_owned())
                && params.get("state").is_some_and(|value| value.len() >= 32)
                && params.get("code_challenge").is_some_and(|value| value.len() >= 43);
            if !valid {
                println!("[LOCAL OAUTH] Rejected malformed authorization request");
                respond(&mut stream, "400 Bad Request", r#"{"error":"invalid_authorization_request"}"#, false);
                continue;
            }
            let transaction = random_hex(24);
            store.lock().unwrap().pending.insert(transaction.clone(), PendingAuthorization {
                redirect_uri: CALLBACK_URI.to_owned(), state: params["state"].clone(), code_challenge: params["code_challenge"].clone(), created_at: Instant::now(),
            });
            println!("[LOCAL OAUTH] Awaiting explicit browser approval");
            redirect(&mut stream, &format!("{LAB_ORIGIN}/service-authorize.html?transaction={transaction}"));
        } else if method == "POST" && path == "/authorize/approve" {
            let params = parameters(body);
            let transaction = params.get("transaction").map(String::as_str).unwrap_or("");
            let pending = store.lock().unwrap().pending.remove(transaction);
            let Some(pending) = pending else {
                respond(&mut stream, "400 Bad Request", r#"{"error":"invalid_or_expired_transaction"}"#, true);
                continue;
            };
            if pending.created_at.elapsed() > CODE_TTL {
                respond(&mut stream, "400 Bad Request", r#"{"error":"authorization_transaction_expired"}"#, true);
                continue;
            }
            let code = random_hex(32);
            store.lock().unwrap().codes.insert(code.clone(), AuthorizationCode { code_challenge: pending.code_challenge, expires_at: Instant::now() + CODE_TTL });
            println!("[LOCAL OAUTH] Approval issued one-time authorization code (expires in 60s)");
            respond(&mut stream, "200 OK", &format!(r#"{{"redirectUrl":"{}?code={code}&state={}"}}"#, pending.redirect_uri, pending.state), true);
        } else if method == "POST" && path == "/token" {
            let params = parameters(body);
            let result = if params.get("grant_type").map(String::as_str) != Some("authorization_code") || params.get("client_id").map(String::as_str) != Some("quadchat-local-service") {
                Err("Invalid token request")
            } else {
                store.lock().unwrap().exchange_code(params.get("code").map(String::as_str).unwrap_or(""), params.get("code_verifier").map(String::as_str).unwrap_or(""))
            };
            match result {
                Ok((token, expires_in)) => {
                    println!("[LOCAL OAUTH] PKCE verified; issued local device token (expires in {expires_in}s)");
                    respond(&mut stream, "200 OK", &format!(r#"{{"access_token":"{token}","token_type":"Bearer","expires_in":{expires_in}}}"#), false);
                }
                Err(error) => {
                    println!("[LOCAL OAUTH] Token exchange rejected: {error}");
                    respond(&mut stream, "400 Bad Request", &format!(r#"{{"error":"invalid_grant","error_description":"{error}"}}"#), false);
                }
            }
        } else if method == "POST" && path == "/revoke" {
            let token = parameters(body).remove("token").unwrap_or_default();
            let revoked = store.lock().unwrap().revoke(&token);
            println!("[LOCAL OAUTH] Device token revocation requested; found={revoked}");
            respond(&mut stream, "200 OK", "{}", false);
        } else {
            respond(&mut stream, "404 Not Found", r#"{"error":"not_found"}"#, false);
        }
    }
}

fn post_form(port: u16, path: &str, form: &str) -> Result<String, String> {
    let mut stream = TcpStream::connect(("127.0.0.1", port)).map_err(|error| error.to_string())?;
    let request = format!("POST {path} HTTP/1.1\r\nHost: 127.0.0.1:{port}\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{form}", form.len());
    stream.write_all(request.as_bytes()).map_err(|error| error.to_string())?;
    read_stream(&mut stream).ok_or_else(|| "Local OAuth server did not respond".to_owned())
}

fn json_field(body: &str, field: &str) -> Option<String> {
    let marker = format!("\"{field}\":\"");
    let start = body.find(&marker)? + marker.len();
    Some(body[start..].split('"').next()?.to_owned())
}

fn run_local_connection_test() {
    let started_at = Instant::now();
    let store = Arc::new(Mutex::new(LocalAuthStore::new()));
    let auth_store = Arc::clone(&store);
    thread::spawn(move || run_local_auth_server(auth_store, started_at));
    let listener = TcpListener::bind(("127.0.0.1", SERVICE_PORT)).expect("Could not bind local service test port");
    println!("QuadChat local service test listening on http://127.0.0.1:{SERVICE_PORT}");
    println!("This development-only harness uses in-memory localhost OAuth + PKCE. It does not contact QuadChat, Firebase, or any database.");
    let verifier = random_hex(48);
    let challenge = pkce_challenge(&verifier);
    let state = random_hex(32);
    let mut device_token: Option<String> = None;
    let mut token_expires_at: Option<Instant> = None;

    for stream in listener.incoming() {
        let Ok(mut stream) = stream else { continue };
        let Some(request) = read_stream(&mut stream) else {
            println!("[LOCAL SERVICE +{}ms] Ignored idle local connection", started_at.elapsed().as_millis());
            continue;
        };
        let (method, target, headers, _) = request_parts(&request);
        println!("[LOCAL SERVICE +{}ms] {method} {target}", started_at.elapsed().as_millis());
        let (path, query) = target.split_once('?').unwrap_or((target, ""));
        if method == "OPTIONS" {
            respond(&mut stream, "204 No Content", "", true);
        } else if method == "GET" && path == "/authorize-url" {
            let url = format!("http://127.0.0.1:{AUTH_PORT}/authorize?response_type=code&client_id=quadchat-local-service&redirect_uri={}&state={state}&code_challenge={challenge}&code_challenge_method=S256", percent_encode(CALLBACK_URI));
            println!("[LOCAL SERVICE] Started authorization request with a fresh PKCE challenge");
            respond(&mut stream, "200 OK", &format!(r#"{{"url":"{url}"}}"#), true);
        } else if method == "GET" && path == "/callback" {
            let params = parameters(query);
            let code = params.get("code").map(String::as_str).unwrap_or("");
            if params.get("state") != Some(&state) || code.is_empty() {
                println!("[LOCAL SERVICE] Rejected callback with invalid state or missing code");
                respond(&mut stream, "400 Bad Request", r#"{"error":"invalid_callback"}"#, false);
                continue;
            }
            let form = format!("grant_type=authorization_code&client_id=quadchat-local-service&code={code}&code_verifier={verifier}");
            match post_form(AUTH_PORT, "/token", &form).ok().and_then(|response| json_field(response.split_once("\r\n\r\n").map(|(_, body)| body).unwrap_or(""), "access_token")) {
                Some(token) => {
                    device_token = Some(token);
                    token_expires_at = Some(Instant::now() + TOKEN_TTL);
                    println!("[LOCAL SERVICE +{}ms] Authorization completed: one-time code exchanged with PKCE.", started_at.elapsed().as_millis());
                    redirect(&mut stream, &format!("{LAB_ORIGIN}/service-connection-test.html?authorized=1"));
                }
                None => {
                    println!("[LOCAL SERVICE] Authorization code exchange failed");
                    respond(&mut stream, "400 Bad Request", r#"{"error":"token_exchange_failed"}"#, false);
                }
            }
        } else if method == "GET" && path == "/status" {
            let paired = device_token.is_some() && token_expires_at.is_some_and(|expires_at| Instant::now() < expires_at);
            respond(&mut stream, "200 OK", &format!(r#"{{"paired":{paired},"mode":"local-oauth-pkce","tokenStoredByService":{paired}}}"#), true);
        } else if method == "POST" && path == "/event" {
            let is_lab = headers.get("origin").is_some_and(|origin| origin == LAB_ORIGIN);
            let paired = device_token.is_some() && token_expires_at.is_some_and(|expires_at| Instant::now() < expires_at);
            if !is_lab { respond(&mut stream, "403 Forbidden", r#"{"error":"local_lab_origin_required"}"#, true); }
            else if !paired { respond(&mut stream, "403 Forbidden", r#"{"error":"service_not_authorized"}"#, true); }
            else { println!("[LOCAL SERVICE] Accepted local test event (diagnostic control only)."); respond(&mut stream, "200 OK", r#"{"received":true}"#, true); }
        } else if method == "POST" && path == "/revoke" {
            if let Some(token) = device_token.take() { let _ = post_form(AUTH_PORT, "/revoke", &format!("token={token}")); }
            token_expires_at = None;
            println!("[LOCAL SERVICE] Local device token revoked and discarded");
            respond(&mut stream, "200 OK", r#"{"revoked":true}"#, true);
        } else {
            respond(&mut stream, "404 Not Found", r#"{"error":"not_found"}"#, true);
        }
    }
}

fn percent_encode(value: &str) -> String {
    value.bytes().map(|byte| if byte.is_ascii_alphanumeric() || matches!(byte, b'-' | b'_' | b'.' | b'~') { (byte as char).to_string() } else { format!("%{byte:02X}") }).collect()
}

fn main() {
    if std::env::args().any(|arg| arg == "--local-connection-test") { run_local_connection_test(); }
    else { println!("Hello, World from the QuadChat Background Service!"); println!("Run with --local-connection-test to start the localhost OAuth + PKCE test harness."); }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn pkce_s256_matches_rfc_7636_example() {
        assert_eq!(pkce_challenge("dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"), "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM");
    }

    #[test]
    fn code_cannot_be_exchanged_twice_or_with_wrong_verifier() {
        let verifier = "local-verifier";
        let mut store = LocalAuthStore::new();
        store.codes.insert("code".into(), AuthorizationCode { code_challenge: pkce_challenge(verifier), expires_at: Instant::now() + CODE_TTL });
        assert!(store.exchange_code("code", "wrong-verifier").is_err());
        assert!(store.exchange_code("code", verifier).is_err());
    }

    #[test]
    fn expired_code_is_rejected() {
        let mut store = LocalAuthStore::new();
        store.codes.insert("expired".into(), AuthorizationCode { code_challenge: pkce_challenge("verifier"), expires_at: Instant::now() - Duration::from_secs(1) });
        assert!(store.exchange_code("expired", "verifier").is_err());
    }
}
