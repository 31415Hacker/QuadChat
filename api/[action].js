const handlers = new Map([
  ["create-code", () => import("../server/signup/create-code.js")],
  ["revoke-code", () => import("../server/signup/revoke-code.js")],
  ["approve-request", () => import("../server/signup/approve-request.js")],
  ["reject-request", () => import("../server/signup/reject-request.js")],
  ["signup-request", () => import("../server/signup/signup-request.js")],
  ["google-signup", () => import("../server/signup/google-signup.js")]
]);

export default async function handler(req, res) {
  // Route by pathname so query parameters cannot select a different handler.
  const action = new URL(req.url, "http://localhost").pathname.split("/").pop();
  const load = handlers.get(action);
  if (!load) return res.status(404).json({ error: "Not found" });
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const module = await load();
  return module.default(req, res);
}
