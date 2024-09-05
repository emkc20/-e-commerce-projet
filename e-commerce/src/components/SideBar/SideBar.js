import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/CategoriesSlice';
import { getproducts } from '../../redux/ProductsSlice';
import './SideBar.css';
import { productsCategoryFilter, setPriceRange, setRatingStar, setSortBy } from '../../redux/ProductsSlice';
import StarRatings from 'react-star-ratings';

function SideBar() {
  const priceRange = [
    { min: 0, max: 100 }, { min: 100, max: 250 }, { min: 250, max: 1000 },
  ];
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);


  useEffect(() => {
      dispatch(getCategories());
    }, [dispatch],
  );

  const handleClick = (category) => {
    dispatch(productsCategoryFilter(category));
  };

  const filteredPrice = (item) => {
    dispatch(setPriceRange(item));
  };
  const filteredStar = () => {
    dispatch(setRatingStar());
  };
  const handleSortChange = (short) => {
    dispatch(setSortBy(short));
  };

  return (
    <div className="side-bar">
      <div className="side-bar-title">Kategoriler</div>
      {categories.length > 0 &&
        <ul className="side-bar-list">
          <li className="side-bar-item" onClick={() => dispatch(getproducts())}>Tümü</li>
          {categories.map((category, index) =>
            <li key={index} onClick={() => handleClick(category)}
                className="side-bar-item">{category}
            </li>)}
        </ul>
      }

      <div className="side-bar-price-range side-bar-section">
        <p>Fiyat Aralığına Göre Sırala</p>
        <div className="side-bar-price">
          {priceRange.map(price =>
            <p className="price-item" onClick={() => filteredPrice(price)}>{price.min} - {price.max} </p>)}
        </div>
      </div>

      <div className="side-bar-section side-bar-star">
        <p className="mb-2">Ürün Puanı</p>
        <div onClick={filteredStar} className="side-bar-star-container">
          <StarRatings
            rating={4.5}
            starRatedColor="#FFD700"
            numberOfStars={5}
            name="rating"
            starDimension="12px"
            starSpacing="3px"
          />
          <span>4.5 Yıldız ve Üzeri</span>
        </div>
      </div>

      <div className="side-bar-section side-bar-select">
        <p className="mb-2">Sırala</p>
        <div className="side-bar-star-container">
          <select className="side-bar-price-select" onChange={(e) => handleSortChange(e.target.value)} name="" id="">
            <option disabled value="">Seçiniz</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
          </select>
        </div>
      </div>
    </div>
  );

}

export default SideBar;