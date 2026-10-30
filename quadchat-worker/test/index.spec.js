import {
	env,
	createExecutionContext,
	waitOnExecutionContext,
	SELF,
} from "cloudflare:test";
import { describe, it, expect } from "vitest";
import worker, {
	buildAutoMuteWrite,
	buildBadMessageWrite,
	buildSpamIncidentWrite,
	findStandaloneProfanity,
	getSpamMuteEscalation,
} from "../src";

describe("QuadChat Presence worker", () => {
	it("responds with a status banner (unit style)", async () => {
		const request = new Request("http://example.com");
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		expect(await response.text()).toMatchInlineSnapshot(
			`"QuadChat Presence Server running"`,
		);
	});

	it("responds with a status banner (integration style)", async () => {
		const response = await SELF.fetch("http://example.com");
		expect(await response.text()).toMatchInlineSnapshot(
			`"QuadChat Presence Server running"`,
		);
	});
});

describe("Swear filter standalone detection", () => {
	it("flags a standalone profane word even with punctuation", () => {
		expect(findStandaloneProfanity("you (shit) now", "you (****) now")).toEqual(["shit"]);
		expect(findStandaloneProfanity("i hate shit, seriously", "i hate ****, seriously")).toEqual(
			["shit"],
		);
		expect(findStandaloneProfanity("shit", "****")).toEqual(["shit"]);
	});

	it("does not flag the word embedded in a keyboard smash", () => {
		expect(
			findStandaloneProfanity("fhrsogrsgosdj(shit)reijgwsldkmg", "fhrsogrsgosdj(****)reijgwsldkmg"),
		).toEqual([]);
		expect(
			findStandaloneProfanity("FHR SOGRS GOSDJ(SHIT)REIJGWSLDKMG", "FHR SOGRS GOSDJ(****)REIJGWSLDKMG"),
		).toEqual([]);
	});

	it("flags derived shout-phrases but leaves clean text alone", () => {
		expect(findStandaloneProfanity("you are a shithead", "you are a ********")).toEqual(["shithead"]);
		expect(findStandaloneProfanity("this is class time", "this is class time")).toEqual([]);
		expect(findStandaloneProfanity("password123", "password123")).toEqual([]);
	});

	it("returns empty when nothing was censored", () => {
		expect(findStandaloneProfanity("hello world", "hello world")).toEqual([]);
	});
});

describe("Moderation CORS", () => {
	it("allows both production app origins", async () => {
		for (const origin of ["https://quad-chat.com", "https://quadchat-cf697.web.app"]) {
			const response = await worker.fetch(
				new Request("https://quadchat-worker.ariqipraditya.workers.dev/moderate", {
					method: "OPTIONS",
					headers: { Origin: origin },
				}),
				env,
				createExecutionContext(),
			);
			expect(response.status).toBe(204);
			expect(response.headers.get("Access-Control-Allow-Origin")).toBe(origin);
			expect(response.headers.get("Vary")).toBe("Origin");
		}
	});
});

describe("Moderation Firestore writes", () => {
	it("keeps write masks and transforms alongside the document update", () => {
		const account = { project_id: "quadchat-cf697" };
		const writes = [
			buildBadMessageWrite(account, "user", "bad text", "group", ["word"]),
			buildAutoMuteWrite(account, "user"),
			buildSpamIncidentWrite(account, "user", "fast text", "group", 5, 10),
		];

		for (const write of writes) {
			expect(write.updateMask).toBeDefined();
			expect(write.updateTransforms).toBeDefined();
			expect(write.update.updateMask).toBeUndefined();
			expect(write.update.updateTransforms).toBeUndefined();
		}
	});
});

describe("Spam rate limiter", () => {
	it("allows the configured number of messages, then flags the next one", async () => {
		const limiter = env.PRESENCE.get(
			env.PRESENCE.idFromName(`spam:test-${crypto.randomUUID()}`),
		);
		const record = (text) => limiter.recordMessage({ rateLimit: 3, rateWindowMs: 1_000, text, duplicateLimit: 10, duplicateWindowMs: 60_000 });
		expect((await record("one")).isSpam).toBe(false);
		expect((await record("two")).isSpam).toBe(false);
		expect((await record("three")).isSpam).toBe(false);
		expect((await record("four")).isSpam).toBe(true);
	});

	it("flags repeated identical messages separately from the rate limit", async () => {
		const limiter = env.PRESENCE.get(
			env.PRESENCE.idFromName(`duplicate:test-${crypto.randomUUID()}`),
		);
		const record = () => limiter.recordMessage({ rateLimit: 10, rateWindowMs: 1_000, text: "same", duplicateLimit: 2, duplicateWindowMs: 60_000 });
		expect((await record()).isSpam).toBe(false);
		expect((await record()).isSpam).toBe(false);
		expect(await record()).toMatchObject({ isSpam: true, reason: "duplicate" });
	});

	it("escalates from ten seconds to a capped 24-hour mute", () => {
		expect(getSpamMuteEscalation(0)).toMatchObject({ ms: 10_000, label: "10 seconds", nextLevel: 1 });
		expect(getSpamMuteEscalation(1)).toMatchObject({ ms: 30_000, label: "30 seconds", nextLevel: 2 });
		expect(getSpamMuteEscalation(11)).toMatchObject({ ms: 18 * 60 * 60_000, label: "18 hours", nextLevel: 12 });
		expect(getSpamMuteEscalation(12)).toMatchObject({ ms: 24 * 60 * 60_000, label: "24 hours", nextLevel: 12 });
		expect(getSpamMuteEscalation(99)).toMatchObject({ ms: 24 * 60 * 60_000, nextLevel: 12 });
	});
});
