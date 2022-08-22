import { Link } from "react-router-dom";

import footerStyle from "./Footer.module.css";

// import profileIcon from "./profile.jpg";
import companylogo from "./takeoutlogo.jpg";
// import cartIcon from "./cart.png";

function Footer() {
  return (
    <div id={footerStyle.footer}>
        <div id={footerStyle.content}>
            <p className={footerStyle.p}> Explore TakeOut</p>
            <ul className={footerStyle.ul}>
                <li>
                    <Link to="/" className={footerStyle.link}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/restaurants" className={footerStyle.link}>
                        Restaurants
                    </Link>
                </li>
                <li>
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
