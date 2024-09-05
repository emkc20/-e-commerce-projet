import React from 'react';
import './Basket.css';
import { useDispatch, useSelector } from 'react-redux';
import OrderValue from '../../components/OrderValue/OrderValue';

const Basket = () => {
  const { products } = useSelector((state) => state.basketSlice);

  console.log('products', products);

  return (
    <div className="home-page">
      <OrderValue />
    </div>
  );
};

export default Basket;