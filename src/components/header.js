import { NavComponent } from "./nav";
import { FaEnvelope, FaClock, FaSun, FaMoon } from "react-icons/fa";
export function Header() {
  return (
    <>
      <header>
        <div className="brand__name">
          <p className="brand-title">HEALWELL PHYSIOTHERAPY</p>
          {/* <div className="brand__moto">
            <h3>One Spot for your Physio need</h3> 
        </div> */}
          <h5>&nbsp;Pain Management & Rehabilitation Centre</h5>
        </div>
        <div className="info__btn">
          <div className="timings">
            <p>
              <FaClock />
              &nbsp;<span>Timings</span>
            </p>
            <p>
              <FaSun /> : 9:00 AM - 1:30 PM
            </p>
            <p>
              <FaMoon /> : 5:00 PM - 8:00 PM
            </p>
          </div>
        </div>
      </header>

      <NavComponent />
    </>
  );
}
