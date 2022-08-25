import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";

import Navbar from "./components/layout/Navbar";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
