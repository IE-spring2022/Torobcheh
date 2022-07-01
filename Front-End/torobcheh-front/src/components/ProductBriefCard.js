import React from 'react';


function ProductBriefCard(props) {

    if (props.noLike)
    return (
        <div className='ProductBriefCard'>
            <div className='ProductBriefCard_img_div'>
                <img src={props.img} alt={"cannot load"} />
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
        </div>
    );

    return (
        <div className='ProductBriefCard'>
            <div className='ProductBriefCard_img_div'>
                <img src={props.img} alt={"cannot load"} />
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
                {/* <img src={'./like_icon.jpg'} /> */}
                <button> افزودن به علاقمندی ها </button>
            </div>
        </div>
    );

}
export default ProductBriefCard;