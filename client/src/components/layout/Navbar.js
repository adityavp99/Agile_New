import { Link } from "react-router-dom";
// import navStyle from  "./Navbar.module.css"

function Navbar() {
  return (
    <nav className="nav">
     <Link to="/" className="logo">Site Logo</Link> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
