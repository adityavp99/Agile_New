import SearchbarCSS from "./SearchSection.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
    return (
        <div className={SearchbarCSS.container}>
            <form action="/" method="get" className={SearchbarCSS.form}>
                <label htmlFor="header-search">
                    <span className={SearchbarCSS.visuallyHidden}>Search for Food</span>
                </label>
                <input 
                    type="text"
                    id="header-search"
                    placeholder="What would you like to order?..."
                    name="s"
                    className={SearchbarCSS.inputbar} />
                <button type="submit" className={SearchbarCSS.button}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className={SearchbarCSS.searchIcon}/>
                </button>
            </form>
        </div>
        
    )
}

export default Searchbar;