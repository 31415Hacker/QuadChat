export async function callApi(user, action, body = {}) {
  const token = await user.getIdToken();
  const response = await fetch(`/api/${action}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  if (!response.ok) throw Object.assign(new Error(data.error || "Call request failed"), { status: response.status });
  return data;
}
