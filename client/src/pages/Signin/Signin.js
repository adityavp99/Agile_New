//importing dependencies and files
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import Axios from "axios";

import signinCSS from "./Signin.module.css";
import profileIcon from "../../images/peachprofile.jpg";

function SigninPage() {
  //Form Validation
  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
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
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        //To get data from the backend
        Axios.get("http://localhost:3001/api/get").then((response) => {});
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={signinCSS.signin}>
          {/* Form Creation */}
          <Form className={signinCSS.form}>
            <div className={signinCSS.openingdiv}>
              <img
                src={profileIcon}
                className={signinCSS.image1}
                alt="Profile Icon"
              />
              <h5>Sign In</h5>
            </div>
            <TextField
              placeholder="Username"
              name="username"
              type="text"
              className={signinCSS.field1}
            />
            <TextField
              placeholder="Password"
              name="password"
              type="password"
              className={signinCSS.field2}
            />
            <button type="submit:" className={signinCSS.button1}>
              Submit
            </button>
            <div className={signinCSS.endingdiv}>
              <p className={signinCSS.label1}> Forgot Password? </p>
              <p className={signinCSS.label2}> Dont have an account? </p>
              <Link to="/signup" className={signinCSS.link}>
                <p className={signinCSS.label3}> Sign Up </p>{" "}
              </Link>
              
              {/* Replace with link later on */}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SigninPage;
