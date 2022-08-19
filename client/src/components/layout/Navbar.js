import { Link } from "react-router-dom";

import navStyle from "./Navbar.module.css";

import profileIcon from "./profile.jpg";
import companylogo from "./takeoutlogo.jpg";
import cartIcon from "./cart.png";

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
        <li>
          <Link to="/" className={navStyle.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/restaurants" className={navStyle.link}>
            Restaurants
          </Link>
        </li>
        <li>
          <Link to="/help" className={navStyle.link}>
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
