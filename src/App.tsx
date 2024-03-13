import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Layout from "./Layout";
import Home from "./components/Home";
import Login from "./security/Login";
import Logout from "./security/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<div>Aktivit</div>} />
        <Route path="/mybookings" element={<div>My Bookings</div>} />
        <Route path="/bookings" element={<div>Bookings</div>} />
        <Route path="/signup" element={<div>Sign Up</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </>
  );
}

export default App;
