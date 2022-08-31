//importing dependencies and files
import { Link } from "react-router-dom";
//react library for form creation
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
// Javascript schema builder for form validation
import * as Yup from "yup";
//To connect database with front end
import Axios from "axios";

//Importing CSS for reset password page
import resetCSS from "./Resetpassword.module.css";
//Importing profile icon
import profileIcon from "../../images/peachprofile.jpg";

//Reset password page function containing JSX code
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

  //Reset password page function containing JSX code
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
            {/* creating input field */}
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
              <p className={resetCSS.label1}> Already have an account? </p>
              <Link to="/signin" className={resetCSS.link}>
                <p className={resetCSS.label2}> Sign In </p>
              </Link>
              <p className={resetCSS.label1}> Don't have an account? </p>
              <Link to="/signup" className={resetCSS.link}>
                <p className={resetCSS.label2}> Register Now </p>{" "}
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ResetpasswordPage;
