import React from 'react';

function DropDownBrands(props) {

    let brands = []
    for (var i = 0; i < props.brands_list.length; i++) {
        brands.push(<li key={i} >{props.brands_list[i]}</li>);
    }

    return (
        <div className='DropDownBrand_container'>
            <div>{props.category}</div>
            <ul>
                {brands}
            </ul>
        </div>
    );

}
export default DropDownBrands;