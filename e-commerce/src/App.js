import React from 'react';
import Home from './pages/Home';
import Basket from './pages/Basket';
import ProductDetail from './pages/ProductDetail';
import DefaultLayout from './layouts/default.layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavBar from './components/Navbar';


function App() {
  return (
    <div>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sepet" element={<Basket />} />
            <Route path="/urun/:id" element={<ProductDetail />} />
          </Routes>
        </DefaultLayout>

      </Router>
    </div>

  );
}

export default App;
