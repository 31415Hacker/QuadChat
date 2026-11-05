mod credentials;

use std::collections::{HashMap, HashSet};
use std::fs;
use std::io::Cursor;
use std::io::{Read, Seek, SeekFrom, Write};
use std::net::{TcpListener, TcpStream};
use std::sync::{Arc, Mutex};
use std::sync::mpsc::{self, Receiver};
use std::thread;
use std::time::{Duration, Instant, SystemTime};
use std::process::Command;

use serde::Deserialize;
use base64::{engine::general_purpose::STANDARD, Engine};
use rodio::{Decoder, OutputStream, Sink, Source};
use sha2::{Digest, Sha256};
use tungstenite::{connect, Message};
use keyring::Entry;
use global_hotkey::{GlobalHotKeyEvent, GlobalHotKeyManager, hotkey::{Code, HotKey, Modifiers}};
use sysinfo::{ProcessRefreshKind, ProcessesToUpdate, System};

const SERVICE_PORT: u16 = 43721;
const AUTH_PORT: u16 = 43722;
const LAB_ORIGIN: &str = "http://localhost:5173";
const CALLBACK_URI: &str = "http://127.0.0.1:43721/callback";
const CODE_TTL: Duration = Duration::from_secs(60);
const TOKEN_TTL: Duration = Duration::from_secs(600);
const AUTH_EMULATOR_PORT: u16 = 19099;
const AUTH_EMULATOR_API_KEY: &str = "emulator-api-key";
const DEFAULT_WORKER_URL: &str = "https://quadchat-worker.ariqipraditya.workers.dev";
const DEFAULT_AUTHORIZE_URL: &str = "https://quad-chat.com/companion-authorize.html";
const KEYRING_SERVICE: &str = "QuadChat Local OAuth Test";
const KEYRING_ACCOUNT: &str = "local-device-token";
const RICH_PRESENCE_INTERVAL: Duration = Duration::from_secs(20);
const COMPANION_RELEASE_API: &str = "https://api.github.com/repos/31415Hacker/QuadChat/releases/tags/background-service-latest";

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
    account_id: String,
    account_email: String,
}

struct DeviceToken {
    expires_at: Instant,
    account_id: String,
    account_email: String,
}

#[derive(Deserialize)]
struct GitHubRelease {
    name: Option<String>,
    assets: Vec<GitHubReleaseAsset>,
}

#[derive(Deserialize)]
struct GitHubReleaseAsset {
    name: String,
    browser_download_url: String,
}

struct LocalAuthStore {
    pending: HashMap<String, PendingAuthorization>,
    codes: HashMap<String, AuthorizationCode>,
    tokens: HashMap<String, DeviceToken>,
    claimed_states: HashSet<String>,
}

impl LocalAuthStore {
    fn new() -> Self {
        Self { pending: HashMap::new(), codes: HashMap::new(), tokens: HashMap::new(), claimed_states: HashSet::new() }
    }

    fn exchange_code(&mut self, code: &str, verifier: &str) -> Result<(String, u64, String, String), &'static str> {
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
        let account_id = authorization_code.account_id;
        let account_email = authorization_code.account_email;
        self.tokens.insert(token.clone(), DeviceToken {
            expires_at: Instant::now() + TOKEN_TTL,
            account_id: account_id.clone(),
            account_email: account_email.clone(),
        });
        Ok((token, TOKEN_TTL.as_secs(), account_id, account_email))
    }

    fn revoke(&mut self, token: &str) -> Option<DeviceToken> {
        self.tokens.remove(token).filter(|device| device.expires_at > Instant::now())
    }
}

fn device_token_keyring() -> Result<Entry, String> {
    Entry::new(KEYRING_SERVICE, KEYRING_ACCOUNT).map_err(|error| error.to_string())
}

fn store_device_token(token: &str) -> Result<(), String> {
    device_token_keyring()?.set_password(token).map_err(|error| error.to_string())
}

