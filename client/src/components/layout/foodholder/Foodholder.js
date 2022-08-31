// FoodHolder JS/HTML code

//importing dependencies and files
import { useState} from "react";

// importing CSS styling for FoodHolder page from CSS Stylesheet file
import foodHolderCSS from "./Foodholder.module.css";

// FoodHolder function containing HTML code, parses food object
const FoodHolder = ({food}) => {
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

    //div container for the foodholder
return  <div className={foodHolderCSS.group}>

            {/* div container to hold the food image */}
            <div className={foodHolderCSS.foodpic}>
                <img src={food.image} alt="Foodimage"/>
            </div>
            
            {/* div container to hold the foods' details */}
            <div className={foodHolderCSS.content}>
                {/* sub div container to align the food and quantity */}
                <div className={foodHolderCSS.topline}>
                    <p className={foodHolderCSS.label1}>{food.name_}</p>

                    {/* div container to hold the quantity and buttons */}
                    <div className={foodHolderCSS.counter}>
                        <button onClick={subtract} className={foodHolderCSS.button1}>-</button>
                        <p className={quantity > 0 ? "positive" : quantity < 0 ? "negative" : null }>
                        {quantity}
                        </p>
                        <button onClick={addition} className={foodHolderCSS.button2}>+</button>
                    </div>
                </div>
                <p className={foodHolderCSS.label2}>{food.cost}</p>
                <button className={foodHolderCSS.button3}> Add to Cart</button>
            </div>
        </div>
}

// exports the HTML code to be called on App.js
export default FoodHolder;