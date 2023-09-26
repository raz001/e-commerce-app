//import './App.css';
import Nav from './components/Nav'
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
//import Allroutes from './components/Allroutes';
import Home from './pages/Home';
import ProductPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import RegistrationPage from './pages/Register';
import LoginPage from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './components/AuthContext';
const userData = JSON.parse(localStorage.getItem('credentials')) || '';
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  //const [user, setUser] = useState(userData.username);
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  // if(userData) login()
  // Callback function to set the user when logging in
  const handleLogin = (loggedInUser) => {
    setIsAuth(`${loggedInUser}`);
  };

  return (
    <>
      <Nav selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} user={isAuth} setUser={setIsAuth} />
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
                <CartPage key={Math.random()} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
              </PrivateRoute>
            }
          />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
