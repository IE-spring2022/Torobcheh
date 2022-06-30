import React from 'react';
import ProductBriefCard from './ProductBriefCard';

class ProductBriefCard_container extends React.Component {

    render() {

        const cardComponents = [];
        // const cardsData = this.props.cardsData;
        // TODO
        const cardsData = [1,2,3,4,5,6,7,8,9];

        for (var i = 0; i < cardsData.length; i++) {
            cardComponents.push(<ProductBriefCard key={i} />);
        }

        return (
            <div className='ProductBriefCard_container'>
                {cardComponents}
            </div>
        );
    };
}
export default ProductBriefCard_container;