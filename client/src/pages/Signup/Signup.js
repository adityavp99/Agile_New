//importing dependencies and files
import { Formik, Form} from "formik"; 
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState } from "react";
import Axios from "axios";

import signupCSS from "./Signup.module.css";
import profileIcon from "./profile.jpg";

function SignupPage() {
  //Custom react hooks
  const [username] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");
  const [email] = useState("");
  const [userList, setUserList] = useState("");

  //Form Validation
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
  });


  //useEffect not imported
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
        confirmPassword: "",
        email: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        //Pushing data to the backend
        Axios.post("http://localhost:3001/api/insert", {
          username: values.username,
          password: values.password,
          confirmPassword: values.ConfirmPassword,
          email: values.email,
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
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={signupCSS.signup}>
          {/* Form Creation */}
          <Form className={signupCSS.form}>
          <div className={signupCSS.openingdiv}>
            <img src={profileIcon} className={signupCSS.image1} alt="Profile Icon" />
            <h5>Sign Up</h5> 
          </div>
            <TextField placeholder="Username" name="username" type="text" className={signupCSS.field1}/>
            <TextField placeholder="Password" name="password" type="password" className={signupCSS.field2}/>
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              className={signupCSS.field3}
            />
            <TextField placeholder="Email" name="email" type="email" className={signupCSS.field4}/>
            <button type="submit:" className={signupCSS.button1}>Submit</button>
            <div className={signupCSS.endingdiv}>
                  <p className={signupCSS.label1}> Already have an account? </p>
                  <p className={signupCSS.label2}> Sign In </p> {/* Replace with link later on */}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignupPage;
