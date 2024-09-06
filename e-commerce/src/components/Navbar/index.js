import React, { useState } from 'react';
import './NavBar.css';
import { SlBasket } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import { getTotal } from '../../utils/getTotal';

function NavBar() {
  const { cart } = useSelector((state) => state.basketSlice);
  const quantity = getTotal(cart).totalQuantity;
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);


  const handleChange = (event, newValue) => {
    if (newValue) {
      navigate(`/product/${newValue.id}`);
      setSelectedOption(null);
    }

  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">Trend
            <span>Shop</span></Link>
        </div>
        <Autocomplete
          value={selectedOption}
          disablePortal
          onChange={handleChange}
          options={products}
          getOptionLabel={(products) => products.title}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} placeholder="Ürün arayın..." label="Ürünler" />}
        />
        <Link to="/shopping-cart">
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