import { collection, doc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { db } from "../../firebase.js";

export const usersRef = collection(db, "users");
export const appSettingsRef = doc(db, "settings", "app");
export const googleProvider = new GoogleAuthProvider();

export function messagesRef(channelId) {
  return collection(db, "messages", channelId, "messages");
}
