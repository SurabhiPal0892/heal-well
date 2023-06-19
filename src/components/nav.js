import { Link } from "react-router-dom";
export function NavComponent() {
  return (
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
