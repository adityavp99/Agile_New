import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/Home";
import RestaurantsPage from "./pages/restaurants/Restaurants";
import HelpPage from "./pages/help/Help";
import CategoriesPage from "./pages/categories/Categories";
import SignupPage from "./pages/signup/Signup";
import SigninPage from "./pages/signin/Signin";
import PizzahutPage from "./pages/pizzahut/Pizzahut";
import ComparisonPage from "./pages/comparison/Comparison";
import OrderhistoryPage from "./pages/orderhistory/Orderhistory";
import ResetpasswordPage from "./pages/resetpassword/Resetpassword";
import PaymentmethodPage from "./pages/paymentmethod/Paymentmethod";
import TrackOrderPage from "./pages/trackorder/Trackorder";
import CartPage from "./pages/cart/Cart";
import ProfilePage from "./pages/profile/Profile";

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
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/pizzahut" element={<PizzahutPage />} />
      <Route path="/comparison" element={<ComparisonPage />} />
      <Route path="/orderhistory" element={<OrderhistoryPage />} />
      <Route path="/resetpassword" element={<ResetpasswordPage />} />
      <Route path="/paymentmethod" element={<PaymentmethodPage />} />
      <Route path="/trackorder" element={<TrackOrderPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
