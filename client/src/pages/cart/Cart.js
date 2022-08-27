import cartCSS from "./Cart.module.css";

import pizzaImg from "../../images/burger.jpg";

function CartPage() {
    return (
        <div className={cartCSS.Green}>
            <div className={cartCSS.Yellow}>

                <div>
                    <h2 className={cartCSS.headertext}>Restaurant Name</h2>
                    <div className={cartCSS.Order}>
                        <img src={pizzaImg} className={cartCSS.orderImg} alt="pizza"/>
                        <h4 className={cartCSS.ordertext}>Item Name: </h4>

                    </div>
                    <div className={cartCSS.picture}>

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

export default CartPage;
