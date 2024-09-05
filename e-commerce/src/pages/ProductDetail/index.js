import React, { useEffect } from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../redux/ProductDetailSlice';
import Card from '../../components/Card';


const ProductDetail = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();

  console.log('productDetail', product);


  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch]);

  return (
    <div className="product-detail">
      {product && <Card product={product} />}
    </div>);
};

export default ProductDetail;