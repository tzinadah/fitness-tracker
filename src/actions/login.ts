import User from "@/definitions/User";
import CustomeResponse from "@/definitions/CustomeResponse";

export default async function login(user: User): Promise<CustomeResponse> {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      return { success: true, message: "Login Successful" };
    }

    const errorData = await response.json();
    return { success: false, message: errorData?.message || "" };
  } catch (err: any) {
    return { success: false, message: err.toString() };
  }
}
