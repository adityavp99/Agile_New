// RestaurantHolder JS/HTML code

// importing CSS styling for RestaurantHolder from CSS Stylesheet file
import restaurantHolderCSS from "./Restaurantholder.module.css";

//importing FontAwesome Icons for the restaurant rating
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// RestaurantHolder function containing HTML code, parses restaurant object
const RestaurantHolder = ({restaurant}) => {
        //div container for the RestaurantHolder
return <div className={restaurantHolderCSS.holder}> 
                <a href={restaurant.name_} className={restaurantHolderCSS.atag}>
                <img src={restaurant.image} className={restaurantHolderCSS.image} alt="Explore" />
                        <p className={restaurantHolderCSS.label2}>
                                {restaurant.rating} 
                                <FontAwesomeIcon icon={faStar} className={restaurantHolderCSS.star}/>
                        </p>
                        <p className={restaurantHolderCSS.label1}>{restaurant.name_}</p>   
                        
                        <p className={restaurantHolderCSS.label3}>{restaurant.distance} away</p>
                </a> 
        </div>
}

// exports the HTML code to be called on App.js
export default RestaurantHolder;