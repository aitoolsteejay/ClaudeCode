import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, checkPassword, getAdminToken } from "@/lib/mentiAuth";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.MENTI_ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Admin password is not configured" }, { status: 500 });
    }

    const body = await req.json();
    const password = typeof body?.password === "string" ? body.password : "";

    if (!checkPassword(password)) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE_NAME, getAdminToken()!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (error) {
    console.error("Error in menti/auth route:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return res;
}
