import { Link } from "react-router-dom";

import footerStyle from "./Footer.module.css";
import companylogo from "../../../images/takeoutlogo.jpg";


function Footer() {
  return (
    <div id={footerStyle.footer}>
        <div id={footerStyle.content}>
            <p className={footerStyle.exploreTakeout}> Explore Takeout</p>
            <ul className={footerStyle.ul}>
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
        <div id={footerStyle.logoholder}>
            <Link to="/" className={footerStyle.link}>
                <img src={companylogo} id={footerStyle.logo} alt="TakeOut Logo" />
            </Link>
        </div>

    </div>
  );
}

export default Footer;
