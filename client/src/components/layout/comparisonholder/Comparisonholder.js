import comparisonHolderCSS from "./Comparisonholder.module.css"

import pizzahutImg from "../../../images/pizzahut.jpg";
import hawaiianImg from "../../../images/hawaiian.jpg";
import pepperoniImg from "../../../images/pepperoni.jpg";
import grabImg from "../../../images/grab.jpg";
import foodpandaImg from "../../../images/foodpanda.jpg";
import lalamoveImg from "../../../images/lalamove.jpg";

const ComparisonHolder = ({restaurant}) => {
    return <div className={comparisonHolderCSS.group}> 
                    <img src={pizzahutImg} className={comparisonHolderCSS.pic1} alt="Pizzahut Logo" />
                    <h4>restaurant.name_</h4>
                    
                    <div className={comparisonHolderCSS.portion}>
                    <img src={hawaiianImg} className={comparisonHolderCSS.pic2} alt="Hawaiian Pizza" />
                    <p className={comparisonHolderCSS.label1}>food.name</p>
                    <input type="number" className={comparisonHolderCSS.quantity1} name="cards">
                      
                    </input> 
                    </div>

                    <div className={comparisonHolderCSS.portion}>
                    <img src={pepperoniImg} className={comparisonHolderCSS.pic3} alt="Pepperoni Pizza" />
                    <p className={comparisonHolderCSS.label1}>food.name</p>
                    <input type="number" className={comparisonHolderCSS.quantity2} name="cards">
                    </input> 
                    </div>

                    <br />
                    <select className={comparisonHolderCSS.dropdown} name="cards">
                        <option value="Deliver Now">Deliver Now</option>
                        <option value="Delivery Timing">delivery.timing</option>
                    </select>   
                    
                    <br />
                    <form>
                        <table className={comparisonHolderCSS.deliverytable}>
                            <tr>
                                <th><img src={grabImg} className={comparisonHolderCSS.deliverypic} alt="Grab Logo" /></th>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.partner</td>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.timing</td>
                                <td className={comparisonHolderCSS.deliverychoice}><input type="radio" name= "selection"></input></td>
                            </tr>
                            
                            <tr>
                                <th><img src={foodpandaImg} className={comparisonHolderCSS.deliverypic} alt="Foodpanda Logo" /></th>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.partner</td>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.timing</td>
                                <td className={comparisonHolderCSS.deliverychoice}><input type="radio" name= "selection"></input></td>
                            </tr>
                            <tr>
                                <th><img src={lalamoveImg} className={comparisonHolderCSS.deliverypic} alt="Lalamove Logo" /></th>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.partner</td>
                                <td className={comparisonHolderCSS.deliverycontent}>delivery.timing</td>
                                <td className={comparisonHolderCSS.deliverychoice}><input type="radio" name="selection"></input></td>
                            </tr>
                        </table>
                    </form>
                    
            </div>
    
 }


export default ComparisonHolder;