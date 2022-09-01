// Pizzahutpage JS/HTML code

// importing CSS styling for home page from CSS Stylesheet file
import pizzahutCSS from "./Pizzahut.module.css";
// importing RestaurantHeading from components folder
// Each RestaurantHeading contains the details of 1 restaurant
import RestaurantHeading from "../../components/layout/restaurantheading/Restaurantheading";
// importing FoodHolder from components folder
// Each FoodHolder contains 1 food item from that restaurant
import FoodHolder from "../../components/layout/foodholder/Foodholder";

// importing restaurant and food images from the images folder
import pizzahutImg from "../../images/pizzahut.jpg";
import veggieloversImg from "../../images/veggielovers.jpg";
import pepperoniImg from "../../images/pepperoni.jpg";
import hawaiianImg from "../../images/hawaiian.jpg";

import currychickenImg from "../../images/currychicken.jpg";
import garlicbreadImg from "../../images/garlicbread.jpg";
import lasagnaImg from "../../images/lasagna.jpg";

//dummy data (temporary)
const pizzahut = {
  name_: "PizzaHut",
  rating: "4.0",
  category: "Western",
  distance: "3km",
  openinghours: "8am - 10pm",
  status: "Open",
  image: pizzahutImg,
};
// const macdonalds = {name_:"Macdonald's", rating:"3.0", distance: "2km", image: macdonaldsImg };
// const pastamania = {name_:"Pastamania", rating:"3.0", distance: "11km", image: pastamaniaImg };

// const balithai = {name_:"Bali Thai", rating:"4.5", distance: "13km", image: balithaiImg };
// const subway = {name_:"Subway", rating:"3.0", distance: "5km", image: subwayImg };
// const sushiexpress = {name_:"Sushi Express", rating:"4.0", distance: "25km", image: sushiexpressImg };

// const breadtalk = {name_:"Breadtalk", rating:"3.5", distance: "24km", image: breadtalkImg};
// const liho = {name_:"Liho", rating:"3.0", distance: "24km", image: lihoImg };
// const wokhey = {name_:"Wok Hey", rating:"4.0", distance: "25km", image: wokheyImg };

//dummy data (temporary)
const veggielovers = {
  name_: "Veggie Lovers",
  cost: "$10.80",
  quantity: "0",
  image: veggieloversImg,
};
const pepperoni = {
  name_: "Pepperoni",
  cost: "$17.30",
  quantity: "0",
  image: pepperoniImg,
};
const hawaiian = {
  name_: "Hawaiian",
  cost: "$16.70",
  quantity: "0",
  image: hawaiianImg,
};

const currychicken = {
  name_: "Curry Chicken",
  cost: "$17.30",
  quantity: "0",
  image: currychickenImg,
};
const garlicbread = {
  name_: "Garlic bread",
  cost: "$5.40",
  quantity: "0",
  image: garlicbreadImg,
};
const lasagna = {
  name_: "Lasagna",
  cost: "$9.60",
  quantity: "0",
  image: lasagnaImg,
};

// Pizzahutpage function containing HTML code
function PizzahutPage() {
  return (
    //div container for the Pizzahut page
    <div className={pizzahutCSS.pizzahut}>
      {/* sub div container for the restaurant display */}
      <div className={pizzahutCSS.head}>
        <RestaurantHeading restaurant={pizzahut} />
      </div>

      {/* sub div container for the food items from the restaurant */}
      <div className={pizzahutCSS.foods}>
        {/* Component that displays 1 food item: 1 food item will mean 1 foodholder */}
        <FoodHolder food={veggielovers} className={pizzahutCSS.indi} />
        {/* Component that displays 1 food item: 1 food item will mean 1 foodholder */}
        <FoodHolder food={pepperoni} className={pizzahutCSS.indi} />
        {/* Component that displays 1 food item: 1 food item will mean 1 foodholder */}
        <FoodHolder food={hawaiian} className={pizzahutCSS.indi} />
        {/* Component that displays 1 food item: 1 food item will mean 1 foodholder */}
        <FoodHolder food={currychicken} className={pizzahutCSS.indi} />
        {/* Component that displays 1 food item: 1 food item will mean 1 foodholder */}
        <FoodHolder food={garlicbread} className={pizzahutCSS.indi} />
        {/* Component that displays 1 food item: 1 food item will mean 1 foodholder */}
        <FoodHolder food={lasagna} className={pizzahutCSS.indi} />
      </div>

      {/* Link to Comparison page after confirming food items to order */}
      <a href="/comparison">
        <button type="submit" className={pizzahutCSS.submit}>
          Continue
        </button>
      </a>
    </div>
  );
}

// exports the HTML code to be called on App.js
export default PizzahutPage;
