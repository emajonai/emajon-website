import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("stealth_access")?.value === "granted";
  return NextResponse.json({ hasAccess });
}
