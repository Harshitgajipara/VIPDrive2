import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CustomBooking from "./pages/CustomBooking";
import SpecialTrips from "./pages/SpecialTrips";
import "./index.css";
import CarList from "./pages/CarList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/custom-booking" element={<CustomBooking />} />
        <Route path="/car-list" element={<CarList />} />
        <Route path="/special-trips" element={<SpecialTrips />} />
      </Routes>
    </Router>
  );
}

export default App;
