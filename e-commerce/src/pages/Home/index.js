import React from 'react';
import './Home.css';
import ProductList from '../../components/ProductList';
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-side-bar">
        <SideBar />
      </div>
      <div className="home-page-content">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;