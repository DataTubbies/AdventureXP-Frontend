import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
// import "./App.css";
// import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./security/Login";
import Logout from "./security/Logout";
import AboutUs from "./pages/AboutUs";
import Activities from "./pages/Activities";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/mybookings" element={<Bookings />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
