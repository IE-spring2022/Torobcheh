import React from 'react';
// import { useDispatch } from "react-redux";
// import { login, logout } from "../redux/UserInfo";
// import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { send_request } from '../send_request';
import ProductBriefCardContainer from './ProductBriefCardContainer';


function AddProduct(props) {

    // const my_dispatch = useDispatch();
    // const user_info = useSelector((state) => state.UserInfo);

    let atributes_str = ["atr1", 'atr2', 'atr3', 'atr2'];
    let atributes = [];
    for (var i = 0; i < atributes_str.length; i++) {
        atributes.push(<div key={i} className='atr_show_div'>{atributes_str[i]}</div>);
    }

    return (
        <div className="AddProduct_container">
             <div className='title_in_prof'>
                اضافه کردن کالا
             </div>
             <div className='sub_title_in_prof'>
                کالاهای موجود
                <ProductBriefCardContainer show_headers={false} />
             </div>
             <div className='sub_title_in_prof'>
                ویژگی های موجود
                <div className='atr_container'>
                    {atributes}
                </div>
             </div>
        </div>
    );

}
export default AddProduct;