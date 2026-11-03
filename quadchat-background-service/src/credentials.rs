use keyring::Entry;

const SERVICE: &str = "QuadChat Companion";
const ACCOUNT: &str = "device-credential";

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct DeviceCredential {
    pub device_id: String,
    pub access_token: String,
    pub subject: String,
    pub expires_at_ms: u64,
}

fn entry() -> Result<Entry, String> {
    Entry::new(SERVICE, ACCOUNT).map_err(|error| error.to_string())
}

fn valid_field(value: &str) -> bool {
    !value.is_empty() && !value.contains('|') && !value.contains('\n') && !value.contains('\r')
}

fn encode(credential: &DeviceCredential) -> Result<String, String> {
    if !valid_field(&credential.device_id) || !valid_field(&credential.access_token) || !valid_field(&credential.subject) || credential.expires_at_ms == 0 {
        return Err("Invalid companion credential".to_owned());
    }
    Ok(format!("v1|{}|{}|{}|{}", credential.device_id, credential.access_token, credential.subject, credential.expires_at_ms))
}

fn decode(value: &str) -> Result<DeviceCredential, String> {
    let parts: Vec<_> = value.split('|').collect();
    if parts.len() != 5 || parts[0] != "v1" {
        return Err("Unsupported companion credential format".to_owned());
    }
    let expires_at_ms = parts[4].parse().map_err(|_| "Invalid companion credential expiry".to_owned())?;
    let credential = DeviceCredential { device_id: parts[1].to_owned(), access_token: parts[2].to_owned(), subject: parts[3].to_owned(), expires_at_ms };
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
        Ok(()) => Ok(()),
        Err(error) if error.to_string().to_ascii_lowercase().contains("no entry") => Ok(()),
        Err(error) => Err(error.to_string()),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample() -> DeviceCredential {
        DeviceCredential { device_id: "device".into(), access_token: "token".into(), subject: "uid".into(), expires_at_ms: 123 }
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
