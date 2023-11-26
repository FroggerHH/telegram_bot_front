import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import Api from "../../api.js";

const ProductList = () => {
        const [products, setProducts] = useState([]);
        if (products.length === 0)
            try {
                Api.getProducts(setProducts)
            } catch (e) {
                console.log(e)
            }

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
