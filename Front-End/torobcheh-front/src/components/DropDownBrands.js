import React from 'react';
import { Link } from 'react-router-dom';

function DropDownBrands(props) {

    let brands = []
    for (var i = 0; i < props.brands_list.length; i++) {
        brands.push(<li key={i} >{props.brands_list[i]}</li>);
    }

    return (
        <div className='DropDownBrand_container'>
            <div>{props.category}</div>
            <Link style={{ all: "unset", cursor: "pointer" }} to={`/products`}>  
                <ul>
                    {brands}
                </ul>
            </Link>
        </div>
    );

}
export default DropDownBrands;