import {
	env,
	createExecutionContext,
	waitOnExecutionContext,
	SELF,
} from "cloudflare:test";
import { describe, it, expect } from "vitest";
import worker, { findStandaloneProfanity } from "../src";

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
