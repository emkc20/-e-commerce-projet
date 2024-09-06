import React from 'react';
import Home from './pages/Home';
import Basket from './pages/Basket';
import ProductDetail from './pages/ProductDetail';
import DefaultLayout from './layouts/default.layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-cart" element={<Basket />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </DefaultLayout>

      </Router>
    </div>

  );
}

export default App;
