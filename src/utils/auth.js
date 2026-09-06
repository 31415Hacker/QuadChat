import { getDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import {
  isAdminEmail,
  isDeveloperEmail,
  normalizeDisplayName
} from "./names.js";
import { createDefaultSchedule } from "./schedule.js";
import {
  notificationsEnabledKey,
  sessionUserIdKey
} from "../constants.js";

export function getAuthErrorMessage(firebaseError) {
  switch (firebaseError.code) {
    case "auth/email-already-in-use":
      return "That email already has an account. Sign in instead.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "The email or password is incorrect.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled in Firebase.";
    case "auth/popup-closed-by-user":
      return "The Google sign-in popup was closed before finishing.";
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in popup.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized in Firebase Authentication settings.";
    case "auth/requires-recent-login":
      return "Please sign out, sign back in, and try again.";
    default:
      return firebaseError.message;
  }
}

export async function saveUserProfile(
  firebaseUser,
  displayNameOverride,
  options = {}
) {
  if (!firebaseUser) {
    return;
  }

  const profileRef = doc(db, "users", firebaseUser.uid);
  const profileSnapshot = await getDoc(profileRef);
  const userIsAdmin =
    isAdminEmail(firebaseUser.email) && firebaseUser.emailVerified;
  const userIsDeveloper =
    isDeveloperEmail(firebaseUser.email) && firebaseUser.emailVerified;
  const profileData = {
    id: firebaseUser.uid,
    email: firebaseUser.email || "",
    updatedAt: serverTimestamp()
  };

  const isNewProfile = !profileSnapshot.exists();

  // Auth-state sync must not overwrite a name chosen in profile settings.
  if (isNewProfile || displayNameOverride !== undefined) {
    profileData.displayName = normalizeDisplayName(
      displayNameOverride || firebaseUser.displayName,
      firebaseUser.email
    );
  }

  if (options.forcePhoto || options.photoURL !== undefined) {
    profileData.photoURL = options.photoURL || "";
  } else if (isNewProfile) {
    profileData.photoURL = firebaseUser.photoURL || "";
  }

  if (userIsAdmin || userIsDeveloper) {
    profileData.isAdmin = userIsAdmin;
    profileData.isDeveloper = userIsDeveloper;
    profileData.role = userIsDeveloper
      ? "developer"
      : "admin";
  } else if (isNewProfile) {
    // Brand-new profiles carry the complete field set, with explicit
    // isAdmin/isDeveloper false, so every user doc is self-describing.
    profileData.role = "member";
    profileData.isAdmin = false;
    profileData.isDeveloper = false;
    profileData.bio = "";
    profileData.schedule = createDefaultSchedule();
    profileData.status = { mode: "active", text: "", scheduledBusy: [] };
  }

  await setDoc(profileRef, profileData, { merge: true });
}

export function readSessionUserId() {
  return sessionStorage.getItem(sessionUserIdKey) || "";
}

export function writeSessionUserId(uid) {
  sessionStorage.setItem(sessionUserIdKey, uid);
}

export function clearSessionUserId() {
  sessionStorage.removeItem(sessionUserIdKey);
}

export function readNotificationsEnabled() {
  return localStorage.getItem(notificationsEnabledKey) === "true";
}

export function writeNotificationsEnabled(isEnabled) {
  localStorage.setItem(notificationsEnabledKey, String(isEnabled));
}
