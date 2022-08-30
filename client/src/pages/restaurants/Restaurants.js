
import RestaurantHolder from "../../components/layout/restaurantholder/Restaurantholder";
import restaurantCSS from "./Restaurants.module.css";

import SearchSection from "../../components/layout/searchbar/Searchbar";

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


function RestaurantsPage(){
    return <div className={restaurantCSS.restaurants}> 
                <SearchSection />
                <h3> Restaurants </h3>
                <div className={restaurantCSS.sub1}>
                    <RestaurantHolder restaurant={pizzahut} className={restaurantCSS.individuals}/>
                    <RestaurantHolder restaurant={macdonalds} className={restaurantCSS.individuals} /> 
                    <RestaurantHolder restaurant={pastamania} className={restaurantCSS.individuals} /> 
                </div>
                <div className={restaurantCSS.sub2}>
                    <RestaurantHolder restaurant={balithai} className={restaurantCSS.individuals} /> 
                    <RestaurantHolder restaurant={subway} className={restaurantCSS.individuals} /> 
                    <RestaurantHolder restaurant={sushiexpress} className={restaurantCSS.individuals} />  
                </div>
                <div className={restaurantCSS.sub3}>
                    <RestaurantHolder restaurant={breadtalk} className={restaurantCSS.individuals} /> 
                    <RestaurantHolder restaurant={liho} className={restaurantCSS.individuals} /> 
                    <RestaurantHolder restaurant={wokhey} className={restaurantCSS.individuals} /> 
                </div>
            </div>;

}

export default RestaurantsPage;