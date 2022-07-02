import React from 'react';
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/UserInfo";
import { useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { send_request } from '../send_request';

async function signup(method, url, body){
    let res;
    try{
        res = await send_request(method, url, body);
        console.log('res:',res);
    }
    catch(e){
       console.log('signup oops ...');
    }
    if (res[0]){
        // success
        res = res[1];
        return {token: res.token, user_type: res.user_type}
    }
    alert(res[1]);
}

function LoginPage(props) {

    const my_dispatch = useDispatch();

    const user_info = useSelector((state) => state.UserInfo);
    if (user_info.user_type)
        // already loged in
        return(<Navigate to="/" />);

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
                                onClick={async() => my_dispatch(login(await signup("POST", 'auth/signup/'+document.getElementById("signup_type_select").value
                                    ,JSON.stringify({
                                        username: document.getElementById("signup_username").value
                                        ,email: document.getElementById("signup_email").value
                                        ,password:document.getElementById("signup_password").value
                                        ,phone:document.getElementById("signup_phone").value
                                    }))))}
                                        
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
                            <input type={'text'} placeholder={'نام کاربری'} required />
                            <input type={'password'} placeholder={'رمز عبور'} required />
                        </div>
                        <div className='loginpage_button_div'>
                            <button 
                                // onClick={() => { my_dispatch(login({token: "abc", user_type: "seller"})); }} 
                                onClick={() => send_request("POST", 'auth/login/seller', JSON.stringify({username:'user1',password:'pass1'}))}
                                // onClick={() => send_request("GET", 'attributes')}
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