import { Schema, model, Document } from "mongoose";

export interface UserDoc extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserDoc>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<UserDoc>("User", userSchema);
