import orderholderCSS from "./Orderholder.module.css";
import pizzahutImg from "../../../images/pizzahut.jpg";

const OrderHolder = ({restaurant}) => {
return <div className={orderholderCSS.orderhold}> 
                <div className={orderholderCSS.left}>
                        <img src={pizzahutImg} className={orderholderCSS.photo} alt="Pizzahut Logo" />
                </div>

                <div className={orderholderCSS.right}>
                        <section className={orderholderCSS.words}>
                        <p className={orderholderCSS.word1}>restaurant.name_</p>
                        <p className={orderholderCSS.word2}>delivery.date</p>
                        </section>
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


export default OrderHolder;