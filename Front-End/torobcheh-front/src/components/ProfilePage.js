import React from 'react';
import { logout } from "../redux/UserInfo";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import SellerProf from './SellerProf';
import AdminProf from './AdminProf';

function ProfilePage(props) {

    const user_info = useSelector((state) => state.UserInfo);
    const my_dispatch = useDispatch();

    if(!user_info.user_type)
        return <Navigate to={'/'} />

    let main_body;

    if(user_info.user_type === "user")
        main_body = null; 
    else if((user_info.user_type === "seller"))
        main_body = <SellerProf />
    else if(user_info.user_type === "admin")
        main_body = <AdminProf />

    return (
        <div id="logout_div">
            <button type='button'
                onClick={() => my_dispatch(logout())}>
                خروج از حساب
            </button>
            <br></br>
            {main_body}
        </div>
    );
}
export default ProfilePage;