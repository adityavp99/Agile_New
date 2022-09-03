// Homepage JS/HTML code

import { Link } from 'react-router-dom';
// importing CSS styling for home page from CSS Stylesheet file
import homeCSS from "./Home.module.css";

// importing Searchbar from components folder
import SearchSection from "../../components/layout/searchbar/Searchbar";

// importing segment1 images from the images folder
import exploreImg from "../../images/explore.jpg";
import categoriesImg from "../../images/categories.jpg";

// importing segment2 images from the images folder
import bubbleteaImg from "../../images/bubbletea.jpg";
import pastaImg from "../../images/pasta.jpg";
import burgerImg from "../../images/burger.jpg"; //replace with burger image
import pizzaImg from "../../images/pizza.jpg";
import saladsImg from "../../images/salads.jpg";

// importing segment3 images from the images folder
import nasilemakImg from "../../images/nasilemak.jpg";
import idlyImg from "../../images/idly.jpg";
import chillicrabImg from "../../images/chillicrab.jpg";
import chickenriceImg from "../../images/chickenrice.jpg";
import viewmoreImg from "../../images/viewmore.jpg";


// Homepage function containing HTML code
function HomePage() {
  return (
    //div container for the home page
    <div className={homeCSS.home}>

      {/* Calling the searchbar component in the HTML */}
      <SearchSection />

      {/* div container segment1 : Contains the explore and categories images, lightgreen background portion*/}
      <div className={homeCSS.segment1}>

        <p className={homeCSS.label1}>Explore More</p>
        <img src={exploreImg} className={homeCSS.image1} alt="Explore" />

        <p className={homeCSS.label2}>Categories</p>
        {/* Link to categories page */}
        <a href="categories">
          <img src={categoriesImg} className={homeCSS.image2} alt="Categories"/>
        </a>

      </div>

      {/* div container segment2 : Contains the Trending Now, white background portion */}
      <div className={homeCSS.segment2}>
        <h3> Trending Now </h3>
        
        {/* sub div container to hold images and labels */}
        <div className={homeCSS.sub2}>
          <p className={homeCSS.label3}>Koi</p>
          <img src={bubbleteaImg} className={homeCSS.image3} alt="Bubble Tea" />

          <p className={homeCSS.label4}>Pasta</p>
          <img src={pastaImg} className={homeCSS.image4} alt="Pasta" />

          <p className={homeCSS.label5}>Burger</p>
          <img src={burgerImg} className={homeCSS.image5} alt="Burger" />

          <section className={homeCSS.pizzaholder}>
            <Link to='/pizzahut'>
              <p className={homeCSS.label6}>Pizza</p>
              <img src={pizzaImg} className={homeCSS.image6} alt="Pizza" />
            </Link>
          </section>

          <p className={homeCSS.label7}>Salads</p>
          <img src={saladsImg} className={homeCSS.image7} alt="Salads" />
        </div>
      </div>

      {/* div container segment3 : Growing Local Flavours, dark green background portion */}
      <div className={homeCSS.segment3}>
        <h3> Growing Local Flavours</h3>

        {/* sub div container to hold images and labels */}
        <div className={homeCSS.sub3}>
          <p className={homeCSS.label8}>Nasi Lemak</p>
          <img src={nasilemakImg} className={homeCSS.image8} alt="Nasi Lemak" />

          <p className={homeCSS.label9}>Idly</p>
          <img src={idlyImg} className={homeCSS.image9} alt="Idly" />

          <p className={homeCSS.label10}>Chilli Crab</p>
          <img
            src={chillicrabImg}
            className={homeCSS.image10}
            alt="Chilli Crab"
          />

          <p className={homeCSS.label11}>Chicken Rice</p>
          <img
            src={chickenriceImg}
            className={homeCSS.image11}
            alt="Chicken Rice"
          />

          <p className={homeCSS.label12}>View More</p>
          <img src={viewmoreImg} className={homeCSS.image12} alt="View More" />
        </div>
      </div>
    </div>
  );
}

// exports the HTML code to be called on App.js
export default HomePage;
