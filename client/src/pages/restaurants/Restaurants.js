// Restaurantspage JS/HTML code

// importing CSS styling for home page from CSS Stylesheet file
import restaurantCSS from "./Restaurants.module.css";

// importing RestaurantHolder from components folder4
// RestaurantHolder displays each restaurant and its details 
import RestaurantHolder from "../../components/layout/restaurantholder/Restaurantholder";

// importing Searchbar from components folder
import SearchSection from "../../components/layout/searchbar/Searchbar";

// importing various restaurant images from the images folder
import pizzahutImg from "../../images/pizzahut.jpg";
import macdonaldsImg from "../../images/macdonalds.jpg";
import pastamaniaImg from "../../images/pastamania.jpg";

import balithaiImg from "../../images/balithai.jpg";
import subwayImg from "../../images/subway.jpg";
import sushiexpressImg from "../../images/sushiexpress.jpg";

import breadtalkImg from "../../images/breadtalk.jpg";
import lihoImg from "../../images/liho.jpg";
import wokheyImg from "../../images/wokhey.jpg";

//dummy data (temporary)
const pizzahut = {name_:"PizzaHut", rating:"4.0", distance: "3km", image: pizzahutImg }; 
const macdonalds = {name_:"Mcdonald's", rating:"3.0", distance: "2km", image: macdonaldsImg };
const pastamania = {name_:"Pastamania", rating:"3.0", distance: "11km", image: pastamaniaImg };

const balithai = {name_:"Bali Thai", rating:"4.5", distance: "13km", image: balithaiImg }; 
const subway = {name_:"Subway", rating:"3.0", distance: "5km", image: subwayImg };
const sushiexpress = {name_:"Sushi Express", rating:"4.0", distance: "25km", image: sushiexpressImg };

const breadtalk = {name_:"Breadtalk", rating:"3.5", distance: "24km", image: breadtalkImg};
const liho = {name_:"Liho", rating:"3.0", distance: "24km", image: lihoImg };
const wokhey = {name_:"Wok Hey", rating:"4.0", distance: "25km", image: wokheyImg };

// Restaurantspage function containing HTML code
function RestaurantsPage(){
    //div container for the restaurants page
    return <div className={restaurantCSS.restaurants}> 

                {/* Calling the searchbar component in the HTML */}
                <SearchSection />
                <h3> Restaurants </h3>

                {/* div container sub1: to hold resturants in groups of 3 */}
                <div className={restaurantCSS.sub1}>
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={pizzahut} className={restaurantCSS.individuals}/>
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={macdonalds} className={restaurantCSS.individuals} /> 
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={pastamania} className={restaurantCSS.individuals} /> 
                </div>

                {/* div container sub2: to hold resturants in groups of 3 */}
                <div className={restaurantCSS.sub2}>
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={balithai} className={restaurantCSS.individuals} /> 
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={subway} className={restaurantCSS.individuals} /> 
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={sushiexpress} className={restaurantCSS.individuals} />  
                </div>

                {/* div container sub3: to hold resturants in groups of 3 */}
                <div className={restaurantCSS.sub3}>
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={breadtalk} className={restaurantCSS.individuals} /> 
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={liho} className={restaurantCSS.individuals} /> 
                    {/* Component that displays restaurant details: 1 RestaurantHolder will display 1 restaurant */}
                    <RestaurantHolder restaurant={wokhey} className={restaurantCSS.individuals} /> 
                </div>
            </div>;

}

// exports the HTML code to be called on App.js
export default RestaurantsPage;