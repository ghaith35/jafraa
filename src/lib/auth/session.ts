import { cookies } from "next/headers";
import { verifyAccessToken, type AccessTokenPayload } from "./tokens";

export async function getSession(): Promise<AccessTokenPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;
    if (!token) return null;
    return await verifyAccessToken(token);
  } catch {
    return null;
  }
}
