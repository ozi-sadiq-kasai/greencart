import { assets } from "../../assets/images/assets";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={assets.logo} alt="" />
      <ul className="nav-links">
        <li className="admin">
          <Link to="admin">Seller Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li className="search">
          <input type="text" placeholder="Search products" />
          <img src={assets.search_icon} alt="" />
        </li>
      </ul>
      <div className="nav-right">
        <div className="cart">
          <Link to="/cart">
            <img src={assets.cart_icon} alt="" />
          </Link>
          <div className="tab">0</div>
        </div>
          <Link to="/login" className="login">Login</Link>
          <img src={assets.menu_icon} alt="" className="menu"/>
      </div>
    </nav>
  );
};

export default Navbar;
