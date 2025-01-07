'use client'

import { Container, Nav, Navbar } from "react-bootstrap"

export default function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container>
              <Navbar.Brand href="/" className="fw-bold">Dave J. LeWarne</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 justify-content-between">
                <div className="d-flex">
                  {/* <Nav.Link className="d-flex align-items-center" href="/photo-gallery">Photo Gallery</Nav.Link> */}
                  <Nav.Link className="d-flex align-items-center" href="/memories">Memories</Nav.Link>
                  <Nav.Link className="d-flex align-items-center" href="https://www.legacy.com/us/obituaries/heraldnet/name/david-lewarne-obituary?id=57194820">Official Obituary</Nav.Link>
                </div>
                <div className="d-flex flex-column flex-lg-row">
                  <Nav.Link className="d-flex align-items-center" href="https://www.youtube.com/live/a8LDr_FnSUk">
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
    )
}