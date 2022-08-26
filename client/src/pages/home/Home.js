
import homeCSS from "./Home.module.css";

import exploreImg from "../../images/explore.jpg";
import categoriesImg from "../../images/categories.jpg";

import bubbleteaImg from "../../images/bubbletea.jpg";
import pastaImg from "../../images/pasta.jpg";
import burgerImg from "../../images/burger.jpg"; //replace with burger image
import pizzaImg from "../../images/pizza.jpg";
import saladsImg from "../../images/salads.jpg";

import nasilemakImg from "../../images/nasilemak.jpg";
import idlyImg from "../../images/idly.jpg";
import chillicrabImg from "../../images/chillicrab.jpg";
import chickenriceImg from "../../images/chickenrice.jpg";
import viewmoreImg from "../../images/viewmore.jpg";

function HomePage(){
return <div className={homeCSS.home}> 
            <div className={homeCSS.segment1}> 
                <p className={homeCSS.label1}>Explore More</p>
                <img src={exploreImg} className={homeCSS.image1} alt="Explore" />
                <p className={homeCSS.label2}>Categories</p>
                <a href="categories">
                    <img src={categoriesImg} className={homeCSS.image2} alt="Categories" />
                </a>
                
            </div>

            <div className={homeCSS.segment2}>
                <h3> Trending Now </h3>
                <div className={homeCSS.sub2}>
                    <p className={homeCSS.label3}>Koi</p>
                    <img src={bubbleteaImg} className={homeCSS.image3} alt="Bubble Tea" />
                    
                    <p className={homeCSS.label4}>Pasta</p>
                    <img src={pastaImg} className={homeCSS.image4} alt="Pasta" />
                    
                    <p className={homeCSS.label5}>Burger</p>
                    <img src={burgerImg} className={homeCSS.image5} alt="Burger" />
                    
                    <p className={homeCSS.label6}>Pizza</p>
                    <img src={pizzaImg} className={homeCSS.image6} alt="Pizza" />

                    <p className={homeCSS.label7}>Salads</p> 
                    <img src={saladsImg} className={homeCSS.image7} alt="Salads" />
                </div>
            </div>

            <div className={homeCSS.segment3}>
                <h3> Growing Local Flavours</h3>
                <div className={homeCSS.sub3}>
                    <p className={homeCSS.label8}>Nasi Lemak</p>
                    <img src={nasilemakImg} className={homeCSS.image8} alt="Nasi Lemak" />
                    
                    <p className={homeCSS.label9}>Idly</p>
                    <img src={idlyImg} className={homeCSS.image9} alt="Idly" />
                    
                    <p className={homeCSS.label10}>Chilli Crab</p>
                    <img src={chillicrabImg} className={homeCSS.image10} alt="Chilli Crab" />
                    
                    <p className={homeCSS.label11}>Chicken Rice</p>
                    <img src={chickenriceImg} className={homeCSS.image11} alt="Chicken Rice" />
                    
                    <p className={homeCSS.label12}>View More</p>
                    <img src={viewmoreImg} className={homeCSS.image12} alt="View More" />
                </div>
            </div>      
    </div>

}

export default HomePage;