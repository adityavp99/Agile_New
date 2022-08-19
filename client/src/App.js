import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Axios from "axios";

import HomePage from "./pages/Home";
import RestaurantsPage from "./pages/Restaurants";
import HelpPage from "./pages/Help";
import SignupPage from "./pages/Signup";

import Navbar from "./components/layout/Navbar";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [userList, setUserList] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get").then((response) => {
  //     setUserList(response.data);
  //   });
  // }, []);

  // const signUp = () => {
  //   if (password !== confirmPassword) {
  //     console.log("Conform Password is not same as Password");
  //   }

  //   Axios.post("http://localhost:3001/api/insert", {
  //     username,
  //     password,
  //     confirmPassword,
  //     email,
  //   }).then(() => {
  //     setUserList([
  //       ...userList,
  //       {
  //         username: username,
  //         password: password,
  //         confirmPassword: confirmPassword,
  //         email: email,
  //       },
  //     ]);
  //   });
  // };

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
