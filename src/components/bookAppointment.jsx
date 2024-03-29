import { Form, Button } from "react-bootstrap";

export function BookAppointment() {

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div className="section-container" style={{"background-color":"aliceblue"}}>
    <h2 className="headline" style={{ color:"grey"}}>Book Appointment</h2>
    <div className="form-container">
<Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email" />
      </Form.Group>

      <Form.Group controlId="formBasicMobile">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter your Mobile Number" />
      </Form.Group>

    <div style={{"margin":"20px auto auto auto",width:"130px"}}>
    <Button variant="success" type="submit" onClick={handleSubmit}>
        Book Now
      </Button>
    </div>
     
    </Form>
    </div>
    </div>
  );
}
