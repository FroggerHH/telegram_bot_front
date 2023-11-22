import React, {useCallback, useEffect, useState} from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
import getProducts from "../../api";

const ProductList = () => {
        const {tg} = useTelegram();
        const [products, setProducts] = useState([]);
        if (products.length === 0)
            try {
                getProducts(setProducts)
            } catch (e) {
                console.log(e)
            }

        const onSendData = useCallback(() => {
            try {
            } catch (e) {
                console.log(e)
            }
        }, [])


        useEffect(() => {
                try {
                    tg.onEvent('mainButtonClicked', onSendData)
                    tg.offEvent('mainButtonClicked', onSendData)
                } catch
                    (e) {
                    console.log(e)
                }
            },
            [onSendData, tg]
        )

        return (
            <div className={'list'}>
                {products.map(item => (
                    <ProductItem product={item} className={'item'} key={item.id}/>
                ))}
            </div>
        );
    }
;

export default ProductList;
