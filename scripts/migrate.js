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

  const knownChannels = new Set(["group", "updates", "suggestions"]);
  let moved = 0;
  let skipped = 0;
  let deleted = 0;

  const shouldDelete = process.argv.includes("--delete");

  for (const doc of snapshot.docs) {
    const data = doc.data();
    const channel = data.channel || "group";

    if (!knownChannels.has(channel)) {
      const action = shouldDelete ? "DELETED" : "UNKNOWN";
      console.log(`  ${action} ${doc.id} — channel "${channel}" is not a known channel`);
      if (shouldDelete) {
        await doc.ref.delete();
        deleted++;
      }
      continue;
    }

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

    if (shouldDelete) {
      await doc.ref.delete();
      deleted++;
    }
  }

  console.log(
    `\nDone: ${moved} moved, ${deleted} deleted, ${skipped} skipped (of ${total}).`
  );
  if (shouldDelete) {
    console.log("Originals have been deleted from the flat 'messages' collection.");
  } else {
    console.log("Re-run with --delete to remove originals from the flat 'messages' collection.");
  }
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
