use keyring::Entry;

const SERVICE: &str = "QuadChat Companion";
const ACCOUNT: &str = "device-credential";
const RICH_PRESENCE_ACCOUNT: &str = "rich-presence-enabled";
const DEFAULT_WORKER_URL: &str = "https://quadchat-worker.ariqipraditya.workers.dev";

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct DeviceCredential {
    pub device_id: String,
    pub access_token: String,
    pub subject: String,
    pub expires_at_ms: u64,
    pub worker_url: String,
}

fn entry() -> Result<Entry, String> {
    Entry::new(SERVICE, ACCOUNT).map_err(|error| error.to_string())
}

fn rich_presence_entry() -> Result<Entry, String> {
    Entry::new(SERVICE, RICH_PRESENCE_ACCOUNT).map_err(|error| error.to_string())
}

pub fn rich_presence_enabled() -> Result<bool, String> {
    match rich_presence_entry()?.get_password() {
        Ok(value) => Ok(value == "true"),
        Err(error) if error.to_string().to_ascii_lowercase().contains("no entry") => Ok(false),
        Err(error) => Err(error.to_string())
    }
}

pub fn set_rich_presence_enabled(enabled: bool) -> Result<(), String> {
    rich_presence_entry()?.set_password(if enabled { "true" } else { "false" }).map_err(|error| error.to_string())
}

fn valid_field(value: &str) -> bool {
    !value.is_empty() && !value.contains('|') && !value.contains('\n') && !value.contains('\r')
}

fn encode(credential: &DeviceCredential) -> Result<String, String> {
    if !valid_field(&credential.device_id) || !valid_field(&credential.access_token) || !valid_field(&credential.subject) || !valid_field(&credential.worker_url) || credential.expires_at_ms == 0 {
        return Err("Invalid companion credential".to_owned());
    }
    Ok(format!("v2|{}|{}|{}|{}|{}", credential.device_id, credential.access_token, credential.subject, credential.expires_at_ms, credential.worker_url))
}

fn decode(value: &str) -> Result<DeviceCredential, String> {
    let parts: Vec<_> = value.split('|').collect();
    let (expires_at_ms, worker_url) = match parts.as_slice() {
        ["v1", _, _, _, expires_at] => (expires_at.parse().map_err(|_| "Invalid companion credential expiry".to_owned())?, DEFAULT_WORKER_URL.to_owned()),
        ["v2", _, _, _, expires_at, worker_url] => (expires_at.parse().map_err(|_| "Invalid companion credential expiry".to_owned())?, (*worker_url).to_owned()),
        _ => return Err("Unsupported companion credential format".to_owned())
    };
    let credential = DeviceCredential { device_id: parts[1].to_owned(), access_token: parts[2].to_owned(), subject: parts[3].to_owned(), expires_at_ms, worker_url };
    encode(&credential)?;
    Ok(credential)
}

pub fn save(credential: &DeviceCredential) -> Result<(), String> {
    entry()?.set_password(&encode(credential)?).map_err(|error| error.to_string())
}

pub fn load() -> Result<Option<DeviceCredential>, String> {
    match entry()?.get_password() {
        Ok(value) => decode(&value).map(Some),
        Err(error) if error.to_string().to_ascii_lowercase().contains("no entry") => Ok(None),
        Err(error) => Err(error.to_string()),
    }
}

pub fn clear() -> Result<(), String> {
    match entry()?.delete_credential() {
        Ok(()) => {
            let _ = rich_presence_entry()?.delete_credential();
            Ok(())
        },
        Err(error) if error.to_string().to_ascii_lowercase().contains("no entry") => {
            let _ = rich_presence_entry()?.delete_credential();
            Ok(())
        },
        Err(error) => Err(error.to_string()),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample() -> DeviceCredential {
        DeviceCredential { device_id: "device".into(), access_token: "token".into(), subject: "uid".into(), expires_at_ms: 123, worker_url: "https://worker.example".into() }
    }

    #[test]
    fn credentials_round_trip_without_plaintext_file_storage() {
        assert_eq!(decode(&encode(&sample()).unwrap()).unwrap(), sample());
    }

    #[test]
    fn malformed_credentials_are_rejected() {
        assert!(decode("v1|only|three").is_err());
        assert!(encode(&DeviceCredential { access_token: "bad|token".into(), ..sample() }).is_err());
    }
}
