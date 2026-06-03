export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Requested-With"
        }
      });
    }

    if (request.method === "POST") {
      const upstream = new Request("https://catbox.moe/user/api.php", {
        method: "POST",
        headers: request.headers,
        body: request.body
      });

      const response = await fetch(upstream);
      const text = await response.text();

      return new Response(text, {
        status: response.status,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain;charset=UTF-8"
        }
      });
    }

    return new Response("Method not allowed", { status: 405 });
  }
};
