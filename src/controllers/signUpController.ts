import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/lib/dbConfig";

export default async function signUpController(
  request: NextRequest
): Promise<NextResponse> {
  try {
    // Connect to db and pars request data
    await connect();
    const requestData = await request.json();

    // Check for conflict in user details
    console.log("Establishing Connection to Database");
    const existingUserUsername = await User.findOne({
      username: requestData?.username,
    }).exec();
    console.log("Database Connection Established");
    if (existingUserUsername) {
      return NextResponse.json(
        { message: "Username Already Exists" },
        { status: 409 }
      );
    }

    const existingUserEmail = await User.findOne({
      email: requestData?.email,
    }).exec();
    if (existingUserEmail) {
      return NextResponse.json(
        { message: "Email Already In Use" },
        { status: 409 }
      );
    }

    // Add user to db
    const newUser = new User({
      username: requestData?.username,
      email: requestData?.email,
      password: requestData?.password,
    });

    await newUser.save();
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
