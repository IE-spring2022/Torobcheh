import React from 'react';

import Header from './Header';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { set_query } from "../redux/UserInfo";


async function search_handler(query, my_dispatch) {
    await my_dispatch(set_query({query: query}));
    console.log('serch handler:',query);
}

function MainPage(props) {  

    const my_dispatch = useDispatch();
    const user_info = useSelector((state) => state.UserInfo);
    console.log(user_info);
    if (user_info.search_query)
        return (<Navigate to={"/products"} />);

    return (
        <div className="MainPage_container">
            <Header/>

            <div className='logo_div'>
                تربچه
            </div>

            <div className='search_input_div'>
                <input id="search_bar" className='search_input' type={'text'} placeholder={'نام کالا را وارد کنید'}/>
                <div>
                    <button type={'button'}
                        onClick={ async () => await search_handler(document.getElementById("search_bar").value, my_dispatch)}
                    >جست و جو</button>
                </div>
            </div>
        </div>
      );

}
export default MainPage;