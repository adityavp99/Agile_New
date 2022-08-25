//importing dependencies and files
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState } from "react";
import Axios from "axios";

function ProfilePage() {
  //Custom react hooks
  const [name] = useState("");
  const [username] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");
  const [email] = useState("");
  const [phoneNumber] = useState("");
  const [streetName] = useState("");
  const [blkNumber] = useState("");
  const [buildingName] = useState("");
  const [lvlNumber] = useState("");
  const [unitNumber] = useState("");
  const [postalCode] = useState("");
  const [cardNumber] = useState("");
  const [expiryDate] = useState("");
  const [cvv] = useState("");
  const [cHolderName] = useState("");
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
        streetName: "",
        blkNumber: "",
        buildingName: "",
        lvlNumber: "",
        unitNumber: "",
        postalCode: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cHolderName: "",
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
          streetName: values.streetName,
          blkNumber: values.blkNumber,
          buildingName: values.buildingName,
          lvlNumber: values.lvlNumber,
          unitNumber: values.unitNumber,
          postalCode: values.postalCode,
          cardNumber: values.cardNumber,
          expiryDate: values.expiryDate,
          cvv: values.cvv,
          cHolderName: values.cHolderName,
        }).then(() => {
          setUserList([
            ...userList,
            {
              name: name,
              username: username,
              password: password,
              confirmPassword: confirmPassword,
              email: email,
              phoneNumber: phoneNumber,
              streetName: streetName,
              blkNumber: blkNumber,
              buildingName: buildingName,
              lvlNumber: lvlNumber,
              unitNumber: unitNumber,
              postalCode: postalCode,
              cardNumber: cardNumber,
              expiryDate: expiryDate,
              cvv: cvv,
              cHolderName: cHolderName,
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
            {/* Address form */}
            <div>
              <h2> Address: </h2>
              <TextField label="Street Name" name="streetName" type="text" />
              <TextField label="Block Number" name="blkNumber" type="text" />
              <TextField
                label="Building Name"
                name="buildingName"
                type="text"
              />
              <TextField label="Level Number" name="lvlNumber" type="number" />
              <TextField label="Unit Number" name="unitNumber" type="number" />
              <TextField label="Postal Code" name="postalCode" type="number" />
              <button type="submit">Save</button>
            </div>
            {/* Form to add new card */}
            <div>
              <h2> Add New Card: </h2>
              <TextField label="Card Number" name="cardNumber" type="number" />
              <TextField label="Expiry Date" name="expiryDate" type="date" />
              <TextField label="CVC/CVV" name="cvv" type="number" />
              <TextField
                label="Card Holder Name"
                name="cHolderName"
                type="text"
              />
              <button type="submit">Add Card</button>
            </div>
            <div>
              <h2> Ewallet </h2>
              <select id="cards" name="cards">
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
              </select>
              <button type="submit">delete card</button>
              <TextField label="Amount:" name="amount" type="number" />
              <button type="submit">Top-Up</button>
              <p>Balance: </p>
              {/* <input type="checkbox" id="topUp" name="amount_topUp" value="topUpAmount"></input>
              <label for="topUp">Auto Top-Up</label><br></br> */}
              <TextField label="Auto Top-Up" name="amount" type="checkbox" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ProfilePage;
