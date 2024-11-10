import bcrypt from "bcrypt";

// function to hash passwords
export default async function hash(password: string): Promise<string | null> {
    return await bcrypt.hash(password, 10);
  }
