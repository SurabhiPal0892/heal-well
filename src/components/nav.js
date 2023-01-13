import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export function NavComponent() {
  return (
    // <Navbar bg="light" variant="light">
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">HOME</Nav.Link>
    //       <Nav.Link href="#link">ABOUT US</Nav.Link>
    //       <Nav.Link href="#link">WHAT WE OFFER</Nav.Link>
    //       <Nav.Link href="#link">SERVICES</Nav.Link>
    //       <Nav.Link href="#link">CONTACT US</Nav.Link>
    //       <Nav.Link href="#link">BOOK AN APPOINTMENT</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <nav>
        <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about-us"><li>ABOUT US</li></Link>
            <Link to="/what-we-offer">  <li>WHAT WE OFFER</li></Link>
            <Link to="/services"><li>SERVICES</li></Link>
            <Link to="/contact-us"><li>CONTACT US</li></Link>
            <Link to="/book-appointment"><li>BOOK AN APPOINTMENT</li></Link>
        </ul>
        </nav>
  );
}
