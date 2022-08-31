// Orderhistorypage JS/HTML code

// importing CSS styling for home page from CSS Stylesheet file
import OrderCSS from "./Orderhistory.module.css";
// importing OrderHolder from components folder
// Each OrderHolder contains order details for items from 1 order
import OrderHolder from "../../components/layout/orderholder/Orderholder";

// Orderhistorypage function containing HTML code
function OrderhistoryPage(){
    //div container for the Orderhistory page
    return <div className={OrderCSS.orderhistory}>
                <h3> Order History </h3>
                {/* Component that holds order details: 1 Order will mean 1 OrderHolder */}
                <OrderHolder />
                {/* Component that holds order details: 1 Order will mean 1 OrderHolder */}
                <OrderHolder />
            </div>;

}

// exports the HTML code to be called on App.js
export default OrderhistoryPage;