// Cartholder JS/HTML code

// importing CSS styling for Cartholder from CSS Stylesheet file
import cartHolderCSS from "./Cartholder.module.css"

// importing pizzahut restaurant image from images folder
import pizzahutImg from "../../../images/pizzahut.jpg";

// CartHolder function containing HTML code, parses restaurant, food, delivery objects
const CartHolder = ({restaurant}) => {
        //div container for the cartholder
return <div className={cartHolderCSS.orderhold}> 

                {/* div container to hold the restaurant image */}
                <div className={cartHolderCSS.left}>
                        <img src={pizzahutImg} className={cartHolderCSS.photo} alt="Restaurant Logo" />
                </div>

                {/* div container to hold the delivery details */}
                <div className={cartHolderCSS.right}>

                        {/* section containing some details */}
                        <section className={cartHolderCSS.words}>
                        <p className={cartHolderCSS.word1}>restaurant.name_</p>
                        <p className={cartHolderCSS.word2}>delivery.date</p>
                        </section>

                        {/* table holding the food details */}
                        <table className={cartHolderCSS.table1}>
                                <tr>
                                        <th className={cartHolderCSS.toptablecontent}>Food.name</th>
                                        <td className={cartHolderCSS.toptablecontent}>Food.quantify</td>
                                        <td className={cartHolderCSS.toptablecontent}>Food.cost</td>
                                </tr>
                                <tr>
                                        <th className={cartHolderCSS.toptablecontent}>Food.name</th>
                                        <td className={cartHolderCSS.toptablecontent}>Food.quantify</td>
                                        <td className={cartHolderCSS.toptablecontent}>Food.cost</td>
                                </tr>
                        </table>

                        {/* table holding the delivery details */}
                        <table className={cartHolderCSS.table2}>
                                <tr>
                                        <th>Delivered By:</th>
                                        <td className={cartHolderCSS.data}>delivery.partner</td>
                                </tr>
                                <tr>
                                        <th>Time:</th>
                                        <td className={cartHolderCSS.data}>delivery.timing</td>
                                </tr>
                                <tr>
                                        <th>Total Cost:</th>
                                        <th className={cartHolderCSS.data}>delivery.totalcost</th>
                                </tr>
                        </table>
                </div>
        </div>

}

// exports the HTML code to be called on App.js
export default CartHolder;