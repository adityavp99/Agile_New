import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Axios from "axios";

import HomePage from "./pages/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";
import SignupPage from "./pages/Signup";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
