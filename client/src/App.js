import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
