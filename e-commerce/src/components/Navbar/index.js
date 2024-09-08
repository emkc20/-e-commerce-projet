import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { SlBasket } from 'react-icons/sl';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import { getTotal } from '../../utils/getTotal';
import { getproducts } from '../../redux/ProductsSlice';

function NavBar() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.basketSlice);
  const quantity = getTotal(cart).totalQuantity;
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const location = useLocation(); // URL değişikliklerini yakalamak için kullanılır
  const [value, setValue] = useState(null);


  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  useEffect(() => {
    const pathName = location.pathname.includes('product');
    if (!pathName) setValue(null);

  }, [location]);


  const handleChange = (event, newValue) => {
    if (newValue) {
      setValue(newValue);
      navigate(`/product/${newValue.id}`);
    }
  };

  return (<div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">Trend
            <span>Shop</span></Link>
        </div>
        <div className="navbar-search-select">
          <Autocomplete
            value={value}
            blurOnSelect
            onChange={handleChange}
            options={products}
            getOptionLabel={(products) => products.title}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} placeholder="Ürün arayın..." label="Ürünler" />}
          />
        </div>
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