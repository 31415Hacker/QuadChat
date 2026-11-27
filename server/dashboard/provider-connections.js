import crypto from "crypto";

const COLLECTION = "dashboard-provider-connections";

function encryptionKey() {
  const secret = process.env.DASHBOARD_CREDENTIAL_ENCRYPTION_KEY;
  if (!secret) throw new Error("DASHBOARD_CREDENTIAL_ENCRYPTION_KEY is not configured.");
  return crypto.createHash("sha256").update(secret).digest();
}

function encrypt(value) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  return {
    ciphertext: ciphertext.toString("base64"),
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64")
  };
}

function decrypt(value) {
  if (!value?.ciphertext || !value?.iv || !value?.tag) return null;
  const decipher = crypto.createDecipheriv("aes-256-gcm", encryptionKey(), Buffer.from(value.iv, "base64"));
  decipher.setAuthTag(Buffer.from(value.tag, "base64"));
  return Buffer.concat([decipher.update(Buffer.from(value.ciphertext, "base64")), decipher.final()]).toString("utf8");
}

export async function getProviderConnection(store, provider) {
  const snapshot = await store.doc(`${COLLECTION}/${provider}`).get();
  if (!snapshot.exists) return null;
  const data = snapshot.data();
  try {
    return { ...data, secret: decrypt(data.secret) };
  } catch {
    return { ...data, secret: null, corrupted: true };
  }
}

export async function saveProviderConnection(store, provider, { secret, metadata = {} }) {
  await store.doc(`${COLLECTION}/${provider}`).set({
    provider,
    secret: encrypt(secret),
    metadata,
    connectedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}

export async function deleteProviderConnection(store, provider) {
  await store.doc(`${COLLECTION}/${provider}`).delete();
}

export function publicConnection(connection) {
  if (!connection) return { connected: false };
  return {
    connected: Boolean(connection.secret) && !connection.corrupted,
    connectedAt: connection.connectedAt || null,
    metadata: connection.metadata || {},
    error: connection.corrupted ? "Stored credential could not be decrypted. Reconnect this provider." : null
  };
}
