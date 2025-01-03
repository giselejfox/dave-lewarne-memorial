import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container pb-5">
      <Row className="main-row">
        <Col className="d-flex flex-row justify-content-center h-100 pt-lg-5" xs={12} lg={5} >
          <img className="w-75 rounded" src="/img/dave-isla.jpeg" alt="Dave and Anne sitting at a table and smiling" />
        </Col>
        <Col xs={12} lg={7} className="pt-lg-5">
          <h1 className="">Dave LeWarne</h1>
          <p className="fw-bold">1970-2024</p>
          <div className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <h2>Memorial Details</h2>
          <div className="mb-2">
            <div><span className="fw-bold">Date:</span> Friday January 10th 2025</div>
            <div><span className="fw-bold">Time:</span> 4:00pm</div>
            <div><span className="fw-bold">Location:</span> Snohomish Highschool Gym, 1316 5th St, Snohomish, WA 98290</div>
            <div>Find a map of the highschool and parking options <a href="/img/SHS-SiteMap2.png">here</a></div>
          </div>
          <div>There will be a livestream of the service. More information and link coming soon.</div>
          <button className="btn btn-success mt-3 mb-5 w-fit">Link to the Livestream</button>
          <h2>How to Support</h2>
          <h3>Donations</h3>
          <p>We encourage you to show your love for Dave through championing the kids in your community. Instead of buying flowers or food, we kindly ask that you donate to the David J LeWarne Memorial Scholarship.</p>
          <p><a href="https://www.snoed.org/donate-online/">Click here</a> to donate online, include David J LeWarne in the "Notes/Name of Tribute/Fund/Scholarship" section of the form.</p>
          <p>You can also mail a check to PO Box 1312, Snohomish, WA 98291. Please include a note for Dave LeWarne Scholarship on the check. </p>
          <h3>Submit Photos and Stories</h3>
          <div><a href="https://form.jotform.com/243655021912047">Click here</a> to submit your favorite Dave pictures and memories. After review, your submissions will be shown on the <a href="/memories">memories</a> page. If you submit photos before the memorial service they will be used in the slideshow.</div>
        </Col>
      </Row>
    </div>
  );
}
