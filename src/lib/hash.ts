import bcrypt from "bcrypt";

// function to hash passwords
export default async function hash(password: string): Promise<string | null> {
  return await bcrypt.hash(password, 10);
}

// function to validate passwords
export async function validate(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}
