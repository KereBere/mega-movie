const base = "https://api.svelte.dev";
async function api(event, resource, data) {
  if (!event.locals.userid) {
    return { status: 401 };
  }
  const res = await fetch(`${base}/${resource}`, {
    method: event.request.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && event.request.method !== "GET" && event.request.headers.get("accept") !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/todos"
      }
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
export { api as a };
