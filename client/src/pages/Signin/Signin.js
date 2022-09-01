//Importing dependencies and files
import { Link } from "react-router-dom";
//react library for form creation
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
//Javascript schema builder for form validation
import * as Yup from "yup";
//To connect database with front end
import Axios from "axios";

//Importing CSS for signin page
import signinCSS from "./Signin.module.css";
//Importing profile icon
import profileIcon from "../../images/peachprofile.jpg";

//Sign in page function containing JSX code
function SigninPage() {
  //Form Validation
  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  // To get data from the backend
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
              <h5 className={signinCSS.title}>Sign In</h5>
            </div>
            {/* creating input field */}
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
              Sign in
            </button>
            <div className={signinCSS.endingdiv}>
              <Link to="/resetpassword" className={signinCSS.link}>
                <p className={signinCSS.label1}> Forgot Password? </p>
              </Link>
              <p className={signinCSS.label2}> Dont have an account? </p>
              <Link to="/signup" className={signinCSS.link}>
                <p className={signinCSS.label3}> Sign Up </p>
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SigninPage;
