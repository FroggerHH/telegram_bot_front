import React, {useCallback, useEffect} from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
        const {tg} = useTelegram();
        let products = []

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
            }, [onSendData, tg]
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
