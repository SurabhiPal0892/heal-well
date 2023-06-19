import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header";
import "./App.css";
import { Home } from "./components/pages/home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { BookAppointment } from "./components/bookAppointment";
import { MeetYourDoctors } from "./components/doctors";
import {ContactUs} from "./components/contactUs"
import { Treatments } from "./components/treatments";
function App() {
  return (
    <div className="bg">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/what-we-offer" element={<Treatments />} />
          <Route path="/about-us" element={<MeetYourDoctors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
