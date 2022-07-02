import React from 'react';
// import { useDispatch } from "react-redux";
// import { login, logout } from "../redux/UserInfo";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { send_request } from '../send_request';
import SellerProf from './SellerProf';

function ProfilePage(props) {

    const user_info = useSelector((state) => state.UserInfo);

    if(user_info.user_type == "user")
        return 
    else if((user_info.user_type == "seller"))
        return <SellerProf />
    else if(user_info.user_type == "admin")
        return
}
export default ProfilePage;