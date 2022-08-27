//importing dependencies and files
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState } from "react";
import Axios from "axios";
import profileCSS from "./Profile.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import pinkprofileImg from ".././peachprofile.jpg";
import walletImg from ".././wallet.jpg";
import deleteImg from ".././dustbin.jpg";

function ProfilePage() {
  //Custom react hooks
  const [name] = useState("");
  const [username] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");
  const [email] = useState("");
  const [phoneNumber] = useState("");
  const [securityQuestion] = useState("");
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
        <div className={profileCSS.profile}>
          {/* Form Creation */}
          <Form className={profileCSS.forms}>
            <div className={profileCSS.segmentheader}>
              <section className={profileCSS.inline}>
                <img
                  src={pinkprofileImg}
                  alt="Profile Icon"
                  className={profileCSS.profilepic}
                />
                <h3> User.name </h3>
              </section>
            </div>

            <div className={profileCSS.island1}>
              <div className={profileCSS.segment1}>
                <h4>Profile:</h4>
                <TextField
                  placeholder="Name"
                  name="name"
                  type="text"
                  className={profileCSS.fields1}
                />
                <TextField
                  placeholder="Username"
                  name="username"
                  type="text"
                  className={profileCSS.fields1}
                />
                <TextField
                  placeholder="Password"
                  name="password"
                  type="password"
                  className={profileCSS.fields1}
                />
                <TextField
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  className={profileCSS.fields1}
                />
                <TextField
                  placeholder="Email"
                  name="email"
                  type="email"
                  className={profileCSS.fields1}
                />
                <TextField
                  placeholder="Phone Number"
                  name="phoneNumber"
                  type="number"
                  min="0"
                  className={profileCSS.fields1}
                />
                <h2 className={profileCSS.securityQues}> Security Question (What was the first school that you studied in?)</h2>
                <TextField
                  placeholder="Security Answer"
                  name="phoneNumber"
                  type="text"
                  className={profileCSS.securityAns}
                />
                <button type="submit" className={profileCSS.button1}>
                  Update Profile
                </button>
                <button type="submit" className={profileCSS.button2}>
                  Log Out
                </button>
              </div>

              {/* Address form */}
              <div className={profileCSS.segment2}>
                <h5> Address: </h5>
                <TextField
                  placeholder="Street Name"
                  name="streetName"
                  type="text"
                  className={profileCSS.fields2}
                />
                <TextField
                  placeholder="Block Number"
                  name="blkNumber"
                  type="text"
                  className={profileCSS.fields2}
                />
                <TextField
                  placeholder="Building Name"
                  name="buildingName"
                  type="text"
                  className={profileCSS.fields2}
                />
                <TextField
                  placeholder="Level Number"
                  name="lvlNumber"
                  type="number"
                  className={profileCSS.fields2}
                />
                <TextField
                  placeholder="Unit Number"
                  name="unitNumber"
                  type="number"
                  className={profileCSS.fields2}
                />
                <TextField
                  placeholder="Postal Code"
                  name="postalCode"
                  type="number"
                  className={profileCSS.fields2}
                />
                <button type="submit" className={profileCSS.button3}>
                  Save
                </button>
              </div>
            </div>
            <div className={profileCSS.island2}>
              {/* Form to add new card */}
              <div className={profileCSS.segment3}>
                <h5> Add New Card: </h5>
                <p>Card Number:</p>
                <TextField
                  placeholder="0000 0000 0000 0000"
                  name="cardNumber"
                  type="number"
                  className={profileCSS.fieldspecial}
                />
                <section className={profileCSS.inline}>
                  <section className={profileCSS.inline1}>
                    <p>Expiry Date:</p>
                    <TextField
                      name="expiryDate"
                      type="month"
                      className={profileCSS.fields31}
                    />
                  </section>
                  <section className={profileCSS.inline2}>
                    <p>CVC/CVV:</p>
                    <TextField
                      placeholder="***"
                      name="cvv"
                      type="text"
                      maxlength="3"
                      min="0"
                      max="999"
                      className={profileCSS.fields32}
                    />
                  </section>
                </section>
                <p>Card Holder Name:</p>
                <TextField
                  placeholder="Enter Card Holder's Name"
                  name="cHolderName"
                  type="text"
                  className={profileCSS.fieldspecial}
                />
                <button type="submit" className={profileCSS.button4}>
                  Add Card
                </button>
              </div>

              <div className={profileCSS.segment4}>
                <div className={profileCSS.wallet}>
                  <section className={profileCSS.align}>
                    <img
                      src={walletImg}
                      className={profileCSS.walletpic}
                      alt="Wallet Icon"
                    />
                    <h6> E-wallet: </h6>
                    <select className={profileCSS.dropdown} name="cards">
                      <option className={profileCSS.cardName} value="Visa">
                        Visa
                      </option>
                      <option
                        className={profileCSS.cardName}
                        value="Mastercard"
                      >
                        Mastercard
                      </option>
                    </select>
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="2x"
                      className={profileCSS.deleteIcon}
                    />
                  </section>

                  <section className={profileCSS.align}>
                    <p>Amount:</p>
                    <TextField
                      placeholder="$0.00"
                      name="amount"
                      type="text"
                      maxlength="3"
                      min="0"
                      max="999"
                      className={profileCSS.fields4}
                    />
                    <button type="submit" className={profileCSS.button5}>
                      Top-Up
                    </button>
                  </section>
                  <section className={profileCSS.shortline}>
                    <p>Balance:</p>
                    <p>$1</p>
                  </section>
                  <br />
                  <section className={profileCSS.shortline}>
                    <p>Auto Top-Up:</p>
                    <TextField
                      placeholder="Auto Top-Up"
                      name="autoTopup"
                      type="checkbox"
                      className={profileCSS.checkbox}
                    />
                  </section>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ProfilePage;
