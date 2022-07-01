import React from 'react';
import ProductBriefCard from './ProductBriefCard';

class ProductBriefCardContainer extends React.Component {

    render() {

        const cardComponents = [];
        // const cardsData = this.props.cardsData;
        // TODO
        const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let category = 'موبایل'
        let sub_category = 'اپل'

        for (var i = 0; i < cardsData.length; i++) {
            cardComponents.push(<ProductBriefCard key={i} />);
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