import admin from "firebase-admin";

const projectId = "quadchat-test";
const email = process.env.QUADCHAT_EMULATOR_EMAIL || "tester@quadchat.local";
const password = process.env.QUADCHAT_EMULATOR_PASSWORD || "test-password-change-me";

if (!process.env.FIREBASE_AUTH_EMULATOR_HOST || !process.env.FIRESTORE_EMULATOR_HOST) {
  throw new Error("Refusing to seed: Firebase emulator host variables are required.");
}

const app = admin.initializeApp({
  projectId,
  databaseURL: `http://${process.env.FIREBASE_DATABASE_EMULATOR_HOST}?ns=${projectId}-default-rtdb`
});
const auth = admin.auth(app);
const db = admin.firestore(app);

let user;
try {
  user = await auth.getUserByEmail(email);
  user = await auth.updateUser(user.uid, { password, emailVerified: true, displayName: "Emulator Tester" });
} catch (error) {
  if (error.code !== "auth/user-not-found") throw error;
  user = await auth.createUser({ email, password, emailVerified: true, displayName: "Emulator Tester" });
}

await db.doc("settings/app").set({ signupEnabled: true }, { merge: true });
await db.doc(`users/${user.uid}`).set({
  id: user.uid,
  email,
  displayName: "Emulator Tester",
  role: "member",
  isAdmin: false,
  isDeveloper: false,
  bio: "Local Firebase Emulator test account.",
  photoURL: "",
  schedule: { timezone: "UTC", availability: [] },
  status: { mode: "active", text: "", scheduledBusy: [] },
  updatedAt: admin.firestore.FieldValue.serverTimestamp()
}, { merge: true });

console.log(`Seeded Firebase Emulator test account: ${email}`);
console.log(`Password: ${password}`);
