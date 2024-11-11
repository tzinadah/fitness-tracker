import  jwt, { JwtPayload } from "jsonwebtoken";
import { UserDoc } from "@/models/userModel";

// Method to generate JWT
export function generateToken(user: UserDoc) : string{
    return jwt.sign({id: user._id}, process.env.SECRET_KEY!);
}

export function validateToken(token: string) : JwtPayload {
    return jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
}