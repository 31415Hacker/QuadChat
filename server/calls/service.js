import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const PASSWORD_OPTIONS = { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };
export const TOKEN_TTL = 60;
export const ACCESS_TTL = 90_000;
const KEY_PATTERN = /^[-A-Za-z0-9_.:]{1,64}$/;

export function failure(status, message) {
  return Object.assign(new Error(message), { status });
}

export async function hashPassword(password) {
  const salt = randomBytes(32).toString("hex");
  const hash = await scrypt(password, salt, 64, PASSWORD_OPTIONS);
  return { salt, hash: hash.toString("hex") };
}

export async function verifyPassword(password, verifier) {
  if (!verifier || typeof verifier.salt !== "string" || !/^[a-f0-9]{128}$/.test(verifier.hash || "")) return false;
  const actual = await scrypt(password, verifier.salt, 64, PASSWORD_OPTIONS);
  return timingSafeEqual(actual, Buffer.from(verifier.hash, "hex"));
}

function publishingAllowed(profile, mute, now) {
  const active = (enabled, until) => enabled === true && (!until || (until.toMillis?.() ?? new Date(until).getTime()) > now);
  return mute?.muted !== true && !active(profile.voiceMuted, profile.voiceMutedUntil)
    && !active(profile.voiceMutedTemporary, profile.voiceMutedTemporaryUntil);
}

