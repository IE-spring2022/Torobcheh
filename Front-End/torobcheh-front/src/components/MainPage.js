import React from 'react';

import Header from './Header';
import { useSelector } from "react-redux";


function MainPage(props) {

    

    return (
        <div className="MainPage_container">
            <Header/>

            <div className='logo_div'>
                تربچه
            </div>

            <div className='search_input_div'>
                <input className='search_input' type={'text'} placeholder={'نام کالا را وارد کنید'}/>
            </div>
        </div>
      );

}
export default MainPage;