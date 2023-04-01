import React from 'react';
import './ProductCard.css'
const ProductCard = ({ product }) => {
  const { name, price, description, image, inStock } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="price-stock">
          <span className="price">{`$${price.toFixed(2)}`}</span>
          {inStock ? <span className="stock">In Stock</span> : <span className="out-of-stock">Out of Stock</span>}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;


