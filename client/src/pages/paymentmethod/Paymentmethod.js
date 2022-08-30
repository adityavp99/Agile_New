//importing dependencies and files
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState } from "react";
import Axios from "axios";
import paymentMethodCSS from "./Paymentmethod.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import walletImg from "../../images/wallet.jpg";
import mastercardLogo from "../../images/mastercard.jpg";

function PaymentmethodPage() {
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
        <div className={paymentMethodCSS.paymentmethod}>
          {/* Form Creation */}
          <Form className={paymentMethodCSS.formholder}>
            <div className={paymentMethodCSS.box}>
              {/* Form to add new card */}
              <div className={paymentMethodCSS.part1}>
                <h5 className={paymentMethodCSS.addTitle}> Add New Card: </h5>
                <p>Card Number:</p>
                <TextField
                  placeholder="0000 0000 0000 0000"
                  name="cardNumber"
                  type="number"
                  className={paymentMethodCSS.input1}
                />
                <section className={paymentMethodCSS.lineholder}>
                  <section className={paymentMethodCSS.lineholder1}>
                    <p>Expiry Date:</p>
                    <TextField
                      name="expiryDate"
                      type="month"
                      className={paymentMethodCSS.input2}
                    />
                  </section>
                  <section className={paymentMethodCSS.lineholder2}>
                    <p>CVC/CVV:</p>
                    <TextField
                      placeholder="***"
                      name="cvv"
                      type="text"
                      maxlength="3"
                      min="0"
                      max="999"
                      className={paymentMethodCSS.input3}
                    />
                  </section>
                </section>
                <p>Card Holder Name:</p>
                <TextField
                  placeholder="Enter Card Holder's Name"
                  name="cHolderName"
                  type="text"
                  className={paymentMethodCSS.input4}
                />
                <button type="submit" className={paymentMethodCSS.button4}>
                  Add Card
                </button>
                <Link to="/trackorder">
                  <button type="submit" className={paymentMethodCSS.button5}>
                    Pay
                  </button>
                </Link>
              </div>

              <div className={paymentMethodCSS.part2}>
                <div className={paymentMethodCSS.wallet}>
                  <section className={paymentMethodCSS.singleline}>
                    <img
                      src={walletImg}
                      className={paymentMethodCSS.walletpic}
                      alt="Wallet Icon"
                    />
                    <h6 className={paymentMethodCSS.paymentTitles}> E-wallet: </h6>
                    <select className={paymentMethodCSS.dropdown} name="cards">
                      <option
                        className={paymentMethodCSS.cardName}
                        value="Visa"
                      >
                        Visa
                      </option>
                      <option
                        className={paymentMethodCSS.cardName}
                        value="Mastercard"
                      >
                        Mastercard
                      </option>
                    </select>
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="2x"
                      className={paymentMethodCSS.deleteIcon}
                    />
                  </section>

                  <section className={paymentMethodCSS.singleline}>
                    <p>Amount:</p>
                    <TextField
                      placeholder="$0.00"
                      name="amount"
                      type="text"
                      maxlength="3"
                      min="0"
                      max="999"
                      className={paymentMethodCSS.input5}
                    />
                    <button type="submit" className={paymentMethodCSS.button6}>
                      Top-Up
                    </button>
                  </section>
                  <section>
                    <p className={paymentMethodCSS.phrase1}>Balance:</p>
                    <p className={paymentMethodCSS.phrase2}>$1</p>
                  </section>
                  <br />
                  <section className={paymentMethodCSS.singleline}>
                    <p>Auto Top-Up:</p>
                    <TextField
                      placeholder="Auto Top-Up"
                      name="autoTopup"
                      type="checkbox"
                      className={paymentMethodCSS.checkbox}
                    />
                  </section>
                </div>

                <div className={paymentMethodCSS.visa}>
                  <h6 className={paymentMethodCSS.paymentTitles}> Visa </h6>
                  <p className={paymentMethodCSS.phrase1}>user.cardnumber</p>
                  <section>
                    <p className={paymentMethodCSS.phrase1}>Expires:</p>
                    <p className={paymentMethodCSS.phrase2}>user.visacvv</p>
                  </section>
                  <section>
                    <p className={paymentMethodCSS.phrase1}>Cardholder Name:</p>
                    <p className={paymentMethodCSS.phrase2}>
                      user.cardholdername
                    </p>
                  </section>
                </div>

                <div className={paymentMethodCSS.mastercard}>
                  <section className={paymentMethodCSS.mastercardinfo}>
                    <h6 className={paymentMethodCSS.paymentTitles}> Mastercard </h6>
                    <p className={paymentMethodCSS.phrase1}>user.cardnumber</p>
                    <section>
                      <p className={paymentMethodCSS.phrase1}>Expires:</p>
                      <p className={paymentMethodCSS.phrase2}>user.visacvv</p>
                    </section>
                    <section>
                      <p className={paymentMethodCSS.phrase1}>
                        Cardholder Name:
                      </p>
                      <p className={paymentMethodCSS.phrase2}>
                        user.cardholdername
                      </p>
                    </section>
                  </section>
                  <section className={paymentMethodCSS.mastercardpic}>
                    <img
                      src={mastercardLogo}
                      className={paymentMethodCSS.walletpic}
                      alt="Master Card Logo"
                    />
                  </section>
                </div>

                <div className={paymentMethodCSS.cash}>
                  <section className={paymentMethodCSS.singleline}>
                    <img
                      src={walletImg}
                      className={paymentMethodCSS.walletpic}
                      alt="Wallet Icon"
                    />
                    <h6 className={paymentMethodCSS.paymentTitles}> Pay by Cash </h6>
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

export default PaymentmethodPage;
