import React from 'react';
import { useDispatch } from "react-redux";
import { login } from "../redux/UserInfo";
import { useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { send_request } from '../send_request';

async function loginpage_button(method, url, body, my_dispatch) {
    let result = await signInUp_handler(method, url, body);
    if (result)
        my_dispatch(login(result))
}
async function signInUp_handler(method, url, body) {
    let res;
    try {
        res = await send_request(method, url, body);
        console.log('res:', res);
    }
    catch (e) {
        console.log('login page: oops ...');
    }
    if (res[0]) {
        // success
        console.log('loginpage success')
        return { token: res[1].token, user_type: res[1].user_type }
    }
    alert(res[1]);
}

function LoginPage(props) {

    const my_dispatch = useDispatch();

    const user_info = useSelector((state) => state.UserInfo);
    if (user_info.user_type)
        // already loged in
        return (<Navigate to="/profile" />);

    return (
        <div className="LoginPage_container">
            <div className='LoginPage_main_card'>
                <div id='signup_div' className='LoginPage_main_card_section'>
                    <div className='LoginPage_main_card_section_title'>
                        ثبت نام
                    </div>
                    <form>
                        <div className='loginpage_form'>
                            <input id='signup_username' type={'text'} placeholder={'نام کاربری'} required />
                            <input id='signup_email' type={'email'} placeholder={'ایمیل'} required />
                            <input id='signup_password' type={'password'} placeholder={'رمز عبور'} required />
                            <input id='signup_phone' type={'number'} placeholder={'شماره موبایل'} required />
                            <select id='signup_type_select' required>
                                <option value="" disabled selected> ثبت نام به عنوان </option>
                                <option value="user">خریدار</option>
                                <option value="seller">فروشنده</option>
                            </select>
                        </div>
                        <div className='loginpage_button_div'>
                            <button type='button'
                                onClick={async () => await loginpage_button("POST", 'auth/signup/' + document.getElementById("signup_type_select").value
                                    , JSON.stringify({
                                        username: document.getElementById("signup_username").value
                                        , email: document.getElementById("signup_email").value
                                        , password: document.getElementById("signup_password").value
                                        , phone: document.getElementById("signup_phone").value
                                    }), my_dispatch)}
                                id='signup_button'> ثبت نام
                            </button>
                        </div>
                    </form>
                </div>

                <div id='login_div' className='LoginPage_main_card_section'>
                    <div className='LoginPage_main_card_section_title'>
                        ورود
                    </div>
                    <form>
                        <div className='loginpage_form'>
                            <input id='login_username' type={'text'} placeholder={'نام کاربری'} required />
                            <input id='login_password' type={'password'} placeholder={'رمز عبور'} required />
                        </div>
                        <div className='loginpage_button_div'>
                            <button type='button'
                                onClick={async () => await loginpage_button("POST", 'auth/login/all'
                                , JSON.stringify({
                                    username: document.getElementById("login_username").value
                                    , password: document.getElementById("login_password").value
                                }), my_dispatch)}
                                id='login_button'>
                                ورود
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Link to={'/'}>بازگشت به صفحه اصلی</Link>

        </div>
    );

}
export default LoginPage;