import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify({ message: "hello world" }), {
    headers: { "Content-Type": "application/json" },
  });
}
