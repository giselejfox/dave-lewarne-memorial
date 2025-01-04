import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container pb-5">
      <Row className="main-row">
        <Col className="d-flex flex-column justify-content-center align-items-center h-100 pt-lg-5" xs={12} lg={4} >
          <img className="w-75 rounded" src="/img/dave.JPG" alt="Dave and Anne sitting at a table and smiling" />
          <div className="mb-4">David Joel LeWarne (1970-2024)</div>
        </Col>
        <Col xs={12} lg={8} className="pt-lg-5">
          <h1 className="mt">Celebrating the Life of Dave LeWarne</h1>
          <div className="mb-2">
            <div><span className="fw-bold">Date:</span> Friday, January 10th 2025</div>
            <div><span className="fw-bold">Time:</span> 4:00pm</div>
            <div><span className="fw-bold">Location:</span> Snohomish High School Gym (Keith Gilberston Sr. Sports and Fitness Center), 1316 5th St, Snohomish, WA 98290</div>
            <div>Find a map of the high school and parking options <a href="/img/SHS-SiteMap2.png">here</a></div>
          </div>
          {/* <div>There will be a livestream of the service. More information and link coming soon.</div> */}
          <a href="/livestream"><button className="btn btn-success mt-3 w-fit">Link to the Livestream</button></a>
          <h2 className="mt-5">Submit Photos and Stories</h2>
          <div><a href="https://form.jotform.com/243655021912047">Click here</a> to submit your favorite Dave pictures and memories. After review, your submissions will be available to view on the <a href="/memories">memories</a> page.</div>
          <h2 className="mt-5">How to Support</h2>
          <p>We encourage you to show your love for Dave through championing the kids in your community. In lieu of flowers, please consider a donation to the David J. LeWarne Memorial Scholarship.</p>
          <p><a href="https://www.snoed.org/donate-online/">Click here</a> to donate online, include David J LeWarne in the "Notes/Name of Tribute/Fund/Scholarship" section of the form.</p>
          <p>You can also mail a check to PO Box 1312, Snohomish, WA 98291. Please include a note for Dave LeWarne Scholarship on the check. </p>
        </Col>
      </Row>
    </div>
  );
}
