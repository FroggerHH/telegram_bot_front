import axios from 'axios'

const getProducts = (setProducts) => {
    axios.get('http://5.35.9.71:8000/api/get-products').then(response => {
        setProducts(response.data)
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
        setProducts([{
                id: 1,
                title: 'Товар 1',
                description: 'Описание 1',
                price: 1000
            }])
    });
}

export default getProducts;
