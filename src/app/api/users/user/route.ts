import { NextRequest, NextResponse } from "next/server";
import signUpController from "@/controllers/signUpController";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { message: "hello world" },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(request: NextRequest) {
  return signUpController(request);
}
