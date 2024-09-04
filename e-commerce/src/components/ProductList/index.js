import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../../redux/ProductsSlice';
import ReactLoading from 'react-loading';
import { STATUS } from '../../utils/status';
import './ProductList.css';
import StarRatings from 'react-star-ratings';


const ProductList = () => {
  const dispatch = useDispatch();

  const { products, productsStatus } = useSelector((state) => state.products);

  console.log('products', products);
  console.log('productsStatus', productsStatus);

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);


  return (<div className="product-list">
    {

      productsStatus === STATUS.LOADING ? <ReactLoading type="spin" color="#ff9933" height={64} width={64} /> :

        products.map((product, index) => (<div className="product-card" key={index}>
          <img className="product-card-img" src={product.image} />
          <div className="product-card-content">
            <p className="mb-2 truncate">{product.title}</p>
            <p className="mb-2">{product.rating.count} favoriledi</p>
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
        </div>))


    }

  </div>);
};

export default ProductList;