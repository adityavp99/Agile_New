import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";
import CategoriesPage from "./pages/categories/Categories";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
    </div>
  );
}

export default App;
