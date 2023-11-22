import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";


const ProductList = () => {
    return (
        <div className={'list'}>
            <ProductItem product={"Product"}/>
        </div>
    );
};

export default ProductList;
