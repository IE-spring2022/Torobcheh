import React from 'react';

function DropDownBrands(props) {

    let mobile_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let tablet_brands = ['سامسونگ', 'شیائومی', 'اپل'];
    let laptop_brands = ['لنوو', 'ایسوس', 'اپل'];

    let category = 'گوشی موبایل';
    let brands = []
    for (var i = 0; i < mobile_brands.length; i++) {
        brands.push(<li key={i} >{mobile_brands[i]}</li>);
    }

    return (
        <div className='DropDownBrand_container'>
            <div>{category}</div>
            <ul>
                {brands}
            </ul>
        </div>
    );

}
export default DropDownBrands;