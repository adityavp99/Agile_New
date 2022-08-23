import { Link } from "react-router-dom";

import footerStyle from "./Footer.module.css";
import companylogo from "../images/takeoutlogo.jpg";


function Footer() {
  return (
    <div id={footerStyle.footer}>
        <div id={footerStyle.content}>
            <p className={footerStyle.p}> Explore Takeout</p>
            <ul className={footerStyle.ul}>
                <li className={footerStyle.li}>
                    <Link to="/" className={footerStyle.link}>
                        Home
                    </Link>
                </li>
                <li className={footerStyle.li}>
                    <Link to="/restaurants" className={footerStyle.link}>
                        Restaurants
                    </Link>
                </li>
                <li className={footerStyle.li}>
                    <Link to="/help" className={footerStyle.link}>
                        Help
                    </Link>
                </li>
                <li className={footerStyle.li}>
                    <Link to="/categories" className={footerStyle.link}>
                        Categories
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
