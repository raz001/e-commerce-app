import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './Product.css';
const ProductsPage = () => {
  // State for product data
  const [products, setProducts] = useState([]);
  const categories = ["All", "Men", "Women",];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setProducts(products);
    } else {
      setProducts(products.filter((product) => product.category === category));
    }
  };

  const handleSortingSelect = (sorting) => {
    setSelectedSorting(sorting);
    switch (sorting) {
      case "low-to-high":
        setProducts([...products].sort((a, b) => a.price - b.price));
        break;
      case "high-to-low":
        setProducts([...products].sort((a, b) => b.price - a.price));
        break;
      default:
        setProducts(products);
        break;
    }
  };
  // Fetch product data from API on component mount
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [selectedCategory, selectedSorting]);

  return (
    <div className="products-page">
      <h2>Shop the Latest Trends</h2>
      <div>
        <label htmlFor="category-select">Filter by category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => handleCategorySelect(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sorting-select">Sort by price:</label>
        <select
          id="sorting-select"
          value={selectedSorting}
          onChange={(e) => handleSortingSelect(e.target.value)}
        >
          <option value="">None</option>
          <option value="low-to-high">Low to high</option>
          <option value="high-to-low">High to low</option>
        </select>
      </div>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
