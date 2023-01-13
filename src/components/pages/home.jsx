import { FaEnvelope, FaClock, FaSun,FaMoon } from "react-icons/fa";
import treatment from "../../assets/treatment.jpeg";
import modality from "../../assets/modalities.jpeg";
import { Footer } from "../footer";
import { BigCardComponent } from "../bigCard";
import { Treatments } from "../treatments";
import { Modalities } from "../modalities";
import { MeetYourDoctors } from "../doctors";
import { ContactUs } from "../contactUs";
import { BookAppointment } from "../bookAppointment";
import {Row,Col,Container} from "react-bootstrap"
export function Home() {
  const data = [
    {
      id: 1,
      title: "TREATMENTS",
      description: "",
      imgUrl: treatment,
    },
    {
      id: 2,
      title: " AVAILABLE MODALITIES",
      description: "",
      imgUrl: modality,
    },
  ];
  return (
    <Container fluid>
    <Row>
      <Col>
    
      <div class="floating-text">Home Visit Available</div>
    
      <div className="section-container" style={{"background-color":"white"}}>
        <h2 className="headline" style={{ color:"grey"}}>Our Services</h2>
        <BigCardComponent data={data} />
      </div>
      <div className="section-container">
        <h2 className="headline">Our Treatments</h2>
        <Treatments />
      </div>
      <div className="section-container">
        <h2 className="headline">Available Modalities</h2>
        <Modalities />
      </div>
      <div className="section-container" style={{"background-color":"white"}}>
        <h2 className="headline" style={{ color:"grey"}}>Meet your Doctors</h2>
        <MeetYourDoctors />
      </div>
      <div className="section-container" style={{"background-color":"aliceblue"}}>
        <h2 className="headline" style={{ color:"grey"}}>Book Appointment</h2>
        <BookAppointment />
      </div>
      <div className="section-container">
        <h2 className="headline">Contact Us</h2>
        <ContactUs />
      </div>
    <Footer/>      </Col>
    </Row>
  </Container>
      
  );
}