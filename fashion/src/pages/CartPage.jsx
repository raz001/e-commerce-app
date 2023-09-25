import React, { useState, useEffect } from "react";
import './CartPage.css'
const CartPage = ({ selectedProducts, setSelectedProducts }) => {
    const [cartItems, setCartItems] = useState([]);
    console.log('cartitems is', cartItems);
    console.log("selectedProducts is", selectedProducts);

    useEffect(() => {
        setCartItems(selectedProducts);
    }, [selectedProducts]);

    const incrementQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        setSelectedProducts(updatedCartItems)
    };

    const decrementQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        setSelectedProducts(updatedCartItems)
    };

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.product.id !== id);
        setCartItems(updatedCartItems);
        setSelectedProducts(updatedCartItems)
    };

    const subtotal = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0) : 0;

    return (
        <div className="cart-page">
            <div className="my-bag">
                <h2>My Bag</h2>
                {cartItems?.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-image">
                            <img src={item.product.image} alt={item.product.name} />
                        </div>
                        <div className="item-info">
                            <h3>{item.product.name}</h3>
                            <p>{`$${item.product.price.toFixed(2)} x ${item.quantity}`}</p>
                        </div>
                        <div className="quantity">
                            <button onClick={() => decrementQuantity(item.product.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => incrementQuantity(item.product.id)}>+</button>
                        </div>
                        <button className="remove" onClick={() => removeItem(item.product.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="bag-summary">
                <h2>Bag Summary</h2>
                <div className="subtotal">
                    <span>Subtotal:</span>
                    <span>{`$${subtotal?.toFixed(2)}`}</span>
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
