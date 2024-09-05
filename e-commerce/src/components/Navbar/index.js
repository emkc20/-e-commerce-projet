import React from 'react';
import './NavBar.css';
import { SlBasket } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return { totalQuantity };
};

function NavBar() {
  const { products } = useSelector((state) => state.basketSlice);

  const quantity = getTotal(products).totalQuantity;
  console.log('quantity', quantity);
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">Trend
            <span>Shop</span></Link>
        </div>
        <div className="navbar-seacrh">
          <select className="navbar-search-select">
            <option>Home</option>
            <option>Home</option>
            <option>Home</option>
          </select>
        </div>
        <Link to="/sepet">
          <div className="navbar-basket">

            <SlBasket size={24} className="navbar-basket-icon" />
            <span>Sepetim</span>
            <span className="navbar-basket-count">{quantity}</span>

          </div>
        </Link>
      </div>
    </div>


  );
}

export default NavBar;