// Cartpage JS/HTML code

//importing dependencies and files
import { Formik, Form } from "formik";
import { TextField } from "../../components/layout/Form/TextField";
import * as Yup from "yup";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

// importing CSS styling for home page from CSS Stylesheet file
import cartCSS from "./Cart.module.css";

// importing CartHolder from components folder
// Each CartHolder contains an order summary for a particular restaurant
import CartHolder from "../../components/layout/cartholder/Cartholder";

// Comparisonpage function containing HTML code
function CartPage() {
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
        //div container for the cart page
        <div className={cartCSS.cart}>

          {/* div container to hold the cartholders*/}
          <div className={cartCSS.opening}>

             {/* Component that summarizes orders: 
            Order from 2 restaurants will mean 2 CartHolders*/}
            <CartHolder />
            <CartHolder />
          </div>

          {/* Form Creation */}
          {/* div container to hold the address and promo forms */}
          <Form className={cartCSS.forms}>

             {/* Sub div to hold the 2 forms*/}
            <div className={cartCSS.island}>

              {/* Address form for ordering */}
              <div className={cartCSS.segment1}>
                <h5 className={cartCSS.addressTitle}> Address: </h5>
                <TextField
                  placeholder="Street Name"
                  name="streetName"
                  type="text"
                  className={cartCSS.fieldslong}
                />
                <TextField
                  placeholder="Block Number"
                  name="blkNumber"
                  type="text"
                  className={cartCSS.fieldslong}
                />
                <TextField
                  placeholder="Building Name"
                  name="buildingName"
                  type="text"
                  className={cartCSS.fieldslong}
                />
                <TextField
                  placeholder="Level Number"
                  name="lvlNumber"
                  type="number"
                  className={cartCSS.fieldslong}
                />
                <TextField
                  placeholder="Unit Number"
                  name="unitNumber"
                  type="number"
                  className={cartCSS.fieldslong}
                />
                <TextField
                  placeholder="Postal Code"
                  name="postalCode"
                  type="number"
                  className={cartCSS.fieldslong}
                />
                <button type="submit" className={cartCSS.button3}>
                  Save
                </button>
              </div>

              {/* Promo form for ordering */}
              <div className={cartCSS.segment2}>

                {/* sub div to contain the promo segment */}
                <div className={cartCSS.promosegment}>

                  {/* div to contain promo code section */}
                  <div className={cartCSS.part1}>
                    <p className={cartCSS.paraleft}> Promo Code: </p>
                    <TextField
                      placeholder="Add your promo code here"
                      name="promocode"
                      type="text"
                      className={cartCSS.fieldslong}
                    />
                    <button type="submit" className={cartCSS.button2}>
                      Apply
                    </button>
                  </div>

                  {/* div to contain points section */}
                  <div className={cartCSS.part2}>
                    <section className={cartCSS.align}>
                      <p className={cartCSS.paraleft}> Points Available: </p>
                      <p className={cartCSS.pararight}> user.points </p>
                    </section>

                    <section className={cartCSS.align}>
                      <TextField
                        placeholder="00"
                        name="delivery.points"
                        type="number"
                        className={cartCSS.field1}
                      />
                      <p className={cartCSS.paraspecial}> user.points </p>
                    </section>
                    <button type="submit" className={cartCSS.button3}>
                      Redeem
                    </button>
                  </div>

                  {/* div to contain total cost section and navigating buttons */}
                  <div className={cartCSS.part3}>
                    <section className={cartCSS.align}>
                      <p className={cartCSS.paraleft}> Total Cost: </p>
                      <p className={cartCSS.pararight}> delivery.totalcost </p>
                    </section>
                    <Link to="/comparison">
                      <button type="submit" className={cartCSS.button4}>
                        Go back
                      </button>
                    </Link>
                    <Link to="/paymentmethod">
                      <button type="submit" className={cartCSS.button5}>
                        Proceed to Pay
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

// exports the HTML code to be called on App.js
export default CartPage;
