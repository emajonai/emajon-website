import { NextResponse } from "next/server";

const STEALTH_PASSWORD = process.env.STEALTH_PASSWORD || "emajon2026";

export async function POST(request: Request) {
  const body = await request.json();
  const { password } = body;

  if (password === STEALTH_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("stealth_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