fn delete_device_token() {
    match device_token_keyring().and_then(|entry| entry.delete_credential().map_err(|error| error.to_string())) {
        Ok(()) => println!("[LOCAL SERVICE] Removed local test token from the OS credential store"),
        Err(error) if error.to_ascii_lowercase().contains("no entry") => {},
        Err(error) => println!("[LOCAL SERVICE] Could not remove local test token from the OS credential store: {error}"),
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
            if !store.lock().unwrap().claimed_states.insert(params["state"].clone()) {
                println!("[LOCAL OAUTH] Rejected reused authorization link");
                respond(&mut stream, "400 Bad Request", r#"{"error":"authorization_link_already_used"}"#, false);
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
            let identity = match verify_emulator_identity(params.get("id_token").map(String::as_str).unwrap_or("")) {
                Ok(identity) => identity,
                Err(error) => {
                    println!("[LOCAL OAUTH] Approval rejected: {error}");
                    respond(&mut stream, "401 Unauthorized", r#"{"error":"emulator_sign_in_required"}"#, true);
                    continue;
                }
            };
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
            store.lock().unwrap().codes.insert(code.clone(), AuthorizationCode { code_challenge: pending.code_challenge, expires_at: Instant::now() + CODE_TTL, account_id: identity.0, account_email: identity.1.clone() });
            println!("[LOCAL OAUTH] Approval for {} issued one-time authorization code (expires in 60s)", identity.1);
            respond(&mut stream, "200 OK", &format!(r#"{{"redirectUrl":"{}?code={code}&state={}"}}"#, pending.redirect_uri, pending.state), true);
        } else if method == "POST" && path == "/token" {
            let params = parameters(body);
            let result = if params.get("grant_type").map(String::as_str) != Some("authorization_code") || params.get("client_id").map(String::as_str) != Some("quadchat-local-service") {
                Err("Invalid token request")
            } else {
                store.lock().unwrap().exchange_code(params.get("code").map(String::as_str).unwrap_or(""), params.get("code_verifier").map(String::as_str).unwrap_or(""))
            };
            match result {
                Ok((token, expires_in, account_id, account_email)) => {
                    println!("[LOCAL OAUTH] PKCE verified; issued local device token (expires in {expires_in}s)");
                    respond(&mut stream, "200 OK", &format!(r#"{{"access_token":"{token}","token_type":"Bearer","expires_in":{expires_in},"subject":"{account_id}","email":"{account_email}"}}"#), false);
                }
                Err(error) => {
                    println!("[LOCAL OAUTH] Token exchange rejected: {error}");
                    respond(&mut stream, "400 Bad Request", &format!(r#"{{"error":"invalid_grant","error_description":"{error}"}}"#), false);
                }
            }
        } else if method == "POST" && path == "/revoke" {
            let token = parameters(body).remove("token").unwrap_or_default();
            let revoked = store.lock().unwrap().revoke(&token);
            match revoked {
                Some(device) => println!("[LOCAL OAUTH] Revoked device token for {} ({})", device.account_email, device.account_id),
                None => println!("[LOCAL OAUTH] Device token revocation requested; token was absent or expired"),
            }
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

fn post_json(port: u16, path: &str, body: &str) -> Result<String, String> {
    let mut stream = TcpStream::connect(("127.0.0.1", port)).map_err(|error| error.to_string())?;
    let request = format!("POST {path} HTTP/1.1\r\nHost: 127.0.0.1:{port}\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{body}", body.len());
    stream.write_all(request.as_bytes()).map_err(|error| error.to_string())?;
    read_stream(&mut stream).ok_or_else(|| "Firebase Auth Emulator did not respond".to_owned())
}

fn json_field(body: &str, field: &str) -> Option<String> {
    let marker = format!("\"{field}\":\"");
    let start = body.find(&marker)? + marker.len();
    Some(body[start..].split('"').next()?.to_owned())
}

fn verify_emulator_identity(id_token: &str) -> Result<(String, String), String> {
    if id_token.is_empty() || id_token.contains('"') || id_token.contains('\\') {
        return Err("Missing or malformed Firebase Emulator ID token".to_owned());
    }
    let response = post_json(
        AUTH_EMULATOR_PORT,
        &format!("/identitytoolkit.googleapis.com/v1/accounts:lookup?key={AUTH_EMULATOR_API_KEY}"),
        &format!(r#"{{"idToken":"{id_token}"}}"#),
    )?;
    let (head, body) = response.split_once("\r\n\r\n").unwrap_or(("", ""));
    if !head.starts_with("HTTP/1.1 200") {
        return Err("Firebase Emulator rejected the signed-in session".to_owned());
    }
    let uid = json_field(body, "localId").ok_or_else(|| "Firebase Emulator response has no account ID".to_owned())?;
    let email = json_field(body, "email").ok_or_else(|| "Firebase Emulator response has no email".to_owned())?;
    Ok((uid, email))
}

fn run_local_connection_test() {
    let started_at = Instant::now();
    let store = Arc::new(Mutex::new(LocalAuthStore::new()));
    let auth_store = Arc::clone(&store);
    thread::spawn(move || run_local_auth_server(auth_store, started_at));
    let listener = TcpListener::bind(("127.0.0.1", SERVICE_PORT)).expect("Could not bind local service test port");
    println!("QuadChat local service test listening on http://127.0.0.1:{SERVICE_PORT}");
    println!("This development-only harness uses localhost OAuth + PKCE and verifies approval with the local Firebase Auth Emulator. It does not contact production QuadChat, Firebase, or any database.");
    let verifier = random_hex(48);
    let challenge = pkce_challenge(&verifier);
    let state = random_hex(32);
    let authorization_url = format!("http://127.0.0.1:{AUTH_PORT}/authorize?response_type=code&client_id=quadchat-local-service&redirect_uri={}&state={state}&code_challenge={challenge}&code_challenge_method=S256", percent_encode(CALLBACK_URI));
    delete_device_token();
    println!("Open this authorization link, then explicitly approve the service:");
    println!("{authorization_url}");
    let mut device_token: Option<String> = None;
    let mut token_expires_at: Option<Instant> = None;
    let mut paired_account_email: Option<String> = None;

    for stream in listener.incoming() {
        let Ok(mut stream) = stream else { continue };
        let Some(request) = read_stream(&mut stream) else {
            println!("[LOCAL SERVICE +{}ms] Ignored idle local connection", started_at.elapsed().as_millis());
            continue;
        };
        let (method, target, _headers, _) = request_parts(&request);
        println!("[LOCAL SERVICE +{}ms] {method} {target}", started_at.elapsed().as_millis());
        let (path, query) = target.split_once('?').unwrap_or((target, ""));
        if method == "OPTIONS" {
            respond(&mut stream, "204 No Content", "", true);
        } else if method == "GET" && path == "/callback" {
            let params = parameters(query);
            let code = params.get("code").map(String::as_str).unwrap_or("");
            if params.get("state") != Some(&state) || code.is_empty() {
                println!("[LOCAL SERVICE] Rejected callback with invalid state or missing code");
                respond(&mut stream, "400 Bad Request", r#"{"error":"invalid_callback"}"#, false);
                continue;
            }
            let form = format!("grant_type=authorization_code&client_id=quadchat-local-service&code={code}&code_verifier={verifier}");
            let token_response = post_form(AUTH_PORT, "/token", &form).ok().and_then(|response| {
                let body = response.split_once("\r\n\r\n").map(|(_, body)| body).unwrap_or("");
                Some((json_field(body, "access_token")?, json_field(body, "email")?))
            });
            match token_response {
                Some((token, account_email)) => {
                    match store_device_token(&token) {
                        Ok(()) => {
                            device_token = Some(token);
                            token_expires_at = Some(Instant::now() + TOKEN_TTL);
                            paired_account_email = Some(account_email.clone());
                            println!("[LOCAL SERVICE +{}ms] Authorization completed for {account_email}: one-time code exchanged with PKCE and stored in the OS credential store.", started_at.elapsed().as_millis());
                            redirect(&mut stream, &format!("{LAB_ORIGIN}/service-connection-test.html?authorized=1"));
                        }
                        Err(error) => {
                            println!("[LOCAL SERVICE] Token exchange succeeded but secure credential storage failed: {error}");
                            let _ = post_form(AUTH_PORT, "/revoke", &format!("token={token}"));
                            respond(&mut stream, "500 Internal Server Error", r#"{"error":"secure_token_storage_failed"}"#, false);
                        }
                    }
                }
                None => {
                    println!("[LOCAL SERVICE] Authorization code exchange failed");
                    respond(&mut stream, "400 Bad Request", r#"{"error":"token_exchange_failed"}"#, false);
                }
            }
        } else if method == "GET" && path == "/status" {
            let paired = device_token.is_some() && token_expires_at.is_some_and(|expires_at| Instant::now() < expires_at);
            let account_email = if paired { paired_account_email.as_deref().unwrap_or("") } else { "" };
            respond(&mut stream, "200 OK", &format!(r#"{{"paired":{paired},"mode":"local-oauth-pkce","tokenStoredByService":{paired},"accountEmail":"{account_email}"}}"#), true);
        } else if method == "POST" && path == "/revoke" {
            if let Some(token) = device_token.take() { let _ = post_form(AUTH_PORT, "/revoke", &format!("token={token}")); }
            token_expires_at = None;
            paired_account_email = None;
            delete_device_token();
            println!("[LOCAL SERVICE] Local device token revoked and discarded");
            respond(&mut stream, "200 OK", r#"{"revoked":true}"#, true);
        } else {
            respond(&mut stream, "404 Not Found", r#"{"error":"not_found"}"#, true);
        }
    }
}

#[derive(Deserialize)]
struct ProductionTokenResponse {
    access_token: String,
    device_id: String,
    subject: String,
    expires_in: u64,
}

#[derive(Deserialize)]
struct RelayEvent {
    #[serde(rename = "type")]
    event_type: String,
    #[serde(rename = "callKey")]
    call_key: Option<String>,
    #[serde(rename = "senderName")]
    sender_name: Option<String>,
    text: Option<String>,
    channel: Option<String>,
    preferences: Option<SoundPreferences>,
}

#[derive(Deserialize)]
struct SoundSelection { kind: String, #[serde(rename = "customDataUrl")] custom_data_url: Option<String> }

#[derive(Deserialize)]
struct SoundPreferences {
    #[serde(rename = "messageSound")] message_sound: Option<SoundSelection>,
    #[serde(rename = "callSound")] call_sound: Option<SoundSelection>,
    #[serde(rename = "messageVolume")] message_volume: Option<f32>,
    #[serde(rename = "ringtoneVolume")] ringtone_volume: Option<f32>,
}

struct SoundPlayer {
    message_audio: Vec<u8>,
    ringtone_audio: Vec<u8>,
    message_volume: f32,
    ringtone_volume: f32,
    ringtone_stream: Option<OutputStream>,
    ringtone_sink: Option<Sink>,
}

impl SoundPlayer {
    fn new() -> Self {
        Self { message_audio: include_bytes!("../../public/sounds/android-sound-effect-meme_tcbuori.mp3").to_vec(), ringtone_audio: include_bytes!("../../public/sounds/normal-average-ringtone.mp3").to_vec(), message_volume: 0.2, ringtone_volume: 0.2, ringtone_stream: None, ringtone_sink: None }
    }
    fn audio_for(kind: &str, custom: Option<&str>, fallback: &[u8], is_call: bool) -> Vec<u8> {
        if kind == "custom" {
            if let Some(data_url) = custom.and_then(|value| value.split_once(',').map(|(_, data)| data)) {
                if let Ok(bytes) = STANDARD.decode(data_url) { return bytes; }
            }
        }
        match (is_call, kind) {
            (false, "discord") => include_bytes!("../../public/sounds/discord-notification.mp3").to_vec(),
            (true, "samsung") => include_bytes!("../../public/sounds/samsung-ringtone.mp3").to_vec(),
            (true, "iphone") => include_bytes!("../../public/sounds/iphone_ringtone_trap_remixbigconverter.mp3").to_vec(),
            _ => fallback.to_vec(),
        }
    }
    fn apply_preferences(&mut self, preferences: SoundPreferences) {
        if let Some(selection) = preferences.message_sound { self.message_audio = Self::audio_for(&selection.kind, selection.custom_data_url.as_deref(), include_bytes!("../../public/sounds/android-sound-effect-meme_tcbuori.mp3"), false); }
        if let Some(selection) = preferences.call_sound { self.ringtone_audio = Self::audio_for(&selection.kind, selection.custom_data_url.as_deref(), include_bytes!("../../public/sounds/normal-average-ringtone.mp3"), true); }
        if let Some(volume) = preferences.message_volume.filter(|value| (0.0..=1.0).contains(value)) { self.message_volume = volume; }
        if let Some(volume) = preferences.ringtone_volume.filter(|value| (0.0..=1.0).contains(value)) { self.ringtone_volume = volume; }
    }
    fn play_message(&self) {
        let bytes = self.message_audio.clone(); let volume = self.message_volume;
        thread::spawn(move || if let Ok((stream, handle)) = OutputStream::try_default() { if let Ok(sink) = Sink::try_new(&handle) { if let Ok(audio) = Decoder::new(Cursor::new(bytes)) { sink.set_volume(volume); sink.append(audio); sink.sleep_until_end(); } } drop(stream); });
    }
    fn start_ringtone(&mut self) {
        if self.ringtone_sink.is_some() { return; }
        if let Ok((stream, handle)) = OutputStream::try_default() { if let Ok(sink) = Sink::try_new(&handle) { if let Ok(audio) = Decoder::new(Cursor::new(self.ringtone_audio.clone())) { sink.set_volume(self.ringtone_volume); sink.append(audio.repeat_infinite()); self.ringtone_stream = Some(stream); self.ringtone_sink = Some(sink); } } }
    }
    fn stop_ringtone(&mut self) { if let Some(sink) = self.ringtone_sink.take() { sink.stop(); } self.ringtone_stream = None; }
}

fn show_relay_notification(event: &mut RelayEvent, sound_player: &mut SoundPlayer) {
    if let Some(preferences) = event.preferences.take() { sound_player.apply_preferences(preferences); return; }
    if event.event_type == "call_ended" { sound_player.stop_ringtone(); return; }
    let (summary, body) = match event.event_type.as_str() {
        "message" => {
            let sender = event.sender_name.as_deref().unwrap_or("Someone");
            let title = if event.channel.as_deref().is_some_and(|channel| channel.starts_with("dm_")) {
                format!("QuadChat: {sender}")
            } else {
                format!("QuadChat group chat: {sender}")
            };
            (title, event.text.as_deref().unwrap_or("You have a new message.").to_owned())
        }
        "incoming_call" => ("QuadChat incoming call".to_owned(), "Open QuadChat to answer your call.".to_owned()),
        _ => return,
    };
    let mut notification = notify_rust::Notification::new();
    notification.summary(&summary).body(&body).appname("QuadChat Service");
    if let Err(error) = notification.show() {
        eprintln!("[COMPANION] Native notification failed: {error}");
    }
    if event.event_type == "message" { sound_player.play_message(); }
    if event.event_type == "incoming_call" { sound_player.start_ringtone(); }
    if event.event_type == "incoming_call" {
        if let Some(call_key) = &event.call_key {
            println!("[COMPANION] Incoming call alert for {call_key}");
        }
    }
}

fn run_production_pairing() -> Result<(), String> {
    let worker_url = std::env::var("QUADCHAT_COMPANION_WORKER_URL").unwrap_or_else(|_| DEFAULT_WORKER_URL.to_owned())
        .trim_end_matches('/').to_owned();
    let authorize_url = std::env::var("QUADCHAT_COMPANION_AUTHORIZE_URL").unwrap_or_else(|_| DEFAULT_AUTHORIZE_URL.to_owned());
    if !worker_url.starts_with("https://") || !authorize_url.starts_with("https://") {
        return Err("Production pairing requires HTTPS URLs".to_owned());
    }

    let listener = TcpListener::bind(("127.0.0.1", 0)).map_err(|error| error.to_string())?;
    let callback_uri = format!("http://127.0.0.1:{}/callback", listener.local_addr().map_err(|error| error.to_string())?.port());
    let verifier = random_hex(48);
    let state = random_hex(32);
    let device_name = format!("QuadChat Companion ({})", std::env::var("COMPUTERNAME").or_else(|_| std::env::var("HOSTNAME")).unwrap_or_else(|_| "This device".to_owned()));
    let authorization_url = format!(
        "{authorize_url}?code_challenge={}&state={state}&redirect_uri={}&device_name={}",
        pkce_challenge(&verifier),
        percent_encode(&callback_uri), percent_encode(&device_name)
    );
    println!("Opening QuadChat approval page. Approve the service in your browser.");
    webbrowser::open(&authorization_url).map_err(|error| format!("Could not open browser: {error}"))?;

    let mut callback = None;
    for stream in listener.incoming() {
        let Ok(mut stream) = stream else { continue };
        let Some(request) = read_stream(&mut stream) else { continue };
        let (_, target, _, _) = request_parts(&request);
        if !target.starts_with("/callback?") {
            respond(&mut stream, "404 Not Found", r#"{"error":"not_found"}"#, false);
            continue;
        }
        callback = Some((stream, target.to_owned()));
        break;
    }
    let (mut stream, target) = callback.ok_or_else(|| "Authorization callback was not received".to_owned())?;
    let (_, query) = target.split_once('?').unwrap_or((target.as_str(), ""));
    let params = parameters(query);
    let code = params.get("code").ok_or_else(|| "Authorization callback has no code".to_owned())?;
    if params.get("state") != Some(&state) {
        respond(&mut stream, "400 Bad Request", r#"{"error":"invalid_state"}"#, false);
        return Err("Authorization callback state did not match".to_owned());
    }
    let response = reqwest::blocking::Client::new()
        .post(format!("{worker_url}/companion/token"))
        .json(&serde_json::json!({ "code": code, "codeVerifier": verifier }))
        .send().map_err(|error| error.to_string())?;
    if !response.status().is_success() {
        return Err(format!("Token exchange failed: {}", response.status()));
    }
    let token: ProductionTokenResponse = response.json().map_err(|error| error.to_string())?;
    credentials::save(&credentials::DeviceCredential {
        device_id: token.device_id,
        access_token: token.access_token,
        subject: token.subject,
        expires_at_ms: SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).map_err(|error| error.to_string())?.as_millis() as u64 + token.expires_in.saturating_mul(1000),
        worker_url,
    })?;
    respond(&mut stream, "200 OK", r#"{"paired":true}"#, false);
    println!("QuadChat Service paired and stored in the OS credential store.");
    Ok(())
}

fn run_companion_relay() -> Result<(), String> {
    let credential = credentials::load()?.ok_or_else(|| "Pair this companion first with --pair-companion".to_owned())?;
    let now = SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).map_err(|error| error.to_string())?.as_millis() as u64;
    if credential.expires_at_ms <= now {
        credentials::clear()?;
        return Err("The companion credential has expired. Pair again.".to_owned());
    }
    let worker_url = std::env::var("QUADCHAT_COMPANION_WORKER_URL").unwrap_or(credential.worker_url.clone());
    let relay_url = format!("{}/companion/connect?user={}", worker_url.trim_end_matches('/').replace("https://", "wss://").replace("http://", "ws://"), percent_encode(&credential.subject));
    let mut retry_seconds = 1_u64;
    let mut sound_player = SoundPlayer::new();
    start_gaming_overlay_hotkey();
    start_rich_presence_reporter(credential.clone());
    loop {
        match connect(relay_url.as_str()) {
            Ok((mut socket, _)) => {
                retry_seconds = 1;
                let auth = serde_json::json!({ "type": "auth", "deviceId": credential.device_id, "token": credential.access_token }).to_string();
                if socket.send(Message::Text(auth)).is_err() {
                    thread::sleep(Duration::from_secs(retry_seconds));
                    retry_seconds = (retry_seconds * 2).min(30);
                    continue;
                }
                loop {
                    match socket.read() {
                        Ok(Message::Text(text)) => {
                            println!("[COMPANION RELAY] {text}");
                            if let Ok(mut event) = serde_json::from_str::<RelayEvent>(&text) {
                                show_relay_notification(&mut event, &mut sound_player);
                            }
                        }
                        Ok(Message::Close(_)) => break,
                        Ok(_) => {},
                        Err(error) => { eprintln!("[COMPANION RELAY] Connection lost: {error}"); break; }
                    }
                }
            }
            Err(error) => eprintln!("[COMPANION RELAY] Connection failed: {error}"),
        }
        thread::sleep(Duration::from_secs(retry_seconds));
        retry_seconds = (retry_seconds * 2).min(30);
    }
}

#[derive(Clone, PartialEq)]
struct GameActivity { name: &'static str, logo: &'static str, version: Option<String>, detail: Option<String> }

fn game_version(command: &str) -> Option<String> {
    command.split(|character: char| !character.is_ascii_digit() && character != '.')
        .find(|token| token.matches('.').count() >= 1 && token.split('.').all(|part| !part.is_empty() && part.parse::<u16>().is_ok()))
        .map(str::to_owned)
}

fn minecraft_log_directories(command: &str) -> Vec<std::path::PathBuf> {
    let mut directories = Vec::new();
    let arguments = command.split_whitespace().collect::<Vec<_>>();
    for (index, argument) in arguments.iter().enumerate() {
        if *argument == "--gameDir" {
            if let Some(path) = arguments.get(index + 1) { directories.push(std::path::PathBuf::from(path.trim_matches('"'))); }
        }
        if let Some(start) = argument.find(".minecraft") {
            let directory = &argument[..start + ".minecraft".len()];
            if directory.starts_with('/') || directory.starts_with("C:") { directories.push(std::path::PathBuf::from(directory)); }
        }
    }
    if let Ok(home) = std::env::var("HOME").or_else(|_| std::env::var("USERPROFILE")) { directories.push(std::path::PathBuf::from(home).join(".minecraft")); }
    let mut unique = Vec::new();
    for directory in directories {
        if !unique.contains(&directory) { unique.push(directory); }
    }
    unique
}

fn minecraft_detail_from_log(path: &std::path::Path) -> Option<String> {
    let mut log = fs::File::open(path.join("logs/latest.log")).ok()?;
    let start = log.metadata().ok()?.len().saturating_sub(64 * 1024);
    log.seek(SeekFrom::Start(start)).ok()?;
    let mut tail = String::new();
    log.read_to_string(&mut tail).ok()?;
    for line in tail.lines().rev() {
        if let Some(server) = line.split_once("Connecting to ").map(|(_, value)| value.trim()) {
            let server = server.split_whitespace().next().unwrap_or("");
            if !server.is_empty() { return Some(format!("Server: {}", server.chars().take(100).collect::<String>())); }
        }
        let lowercase = line.to_ascii_lowercase();
        if lowercase.contains("starting integrated minecraft server") || lowercase.contains("preparing level") {
            return Some("Singleplayer".to_owned());
        }
    }
    None
}

fn minecraft_activity_detail(command: &str) -> Option<String> {
    minecraft_log_directories(command).into_iter().find_map(|directory| minecraft_detail_from_log(&directory))
}

fn detect_game_activity(system: &mut System) -> Option<GameActivity> {
    // The normal refresh omits command lines for newly launched processes.
    // Minecraft is a Java process, so its command line is how we distinguish
    // it from other Java applications and read its version.
    system.refresh_processes_specifics(
        ProcessesToUpdate::All,
        true,
        ProcessRefreshKind::everything(),
    );
    for process in system.processes().values() {
        let executable = process.name().to_string_lossy().to_ascii_lowercase();
        let command = process.cmd().iter().map(|value| value.to_string_lossy()).collect::<Vec<_>>().join(" ");
        let command_lower = command.to_ascii_lowercase();
        if (executable == "java" || executable == "javaw" || executable == "java.exe" || executable == "javaw.exe") && command_lower.contains("minecraft") {
            return Some(GameActivity { name: "Minecraft Java Edition", logo: "minecraft", version: game_version(&command), detail: minecraft_activity_detail(&command) });
        }
        let game = match executable.as_str() {
            "minecraft.windows.exe" => Some(("Minecraft Bedrock Edition", "minecraft")),
            "robloxplayerbeta.exe" | "robloxplayerbeta" => Some(("Roblox", "roblox")),
            "fortniteclient-win64-shipping.exe" | "fortniteclient-win64-shipping" => Some(("Fortnite", "fortnite")),
            "cs2.exe" | "cs2" => Some(("Counter-Strike 2", "cs2")),
            "valorant-win64-shipping.exe" | "valorant-win64-shipping" => Some(("VALORANT", "valorant")),
            "leagueclientux.exe" | "leagueclientux" => Some(("League of Legends", "league")),
            "overwatch.exe" | "overwatch" => Some(("Overwatch", "overwatch")),
            _ => None
        };
        if let Some((name, logo)) = game { return Some(GameActivity { name, logo, version: None, detail: None }); }
    }
    None
}

fn report_rich_presence(credential: &credentials::DeviceCredential, game: Option<&GameActivity>) -> Result<(), String> {
    let game = game.map(|activity| serde_json::json!({ "name": activity.name, "logo": activity.logo, "version": activity.version, "detail": activity.detail }));
    let response = reqwest::blocking::Client::new()
        .post(format!("{}/companion/rich-presence", credential.worker_url.trim_end_matches('/')))
        .json(&serde_json::json!({ "userId": credential.subject, "deviceId": credential.device_id, "token": credential.access_token, "game": game }))
        .send().map_err(|error| error.to_string())?;
    if response.status().is_success() { Ok(()) } else { Err(format!("Presence update failed ({})", response.status())) }
}

fn start_rich_presence_reporter(credential: credentials::DeviceCredential) {
    thread::spawn(move || {
        let mut system = System::new_all();
        let mut was_shared = false;
        loop {
            let enabled = credentials::rich_presence_enabled().unwrap_or(false);
            let game = enabled.then(|| detect_game_activity(&mut system)).flatten();
            if enabled || was_shared {
                if let Err(error) = report_rich_presence(&credential, game.as_ref()) { eprintln!("[RICH PRESENCE] {error}"); }
            }
            was_shared = enabled;
            thread::sleep(RICH_PRESENCE_INTERVAL);
        }
    });
}

fn start_gaming_overlay_hotkey() {
    thread::spawn(|| {
        let Ok(manager) = GlobalHotKeyManager::new() else { eprintln!("[OVERLAY] Global hotkeys are unavailable on this desktop session."); return; };
        let hotkey = HotKey::new(Some(Modifiers::CONTROL | Modifiers::ALT), Code::Space);
        if manager.register(hotkey).is_err() { eprintln!("[OVERLAY] Could not register Ctrl+Alt+Space."); return; }
        let receiver = GlobalHotKeyEvent::receiver();
        while let Ok(event) = receiver.recv() {
            if event.id == hotkey.id() {
                if let Ok(executable) = std::env::current_exe() {
                    let _ = Command::new(executable).arg("--gaming-overlay").spawn();
                }
            }
        }
    });
}

#[derive(Deserialize)]
struct OverlayContact { #[serde(rename = "userId")] user_id: String, name: String }

#[derive(Deserialize)]
struct OverlayContactsResponse { contacts: Vec<OverlayContact> }

struct GamingOverlay { text: String, channel: String, status: String, contacts: Vec<OverlayContact>, selected_contact: String }

fn send_overlay_message(channel: &str, text: &str) -> Result<(), String> {
    let credential = credentials::load()?.ok_or_else(|| "Pair this companion first.".to_owned())?;
    let response = reqwest::blocking::Client::new().post(format!("{}/companion/action", credential.worker_url.trim_end_matches('/')))
        .json(&serde_json::json!({ "userId": credential.subject, "deviceId": credential.device_id, "token": credential.access_token, "action": "send_message", "channel": channel, "text": text }))
        .send().map_err(|error| error.to_string())?;
    if response.status().is_success() { Ok(()) } else { Err(format!("Message was not sent ({})", response.status())) }
}

fn queue_overlay_call_mute_toggle() -> Result<(), String> {
    let credential = credentials::load()?.ok_or_else(|| "Pair this companion first.".to_owned())?;
    let response = reqwest::blocking::Client::new().post(format!("{}/companion/action", credential.worker_url.trim_end_matches('/')))
        .json(&serde_json::json!({ "userId": credential.subject, "deviceId": credential.device_id, "token": credential.access_token, "action": "toggle_call_mute" }))
        .send().map_err(|error| error.to_string())?;
    if response.status().is_success() { Ok(()) } else { Err(format!("Call control was not sent ({})", response.status())) }
}

fn load_overlay_contacts() -> Result<Vec<OverlayContact>, String> {
    let credential = credentials::load()?.ok_or_else(|| "Pair this companion first.".to_owned())?;
    let response = reqwest::blocking::Client::new().post(format!("{}/companion/action", credential.worker_url.trim_end_matches('/')))
        .json(&serde_json::json!({ "userId": credential.subject, "deviceId": credential.device_id, "token": credential.access_token, "action": "list_contacts" }))
        .send().map_err(|error| error.to_string())?;
    if !response.status().is_success() { return Err("Could not load contacts.".to_owned()); }
    Ok(response.json::<OverlayContactsResponse>().map_err(|error| error.to_string())?.contacts)
}

impl eframe::App for GamingOverlay {
    fn update(&mut self, context: &eframe::egui::Context, _: &mut eframe::Frame) {
        eframe::egui::CentralPanel::default().show(context, |ui| {
            ui.heading("QuadChat Overlay");
            ui.label("Quick message without leaving your game.");
            ui.separator();
            ui.horizontal(|ui| {
                ui.selectable_value(&mut self.channel, "group".to_owned(), "Group");
                ui.selectable_value(&mut self.channel, "suggestions".to_owned(), "Suggestions");
                ui.selectable_value(&mut self.channel, "dm".to_owned(), "DM");
            });
            if self.channel == "dm" {
                if self.contacts.is_empty() && ui.button("Load contacts").clicked() { self.contacts = load_overlay_contacts().unwrap_or_default(); }
                eframe::egui::ComboBox::from_label("Recipient").selected_text(self.contacts.iter().find(|contact| contact.user_id == self.selected_contact).map(|contact| contact.name.as_str()).unwrap_or("Choose contact")).show_ui(ui, |ui| {
                    for contact in &self.contacts { ui.selectable_value(&mut self.selected_contact, contact.user_id.clone(), &contact.name); }
                });
            }
            ui.add(eframe::egui::TextEdit::singleline(&mut self.text).hint_text("Message"));
            ui.horizontal(|ui| {
                if ui.button("Send").clicked() && !self.text.trim().is_empty() {
                    let channel = if self.channel == "dm" { let mut participants = vec![credentials::load().ok().flatten().map(|value| value.subject).unwrap_or_default(), self.selected_contact.clone()]; participants.sort(); format!("dm_{}", participants.into_iter().filter(|value| !value.is_empty()).collect::<Vec<_>>().join("_")) } else { self.channel.clone() };
                    self.status = if self.channel == "dm" && self.selected_contact.is_empty() { "Choose a DM recipient first.".to_owned() } else { match send_overlay_message(&channel, &self.text) { Ok(()) => { self.text.clear(); "Sent.".to_owned() }, Err(error) => format!("Error: {error}") } };
                }
                if ui.button("Unfocus overlay").clicked() { context.send_viewport_cmd(eframe::egui::ViewportCommand::Close); }
            });
            ui.separator();
            if ui.button("Toggle active-call mute").clicked() {
                self.status = match queue_overlay_call_mute_toggle() {
                    Ok(()) => "Mute control sent to your QuadChat browser.".to_owned(),
                    Err(error) => format!("Error: {error}")
                };
            }
            ui.label(&self.status);
        });
    }
}

fn run_gaming_overlay() -> Result<(), String> {
    let options = eframe::NativeOptions { viewport: eframe::egui::ViewportBuilder::default().with_always_on_top(), ..Default::default() };
    eframe::run_native("QuadChat Overlay", options, Box::new(|_| Ok(Box::new(GamingOverlay { text: String::new(), channel: "group".to_owned(), status: String::new(), contacts: Vec::new(), selected_contact: String::new() })))).map_err(|error| error.to_string())
}

#[cfg(target_os = "linux")]
fn install_persistent_relay(executable: &str) -> Result<(), String> {
    let home = std::env::var("HOME").map_err(|_| "HOME is not set".to_owned())?;
    let directory = format!("{home}/.config/systemd/user");
    fs::create_dir_all(&directory).map_err(|error| error.to_string())?;
    fs::write(format!("{directory}/quadchat-background-service.service"), format!("[Unit]\nDescription=QuadChat Background Service\nAfter=graphical-session.target\n\n[Service]\nExecStart={executable} --relay-companion\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=default.target\n")).map_err(|error| error.to_string())?;
    let reload = Command::new("systemctl").args(["--user", "daemon-reload"]).status().map_err(|error| error.to_string())?;
    let enable = Command::new("systemctl").args(["--user", "enable", "--now", "quadchat-background-service.service"]).status().map_err(|error| error.to_string())?;
    if !reload.success() || !enable.success() { return Err("systemctl could not enable QuadChat Background Service".to_owned()); }
    Ok(())
}

#[cfg(target_os = "linux")]
fn remove_persistent_relay() -> Result<(), String> {
    let home = std::env::var("HOME").map_err(|_| "HOME is not set".to_owned())?;
    let _ = Command::new("systemctl").args(["--user", "disable", "--now", "quadchat-background-service.service"]).status();
    fs::remove_file(format!("{home}/.config/systemd/user/quadchat-background-service.service")).ok();
    let _ = Command::new("systemctl").args(["--user", "daemon-reload"]).status();
    Ok(())
}

#[cfg(target_os = "linux")]
fn persistent_enabled() -> bool { std::env::var("HOME").ok().is_some_and(|home| std::path::Path::new(&format!("{home}/.config/systemd/user/quadchat-background-service.service")).exists()) }

#[cfg(target_os = "macos")]
fn install_persistent_relay(executable: &str) -> Result<(), String> {
    let home = std::env::var("HOME").map_err(|_| "HOME is not set".to_owned())?;
    let path = format!("{home}/Library/LaunchAgents/com.quadchat.background-service.plist");
    fs::create_dir_all(format!("{home}/Library/LaunchAgents")).map_err(|error| error.to_string())?;
    fs::write(&path, format!(r#"<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>Label</key><string>com.quadchat.background-service</string><key>ProgramArguments</key><array><string>{executable}</string><string>--relay-companion</string></array><key>RunAtLoad</key><true/><key>KeepAlive</key><true/></dict></plist>"#)).map_err(|error| error.to_string())?;
    let uid = Command::new("id").arg("-u").output().map_err(|error| error.to_string())?;
    let status = Command::new("launchctl").args(["bootstrap", &format!("gui/{}", String::from_utf8_lossy(&uid.stdout).trim()), &path]).status().map_err(|error| error.to_string())?;
    if status.success() { Ok(()) } else { Err("launchctl could not enable QuadChat Background Service".to_owned()) }
}

#[cfg(target_os = "macos")]
fn remove_persistent_relay() -> Result<(), String> {
    let home = std::env::var("HOME").map_err(|_| "HOME is not set".to_owned())?;
    let path = format!("{home}/Library/LaunchAgents/com.quadchat.background-service.plist");
    let _ = Command::new("launchctl").args(["bootout", &path]).status();
    fs::remove_file(path).ok(); Ok(())
}

#[cfg(target_os = "macos")]
fn persistent_enabled() -> bool { std::env::var("HOME").ok().is_some_and(|home| std::path::Path::new(&format!("{home}/Library/LaunchAgents/com.quadchat.background-service.plist")).exists()) }

#[cfg(target_os = "windows")]
fn install_persistent_relay(executable: &str) -> Result<(), String> {
    let status = Command::new("schtasks").args(["/Create", "/TN", "QuadChat Background Service", "/SC", "ONLOGON", "/TR", &format!("\"{executable}\" --relay-companion"), "/F"]).status().map_err(|error| error.to_string())?;
    if status.success() { Ok(()) } else { Err("schtasks could not enable QuadChat Background Service".to_owned()) }
}

#[cfg(target_os = "windows")]
fn remove_persistent_relay() -> Result<(), String> {
    let status = Command::new("schtasks").args(["/Delete", "/TN", "QuadChat Background Service", "/F"]).status().map_err(|error| error.to_string())?;
    if status.success() { Ok(()) } else { Err("schtasks could not remove QuadChat Background Service".to_owned()) }
}

#[cfg(target_os = "windows")]
fn persistent_enabled() -> bool { Command::new("schtasks").args(["/Query", "/TN", "QuadChat Background Service"]).status().is_ok_and(|status| status.success()) }

fn percent_encode(value: &str) -> String {
    value.bytes().map(|byte| if byte.is_ascii_alphanumeric() || matches!(byte, b'-' | b'_' | b'.' | b'~') { (byte as char).to_string() } else { format!("%{byte:02X}") }).collect()
}

fn parse_version(value: &str) -> Option<Vec<u32>> {
    let parts = value.trim().trim_start_matches('v').split('.').map(str::parse::<u32>).collect::<Result<Vec<_>, _>>().ok()?;
    (!parts.is_empty() && parts.len() <= 4).then_some(parts)
}

fn is_newer_version(available: &str, installed: &str) -> bool {
    let (Some(mut available), Some(mut installed)) = (parse_version(available), parse_version(installed)) else { return false; };
    let length = available.len().max(installed.len());
    available.resize(length, 0);
    installed.resize(length, 0);
    available > installed
}

fn companion_installer_asset_name() -> Result<&'static str, String> {
    #[cfg(target_os = "windows")]
    { Ok("quadchat-background-service-windows-x64-setup.exe") }
    #[cfg(all(target_os = "macos", target_arch = "aarch64"))]
    { Ok("quadchat-background-service-macos-arm64.pkg") }
    #[cfg(all(target_os = "macos", not(target_arch = "aarch64")))]
    { Err("Automatic updates are currently available for Apple Silicon Macs only.".to_owned()) }
    #[cfg(target_os = "linux")]
    { Ok("quadchat-background-service-linux-x64.deb") }
}

fn launch_companion_installer(installer: &std::path::Path) -> Result<(), String> {
    #[cfg(target_os = "windows")]
    { Command::new(installer).spawn().map_err(|error| error.to_string())?; }
    #[cfg(target_os = "macos")]
    { Command::new("open").arg(installer).spawn().map_err(|error| error.to_string())?; }
    #[cfg(target_os = "linux")]
    {
        let installer = installer.to_str().ok_or_else(|| "Updater path is not valid UTF-8".to_owned())?;
        if Command::new("pkexec").args(["dpkg", "-i", installer]).spawn().is_err() {
            Command::new("xdg-open").arg(installer).spawn().map_err(|error| error.to_string())?;
        }
    }
    Ok(())
}

enum GuiTaskEvent {
    Progress { status: String, progress: Option<f32> },
    Finished(String),
}

fn report_update_progress(sender: &mpsc::Sender<GuiTaskEvent>, status: impl Into<String>, progress: Option<f32>) {
    let _ = sender.send(GuiTaskEvent::Progress { status: status.into(), progress });
}

fn check_for_companion_update(sender: &mpsc::Sender<GuiTaskEvent>) -> Result<String, String> {
    report_update_progress(sender, "Checking for updates…", None);
    let client = reqwest::blocking::Client::builder().user_agent("QuadChat-Companion-Updater").build().map_err(|error| error.to_string())?;
    let response = client.get(COMPANION_RELEASE_API).send().map_err(|error| format!("Could not check for updates: {error}"))?;
    if !response.status().is_success() { return Err(format!("Could not check for updates ({})", response.status())); }
    let release: GitHubRelease = response.json().map_err(|error| format!("Could not read update details: {error}"))?;
    let available = release.name.as_deref().and_then(|name| name.split_whitespace().find_map(|word| parse_version(word).map(|_| word.trim_start_matches('v')))).ok_or_else(|| "The update release does not include a version.".to_owned())?;
    let installed = env!("CARGO_PKG_VERSION");
    if !is_newer_version(available, installed) { return Ok("This app is at the latest version.".to_owned()); }
    let asset_name = companion_installer_asset_name()?;
    let asset = release.assets.iter().find(|asset| asset.name == asset_name).ok_or_else(|| "No installer is available for this platform yet.".to_owned())?;
    report_update_progress(sender, format!("Downloading version {available}…"), Some(0.0));
    let mut response = client.get(&asset.browser_download_url).send().map_err(|error| format!("Could not download the update: {error}"))?.error_for_status().map_err(|error| format!("Could not download the update: {error}"))?;
    let total_bytes = response.content_length();
    let installer = std::env::temp_dir().join(asset_name);
    let mut file = fs::File::create(&installer).map_err(|error| format!("Could not save the update: {error}"))?;
    let mut buffer = [0_u8; 64 * 1024];
    let mut downloaded = 0_u64;
    let mut last_percent = None;
    loop {
        let count = response.read(&mut buffer).map_err(|error| format!("Could not download the update: {error}"))?;
        if count == 0 { break; }
        file.write_all(&buffer[..count]).map_err(|error| format!("Could not save the update: {error}"))?;
        downloaded += count as u64;
        if let Some(total) = total_bytes {
            let progress = (downloaded as f32 / total as f32).clamp(0.0, 1.0);
            let percent = (progress * 100.0).floor() as u8;
            if last_percent != Some(percent) {
                report_update_progress(sender, format!("Downloading version {available}… {percent}%"), Some(progress));
                last_percent = Some(percent);
            }
        } else {
            report_update_progress(sender, format!("Downloading version {available}… {} MB", downloaded / 1_000_000), None);
        }
    }
    file.flush().map_err(|error| format!("Could not save the update: {error}"))?;
    report_update_progress(sender, "Download complete. Launching installer…", Some(1.0));
    launch_companion_installer(&installer)?;
    Ok(format!("Installer opened for version {available}. Follow its steps to finish updating."))
}

struct CompanionGui { status: String, result: Option<Receiver<GuiTaskEvent>>, update_progress: Option<f32> }

impl CompanionGui {
    fn run_action(&mut self, action: fn() -> Result<(), String>, label: &str) {
        let (sender, receiver) = mpsc::channel();
        self.status = format!("{label}…");
        self.update_progress = None;
        self.result = Some(receiver);
        thread::spawn(move || { let _ = sender.send(GuiTaskEvent::Finished(match action() { Ok(()) => "Done.".to_owned(), Err(error) => format!("Error: {error}") })); });
    }

    fn check_for_updates(&mut self) {
        let (sender, receiver) = mpsc::channel();
        self.status = "Checking for updates…".to_owned();
        self.update_progress = None;
        self.result = Some(receiver);
        thread::spawn(move || { let result = match check_for_companion_update(&sender) { Ok(status) => status, Err(error) => format!("Error: {error}") }; let _ = sender.send(GuiTaskEvent::Finished(result)); });
    }
}

fn install_from_gui() -> Result<(), String> {
    if credentials::load()?.is_none() { return Err("Pair this companion first.".to_owned()); }
    let executable = std::env::current_exe().map_err(|error| error.to_string())?.into_os_string().into_string().map_err(|_| "Service path is not valid UTF-8".to_owned())?;
    install_persistent_relay(&executable)
}

fn toggle_rich_presence_from_gui() -> Result<(), String> {
    let enabled = credentials::rich_presence_enabled()?;
    credentials::set_rich_presence_enabled(!enabled)
}

impl eframe::App for CompanionGui {
    fn update(&mut self, context: &eframe::egui::Context, _: &mut eframe::Frame) {
        let mut finished = None;
        if let Some(receiver) = &self.result {
            while let Ok(event) = receiver.try_recv() {
                match event {
                    GuiTaskEvent::Progress { status, progress } => { self.status = status; self.update_progress = progress; }
                    GuiTaskEvent::Finished(status) => finished = Some(status),
                }
            }
        }
        if let Some(status) = finished { self.status = status; self.update_progress = None; self.result = None; }
        if self.result.is_some() { context.request_repaint_after(Duration::from_millis(100)); }
        eframe::egui::CentralPanel::default().show(context, |ui| {
            ui.heading("QuadChat Companion");
            ui.label("Notifications for this device when your browser is closed.");
            ui.label(format!("Version {}", env!("CARGO_PKG_VERSION")));
            ui.separator();
            let credential = credentials::load().ok().flatten();
            let device_name = std::env::var("COMPUTERNAME").or_else(|_| std::env::var("HOSTNAME")).unwrap_or_else(|_| "This device".to_owned());
            ui.label(format!("Device: {device_name}"));
            ui.label(match &credential { Some(value) => format!("Paired device ID: {}", &value.device_id[..8]), None => "Not paired".to_owned() });
            if ui.add(eframe::egui::Button::new(if credential.is_some() { "Paired — click to unpair" } else { "Pair this device" })).clicked() {
                if credential.is_some() { self.run_action(credentials::clear, "Removing paired companion"); } else { self.run_action(run_production_pairing, "Opening QuadChat authorization"); }
            }
            let enabled = persistent_enabled();
            if ui.add(eframe::egui::Button::new(if enabled { "Persistent service enabled — click to disable" } else { "Enable persistent background service" })).clicked() {
                if enabled { self.run_action(remove_persistent_relay, "Disabling background service"); } else { self.run_action(install_from_gui, "Enabling background service"); }
            }
            let sharing_game = credentials::rich_presence_enabled().unwrap_or(false);
            if ui.add(eframe::egui::Button::new(if sharing_game { "Sharing recognized game activity — click to disable" } else { "Share recognized game activity" })).clicked() {
                self.run_action(toggle_rich_presence_from_gui, if sharing_game { "Stopping game activity sharing" } else { "Enabling game activity sharing" });
            }
            if ui.add_enabled(self.result.is_none(), eframe::egui::Button::new("Check for updates")).clicked() {
                self.check_for_updates();
            }
            ui.separator();
            ui.label(&self.status);
            if let Some(progress) = self.update_progress { ui.add(eframe::egui::ProgressBar::new(progress).show_percentage()); }
        });
    }
}

fn run_gui() -> Result<(), String> {
    let status = match credentials::load() { Ok(Some(_)) => "Paired. You can enable persistent background notifications.".to_owned(), Ok(None) => "Not paired yet.".to_owned(), Err(error) => format!("Credential-store error: {error}") };
    eframe::run_native("QuadChat Companion", eframe::NativeOptions::default(), Box::new(|_| Ok(Box::new(CompanionGui { status, result: None, update_progress: None })))).map_err(|error| error.to_string())
}

fn main() {
    if std::env::args().any(|arg| arg == "--local-connection-test") { run_local_connection_test(); }
    else if std::env::args().any(|arg| arg == "--pair-companion") {
        if let Err(error) = run_production_pairing() { eprintln!("Companion pairing failed: {error}"); std::process::exit(1); }
    }
    else if std::env::args().any(|arg| arg == "--companion-status") {
        match credentials::load() {
            Ok(Some(credential)) => println!("Paired device {} for {} (expires at {}ms)", credential.device_id, credential.subject, credential.expires_at_ms),
            Ok(None) => println!("No QuadChat companion credential is stored."),
            Err(error) => { eprintln!("Could not read OS credential store: {error}"); std::process::exit(1); }
        }
    }
    else if std::env::args().any(|arg| arg == "--forget-companion") {
        if let Err(error) = credentials::clear() { eprintln!("Could not clear OS credential store: {error}"); std::process::exit(1); }
        println!("QuadChat companion credential removed.");
    }
    else if std::env::args().any(|arg| arg == "--relay-companion") {
        if let Err(error) = run_companion_relay() { eprintln!("Companion relay stopped: {error}"); std::process::exit(1); }
    }
    else if std::env::args().any(|arg| arg == "--gaming-overlay") {
        if let Err(error) = run_gaming_overlay() { eprintln!("Could not open gaming overlay: {error}"); std::process::exit(1); }
    }
    else if std::env::args().any(|arg| arg == "--install-persistent") {
        if credentials::load().ok().flatten().is_none() { eprintln!("Pair this companion first with --pair-companion"); std::process::exit(1); }
        let executable = std::env::current_exe().map_err(|error| error.to_string()).and_then(|path| path.into_os_string().into_string().map_err(|_| "Service path is not valid UTF-8".to_owned()));
        match executable.and_then(|path| install_persistent_relay(&path)) {
            Ok(()) => println!("QuadChat Background Service will now start automatically after you sign in."),
            Err(error) => { eprintln!("Could not enable persistent service: {error}"); std::process::exit(1); }
        }
    }
    else if let Err(error) = run_gui() { eprintln!("Could not open QuadChat Companion: {error}"); std::process::exit(1); }
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
        store.codes.insert("code".into(), AuthorizationCode { code_challenge: pkce_challenge(verifier), expires_at: Instant::now() + CODE_TTL, account_id: "uid".into(), account_email: "test@quadchat.local".into() });
        assert!(store.exchange_code("code", "wrong-verifier").is_err());
        assert!(store.exchange_code("code", verifier).is_err());
    }

    #[test]
    fn expired_code_is_rejected() {
        let mut store = LocalAuthStore::new();
        store.codes.insert("expired".into(), AuthorizationCode { code_challenge: pkce_challenge("verifier"), expires_at: Instant::now() - Duration::from_secs(1), account_id: "uid".into(), account_email: "test@quadchat.local".into() });
        assert!(store.exchange_code("expired", "verifier").is_err());
    }

    #[test]
    fn authorization_link_state_is_single_use() {
        let mut store = LocalAuthStore::new();
        assert!(store.claimed_states.insert("state".into()));
        assert!(!store.claimed_states.insert("state".into()));
    }
}
