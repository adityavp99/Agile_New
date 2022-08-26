import foodHolderCSS from "./Foodholder.module.css";

import { useState} from "react";

const FoodHolder = ({food}) => {
    const [quantity, setCount] = useState(0);
    function subtract() {
        if(quantity > 0)
        setCount(oldCount => oldCount - 1)
    }
    function addition() {
        if(quantity < 10)
        setCount(oldCount => oldCount + 1)
    }
return  <div className={foodHolderCSS.group}>
            <div className={foodHolderCSS.foodpic}>
                <img src={food.image} alt="Pizzahut Logo"/>
            </div>
            
            <div className={foodHolderCSS.content}>
                <div className={foodHolderCSS.topline}>
                    <p className={foodHolderCSS.label1}>{food.name_}</p>

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


export default FoodHolder;