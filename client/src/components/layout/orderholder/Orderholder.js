// OrderHolder JS/HTML code

// importing CSS styling for OrderHolder from CSS Stylesheet file
import orderholderCSS from "./Orderholder.module.css";
// importing pizzahut restaurant image from images folder
import pizzahutImg from "../../../images/pizzahut.jpg";

// OrderHolder function containing HTML code, parses restaurant, food, delivery objects
const OrderHolder = ({restaurant}) => {
        //div container for the orderholder
return <div className={orderholderCSS.orderhold}> 

                {/* div container to hold the restaurant image */}
                <div className={orderholderCSS.left}>
                        <img src={pizzahutImg} className={orderholderCSS.photo} alt="Pizzahut Logo" />
                </div>
                
                {/* div container to hold the delivery details */}
                <div className={orderholderCSS.right}>

                        {/* section containing some details */}
                        <section className={orderholderCSS.words}>
                        <p className={orderholderCSS.word1}>restaurant.name_</p>
                        <p className={orderholderCSS.word2}>delivery.date</p>
                        </section>

                        {/* table holding the food details */}
                        <table className={orderholderCSS.table1}>
                                <tr>
                                        <th className={orderholderCSS.toptablecontent}>Food.name</th>
                                        <td className={orderholderCSS.toptablecontent}>Food.quantify</td>
                                        <td className={orderholderCSS.toptablecontent}>Food.cost</td>
                                </tr>
                                <tr>
                                        <th className={orderholderCSS.toptablecontent}>Food.name</th>
                                        <td className={orderholderCSS.toptablecontent}>Food.quantify</td>
                                        <td className={orderholderCSS.toptablecontent}>Food.cost</td>
                                </tr>
                        </table>

                        {/* table holding the delivery details */}
                        <table className={orderholderCSS.table2}>
                                <tr>
                                        <th>Delivered To:</th>
                                        <td className={orderholderCSS.data}>delivery.address</td>
                                </tr>
                                <tr>
                                        <th>Delivered By:</th>
                                        <td className={orderholderCSS.data}>delivery.partner</td>
                                </tr>
                                <tr>
                                        <th>Time:</th>
                                        <td className={orderholderCSS.data}>delivery.timing</td>
                                </tr>
                                <tr>
                                        <th>Points Redeemed:</th>
                                        <td className={orderholderCSS.data}>delivery.pointsused</td>
                                </tr>
                                <tr>
                                        <th>Total Cost:</th>
                                        <td className={orderholderCSS.data}>delivery.totalcost</td>
                                </tr>
                                <tr>
                                        <th>Promo Code used:</th>
                                        <td className={orderholderCSS.data}>delivery.promocode</td>
                                </tr>
                                <tr>
                                        <th>Order Number:</th>
                                        <td className={orderholderCSS.data}>delivery.ordernumber</td>
                                </tr>
                        </table>
                </div>
        </div>

}

// exports the HTML code to be called on App.js
export default OrderHolder;