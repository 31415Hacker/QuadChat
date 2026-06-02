const { Readable } = require("stream");
const { google } = require("googleapis");
const { initializeApp } = require("firebase-admin/app");
const { HttpsError, onCall } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

initializeApp();

const driveServiceAccountJson = defineSecret(
  "GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON"
);
const driveSharedFolderId = defineSecret("GOOGLE_DRIVE_SHARED_FOLDER_ID");

const maxAttachmentBytes = 10 * 1024 * 1024;
const allowedOrigin = "https://31415hacker.github.io";

function parseServiceAccount() {
  try {
    return JSON.parse(driveServiceAccountJson.value());
  } catch (error) {
    throw new HttpsError(
      "failed-precondition",
      "Drive service account secret is not valid JSON."
    );
  }
}

function getDriveClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: parseServiceAccount(),
    scopes: ["https://www.googleapis.com/auth/drive.file"]
  });

  return google.drive({ version: "v3", auth });
}

function validateUploadData(data) {
  const name = String(data?.name || "").trim();
  const type = String(data?.type || "application/octet-stream").trim();
  const dataBase64 = String(data?.dataBase64 || "");

  if (!name || name.length > 180) {
    throw new HttpsError("invalid-argument", "File name is invalid.");
  }

  if (!dataBase64) {
    throw new HttpsError("invalid-argument", "File data is missing.");
  }

  const buffer = Buffer.from(dataBase64, "base64");

  if (buffer.length === 0 || buffer.length > maxAttachmentBytes) {
    throw new HttpsError(
      "invalid-argument",
      "Files must be between 1 byte and 10 MB."
    );
  }

  return { buffer, name, type };
}

exports.uploadDriveFile = onCall(
  {
    cors: [allowedOrigin],
    maxInstances: 10,
    region: "us-central1",
    secrets: [driveServiceAccountJson, driveSharedFolderId]
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Sign in to upload files.");
    }

    const { buffer, name, type } = validateUploadData(request.data);
    const drive = getDriveClient();
    const folderId = driveSharedFolderId.value();

    if (!folderId) {
      throw new HttpsError(
        "failed-precondition",
        "Drive shared folder ID secret is missing."
      );
    }

    const createdFile = await drive.files.create({
      fields: "id,name,mimeType,size,webViewLink,webContentLink",
      media: {
        body: Readable.from(buffer),
        mimeType: type
      },
      requestBody: {
        name,
        parents: [folderId]
      }
    });

    await drive.permissions.create({
      fileId: createdFile.data.id,
      requestBody: {
        role: "reader",
        type: "anyone"
      }
    });

    return {
      driveFileId: createdFile.data.id,
      name: createdFile.data.name || name,
      size: Number(createdFile.data.size || buffer.length),
      type: createdFile.data.mimeType || type,
      url: `https://drive.google.com/uc?export=view&id=${createdFile.data.id}`,
      viewUrl:
        createdFile.data.webViewLink ||
        `https://drive.google.com/file/d/${createdFile.data.id}/view`
    };
  }
);
