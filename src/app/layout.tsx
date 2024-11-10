import "./global.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "@/components/Header";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container fluid className="d-flex flex-column between vh-100">
          <Row className="position-sticky top-0 z-1">
            <Header />
          </Row>
          <Row>{children}</Row>
        </Container>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Fitness Tracker",
};
