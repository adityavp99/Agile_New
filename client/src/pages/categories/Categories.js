import categoriesCSS from "./Categories.module.css";

import halalImg from "../../images/halal.jpg";
import indianImg from "../../images/indian.jpg";
import vegetarianImg from "../../images/vegetarian.jpg";
import japaneseImg from "../../images/japanese.jpg"; 


function CategoriesPage(){
return <div className={categoriesCSS.categories}>
            <h3> Trending Now </h3>
            <div className={categoriesCSS.subholder}>
                
                <p className={categoriesCSS.label1}>Halal</p>
                <img src={halalImg} className={categoriesCSS.image1} alt="Explore" />
                
                <p className={categoriesCSS.label2}>Indian</p>
                <img src={indianImg} className={categoriesCSS.image2} alt="Categories" />

                <p className={categoriesCSS.label3}>Vegetarian</p>
                <img src={vegetarianImg} className={categoriesCSS.image3} alt="Bubble Tea" />
                
                <p className={categoriesCSS.label4}>Japanese</p>
                <img src={japaneseImg} className={categoriesCSS.image4} alt="Pasta" />
            </div>    
        </div>
}

export default CategoriesPage;