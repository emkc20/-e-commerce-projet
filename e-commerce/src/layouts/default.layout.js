import React from 'react';
import Navbar from '../components/Navbar';
import './default.layout.css';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Navbar />
      <div className="default-layout-wrapper">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;