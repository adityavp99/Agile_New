
import { useState} from "react";


// importing CSS styling for Comparisonholder from CSS Stylesheet file
import foodItemHolderCSS from "./Fooditemholder.module.css"

import pizzahutImg from "../../../images/pizzahut.jpg";
import hawaiianImg from "../../../images/hawaiian.jpg";
import pepperoniImg from "../../../images/pepperoni.jpg";
import grabImg from "../../../images/grab.jpg";
import foodpandaImg from "../../../images/foodpanda.jpg";
import lalamoveImg from "../../../images/lalamove.jpg";

// FoodItemHolder function containing HTML code, parses restaurant, food, delivery objects
const FoodItemHolder = ({restaurant}) => {
    // Code to control the minimum and maximum quantity of food item that can be ordered
    const [quantity, setCount] = useState(0);
    function subtract() {
        if(quantity > 0)
        setCount(oldCount => oldCount - 1)
    }
    function addition() {
        if(quantity < 10)
        setCount(oldCount => oldCount + 1)
    }
//div container for the FoodItemHolder
return <div className={foodItemHolderCSS.foodItem}> 

           
            <img src={hawaiianImg} className={foodItemHolderCSS.pic} alt="Food Image" />
            <p className={foodItemHolderCSS.label1}>food.name</p>
            {/* sub div to hold the quantity and buttons */}
            <div className={foodItemHolderCSS.quantity}>
                <button onClick={subtract} className={foodItemHolderCSS.button1}>-</button>
                <p className={quantity > 0 ? "positive" : quantity < 0 ? "negative" : null }>
                {quantity}
                </p>
                <button onClick={addition} className={foodItemHolderCSS.button2}>+</button>
            </div>
        </div>
}
    
// exports the HTML code to be called on App.js
export default FoodItemHolder;