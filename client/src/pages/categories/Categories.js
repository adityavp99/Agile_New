// Categoriespage JS/HTML code

// importing CSS styling for home page from CSS Stylesheet file
import categoriesCSS from "./Categories.module.css";

// importing Searchbar from components folder
import SearchSection from "../../components/layout/searchbar/Searchbar";

// importing images from the images folder
import halalImg from "../../images/halal.jpg";
import indianImg from "../../images/indian.jpg";
import vegetarianImg from "../../images/vegetarian.jpg";
import japaneseImg from "../../images/japanese.jpg"; 

// Categoriespage function containing HTML code
function CategoriesPage(){

//div container for the Categories page
return <div className={categoriesCSS.categories}>

            {/* Calling the searchbar component in the HTML */}
            <SearchSection />
            <h3> Trending Now </h3>

            {/* sub div container to hold images and labels */}
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

// exports the HTML code to be called on App.js
export default CategoriesPage;