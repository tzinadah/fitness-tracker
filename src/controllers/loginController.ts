import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/dbConfig";
import User from "@/models/userModel";
import { validate } from "@/lib/hash";
import { generateToken } from "@/lib/tokenConfig";

export default async function loginUser(
  request: NextRequest
): Promise<NextResponse> {
  try {
    // Connect to db and get request data
    await connect();
    const requestData = await request.json();

    // Find user by username or email
    const user =
      (await User.findOne({ username: requestData.username })) ||
      (await User.findOne({ email: requestData.email }));

    if (!user) {
      return NextResponse.json(
        { message: "Wrong username/email" },
        { status: 400 }
      );
    }

    // Validate password
    if (!(await validate(requestData.password, user.password))) {
      return NextResponse.json({ message: "Wrong password" }, { status: 400 });
    }

    const response = NextResponse.json(
      { message: "Login succesful" },
      { status: 200 }
    );
    response.cookies.set("token", generateToken(user), { httpOnly: true });
    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
