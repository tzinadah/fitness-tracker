import { Schema, model, models, Document } from "mongoose";
import User from "@/definitions/User";

export interface UserDoc extends User, Document {}

const userSchema = new Schema<UserDoc>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userModel = models.User || model<UserDoc>("User", userSchema);
export default userModel;
