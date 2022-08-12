import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default App;
