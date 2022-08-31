import { Link } from "react-router-dom";

//Importing CSS for footer
import footerStyle from "./Footer.module.css";
//Importing logo image
import companylogo from "../../../images/takeoutlogo.jpg";

//Footer function containing JSX code
function Footer() {
  return (
    //footer wrapper
    <div id={footerStyle.footer}>
        {/* div to wrap contents in the footer */}
        <div id={footerStyle.content}>
            <p className={footerStyle.exploreTakeout}> Explore Takeout</p>
            {/* list containing individual items in the footer */}
            <ul className={footerStyle.ul}>
                {/* individual items in the list */}
                <li className={footerStyle.li1}>
                    <Link to="/" className={footerStyle.link}>
                        Home
                    </Link>
                </li>
                <li className={footerStyle.li2}>
                    <Link to="/categories" className={footerStyle.link}>
                        Categories
                    </Link>
                </li>
                <li className={footerStyle.li3}>
                    <Link to="/restaurants" className={footerStyle.link}>
                        Restaurants
                    </Link>
                </li>
            </ul>
            <ul className={footerStyle.ul}>
                <li className={footerStyle.li4}>
                <Link to="/signin" className={footerStyle.link}>
                    Sign In
                </Link>
                </li>
                <li className={footerStyle.li5}>
                    <Link to="/signup" className={footerStyle.link}>
                        Sign Up
                    </Link>
                </li>
                <li className={footerStyle.li6}>
                    <Link to="/help" className={footerStyle.link}>
                        Help
                    </Link>
                </li>
            </ul>
        </div>
        {/* div containing the logo */}
        <div id={footerStyle.logoholder}>
            <Link to="/" className={footerStyle.link}>
                <img src={companylogo} id={footerStyle.logo} alt="TakeOut Logo" />
            </Link>
        </div>

    </div>
  );
}

export default Footer;
