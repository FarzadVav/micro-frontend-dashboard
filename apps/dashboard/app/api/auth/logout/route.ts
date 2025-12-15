import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const options = {
      path: "/",
      maxAge: 0,
      sameSite: "lax" as const,
      httpOnly: false,
    };

    cookieStore.set("auth_token", "", options);
    cookieStore.set("auth_role", "", options);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to clear auth" }, { status: 500 });
  }
}

