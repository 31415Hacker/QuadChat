import { auth } from "./firebase.js";

export async function uploadToCloudinary(file, kind = "message") {
  if (!auth.currentUser) {
    throw new Error("Not signed in");
  }

  const idToken = await auth.currentUser.getIdToken();
  const signatureRes = await fetch("/api/cloudinary-signature", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      kind,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size
    })
  });
  if (!signatureRes.ok) {
    const err = await signatureRes.json().catch(() => ({}));
    throw new Error(err.error || `Failed to get upload signature (${signatureRes.status})`);
  }
  const { signature, timestamp, apiKey, cloudName, uploadPreset } =
    await signatureRes.json();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("cloud_name", cloudName);
  formData.append("api_key", apiKey);
  formData.append("timestamp", String(timestamp));
  formData.append("signature", signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Upload failed (${response.status}): ${errorBody}`);
  }

  const result = await response.json();
  return result.secure_url;
}
