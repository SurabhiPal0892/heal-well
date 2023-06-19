import { Card } from "react-bootstrap";
import doc1 from "../assets/doc1.jpeg";
import doc2 from "../assets/doc2.jpeg";

export function MeetYourDoctors() {
  return (
    <div className="section-container" style={{"background-color":"white"}}>
    <h2 className="headline" style={{ color:"grey"}}>Meet your Doctors</h2>
    <div className="doc-card__container">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={doc1} />
        <Card.Body>
          <Card.Title>S. Maj RAJESH KUMAR PAL</Card.Title>
          <Card.Text>
            <p>MAIAP DPT DOT AFMS</p>
            <p>Retd. Army Physiotherapist</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={doc2} />
        <Card.Body>
          <Card.Title>S. Maj P.K. MAURYA</Card.Title>
          <Card.Text>
            <p>MAIAP DPT DOT AFMS</p>
            <p>Retd. Army Physiotherapist</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}
