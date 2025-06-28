import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CustomBooking from "./pages/CustomBooking"; // Import CustomBooking
import "./index.css";
import CarList from "./pages/CarList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/custom-booking" element={<CustomBooking />} />
        <Route path="/car-list" element={<CarList />} />
      </Routes>
    </Router>
  );
}

export default App;
