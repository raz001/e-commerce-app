import './CartPage.css';
import React, { useState, useEffect } from "react";
import './CartPage.css';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const CartPage = ({ selectedProducts, setSelectedProducts }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartData);
  }, []);

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    setSelectedProducts(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartItems(updatedCartItems);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="my-bag">
        <h2>My Bag</h2>
        {cartItems.length ? (
          cartItems.map((item) => (
            <>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                size="sm"
                marginBottom={'20px'}
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src={item.image}
                  alt={item.name}
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>{item.name}</Heading>
                    <Text py='2'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi consequatur ab doloribus
                    </Text>
                    {/* <p>{`$${item.price.toFixed(2)} x ${item.quantity}`}</p> */}
                    <Text py='2'>
                      {`$${item.price.toFixed(2)} x ${item.quantity}`}
                    </Text>
                    <div className='quantity'>
                      <button onClick={() => decrementQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>+</button>
                    </div>
                  </CardBody>

                  <CardFooter>
                    <button className="remove" onClick={() => removeItem(item.id)} variant='solid'>
                      Remove
                    </button>
                  </CardFooter>
                </Stack>
                {/* <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{`$${item.price.toFixed(2)} x ${item.quantity}`}</p>
                </div>
                <div className="quantity">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className="remove" onClick={() => removeItem(item.id)}>
                  Remove
                </button> */}
              </Card>

              {/* <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{`$${item.price.toFixed(2)} x ${item.quantity}`}</p>
                </div>
                <div className="quantity">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className="remove" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div> */}
            </>
          ))
        ) : (
          <h2>Your cart is empty!</h2>
        )}

      </div>
      <div className="bag-summary">
        <h2>Bag Summary</h2>
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>{`$${subtotal.toFixed(2)}`}</span>
        </div>
        {/* {
          cartItems.length > 0 ? (
            <Link to='/checkout'>
              <button className="checkout">Checkout</button>
            </Link>
          ) : null

        } */}
      </div>
    </div>
  );
};

export default CartPage;