export function createCallService({ auth, store, database, rooms, makeToken, now = Date.now }) {
  async function member(req) {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) throw failure(401, "Not authenticated");
    let token;
    try {
      // Checks disabled/deleted accounts and refresh-token revocation, too.
      token = await auth.verifyIdToken(header.slice(7), true);
    } catch {
      throw failure(401, "Sign in again to access calls");
    }
    const [doc, tombstone] = await Promise.all([
      store.doc(`users/${token.uid}`).get(),
      store.doc(`deleted-users/${token.uid}`).get()
    ]);
    if (!doc.exists || tombstone.exists || doc.data().banned === true) {
      throw failure(403, "An active, approved membership is required");
    }
    // Profile creation is approval-gated by Firestore/server signup. Existing
    // profiles include legacy members and accounts provisioned by an admin.
    return { uid: token.uid, profile: doc.data(), name: doc.data().displayName || token.name || token.uid };
  }

  function key(value) {
    if (typeof value !== "string" || !KEY_PATTERN.test(value)) throw failure(400, "Invalid call");
    return value;
  }

  async function limit(bucket, max) {
    const window = Math.floor(now() / 60_000);
    const result = await database.ref(`call-rate-limits/${bucket}`).transaction((data) => {
      const count = data?.window === window ? data.count : 0;
      if (count >= max) return;
      return { window, count: count + 1 };
    });
    if (!result.committed) throw failure(429, "Too many attempts. Try again in a minute.");
  }

  async function directory(room, allowLegacy = false) {
    const data = (await database.ref(`call-directory/${room}`).get()).val();
    if (!data || (data.deleting && !allowLegacy)) throw failure(404, "Call not found");
    if (!allowLegacy && data.securityVersion !== 2) {
      throw failure(409, "This older call must be recreated by its owner with a new password if private.");
    }
    return data;
  }

  // Serialize credential issuance, permission changes, renewals and deletion.
  // A lock is never client-readable/writable and expires after a crashed request.
  async function locked(room, action) {
    const ref = database.ref(`call-locks/${room}`);
    const owner = randomUUID();
    const result = await ref.transaction((data) => {
      if (data?.expiresAt > now()) return;
      return { owner, expiresAt: now() + 60_000 };
    });
    if (!result.committed) throw failure(409, "Call is being updated. Please try again.");
    try {
      return await action();
    } finally {
      await ref.transaction((data) => data?.owner === owner ? null : undefined);
    }
  }

  async function ignoreNotFound(operation) {
    try { return await operation(); } catch (error) {
      if (error.code !== "not_found" && error.status !== 404) throw error;
    }
  }

  async function permission(room, uid, allowed) {
    await ignoreNotFound(() => rooms.updateParticipant(room, uid, {
      permission: { canSubscribe: true, canPublish: allowed, canPublishData: allowed }
    }));
  }

  async function handle(action, req) {
    const caller = await member(req);
    const body = req.body || {};
    if (action === "list-calls") {
      const entries = (await database.ref("call-directory").get()).val() || {};
      const calls = await Promise.all(Object.entries(entries).filter(([, data]) => !data.deleting).map(async ([callKey, data]) => {
        const participants = (await database.ref(`group-calls/${callKey}/participants`).get()).val() || {};
        return {
          callKey, title: data.title, ownerId: data.ownerId, ownerName: data.ownerName,
          createdAt: data.createdAt, isProtected: Boolean(data.passwordVerifier || data.passwordHash),
          needsRecreation: data.securityVersion !== 2,
          participantCount: Object.keys(participants).length
        };
      }));
      return { calls: calls.sort((a, b) => b.createdAt - a.createdAt) };
    }
    if (action === "create-call") {
      await limit(`create-${caller.uid}`, 10);
      if (typeof body.title !== "string" || !body.title.trim() || body.title.trim().length > 50) throw failure(400, "Call name must be 1–50 characters");
      if (body.password !== undefined && (typeof body.password !== "string" || body.password.length > 256)) throw failure(400, "Password is too long");
      const password = body.password || "";
      if (password && !password.trim()) throw failure(400, "Enter a non-empty password");
      const callKey = randomUUID();
      const entry = {
        callKey, title: body.title.trim(), ownerId: caller.uid, ownerName: caller.name,
        createdAt: now(), securityVersion: 2,
        // Never reuse the old room name: old credentials cannot enter new rooms.
        livekitRoom: `qc-${randomUUID()}`
      };
      if (password) entry.passwordVerifier = await hashPassword(password);
      await database.ref(`call-directory/${callKey}`).set(entry);
      return { callKey };
    }
    if (action === "invite-call") {
      const room = key(body.callKey);
      const targetUids = [...new Set(
        (Array.isArray(body.targetUids) ? body.targetUids : []).filter(
          (uid) => typeof uid === "string" && /^[A-Za-z0-9_-]{1,128}$/.test(uid)
        )
      )].slice(0, 50);
      if (targetUids.length === 0) throw failure(400, "Choose at least one person to invite");
      await limit(`invite-${caller.uid}`, 10);
      const data = await directory(room, false);
      if (data.ownerId !== caller.uid) throw failure(403, "Only the call owner can invite people");
      const targetDocs = await Promise.all(targetUids
        .filter((uid) => uid !== caller.uid)
        .map(async (uid) => ({ uid, doc: await store.doc(`users/${uid}`).get() })));
      const invitees = targetDocs
        .filter(({ doc }) => doc.exists && doc.data().banned !== true)
        .map(({ uid }) => uid);
      if (invitees.length === 0) throw failure(400, "Choose at least one active person to invite");
      const sentAt = now();
      await Promise.all(invitees.map(async (uid) => {
        await database.ref(`call-invites/${uid}/${room}`).set({
          callKey: room,
          title: data.title,
          ownerId: caller.uid,
          ownerName: caller.name,
          inviteeId: uid,
          isProtected: Boolean(data.passwordVerifier),
          sentAt,
          expiresAt: sentAt + 60 * 60 * 1000
        });
      }));
      return { invited: invitees };
    }

    const room = key(body.room || body.callKey);
    if (action === "livekit-token") {
      if (body.password !== undefined && (typeof body.password !== "string" || body.password.length > 256)) throw failure(400, "Invalid password");
      // Distributed account AND room limits apply before the expensive KDF.
      await limit(`join-user-${caller.uid}`, 10);
      await limit(`join-room-${room}`, 30);
    }
    return locked(room, async () => {
      const data = await directory(room, action === "delete-call");
      const accessRef = database.ref(`call-access/${room}/${caller.uid}`);
      if (action === "livekit-token") {
        if (data.passwordVerifier && !await verifyPassword(body.password || "", data.passwordVerifier)) throw failure(403, "Incorrect password");
        const mute = (await database.ref(`group-calls/${room}/mutes/${caller.uid}`).get()).val();
        if (mute?.revokeBefore * 1000 > now()) throw failure(409, "Mute is being applied. Please rejoin in a moment.");
        const canPublish = publishingAllowed(caller.profile, mute, now());
        const token = await makeToken({ identity: caller.uid, name: caller.name, room: data.livekitRoom, canPublish, ttl: TOKEN_TTL });
        const session = randomUUID();
        await database.ref(`call-issued/${room}/${caller.uid}`).set(true);
        await accessRef.set({ expiresAt: now() + ACCESS_TTL, session });
        return { token, session, accessExpiresAt: now() + ACCESS_TTL };
      }

      if (action === "renew-call") {
        const access = (await accessRef.get()).val();
        if (!access || access.session !== body.session || access.expiresAt <= now()) throw failure(403, "Call access expired. Rejoin the call.");
        // A lease can only be renewed by an actually connected LiveKit member.
        await rooms.getParticipant(data.livekitRoom, caller.uid);
        const mute = (await database.ref(`group-calls/${room}/mutes/${caller.uid}`).get()).val();
        await permission(data.livekitRoom, caller.uid, publishingAllowed(caller.profile, mute, now()));
        await accessRef.update({ expiresAt: now() + ACCESS_TTL });
        return { accessExpiresAt: now() + ACCESS_TTL };
      }

      const isAdmin = caller.profile.isAdmin === true || caller.profile.isDeveloper === true;
      if (data.ownerId !== caller.uid && !isAdmin) throw failure(403, "Only the call owner or an admin can manage this call");
      if (action === "delete-call") {
        // Tombstone first; no new tokens/leases, even if LiveKit is unavailable.
        await database.ref(`call-directory/${room}/deleting`).set(true);
        await database.ref(`call-access/${room}`).remove();
        const issued = (await database.ref(`call-issued/${room}`).get()).val() || {};
        const cutoff = BigInt(Math.floor(now() / 1000) + 1);
        await Promise.all(Object.keys(issued).map((uid) =>
          ignoreNotFound(() => rooms.removeParticipant(data.livekitRoom || room, uid, { revokeTokenTs: cutoff }))
        ));
        await ignoreNotFound(() => rooms.deleteRoom(data.livekitRoom || room));
        await database.ref(`group-calls/${room}`).remove();
        await database.ref(`call-issued/${room}`).remove();
        await database.ref(`call-directory/${room}`).remove();
        return { ok: true };
      }
      if (action === "group-mute") {
        const uid = body.targetUid;
        if (typeof uid !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(uid) || typeof body.muted !== "boolean") throw failure(400, "Invalid participant or mute state");
        const participant = await rooms.getParticipant(data.livekitRoom, uid);
        const targetDoc = await store.doc(`users/${uid}`).get();
        if (!targetDoc.exists) throw failure(404, "Participant not found");
        const record = { muted: body.muted, mutedBy: caller.uid, mutedByName: caller.name,
          targetName: participant.name || uid, updatedAt: now(),
          revokeBefore: Math.floor(now() / 1000) + 1 };
        // Persist first so reconnects/token requests also respect the mute.
        await database.ref(`group-calls/${room}/mutes/${uid}`).set(record);
        await permission(data.livekitRoom, uid, publishingAllowed(targetDoc.data(), record, now()));
        if (body.muted) {
          // Invalidate pre-mute publishing credentials, not just the current track.
          // LiveKit Cloud revokes even tokens refreshed just before the mute.
          await ignoreNotFound(() => rooms.removeParticipant(data.livekitRoom, uid, { revokeTokenTs: BigInt(record.revokeBefore) }));
          await database.ref(`call-access/${room}/${uid}`).remove();
        }
        return { ok: true, muted: body.muted };
      }
      throw failure(404, "Not found");
    });
  }
  return { handle };
}
