import { Link } from "react-router-dom";

import navStyle from "./Navbar.module.css";

import profileIcon from "../../../images/profile.jpg";
import companylogo from "../../../images/takeoutlogo.jpg";
import cartIcon from "../../../images/cart.jpg";

function Navbar() {
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.logosholder}>
        <img src={profileIcon} id={navStyle.logo1} alt="Profile Icon" />
        <Link to="/" className={navStyle.link}>
          <img src={companylogo} id={navStyle.logo2} alt="TakeOut Logo" />
        </Link>
        <img src={cartIcon} id={navStyle.logo3} alt="Cart Icon" />
      </div>
      <ul>
        <li className={navStyle.li}>
          <Link to="/" className={navStyle.link}>
            Home
          </Link>
        </li>
        <li className={navStyle.li}>
          <Link to="/restaurants" className={navStyle.link}>
            Restaurants
          </Link>
        </li>
        <li className={navStyle.li}>
          <Link to="/help" className={navStyle.link}>
            Help
          </Link>
        </li>
        <li className={navStyle.li}>
          <Link to="/categories" className={navStyle.link}>Categories</Link>
        </li>
        <li className={navStyle.li}>
          <Link to="/signup" className={navStyle.link}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
