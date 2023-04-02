//import logo from '../logo.png'
import "./Nav.css"
import { Link } from 'react-router-dom'
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
// const links = [
//   { path: '/', title: "WOMEN" },
//   { path: '/men', title: "MEN" },
//   { path: '/', title: "JEANS" },
//   { path: '/', title: "ICONS" },
//   { path: '/', title: "SALE" },
//   { path: '/', title: "STYLE TRIAL RENTAL" },
//   { path: '/', title: "COMMUNITY" },
//   { path: '/', title: "LABELS WE LOVE" }
// ];
function Nav(props) {
//   return (
//     <div>
//       <nav class="navbar">
//   <a href="/" class="navbar__logo">Fashion Frenzy</a>
//   <div class="navbar__links">
//     <a href="/" class="navbar__link">Home</a>
//     <a href="/products" class="navbar__link">Products</a>
//     <a href="/cart" class="navbar__link navbar__link--cart">
//       <i class="fas fa-shopping-cart"></i>
//       <span class="navbar__cart-count">0</span>
//     </a>
//     <a href="/account" class="navbar__link">My Account</a>
//   </div>
// </nav>



//       <nav className='navbar'>
//         {links.map((link) => (
//           <Link className="navtitle" key={link.title} to={link.path}>{link.title}</Link>
//         ))}
//       </nav>
//     </div>
//   )
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

           {/* <nav className='navbar1'>
    {links.map((link) => (
          <Link className="navtitle" key={link.title} to={link.path}>{link.title}</Link>
        ))}
     </nav> */}
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









