import React, {useCallback, useEffect} from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
        const {tg} = useTelegram();
        let products = []
        try {
            const request = new XMLHttpRequest()
            request.responseType = 'json'
            request.open('GET', 'http://localhost:3001/products')
            console.log(`Sending request..., request: `, request)
            request.send()
            products = JSON.parse(request.response)
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
