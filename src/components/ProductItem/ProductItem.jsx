import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product}) => {
    return (
        <div className={'product'}>
            <img className={'product-img'} src={product?.image} alt={''}/>
            <div className={'title'}>{product?.title}</div>
            <div className={'description'}>{product?.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product?.price}</b></span>
            </div>
            <Button className={'add-btn'}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;
