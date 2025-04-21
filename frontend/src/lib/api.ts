export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function pingServer() {
  const res = await fetch(`${BASE_URL}/ping`, {
    method: 'GET',
    credentials: 'include'
  });

  if (!res.ok) throw new Error("Server didn't respond");
  return res.json();
}