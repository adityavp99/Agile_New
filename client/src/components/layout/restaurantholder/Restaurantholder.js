import restaurantHolderCSS from "./Restaurantholder.module.css";

const RestaurantHolder = ({restaurant}) => {
return <div className={restaurantHolderCSS.holder}> 
            <img src={restaurant.image} className={restaurantHolderCSS.image} alt="Explore" />
                <p className={restaurantHolderCSS.label2}>{restaurant.rating}</p>
                <p className={restaurantHolderCSS.label1}>{restaurant.name_}</p>   
                   
                <p className={restaurantHolderCSS.label3}>{restaurant.distance} away</p>
        </div>

}


export default RestaurantHolder;