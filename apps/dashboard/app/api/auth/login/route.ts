import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { role } = await request.json();

    if (!role || typeof role !== "string") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const cookieStore = await cookies();
    
    // Set auth cookies
    cookieStore.set("auth_token", `dummy.${role}`, {
      path: "/",
      maxAge: 86400, // 1 day
      sameSite: "lax",
      httpOnly: false, // Allow client-side access for demo
    });

    cookieStore.set("auth_role", role, {
      path: "/",
      maxAge: 86400, // 1 day
      sameSite: "lax",
      httpOnly: false,
    });

    return NextResponse.json({ success: true, role });
  } catch (error) {
    return NextResponse.json({ error: "Failed to set auth" }, { status: 500 });
  }
}

