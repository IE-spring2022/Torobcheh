import React from 'react';
import DropDownBrands from './DropDownBrands';
import { Link } from 'react-router-dom';

function Header(props) {

    // TODO
    let mobile_brands_list = ['سامسونگ', 'شیائومی', 'اپل'];
    let mobile_category = 'گوشی موبایل';
    let tablet_brands_list = ['سامسونگ', 'شیائومی', 'اپل'];
    let tablet_category = 'تبلت';
    let laptop_brands_list = ['لنوو', 'ایسوس', 'اپل'];
    let laptop_category = 'لپتاپ';

    return (
        <div className='Header_container'>
            <div className='login_signup_button_div'>
                <Link style={{ all: "unset", cursor: "pointer" }} to={`/login`}> ورود / ثبت نام </Link>
            </div>

            <div className='category_container'>  
                <div className='category_button_div'> 
                    <Link style={{ all: "unset", cursor: "pointer" }} to={`/products`}> {mobile_category} </Link>
                    <DropDownBrands brands_list={mobile_brands_list} />
                </div>
                <div className='category_button_div' id='tablet_button'> 
                    <Link style={{ all: "unset", cursor: "pointer" }} to={`/products`}> {tablet_category} </Link>
                    <DropDownBrands brands_list={tablet_brands_list} />
                </div>
                <div className='category_button_div' id='laptop_button'> 
                    <Link style={{ all: "unset", cursor: "pointer" }} to={`/products`}> {laptop_category} </Link>
                    <DropDownBrands brands_list={laptop_brands_list} />
                </div>
            </div>
        </div>
    );

}
export default Header;