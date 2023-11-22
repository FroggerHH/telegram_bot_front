import React, {useCallback, useEffect} from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";

const axios = require('axios');


const ProductList = () => {
        const {tg} = useTelegram();
        let products = []
        try {
            const apiUrl = 'http://5.35.9.71:8000/api/get-products';
            axios.get(apiUrl)
                .then(response => {
                    console.log('Ответ от сервера:', response.data);
                    products = JSON.parse(response.data)
                    console.log(products)
                })
                .catch(error => {
                    console.error('Ошибка при отправке запроса:', error);
                    products =
                        [{
                            id: 1,
                            title: 'Товар 1',
                            description: 'Описание 1',
                            price: 1000
                        }]
                });
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
