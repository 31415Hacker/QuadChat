import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}-default-rtdb.firebaseio.com`
  });
}

const CALL_KEY_PATTERN = /^[-A-Za-z0-9_.:]{1,64}$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const idToken = authHeader.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const callerUid = decodedToken.uid;

    const callKey = typeof req.body?.callKey === "string" ? req.body.callKey.trim() : "";
    if (!callKey || !CALL_KEY_PATTERN.test(callKey)) {
      return res.status(400).json({ error: "Invalid call key" });
    }

    const rtdb = admin.database();
    const dirSnap = await rtdb.ref(`call-directory/${callKey}`).once("value");
    const dirData = dirSnap.val();
    if (!dirData) {
      return res.status(404).json({ error: "Call not found" });
    }

    const isOwner = typeof dirData.ownerId === "string" && dirData.ownerId === callerUid;

    let isAdmin = false;
    if (!isOwner) {
      const callerDoc = await admin.firestore().doc(`users/${callerUid}`).get();
      const callerData = callerDoc.exists ? callerDoc.data() : {};
      isAdmin = callerData.isAdmin === true || callerData.isDeveloper === true;
    }

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ error: "Only the call owner or an admin can delete a call" });
    }

    await rtdb.ref(`group-calls/${callKey}`).remove().catch(() => {});
    await rtdb.ref(`call-directory/${callKey}`).remove();

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}