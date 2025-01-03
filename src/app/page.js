import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container pb-5">
      <Row className="main-row">
        <Col className="d-flex flex-column justify-content-center align-items-center h-100 pt-lg-5" xs={12} lg={4} >
          <img className="w-75 rounded" src="/img/dave-blur.JPG" alt="Dave and Anne sitting at a table and smiling" />
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
          <h3>Submit Photos and Stories</h3>
          <div><a href="https://form.jotform.com/243655021912047">Click here</a> to submit your favorite Dave pictures and memories. After review, your submissions will be available to view on the <a href="/memories">memories</a> page.</div>
          <h2 className="mt-5">How to Support</h2>
          <p>We encourage you to show your love for Dave through championing the kids in your community. In lieu of flowers, please consider a donation to the David J. LeWarne Memorial Scholarship.</p>
          <p><a href="https://www.snoed.org/donate-online/">Click here</a> to donate online, include David J LeWarne in the "Notes/Name of Tribute/Fund/Scholarship" section of the form.</p>
          <p>You can also mail a check to PO Box 1312, Snohomish, WA 98291. Please include a note for Dave LeWarne Scholarship on the check. </p>
          <h2 className="mt-5">About Dave</h2>
          <p>David Joel LeWarne, a cherished community member of Snohomish, WA passed away on December 29, 2024.</p>
          <p>Dave (as he was known) was born November 3, 1970 and graduated from Edmonds High School in 1989. He earned a Bachelor of Science in Physical Education from Pacific Lutheran University and Masters in Physical Education from Seattle Pacific University. Dave's teaching career started in the Edmonds School District at Mountlake Terrace High School. His longest and most recent role was as a teacher in the science department at Snohomish High School, where he worked for 16 years. He also served as a coach of cross country and track teams and was a longtime fixture at track events across Washington State.</p>
          <p>Dave loved the outdoors and the activities it inspired. Being cooped up indoors was never an option for him. Whether running, kayaking, skiing, or barbecuing, he reveled in spending time outside with friends and family in the fresh air and enjoying what nature had to offer. He was well-known for planning outings and adventures, and getting everyone else up off the couch for some outdoor fun.</p>
          <p>Dave was born to be a teacher of, and mentor to, young people. He had an uncanny ability to recognize where extra help was needed and used his unique people skills and sense of humor to uplift the intellects and spirits of those he served. These innate abilities shone through in his academic and coaching roles, as well as with family and friends. Dave was not interested in elevating his own standing; his focus was solely on lifting others, often encouraging his students and athletes to view their roles as part of something bigger than themselves. Dave’s lasting legacy is the profound impact he had on the lives of those around him. His presence in the world will be dearly missed.</p>
          <h3>Family and Community</h3>
          <p>Dave is survived by his wife, Anne Fox; daughters Jane, Grace, and Greta LeWarne; mother and father Pauline and Chuck LeWarne; brother Charley LeWarne; sister Anne LeWarne and numerous brothers-in-law, sisters-in-law, nieces, nephews, and the multitude of friends, colleagues, and students who dearly loved him.</p>
        </Col>
      </Row>
    </div>
  );
}
