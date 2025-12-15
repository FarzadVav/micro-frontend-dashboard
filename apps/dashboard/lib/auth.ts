import { cookies } from "next/headers";

export type AuthRole = string | undefined;

export async function getAuthRole(): Promise<AuthRole> {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("auth_role")?.value;
  } catch {
    return undefined;
  }
}

export async function hasAuthCookie(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    return Boolean(cookieStore.get("auth_token"));
  } catch {
    return false;
  }
}

