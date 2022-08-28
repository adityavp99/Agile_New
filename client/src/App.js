import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/Home";
import RestaurantsPage from "./pages/restaurants/Restaurants";
import HelpPage from "./pages/Help";
import CategoriesPage from "./pages/categories/Categories";
import SignupPage from "./pages/signup/Signup";
import TrackOrderPage from "./pages/trackorder/Trackorder";

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
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/trackorder" element={<TrackOrderPage />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
