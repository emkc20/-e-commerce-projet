import React from 'react';
import './Home.css';
import ProductList from '../../components/ProductList';
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  return (
    <h1 className="home-page">
      <div className="home-page-side-bar">
        <SideBar />
      </div>
      <div className="home-page-content">
        <ProductList />
      </div>
    </h1>
  );
};

export default Home;