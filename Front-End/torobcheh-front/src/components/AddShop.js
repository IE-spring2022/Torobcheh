import React from 'react';
// import { useDispatch } from "react-redux";
// import { login, logout } from "../redux/UserInfo";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { send_request } from '../send_request';
import { send_request } from '../send_request';

async function addshop_handler(method, url, body) {

    let res;
    try {
        res = await send_request(method, url, body);
        console.log('res:', res);
    }
    catch (e) {
        console.log('add shop: oops ...');
    }
    if (res[0]) {
        // success
        console.log('add shop success')
        alert('added successfully');
    }
    else
        alert(res[1]);
}

function AddShop(props) {

    const user_info = useSelector((state) => state.UserInfo);

    return (
        <div className="AddProduct_container">
            <div className='title_in_prof'>
                اضافه کردن فروشگاه
                <hr></hr>
            </div>
            <div id='addprod_form_div'>
                <input id='shop_name' type={'text'} placeholder={'نام فروشگاه'} required />
                <input id='shop_desc' type={'text'} placeholder={'توضیحات'} required />
            </div>
            <div className='add_shop_button_div'>
                <button type='button'
                    // onClick={async () => await addshop_handler("POST", 'sellers/add_shop'
                    onClick={async () => await addshop_handler("POST", 'shops'
                        , JSON.stringify({
                            name: document.getElementById("shop_name").value
                            , seller: user_info.user_id
                            , text: document.getElementById("shop_desc").value
                        }))}
                    id='addshop_button'>
                    افزودن
                </button>
            </div>
        </div>
    );

}
export default AddShop;