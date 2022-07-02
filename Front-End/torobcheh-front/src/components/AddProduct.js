import React from 'react';
// import { useDispatch } from "react-redux";
// import { login, logout } from "../redux/UserInfo";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { send_request } from '../send_request';
import ProductBriefCardContainer from './ProductBriefCardContainer';


function AddProduct(props) {

    // const my_dispatch = useDispatch();
    // const user_info = useSelector((state) => state.UserInfo);
    let categories = [
        <label key={1} className='atr_show_div'>
            <input name="category_radio" type="radio" id={1} value={'cellphone'} />
            <label for={'category_radio'}>گوشی موبایل</label>
        </label>,
        <label key={2} className='atr_show_div'>
            <input name="category_radio" type="radio" id={2} value={'tablet'} />
            <label for={'category_radio'}>تبلت</label>
        </label>,
        <label key={3} className='atr_show_div'>
            <input name="category_radio" type="radio" id={3} value={'laptop'} />
            <label for={'category_radio'}>لپتاپ</label>
        </label>
    ];

    let atributes_str = ["atr1", 'atr2', 'atr3', 'atr4'];
    let atributes = [];
    for (var i = 0; i < atributes_str.length; i++) {
        atributes.push(
            <label key={i} className='atr_show_div'>
                <input name="atr_checkbox" type="checkbox" id={atributes_str[i]} value={atributes_str[i]} />
                <label for={atributes_str[i]}>{atributes_str[i]}</label>
            </label>
        );
    }

    let brands_str = ["brand1", 'brand2', 'brand3', 'brand4'];
    let brands = [];
    for (var i = 0; i < brands_str.length; i++) {
        brands.push(
            <label key={i} className='atr_show_div'>
                <input name="brand_radio" type="radio" id={brands_str[i]} value={brands_str[i]} />
                <label for={brands_str[i]}>{brands_str[i]}</label>
            </label>
        );
    }

    return (
        <div className="AddProduct_container">
            <div className='title_in_prof'>
                اضافه کردن کالا
                <hr></hr>
            </div>
            <div id='addprod_form_div'>
                {/* <form> */}
                    <input type={'text'} placeholder={'نام فروشگاه'} required />
                    <input type={'text'} placeholder={'نام کالا'} required />
                    <select required>
                        <option value={""} selected disabled>دسته بندی</option>
                        <option value={"phone"}>گوشی موبایل</option>
                        <option value={"tablet"}>تبلت</option>
                        <option value={"laptop"}>لپتاپ</option>
                    </select>
                    <input type={'number'} placeholder={'قیمت'} required />
                {/* </form> */}
            </div>
            <div className='sub_title_in_prof'>
                انتخاب دسته بندی از دسته بندی های موجود
                <div className='atr_container'>
                    {categories}
                </div>
            </div>
            <div className='sub_title_in_prof'>
                انتخاب برند از برند های موجود
                <div className='atr_container'>
                    {brands}
                </div>
            </div>
            <div className='sub_title_in_prof'>
                انتخاب ویژگی از ویژگی های موجود
                <div className='atr_container'>
                    {atributes}
                </div>
            </div>
            <div className='sub_title_in_prof'>
                کالاهای موجود
                <ProductBriefCardContainer show_headers={false} noLike={true} />
            </div>
        </div>
    );

}
export default AddProduct;