import React, { useState, useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";
import "./ProductPage.css";
import axios from 'axios';
import { useLocation, useSearchParams } from "react-router-dom";
import { useSnackbar } from 'notistack';
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
  const [searchParams, setSearchParams] = useSearchParams()
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading } = state;
  const initCategory = searchParams.getAll('category');
  const initOrder = searchParams.get('order')
  let [order, setOrder] = useState(initOrder || '');
  let [category, setCategory] = useState(initCategory || []);
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar()
  const obj = {
    params: {
      category: searchParams.getAll('category'),
      _sort: searchParams.get('order') && "price",
      _order: searchParams.get('order')
    }
  };

  useEffect(() => {
    getData(obj)
  }, [location.search]);

  useEffect(() => {
    let params = {
      category,
    }
    order && (params.order = order);
    if (category === '') delete params.category
    setSearchParams(params);
  }, [category, order]);

  const handleAddToCart = (product) => {
    const existingItem = selectedProducts.find((item) => item.product.id === product.id);
    if (existingItem) {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      enqueueSnackbar('Product quantity increased by 1', { variant: "success" })
    } else {
      setSelectedProducts([...selectedProducts, { product, quantity: 1 }]);
      enqueueSnackbar('Product added to cart', { variant: "success" })
    }
  };

  let getData = (paramObj) => {
    dispatch({ type: "FETCH_REQUEST" })
    axios
      .get(`https://clothings.onrender.com/products`, paramObj)
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: "FETCH_FAILURE", payload: err })
      })
  };

  if (isLoading) {
     return <div className='animate-ping w-16 h-16 m-28 rounded-full bg-sky-600'></div>
  }

  return (
    <div className="product-page">
      <div className="filters">
        <label>
          Sort by:
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value=''>Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </label>
        <label>
          Filter by category:
          <select
            value={category.length ? category : ''}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''>All Categories</option>
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
