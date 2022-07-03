import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { reset_query } from "../redux/UserInfo";

import Header from './Header';
import ProductBriefCardContainer from './ProductBriefCardContainer';
import DropDownBrands from './DropDownBrands';
import { send_request } from '../send_request';

async function search_handler(method, url, body) {

    let res;
    try {
        res = await send_request(method, url, body);
        console.log('res:', res);
    }
    catch (e) {
        console.log('prod page search: oops ...');
    }
    if (res[0]) {
        // success
        console.log('prod page search success:', res[1])
        return res[1]
    }
    else
        alert(res[1]);
}

function ProductsListPage(props) {

    const my_dispatch = useDispatch();

    const user_info = useSelector((state) => state.UserInfo);
    let query = user_info.search_query;
    const [products, setProducts] = useState();
    if (user_info.search_query) {
        console.log('have query')
        let res = search_handler("GET", 'products/filtered'
            , JSON.stringify({
                name: query,
                brand: "",
                category: ""
            }));

        if (res) {
            setProducts(res[1])
        }
        my_dispatch(reset_query());
    }
    else if (!products) {
        console.log('no query')
        let res = search_handler("GET", 'products/filtered'
            , JSON.stringify({
                name: "",
                brand: "",
                category: ""
            }));
        if (res) {
            setProducts(res[1])
        }
    }


    let noLike;
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
                <ProductBriefCardContainer products_data={products} noLike={noLike} show_headers={true} />
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