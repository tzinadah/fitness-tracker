import loginUser from "@/controllers/loginController";
import { NextRequest } from "next/server";

export function POST(request: NextRequest) {
  return loginUser(request);
}
