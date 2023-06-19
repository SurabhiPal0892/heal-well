import { FaPhone } from "react-icons/fa";
export function ContactUs() {
  return (
    <div className="section-container">
    <h2 className="headline">Contact Us</h2>
      <div className="contact-us__container">
        <div>
          <h5>Our Clinic</h5>
          <p>733, Udhyan 1, Tyagi Vihar, Eldeco, Bangla Bazar Rd</p>
          <p>opp. AWHO, Eldeco Udyan-1, Ashiyana</p>
          <p>Lucknow, Uttar Pradesh 226012</p>
          <h5>Timimgs</h5>
          <p>Morning : 9:00 AM - 1:30 PM</p>
          <p>Evening : 5:00 PM - 8:00 PM</p>
          <h5>For Enquiries, Call Us</h5>
          <p>
            <FaPhone />
            &nbsp;8429399277 | 8379060001
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5421568778092!2d80.92484891478426!3d26.79086057177529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd552f883013%3A0xed24970667ba55f9!2sHealwell%20Physiotherapy%20(Ex-Army)!5e0!3m2!1sen!2sin!4v1673550651240!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
      </div>
  );
}
