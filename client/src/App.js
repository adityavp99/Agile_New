import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
    </div>
  );
}

export default App;
