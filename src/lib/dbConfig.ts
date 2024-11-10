import mongoose from "mongoose";

export async function connect() {
  if (mongoose.connections[0].readyState === 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (err) {
    console.error(err);
  }
}
