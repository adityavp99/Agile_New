//importing dependencies and files
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import Axios from "axios";

import resetCSS from "./Resetpassword.module.css";
import profileIcon from "../../images/peachprofile.jpg";

function ResetpasswordPage() {
  //Form Validation
  const validate = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    securityAnswer: Yup.string().required(
      "Please answer the security question"
    ),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  //To get data from the backend
  //   useEffect(() => {
  //     Axios.get("http://localhost:3001/api/get").then((response) => {
  //       setUserList(response.data);
  //     });
  //   }, []);

  return (
    <Formik
      //Initialising form fields
      initialValues={{
        email: "",
        securityAnswer: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        //To get data from the backend
        Axios.get("http://localhost:3001/api/get").then((response) => {});
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={resetCSS.signup}>
          {/* Form Creation */}
          <Form className={resetCSS.form}>
            <div className={resetCSS.openingdiv}>
              <img
                src={profileIcon}
                className={resetCSS.image1}
                alt="Profile Icon"
              />
              <h5 className={resetCSS.title}>Reset Password</h5>
            </div>
            <TextField
              placeholder="Enter your email"
              name="email"
              type="email"
              className={resetCSS.emailField}
            />
            <p className={resetCSS.securityQuestion}>
              What was the first school that you studied in?
            </p>
            <TextField
              placeholder="Security Answer"
              name="securityAnswer"
              type="text"
              className={resetCSS.securityAnswer}
            />
            <TextField
              placeholder="Enter New Password"
              name="password"
              type="password"
              className={resetCSS.newPassword}
            />
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              className={resetCSS.confirmPassword}
            />
            <button type="submit:" className={resetCSS.button1}>
              Submit
            </button>
            <div className={resetCSS.endingdiv}>
              <p className={resetCSS.label2}> Already have an account? </p>
              <Link to="/signin" className={resetCSS.link}>
                <p className={resetCSS.label1}> Sign In </p>
              </Link>
              <p className={resetCSS.label2}> Don't have an account? </p>
              <Link to="/signup" className={resetCSS.link}>
                <p className={resetCSS.label3}> Register Now </p>{" "}
              </Link>

              {/* Replace with link later on */}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ResetpasswordPage;
