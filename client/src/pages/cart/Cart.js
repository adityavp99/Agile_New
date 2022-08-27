import { useState } from "react";

import cartCSS from "./Cart.module.css";

import burger from "../../images/burger.jpg";

function CartPage() {
    return (
        <div className={cartCSS.Green}>
            <div className={cartCSS.Yellow}>

                <div className={cartCSS.ordertop}>
                    <h2 className={cartCSS.headertext}>Restaurant Name</h2>
                    <div className={cartCSS.Order}>
                        <img src={burger} className={cartCSS.orderImg} alt="burger"/>
                        <h4 className={cartCSS.ordertext}>Item Name: </h4>
                        <MyForm />
                    </div>
                    <div className={cartCSS.picture}>
                        <img src={burger} className={cartCSS.pictureImg} alt="burger"/>
                    </div>
                </div>

                {/*Delivery Timing*/}
                <div className={cartCSS.deliverytiming}>

                </div>

                {/*Options*/}
                <div>

                </div>
                
            </div>
        </div>
    );
}

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

    return(
        <form onSubmit={handleSubmit} className={cartCSS.form}>
            <label>Amount:
            <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
                className={cartCSS.inputbar}
                />
            </label>
            <input type="submit" className={cartCSS.button}/>
        </form>
    )
}

export default CartPage;
