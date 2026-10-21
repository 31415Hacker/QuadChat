import admin from "firebase-admin";

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
const commit = process.argv[2];

if (!serviceAccountJson) throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is required");
if (!commit) throw new Error("A commit SHA is required");

const serviceAccount = JSON.parse(serviceAccountJson);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

await admin.firestore().doc("settings/app").set({
  deploymentStatus: "deploying",
  deployingCommit: commit,
  deploymentStartedAt: Date.now()
}, { merge: true });
