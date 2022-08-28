
import cartHolderCSS from "./Cartholder.module.css"

import pizzahutImg from "../../../images/pizzahut.jpg";

const CartHolder = ({restaurant}) => {
return <div className={cartHolderCSS.orderhold}> 
                <div className={cartHolderCSS.left}>
                        <img src={pizzahutImg} className={cartHolderCSS.photo} alt="Pizzahut Logo" />
                </div>

                <div className={cartHolderCSS.right}>
                        <section className={cartHolderCSS.words}>
                        <p className={cartHolderCSS.word1}>restaurant.name_</p>
                        <p className={cartHolderCSS.word2}>delivery.date</p>
                        </section>
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


export default CartHolder;