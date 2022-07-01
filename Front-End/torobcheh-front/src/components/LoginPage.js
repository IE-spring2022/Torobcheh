import React from 'react';
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/UserInfo";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function LoginPage(props) {

    const my_dispatch = useDispatch();
    const user_info = useSelector((state) => state.UserInfo);

    return (
        <div className="LoginPage_container">
            <div className='LoginPage_main_card'>
                <div id='signup_div' className='LoginPage_main_card_section'>
                    <div className='LoginPage_main_card_section_title'>
                        ثبت نام
                    </div>
                    <div className='loginpage_form'>
                        <input type={'text'} placeholder={'نام کاربری'} />
                        <input type={'email'} placeholder={'ایمیل'} />
                        <input type={'password'} placeholder={'رمز عبور'} />
                        <input type={'number'} placeholder={'شماره موبایل'} />
                        <select>
                            <option value="" disabled selected> ثبت نام به عنوان </option>
                            <option value="buyer">خریدار</option>
                            <option value="seller">فروشنده</option>
                        </select>
                    </div>
                    <div className='loginpage_button_div'>
                        <button id='signup_button'> ثبت نام </button>
                    </div>
                </div>

                <div id='login_div' className='LoginPage_main_card_section'>
                    <div className='LoginPage_main_card_section_title'>
                        ورود
                    </div>
                    <div className='loginpage_form'>
                        <input type={'text'} placeholder={'نام کاربری'} />
                        <input type={'password'} placeholder={'رمز عبور'} />
                    </div>
                    <div className='loginpage_button_div'>
                        <button 
                            onClick={() => { my_dispatch(login({token: "abc", user_type: "seller"})); }} 
                            id='login_button'> 
                            ورود 
                        </button>
                    </div>
                </div>
            </div>

            <Link to={'/'}>بازگشت به صفحه اصلی</Link>

        </div>
    );

}
export default LoginPage;