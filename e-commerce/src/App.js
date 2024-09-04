import React from 'react';
import Home from './pages/Home';
import Basket from './pages/Basket';
import ProductDetail from './pages/ProductDetail';
import DefaultLayout from './layouts/default.layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <DefaultLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sepet" element={<Basket />} />
            <Route path="/urun/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </DefaultLayout>
    </div>

  );
}

export default App;
