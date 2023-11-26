import axios from 'axios'

class Api {
    static getProducts(setProducts)  {
        axios.get('http://just-a-frogger.site:8000/api/get-products').then(response => {
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
}

export default Api;
