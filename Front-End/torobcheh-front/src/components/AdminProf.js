import React from 'react';
// import { useDispatch } from "react-redux";
// import { login, logout } from "../redux/UserInfo";
// import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { send_request } from '../send_request';

async function admin_req_handler(method, url, body) {

    let res;
    try {
        res = await send_request(method, url, body);
        console.log('res:', res);
    }
    catch (e) {
        console.log('admin prof: oops ...');
    }
    if (res[0]) {
        // success
        console.log('admin prof: success')
        alert('added successfully')
    }
    else
        alert(res[1]);
}


function AdminProf(props) {

    return (
        <div id='adminProf_container'>
            <div className="AddProduct_container">
                <div className='title_in_prof'>
                    اضافه کردن ویژگی کالا
                    <hr></hr>
                </div>
                <div id='addprod_form_div'>
                    <input id='atr_name' type={'text'} placeholder={'نام ویژگی'} required />
                </div>
                <div className='add_atr_button_div'>
                    <button type='button'
                        onClick={async () => await admin_req_handler("POST", 'attributes'
                            , JSON.stringify({
                                name: document.getElementById("atr_name").value
                            }))}>
                        افزودن
                    </button>
                </div>
            </div>

            <div className="AddProduct_container">
                <div className='title_in_prof'>
                    اضافه کردن برند
                    <hr></hr>
                </div>
                <div id='addprod_form_div'>
                    <input id='brand_name' type={'text'} placeholder={'نام برند'} required />
                </div>
                <div className='add_brand_button_div'>
                    <button type='button'
                        // onClick={async () => await admin_req_handler("POST", 'attributes'
                        //     , JSON.stringify({
                        //         name: document.getElementById("atr_name").value
                        //     }))}
                    >
                        افزودن
                    </button>
                </div>
            </div>
            <Link to={'/'}>بازگشت به صفحه اصلی</Link>
        </div>

    );

}
export default AdminProf;