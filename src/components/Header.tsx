"use client";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import brandImage from "@/assets/brand.png";

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Image
          src={brandImage}
          alt="Site Brand"
          layout="responsive"
          className="img-fluid"
        ></Image>
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
