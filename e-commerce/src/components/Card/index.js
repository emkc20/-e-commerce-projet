import React from 'react';
import './Card.css';
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/BasketSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ product }) => {

  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Ürün eklendi, Sepete Gidin', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img src={product?.image} alt="" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{product?.title}</h1>
        <p className="card-desc">{product?.description}</p>
        <div className="card-rating">
          <div className="product-card-rating">
            <span className="mr-3">{product.rating?.rate}</span>
            <StarRatings
              rating={product?.rating?.rate}
              starRatedColor="#FFD700"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="3px"
            />
          </div>
          <p className="product-card-fav">
            <span>{product?.rating?.count} kişi </span> favoriledi !
          </p>
        </div>
        <div className="card-price">
          <p className="card-value">{product?.price} ₺ </p>
          <button onClick={() => onAddToCart(product)} className="card-basket">
            Sepete Eke
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Card;