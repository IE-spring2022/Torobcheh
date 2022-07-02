import React from 'react';
import { useSelector } from "react-redux";

import Header from './Header';
import ProductBriefCardContainer from './ProductBriefCardContainer';
import DropDownBrands from './DropDownBrands';


function ProductsListPage(props) {

    let noLike;
    const user_info = useSelector((state) => state.UserInfo);
    if (user_info.user_type)
        //loged in
        noLike = false;
    else
        noLike = true;

    // TODO
    let mobile_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let tablet_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let laptop_brands = ['لنوو', 'ایسوس', 'اپل'];

    return (
        <div className="ProductsListPage_container">
            <Header />
            <div className='ProductsListPage_partition'>
                <ProductBriefCardContainer noLike={noLike} show_headers={true} />
                <div className='ProductsListPage_filters_div'>
                    <DropDownBrands category={'گوشی موبایل'} brands_list={mobile_brands} />
                    <DropDownBrands category={'تبلت'} brands_list={tablet_brands} />
                    <DropDownBrands category={'لپتاپ'} brands_list={laptop_brands} />
                    {/* <div className='price_filter'>
                        <div class="slidecontainer">
                            <input type="range" min="1" max="100" class="slider" id="myRange" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );

}
export default ProductsListPage;