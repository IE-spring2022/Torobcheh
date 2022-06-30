import React from 'react';


function ProductBriefCard(props) {

    return (
        <div className='ProductBriefCard'>
            <div className='ProductBriefCard_img_div'>
                <img src={props.img} alt={"cannot load image"} />
            </div>
            <div className='ProductBriefCard_title_div'>
                نام کالا
                {/* <Link style={{ all: "unset", cursor: "pointer" }} to={`/${props.cardData.id}`}>{props.cardData.title} </Link> */}
            </div>
            <div className='ProductBriefCard_price_div'>
                {`تومان ${props.price} از`}
            </div>
            <div className='ProductBriefCard_shopsNum_div'>
                {`فروشگاه ${props.shopsNum} در`}
            </div>
            <div className='ProductBriefCard_like_div'>
                <img src={'./like_icon.jpg'} />
            </div>
        </div>
    );

}
export default ProductBriefCard;