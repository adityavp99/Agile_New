import { Link } from "react-router-dom";

import navStyle from "./Navbar.module.css";

import profileIcon from "../../../images/profile.jpg";
import companylogo from "../../../images/takeoutlogo.jpg";
import cartIcon from "../../../images/cart.jpg";

function Navbar() {
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.logosholder}>
        <Link to="/signin" className={navStyle.link}>
          <img src={profileIcon} id={navStyle.logo1} alt="Profile Icon" />
        </Link>
        <Link to="/" className={navStyle.link}>
          <img src={companylogo} id={navStyle.logo2} alt="TakeOut Logo" />
        </Link>
        <Link to="/comparison">
          <img src={cartIcon} id={navStyle.logo3} alt="Cart Icon" />
        </Link>
      </div>
      <ul>
        <li className={navStyle.li1}>
          <Link to="/" className={navStyle.link}>
            Home
          </Link>
        </li>
        <li className={navStyle.li2}>
          <Link to="/categories" className={navStyle.link}>Categories</Link>
        </li>
        <li className={navStyle.li3}>
          <Link to="/restaurants" className={navStyle.link}>
            Restaurants
          </Link>
        </li>
        <li className={navStyle.li4}>
          <Link to="/help" className={navStyle.link}>
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
