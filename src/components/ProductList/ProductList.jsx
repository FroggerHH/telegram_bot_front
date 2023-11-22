import React, {useCallback, useEffect} from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]


const ProductList = () => {
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        try {
            const data = JSON.stringify({products: [], totalPrice: 50, queryId})
            fetch('http://192.168.0.78:8000/api/web-data', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: data
            }).then(r => () => {
                console.log(`Response: ${r}`)
            })
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
        }, []
    )


    return (
        <div className={'list'}>
            <ProductItem product={products[0]} className={'item'}/>
        </div>
    );
};

export default ProductList;
