
import "./Nav.css"
import { Link } from 'react-router-dom'
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from 'react-icons/md';
import LogoutModal from "./LogoutModal";
import { AuthContext } from "./AuthContext";
function Nav(props) {
  const { selectedProducts, user, setUser } = props;
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log(isAuth)
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
        
        {isAuth ? (
          <>
          <MdAccountCircle style={{ display: "inline", fontSize: '25px', marginLeft: "20px" }} />  {isAuth}
 
    </>
    
) : (
  <Link to="/account" className="navbar__link">
    <MdAccountCircle style={{ display: "inline", fontSize: '25px' }} /> My Account
  </Link>
)}

        {
          user ? <LogoutModal setUser={setUser} />
            : ''
        }

      </div>
    </nav>
  );
}

export default Nav;











