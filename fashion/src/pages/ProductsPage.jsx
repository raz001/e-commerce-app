
import React, { useState, useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";
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
  }
};
const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading } = state;
  let [order, setOrder] = useState("");
  let [category, setCategory] = useState("");
  const cost = 'price';
  let getData;
  if (category == 'all') {
    category = ''
  }
  if (order === 'lowToHigh') {
    order = 'asc'
  } else {
    order = 'desc'
  }
  if (category) {
    getData = () => {
      dispatch({ type: "FETCH_REQUEST" })
      axios
        .get(`http://localhost:3000/products?category=${category}&_sort=${cost}&_order=${order}`)
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
        .get(`http://localhost:3000/products?_sort=${cost}&_order=${order}`)
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
            <option value="">---</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
