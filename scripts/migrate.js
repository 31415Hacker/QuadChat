import admin from "firebase-admin";
import { readFileSync } from "fs";

const serviceAccount = JSON.parse(
  readFileSync(process.argv[2], "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function migrate() {
  const snapshot = await db.collection("messages").get();
  const total = snapshot.size;

  if (total === 0) {
    console.log("No documents found in 'messages' collection.");
    return;
  }

  console.log(`Found ${total} documents to migrate.`);

  let moved = 0;
  let skipped = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    const channel = data.channel || "group";

    const targetRef = db
      .collection("messages")
      .doc(channel)
      .collection("messages")
      .doc(doc.id);

    if ((await targetRef.get()).exists) {
      console.log(`  SKIP  ${doc.id} — already exists in messages/${channel}/messages`);
      skipped++;
      continue;
    }

    await targetRef.set(data);
    console.log(`  MOVED ${doc.id} → messages/${channel}/messages`);
    moved++;
  }

  console.log(`\nDone: ${moved} moved, ${skipped} skipped (of ${total}).`);
  console.log("The original flat 'messages' collection is untouched.");
  console.log("Once verified, delete it from the Firebase console to clean up.");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
