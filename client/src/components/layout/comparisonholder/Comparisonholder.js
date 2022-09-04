// ComparisonHolder JS/HTML code


import { useState} from "react";

// importing Fooditemholder styling for Comparisonholder from CSS Stylesheet file
import Fooditemholder from "../fooditemholder/Fooditemholder.js"
// importing CSS styling for Comparisonholder from CSS Stylesheet file
import comparisonHolderCSS from "./Comparisonholder.module.css"

// importing pizzahut restaurant, food and delivery partner images from images folder
import pizzahutImg from "../../../images/pizzahut.jpg";
import hawaiianImg from "../../../images/hawaiian.jpg";
import pepperoniImg from "../../../images/pepperoni.jpg";
import grabImg from "../../../images/grab.jpg";
import foodpandaImg from "../../../images/foodpanda.jpg";
import lalamoveImg from "../../../images/lalamove.jpg";

// ComparisonHolder function containing HTML code, parses restaurant, food, delivery objects
const ComparisonHolder = ({restaurant}) => {
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

    //div container for the comparisonholder
    return <div className={comparisonHolderCSS.group}> 
                    <img src={pizzahutImg} className={comparisonHolderCSS.pic1} alt="Pizzahut Logo" />
                    <h4>restaurant.name_</h4>
                    
                    <div className={comparisonHolderCSS.portion}>
                        <Fooditemholder />
                        <Fooditemholder />
                        <Fooditemholder />
                        <Fooditemholder />
                        <Fooditemholder />
                    </div>

                    <br />
                    {/* section to select delivery timing */}
                    <select className={comparisonHolderCSS.dropdown} name="cards">
                        <option value="Deliver Now">Deliver Now</option>
                        <option value="Delivery Timing">delivery.timing</option>
                    </select>   
                    
                    <br />
                    <form>
                        {/* table to display delivery details*/}
                        <table className={comparisonHolderCSS.deliverytable}>
                            <tr>
                                <th><img src={grabImg} className={comparisonHolderCSS.deliverypic} alt="Grab Logo" /></th>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.timing</td>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.totalcost</td>
                                <td className={comparisonHolderCSS.deliverychoice}><input type="radio" name= "selection"></input></td>
                            </tr>
                            
                            <tr>
                                <th><img src={foodpandaImg} className={comparisonHolderCSS.deliverypic} alt="Foodpanda Logo" /></th>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.timing</td>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.totalcost</td>
                                <td className={comparisonHolderCSS.deliverychoice}><input type="radio" name= "selection"></input></td>
                            </tr>
                            <tr>
                                <th><img src={lalamoveImg} className={comparisonHolderCSS.deliverypic} alt="Lalamove Logo" /></th>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.timing</td>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.totalcost</td>
                                <td className={comparisonHolderCSS.deliverychoice}><input type="radio" name="selection"></input></td>
                            </tr>
                        </table>
                    </form>
                    
            </div>
    
 }

// exports the HTML code to be called on App.js
export default ComparisonHolder;