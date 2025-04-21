import { pingServer } from "$lib/api";

export async function load(): Promise<{ serverStatus: { message: string; status?: string; error?: boolean } }> {
  try {
    const response = await pingServer();
    return { serverStatus: response };
  } catch (err) {
    return { serverStatus: { message: "unreachable", error: true } };
  }
}