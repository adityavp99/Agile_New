import { useState, useEffect } from "react";
import Axios from "axios";
import "./Signup.css"; 

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userList, setUserList] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const signUp = () => {
    if (password !== confirmPassword) {
      console.log("Conform Password is not same as Password");
    }

    Axios.post("http://localhost:3001/api/insert", {
      username,
      password,
      confirmPassword,
      email,
    }).then(() => {
      setUserList([
        ...userList,
        {
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          email: email,
        },
      ]);
    });

    
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        {/* Username Input */}
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        {/* Password Input */}
        <label>Password:</label>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {/* Confirm Password Input */}
        <label>Confirm Password:</label>
        <input
          type="text"
          name="confirm_Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        {/* Email Input */}
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* Sign Up Button */}
        <button onClick={signUp}>Sign Up</button>

        {/* {movieReviewList.map((val)=> {
                return <h1>MovieName: {val.movieName} | Movie Review: {val.movieReview}</h1>
            })} */}
      </div>
    </div>
  );
}

export default SignupPage;