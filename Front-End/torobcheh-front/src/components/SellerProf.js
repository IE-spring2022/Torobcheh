import React from 'react';
// import { useDispatch } from "react-redux";
// import { login, logout } from "../redux/UserInfo";
// import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import { send_request } from '../send_request';
import AddProduct from './AddProduct';

function SellerProf(props) {

    return(
        <div className='prof_container' id='seller_prof_container'>
            <AddProduct />
            <Link to={'/'}>بازگشت به صفحه اصلی</Link>
        </div>
    );
}
export default SellerProf;