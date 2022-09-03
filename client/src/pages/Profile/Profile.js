//importing dependencies and files
//react library for form creation
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
//Javascript schema builder for form validation
import * as Yup from "yup";
//Importing react hook for changing states
import { useState } from "react";
//To connect database with front end
import Axios from "axios";

//Importing CSS for signin page
import profileCSS from "./Profile.module.css";

//Importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTicket } from "@fortawesome/free-solid-svg-icons";

//Importing profile and wallet icons
import pinkprofileImg from "../../images/profile.jpg";
import walletImg from "../../images/wallet.jpg";

function ProfilePage() {
  //Custom react hooks
  const [name] = useState("");
  const [username] = useState("");
  const [password] = useState("");
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

  //Profile page function containing JSX code
  return (
    <Formik
      //Initialising form fields
      initialValues={{
        name: "",
        username: "",
        password: "",
        securityQuestion: "",
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
          email: values.email,
          phoneNumber: values.phoneNumber,
          securityQuestion: values.securityQuestion,
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
              email: email,
              phoneNumber: phoneNumber,
              securityQuestion: securityQuestion,
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
                <h3 className={profileCSS.name}> User.name </h3>
              </section>
            </div>

            {/* div container segment1: contains the profile section */}
            <div className={profileCSS.island1}>
              <div className={profileCSS.segment1}>
                <h5 className={profileCSS.profileTitle}>Profile:</h5>
                {/* creating input field */}
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
                <h2 className={profileCSS.securityQues}>
                  {" "}
                  Security Question: <br />
                  What was the first school that you studied in?
                </h2>
                <TextField
                  placeholder="Security Answer"
                  name="securityAnswer"
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

              {/* div container segment2: Address form */}
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

              {/* div container segment3: Form to add new card */}
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

              {/* div container segment4: Added cards and remaining points */}
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
                <div className={profileCSS.rewardPoints}>
                  <section className={profileCSS.alignRp}>
                    {/* importing fontawesome icons delcared above in line 16 */}
                    <FontAwesomeIcon
                      icon={faStar}
                      size="3x"
                      className={profileCSS.starIcon}
                    />
                    <h6 className={profileCSS.rpTitle}>Reward Points:</h6>
                  </section>
                  <section className={profileCSS.shortline}>
                    <p>Balance:</p>
                    <p>1pts</p>
                  </section>
                </div>
                <div className={profileCSS.promoCodes}>
                  <section className={profileCSS.alignPcodes}>
                    <FontAwesomeIcon
                      icon={faTicket}
                      size="2x"
                      className={profileCSS.ticketIcon}
                    />
                    <h6>Promo Codes:</h6>
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
