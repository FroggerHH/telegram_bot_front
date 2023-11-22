import React, {useCallback, useEffect, useState} from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";


const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    let products = []
    try {
        fetch('http://5.35.9.71:8000/api/get-products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(r => {
            console.log(`Get products response: ${r}`)
            products = r.json()
        })
    } catch (e) {
        console.log(e)
    }

    const onSendData = useCallback(() => {
        try {
            const data = {
                products: addedItems,
                totalPrice: getTotalPrice(addedItems),
                queryId,
            }
            fetch('http://5.35.9.71:8000/api/web-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(r => () => {
                console.log(`Web data response: ${r}`)
            })
        } catch (e) {
            console.log(e)
        }
    }, [addedItems, queryId])


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


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem product={item} onAdd={onAdd} className={'item'} key={item.id}/>
            ))}
        </div>
    );
};

export default ProductList;
