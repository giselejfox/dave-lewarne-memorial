'use client'

import { Container, Nav, Navbar } from "react-bootstrap"

function VerifiedSVG() {
  return (
    <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="verified-badge">
      <path fill="#fff" d="M9.53032 11.4697C9.23743 11.1768 8.76255 11.1768 8.46966 11.4697C8.17677 11.7626 8.17677 12.2374 8.46966 12.5303L10.4697 14.5303C10.7626 14.8232 11.2374 14.8232 11.5303 14.5303L15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967C15.2374 9.17677 14.7626 9.17677 14.4697 9.46967L11 12.9393L9.53032 11.4697Z"></path>
      <path fill="#fff" fill-rule="evenodd" d="M13.0613 1.13669C12.5208 0.44923 11.4793 0.449229 10.9388 1.13669L9.19206 3.35829L6.47311 2.58767C5.63175 2.34921 4.78916 2.96138 4.75596 3.83525L4.64866 6.65926L1.99603 7.63397C1.17519 7.93559 0.85335 8.92611 1.34013 9.6526L2.91324 12.0003L1.34014 14.3481C0.853351 15.0746 1.17519 16.0651 1.99603 16.3667L4.64866 17.3414L4.75596 20.1654C4.78916 21.0393 5.63175 21.6515 6.47311 21.413L9.19206 20.6424L10.9388 22.864C11.4793 23.5515 12.5208 23.5515 13.0613 22.864L14.808 20.6424L17.527 21.413C18.3683 21.6515 19.2109 21.0393 19.2441 20.1654L19.3514 17.3414L22.004 16.3667C22.8249 16.0651 23.1467 15.0746 22.6599 14.3481L21.0868 12.0003L22.6599 9.6526C23.1467 8.92611 22.8249 7.93559 22.004 7.63397L19.3514 6.65926L19.2441 3.83525C19.2109 2.96138 18.3683 2.34921 17.527 2.58767L14.808 3.35829L13.0613 1.13669ZM10.3091 4.36441L12 2.21378L13.691 4.36442C14.0292 4.79465 14.5938 4.97809 15.1203 4.82885L17.7524 4.08285L17.8563 6.81665C17.8771 7.36355 18.226 7.84379 18.7397 8.03255L21.3076 8.97613L19.7848 11.2489C19.4801 11.7035 19.4801 12.2971 19.7848 12.7518L21.3076 15.0246L18.7397 15.9681C18.226 16.1569 17.8771 16.6371 17.8563 17.184L17.7524 19.9178L15.1203 19.1718C14.5938 19.0226 14.0292 19.206 13.691 19.6363L12 21.7869L10.3091 19.6363C9.97084 19.206 9.40628 19.0226 8.87973 19.1718L6.24764 19.9178L6.14376 17.184C6.12298 16.6371 5.77407 16.1569 5.26036 15.9681L2.69246 15.0246L4.21531 12.7518C4.51996 12.2971 4.51996 11.7035 4.21531 11.2489L2.69246 8.97613L5.26036 8.03255C5.77407 7.84378 6.12298 7.36355 6.14376 6.81665L6.24764 4.08285L8.87973 4.82885C9.40628 4.97809 9.97084 4.79465 10.3091 4.36441Z" clip-rule="evenodd"></path>
    </svg>
  )
}

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
                </div>
                <div className="d-flex flex-column flex-lg-row">
                  <Nav.Link className="d-flex align-items-center" href="https://www.legacy.com/us/obituaries/heraldnet/name/david-lewarne-obituary?id=57194820">
                    <button className="btn btn-primary d-flex flex-row align-items-center">
                      <VerifiedSVG />
                      Official Obituary
                    </button>
                  </Nav.Link>
                  <Nav.Link className="d-flex align-items-center" href="https://www.youtube.com/live/a8LDr_FnSUk">
                    <button className="btn btn-success">Memorial Livestream</button>
                  </Nav.Link>
                  <Nav.Link className="d-flex align-items-center" href="https://www.snoed.org/donate-online/">
                    <button className="btn btn-success">Scholarship Fund</button>
                  </Nav.Link>
                </div>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}