import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ProductsListPage from './components/ProductsListPage';

import './index.css'
import './components/styles/Header.css'
import './components/styles/MainPage.css'
import './components/styles/LoginPage.css'
import './components/styles/ProductBriefCard.css'
import './components/styles/ProductBriefCard_container.css'
import './components/styles/ProductsListPage.css'
import './components/styles/DropDownBrands.css'
import './components/styles/price_filter_slider.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsListPage />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
