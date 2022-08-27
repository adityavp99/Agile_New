import restaurantDisplayCSS from "./Restaurantheading.module.css";
import pizzahutImg from "../../../images/pizzahut.jpg";

const RestaurantHeading = ({restaurant}) => {
return <div className={restaurantDisplayCSS.displayholder}> 
                <img src={pizzahutImg} className={restaurantDisplayCSS.image} alt="Pizzahut Logo" />
                <p className={restaurantDisplayCSS.text2}>{restaurant.rating}</p>
                <p className={restaurantDisplayCSS.text1}>{restaurant.name_}</p> 
                
                <p className={restaurantDisplayCSS.text4}>{restaurant.distance} away</p>
                <p className={restaurantDisplayCSS.text3}>{restaurant.category}</p>   
                <p className={restaurantDisplayCSS.text6}>{restaurant.status}</p>
                <p className={restaurantDisplayCSS.text5}>{restaurant.openinghours}</p>
        </div>

}


export default RestaurantHeading;