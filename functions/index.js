const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.generateMagicLink = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "You must be signed in.");
  }

  const callerDoc = await admin.firestore().doc(`users/${context.auth.uid}`).get();
  if (!callerDoc.exists || !callerDoc.data().isAdmin) {
    throw new functions.https.HttpsError("permission-denied", "Only admins can generate magic links.");
  }

  const { email, redirectUrl } = data;
  if (!email) {
    throw new functions.https.HttpsError("invalid-argument", "Email is required.");
  }

  const link = await admin.auth().generateSignInWithEmailLink(email, {
    url: redirectUrl || "https://quadchat-cf697.firebaseapp.com",
    handleCodeInApp: true
  });

  return { url: link };
});
