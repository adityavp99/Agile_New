// RestaurantHeading JS/HTML code

// importing CSS styling for RestaurantHeading from CSS Stylesheet file
import restaurantDisplayCSS from "./Restaurantheading.module.css";
//import pizzahut restaurant image from images folder
import pizzahutImg from "../../../images/pizzahut.jpg";

//importing FontAwesome Icons for the restaurant rating
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// RestaurantHeading function containing HTML code, parses restaurant object
const RestaurantHeading = ({restaurant}) => {
        //div container for the Restaurant Heading display
return <div className={restaurantDisplayCSS.displayholder}> 
                <img src={pizzahutImg} className={restaurantDisplayCSS.image} alt="Pizzahut Logo" />
                <p className={restaurantDisplayCSS.text2}>
                        {restaurant.rating}
                        <FontAwesomeIcon icon={faStar} className={restaurantDisplayCSS.star}/>
                </p>
                <p className={restaurantDisplayCSS.text1}>{restaurant.name_}</p> 
                
                <p className={restaurantDisplayCSS.text4}>{restaurant.distance} away</p>
                <p className={restaurantDisplayCSS.text3}>{restaurant.category}</p>   
                <p className={restaurantDisplayCSS.text6}>{restaurant.status}</p>
                <p className={restaurantDisplayCSS.text5}>{restaurant.openinghours}</p>
        </div>

}

// exports the HTML code to be called on App.js
export default RestaurantHeading;