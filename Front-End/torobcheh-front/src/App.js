import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ProductsListPage from './components/ProductsListPage';
import ProfilePage from './components/ProfilePage';

import './index.css'
import './components/styles/Header.css'
import './components/styles/MainPage.css'
import './components/styles/LoginPage.css'
import './components/styles/ProductBriefCard.css'
import './components/styles/ProductBriefCardContainer.css'
import './components/styles/ProductsListPage.css'
import './components/styles/DropDownBrands.css'
import './components/styles/price_filter_slider.css'
import './components/styles/AddProduct.css'
import './components/styles/ProfilePage.css'
import './components/styles/SellerProf.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsListPage />} />  
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
