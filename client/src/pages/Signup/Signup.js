//importing dependencies and files
import { Link } from "react-router-dom";
//react library for form creation
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
// Javascript schema builder for form validation
import * as Yup from "yup";
//Importing react hook for changing states
import { useState } from "react";
//To connect database with front end
import Axios from "axios";

//Importing CSS for signup page
import signupCSS from "./Signup.module.css";
//Importing profile icon
import profileIcon from "../../images/peachprofile.jpg";

//Sign up page function containing JSX code
function SignupPage() {
  //Custom react hooks
  const [username] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");
  const [email] = useState("");
  const [securityAnswer] = useState("");
  const [userList, setUserList] = useState("");

  // Form Validation
  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    securityAnswer: Yup.string().required(
      "Please answer the security question"
    ),
  });

  //To get data from the backend
  //   useEffect(() => {
  //     Axios.get("http://localhost:3001/api/get").then((response) => {
  //       setUserList(response.data);
  //     });
  //   }, []);

  //Sign up page function containing JSX code
  return (
    <Formik
      //Initialising form fields
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        securityAnswer: "",
      }}
      //To validate values
      validationSchema={validate}
      onSubmit={(values) => {
        // Pushing data to the backend
        Axios.post("http://localhost:3001/api/insert", {
          username: values.username,
          password: values.password,
          confirmPassword: values.ConfirmPassword,
          email: values.email,
          securityAnswer: values.securityAnswer,
        }).then(() => {
          setUserList([
            ...userList,
            {
              // custom react hooks defined above in line 19
              username: username,
              password: password,
              confirmPassword: confirmPassword,
              email: email,
              securityAnswer: securityAnswer,
            },
          ]);
        });
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={signupCSS.signup}>
          {/* Form Creation */}
          <Form className={signupCSS.form}>
            <div className={signupCSS.openingdiv}>
              <img
                src={profileIcon}
                className={signupCSS.image1}
                alt="Profile Icon"
              />
              <h5 className={signupCSS.title}>Sign Up</h5>
            </div>
            {/* creating input field */}
            <TextField
              placeholder="Username"
              name="username"
              type="text"
              className={signupCSS.field1}
            />
            <TextField
              placeholder="Password"
              name="password"
              type="password"
              className={signupCSS.field2}
            />
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              className={signupCSS.field3}
            />
            <TextField
              placeholder="Email"
              name="email"
              type="email"
              className={signupCSS.field4}
            />
            <p className={signupCSS.securityQuestion}>
              What was the first school that you studied in?
            </p>
            <TextField
              placeholder="Security Answer"
              name="securityAnswer"
              type="text"
              className={signupCSS.securityAnswer}
            />
            <button type="submit:" className={signupCSS.button1}>
              Sign up
            </button>
            <div className={signupCSS.endingdiv}>
              <p className={signupCSS.label1}> Already have an account? </p>
              <Link to="/signin" className={signupCSS.link}>
                <p className={signupCSS.label2}> Sign In </p>
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignupPage;
