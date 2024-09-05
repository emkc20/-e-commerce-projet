import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../../redux/ProductsSlice';
import ReactLoading from 'react-loading';
import { STATUS } from '../../utils/status';
import './ProductList.css';
import StarRatings from 'react-star-ratings';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  const handleClick = (item) => {
    navigate(`/urun/${item.id}`);
  };


  return (<div className="product-list">
    {productsStatus === STATUS.LOADING ? <ReactLoading type="spin" color="#ff9933" height={64} width={64} /> :

      products.map((product, index) => (<div onClick={() => handleClick(product)} className="product-card" key={index}>
          <img className="product-card-img" src={product.image} />
          <div className="product-card-content">
            <Tooltip title={product.title} position="top" trigger="mouseenter" size="small">
              <p className="product-card-title">{product.title}</p>
            </Tooltip>
            <p className="product-card-fav">
              <span>{product.rating.count} kişi </span> favoriledi!
            </p>
            <div className="product-card-rating">
              <StarRatings
                rating={product.rating.rate}
                starRatedColor="#FFD700"
                numberOfStars={5}
                name="rating"
                starDimension="16px"
                starSpacing="3px"
              />
              <span>{product.rating.rate}</span>

            </div>
            <p className="product-card-price">{product?.price} ₺</p>
          </div>
        </div>))}

  </div>);
};

export default ProductList;