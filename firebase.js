import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const useFirebaseEmulators = import.meta.env.VITE_USE_FIREBASE_EMULATORS === "true";

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const functions = getFunctions(app, "us-central1");

if (useFirebaseEmulators) {
  // This mode has no production fallback: every Firebase client is explicitly
  // directed to localhost before the app mounts.
  connectAuthEmulator(auth, "http://127.0.0.1:19099", { disableWarnings: true });
  connectFirestoreEmulator(db, "127.0.0.1", 18080);
  connectDatabaseEmulator(rtdb, "127.0.0.1", 19000);
  connectFunctionsEmulator(functions, "127.0.0.1", 15001);
  console.info("[QuadChat] Firebase Emulator Suite enabled (localhost only).");
}

export default app;
