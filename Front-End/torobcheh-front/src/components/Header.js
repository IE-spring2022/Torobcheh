import React from 'react';

function Header(props) {

    return (
        <div className='Header_container'>
            <div className='login_signup_button_div'>
                ورود / ثبت نام
            </div>

            <div className='category_container'>  
                <div className='category_button_div'> گوشی موبایل </div>
                <div className='category_button_div'> تبلت </div>
                <div className='category_button_div'> لپتاپ </div>
            </div>
        </div>
    );

}
export default Header;