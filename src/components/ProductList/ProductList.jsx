import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import getProducts from "../../api";

const ProductList = () => {
        const [products, setProducts] = useState([]);
        if (products.length === 0)
            try {
                getProducts(setProducts)
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
