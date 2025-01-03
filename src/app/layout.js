'use client'

import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'

import { Navbar, Nav, Container } from "react-bootstrap";

// export const metadata = {
//   title: "Dave LeWarne Memorial",
//   description: "Information about the Dave LeWarne 2025 memorial",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container>
              <Navbar.Brand href="/" className="fw-bold">Dave LeWarne</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 justify-content-between">
                <div className="d-flex">
                  {/* <Nav.Link className="d-flex align-items-center" href="/photo-gallery">Photo Gallery</Nav.Link> */}
                  <Nav.Link className="d-flex align-items-center" href="/memories">Memories</Nav.Link>
                </div>
                <div className="d-flex flex-column flex-lg-row">
                  <Nav.Link className="d-flex align-items-center" href="/livestream">
                    <button className="btn btn-success">Memorial Livestream</button>
                  </Nav.Link>
                  <Nav.Link className="d-flex align-items-center" href="https://www.snoed.org/donate-online/">
                    <button className="btn btn-success">David J LeWarne Memorial Scholarship Fund</button>
                  </Nav.Link>
                </div>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
