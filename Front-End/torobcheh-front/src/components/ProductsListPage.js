import React from 'react';

import Header from './Header';
import ProductBriefCard_container from './ProductBriefCard_container';

import './styles/ProductsListPage.css'


function ProductsListPage(props) {

    // TODO
    let mobile_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let tablet_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let laptop_brands = ['لنوو', 'ایسوس', 'اپل'];

    return (
        <div className="ProductsListPage_container">
            <Header />
            <ProductBriefCard_container />
            <div className='ProductsListPage_filters_div'>

            </div>
        </div>
      );

}
export default ProductsListPage;