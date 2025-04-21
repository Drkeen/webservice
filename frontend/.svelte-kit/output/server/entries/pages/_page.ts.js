const BASE_URL = "https://webservice-production-ba42.up.railway.app";
async function pingServer() {
  const res = await fetch(`${BASE_URL}/ping`, {
    method: "GET",
    credentials: "include"
  });
  if (!res.ok) throw new Error("Server didn't respond");
  return res.json();
}
async function load() {
  try {
    const response = await pingServer();
    return { serverStatus: response };
  } catch (err) {
    return { serverStatus: { message: "unreachable", error: true } };
  }
}
export {
  load
};
