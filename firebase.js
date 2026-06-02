import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB22Y06cUUhfSweTGIhHaziHCJTytUkqLI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "quadchat-cf697.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "quadchat-cf697",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "quadchat-cf697.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "738776494798",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:738776494798:web:58454b37922a44fa98969f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});
export default app;
