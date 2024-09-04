import React from 'react';
import './NavBar.css';
import { SlBasket } from 'react-icons/sl';


function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          Trend
          <span>Shop</span>
        </div>
        <div className="navbar-seacrh">
          <select className="navbar-search-select">
            <option>Home</option>
            <option>Home</option>
            <option>Home</option>
          </select>
        </div>
        <div className="navbar-basket">
          <SlBasket size={24} className="navbar-basket-icon" />
          <span>Sepetim</span>
          <span className="navbar-basket-count">3</span>
        </div>
      </div>
    </div>


  );
}

export default NavBar;