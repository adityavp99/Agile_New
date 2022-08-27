import SearchbarCSS from "./SearchSection.module.css";

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
                    placeholder="Search for Food"
                    name="s"
                    className={SearchbarCSS.inputbar} />
                <button type="submit" className={SearchbarCSS.button}>Search</button>
            </form>
        </div>
        
    )
}

export default Searchbar;