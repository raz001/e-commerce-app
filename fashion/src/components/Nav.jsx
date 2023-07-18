//import logo from '../logo.png'
import "./Nav.css"
import { Link } from 'react-router-dom'
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
function Nav(props) {

const { selectedProducts } = props;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Fashion Frenzy
      </Link>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/products" className="navbar__link">
          Products
        </Link>
        <Link to="/cart" className="navbar__link navbar__link--cart">
          <FaShoppingCart />
          <span className="navbar__cart-count">{selectedProducts.length}</span>
        </Link>
        <Link to="/account" className="navbar__link">
          My Account
        </Link>
      </div>
    </nav>
  );
}

export default Nav;


function Navbar(props) {
  const { cartItemsCount } = props;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Fashion Frenzy
      </Link>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/products" className="navbar__link">
          Products
        </Link>
        <Link to="/cart" className="navbar__link navbar__link--cart">
          <FaShoppingCart />
          <span className="navbar__cart-count">{cartItemsCount}</span>
        </Link>
        <Link to="/account" className="navbar__link">
          My Account
        </Link>
      </div>
    </nav>
  );
}









