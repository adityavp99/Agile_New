import restaurantDisplayCSS from "./Restaurantheading.module.css";
import pizzahutImg from "../../../images/pizzahut.jpg";

const RestaurantHeading = ({restaurant}) => {
return <div className={restaurantDisplayCSS.holder}> 
                <img src={pizzahutImg} className={restaurantDisplayCSS.image} alt="Pizzahut Logo" />
                <p className={restaurantDisplayCSS.label2}>{restaurant.rating}</p>
                <h4 className={restaurantDisplayCSS.label1}>{restaurant.name_}</h4>   
                <p className={restaurantDisplayCSS.label4}>{restaurant.distance} away</p>
                <p className={restaurantDisplayCSS.label3}>{restaurant.category}</p>   
                <p className={restaurantDisplayCSS.label6}>{restaurant.status}</p>
                <p className={restaurantDisplayCSS.label5}>{restaurant.openinghours}</p>
        </div>

}


export default RestaurantHeading;