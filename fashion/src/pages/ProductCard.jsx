import React from 'react';
import './ProductCard.css'
const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, description, image, inStock, id } = product;
  const handleClick = () => {
    onAddToCart({...product, id});
  };
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
        <button className="add-to-cart" onClick={ handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;


