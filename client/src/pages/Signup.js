//importing dependencies and files
import { Formik, Form } from "formik";
import { TextField } from "../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import Axios from "axios";

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
        <div>
          <h1>Sign Up</h1>
          {/* Form Creation */}
          <Form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <TextField label="Email" name="email" type="email" />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignupPage;
