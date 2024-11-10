"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert";
import User from "@/definitions/User";
import { ChangeEvent, FormEvent } from "react";
import signUp from "@/actions/signUp";

export default function SignUpPage() {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, username: e.target.value });
  }

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, email: e.target.value });
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, password: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    const response = await signUp(user);

    if (response.success) {
      router.push("/login");
    } else {
      setErrorMessage(response.message);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control type="text" onChange={handleUsername} value={user.username} required></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control type="email" onChange={handleEmail} value={user.email} required></Form.Control>
        </Form.Group><Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control type="password" onChange={handlePassword} value={user.password} required></Form.Control>
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
      {errorMessage? <Alert variant="danger">{errorMessage}</Alert>: ""}      
    </>
  );
}
