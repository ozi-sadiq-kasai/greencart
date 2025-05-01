import { assets } from "../../assets/images/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="navbar">
      <img src={assets.logo} alt="" />
      <ul className="nav-links">
        <li className="admin">
          <Link to="/seller">Seller Dashboard</Link>
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
        <Link to="/login" className="login">
          Login
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="mobile-menu">
            <ul className="nav-links-mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="login-mobile">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
