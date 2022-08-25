//importing dependencies and files
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState } from "react";
import Axios from "axios";

function ProfilePage() {
  //Custom react hooks
  const [username] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");
  const [email] = useState("");
  const [userList, setUserList] = useState("");

  //Form Validation
  const validate = Yup.object({
    name: Yup.string().max(30, "Must be 30 characters or less"),
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
    phoneNumber: Yup.string()
      .min(8, "Must be a Singapore Number (8 Digits)")
      .max(8, "Must be a Singapore Number (8 Digits)"),
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
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNumber: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        //Pushing data to the backend
        Axios.post("http://localhost:3001/api/insert", {
          name: values.name,
          username: values.username,
          password: values.password,
          confirmPassword: values.ConfirmPassword,
          email: values.email,
          phoneNumber: values.phoneNumber,
        }).then(() => {
          setUserList([
            ...userList,
            {
            //   name: window.name,
              username: username,
              password: password,
              confirmPassword: confirmPassword,
              email: email,
            //   phoneNumber: phoneNumber,
            },
          ]);
        });
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1>Profile:</h1>
          {/* Form Creation */}
          <Form>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone Number" name="phoneNumber" type="number" />
            <button type="submit">Update Profile</button>
            <button type="submit">Log Out</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ProfilePage;
