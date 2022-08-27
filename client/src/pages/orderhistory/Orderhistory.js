import OrderHolder from "../../components/layout/orderholder/Orderholder";
import OrderCSS from "./Orderhistory.module.css";



function OrderhistoryPage(){
    return <div className={OrderCSS.orderhistory}>
                <h3> Order History </h3>
                <OrderHolder />
                <OrderHolder />
            </div>;

}

export default OrderhistoryPage;