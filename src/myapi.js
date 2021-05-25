import axios from 'axios';

export default {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            axios.get('https://gorest.co.in/public-api/products')
                .then(response => {
                    resolve(response.data.data);
                })
        });
    },
    products: (action, productId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productId);
            }, 100);
        });
    }
}