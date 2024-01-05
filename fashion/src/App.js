//import './App.css';
import Nav from './components/Nav'
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './components/AuthContext';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
function App() {
  const cart_data = JSON.parse(localStorage.getItem('cartItems')) || []
  const [selectedProducts, setSelectedProducts] = useState(cart_data);
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log(selectedProducts)
  // Callback function to set the user when logging in
  const handleLogin = (loggedInUser) => {
    setIsAuth(`${loggedInUser}`);
  };

  return (
    <>
      <Nav
        cart_data={cart_data.length}
        user={isAuth}
        setUser={setIsAuth} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductPage selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />}
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts} />
              </PrivateRoute>
            }
          />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
          <Route path='/account' element={<SignUp />} />
          <Route path='/login' element={<SignIn onLogin={handleLogin} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
