import React from 'react';

import Header from './Header';
import ProductBriefCard_container from './ProductBriefCard_container';
import DropDownBrands from './DropDownBrands';


function ProductsListPage(props) {

    // TODO
    let mobile_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let tablet_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let laptop_brands = ['لنوو', 'ایسوس', 'اپل'];

    return (
        <div className="ProductsListPage_container">
            <Header />
            <div className='ProductsListPage_partition'>
                <ProductBriefCard_container />
                <div className='ProductsListPage_filters_div'>
                    <DropDownBrands category={'گوشی موبایل'} brands_list={mobile_brands} />
                    <DropDownBrands category={'تبلت'} brands_list={tablet_brands} />
                    <DropDownBrands category={'لپتاپ'} brands_list={laptop_brands} />
                    <div className='price_filter'>
                        <div class="slidecontainer">
                            <input type="range" min="1" max="100" class="slider" id="myRange" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ProductsListPage;