import React from 'react';
import ProductBriefCard from './ProductBriefCard';

class ProductBriefCardContainer extends React.Component {

    render() {

        const cardComponents = [];
        const products_data = this.props.products_data;
        let category = 'موبایل'
        let sub_category = 'اپل'

        for (var i = 0; i < products_data.length; i++) {
            cardComponents.push(<ProductBriefCard key={i} noLike={this.props.noLike} img={products_data.image} name={products_data.name} price={products_data.price} shop={products_data.shop} />);
        }

        if (this.props.show_headers)
            return (
                <div className='ProductBriefCard_container'>
                    <div className='sortby_div'>
                        <select>
                            <option value="" selected disabled>مرتب بر اساس</option>
                            <option value="cheapest">ارزان ترین</option>
                            <option value="most_expensive">گران ترین</option>
                            <option value="newest">جدید ترین</option>
                        </select>
                        <span>
                            {category} / {sub_category}
                        </span>
                    </div>
                    <div className='products_container'>
                        {cardComponents}
                    </div>
                </div>
            );

        return (
            <div className='ProductBriefCard_container'>
                <div className='products_container'>
                    {cardComponents}
                </div>
            </div>
        );
    };
}
export default ProductBriefCardContainer;