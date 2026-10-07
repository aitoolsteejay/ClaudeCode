import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, checkPassword, getAdminToken } from "@/lib/mentiAuth";
import { getClientIp, rateLimit } from "@/lib/rateLimit";

// Slows password guessing: 8 attempts per 15 minutes per IP.
const LOGIN_ATTEMPTS = 8;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const retryAfter = rateLimit(`menti-auth:${getClientIp(req)}`, LOGIN_ATTEMPTS, LOGIN_WINDOW_MS);
    if (retryAfter > 0) {
      return NextResponse.json(
        { error: "Too many attempts. Try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }

    const body = await req.json();
    const password = typeof body?.password === "string" ? body.password : "";

    const token = checkPassword(password) ? getAdminToken() : null;
    if (!token) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE_NAME, token, {
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
