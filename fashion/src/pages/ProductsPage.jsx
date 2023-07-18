
import React, { useState, useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";
import "./ProductPage.css";
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        data: [],
        isLoading: false,
        error: action.payload
      }
    default: {
      throw new Error('Inavalid action')
    }
  }

};
const ProductPage = ({ selectedProducts, setSelectedProducts }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading } = state;
  // const [selectedProducts, setSelectedProducts] = useState([]);

  let [order, setOrder] = useState("");
  let [category, setCategory] = useState("");
  const cost = 'price';

  // const handleAddToCart = (product) => {
  //   setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
  // };

  const handleAddToCart = (product) => {
    const existingItem = selectedProducts.find((item) => item.product.id === product.id);
    if (existingItem) {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, { product, quantity: 1 }]);
    }
  };

  let getData;

  if (category) {

    getData = () => {
      dispatch({ type: "FETCH_REQUEST" })
      axios
        .get(`https://clothings.onrender.com/products?category=${category}&_sort=${cost}&_order=${order}`)
        .then((res) => {
          console.log(res);
          dispatch({ type: "FETCH_SUCCESS", payload: res.data })

        })

        .catch((err) => {
          console.log(err)
          dispatch({ type: "FETCH_FAILURE", payload: err })
        })
    }
  } else {
    getData = () => {
      dispatch({ type: "FETCH_REQUEST" })
      axios
        .get(`https://clothings.onrender.com/products?_sort=${cost}&_order=${order}`)
        .then((res) => {
          console.log(res);
          dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        })

        .catch((err) => {
          console.log(err)
          dispatch({ type: "FETCH_FAILURE", payload: err })
        })
    }
  }

  useEffect(() => {
    getData()
  }, [category, order]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="product-page">
      <div className="filters">
        <label>
          Sort by:
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </label>
        <label>
          Filter by category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All categories</option>
            <option value="men">Men</option>
            <option value="Women">Women</option>

          </select>
        </label>
      </div>
      <div className="product-grid">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
