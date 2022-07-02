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

    let brands_str = ["brand1", 'brand2', 'brand3', 'brand4'];
    let brands = [];
    for (var i = 0; i < brands_str.length; i++) {
        brands.push(<div key={i} className='atr_show_div'>{brands_str[i]}</div>);
    }

    return (
        <div className="AddProduct_container">
             <div className='title_in_prof'>
                اضافه کردن کالا
                <hr></hr>
             </div>
             <div>
                <form>
                    <input type={'text'} placeholder={'نام کالا'} />
                    <select>
                        <option value={""} selected disabled>دسته بندی</option>
                        <option value={"phone"}>گوشی موبایل</option>
                        <option value={"tablet"}>تبلت</option>
                        <option value={"laptop"}>لپتاپ</option>
                    </select>
                    <label>برند را از بین گزینه های موجود انتخاب کنید</label>
                    <input type={'number'} placeholder={'قیمت'} />
                </form>
             </div>
             <div className='sub_title_in_prof'>
                کالاهای موجود
                <ProductBriefCardContainer show_headers={false} />
             </div>
             <div className='sub_title_in_prof'>
                برند های موجود
                <div className='atr_container'>
                    {brands}
                </div>
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