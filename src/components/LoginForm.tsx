"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import User from "@/definitions/User";
import { ChangeEvent, FormEvent } from "react";
import login from "@/actions/login";

export default function LoginForm() {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  function handleUsernameEmail(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, username: e.target.value, email: e.target.value });
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, password: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    const response = await login(user);

    if (response.success) {
      router.push("/dashboard");
    } else {
      setErrorMessage(response.message);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username/email</Form.Label>
          <Form.Control
            type="text"
            onChange={handleUsernameEmail}
            value={user.username}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            onChange={handlePassword}
            value={user.password}
            required
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
      {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : ""}
    </>
  );
}
