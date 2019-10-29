import axios from 'axios';

const NEWS_API_KEY = '50b1dd50b09b45c6afe263b7790b4c56';
axios.defaults.params = {
    'apiKey': NEWS_API_KEY,
    'country': 'us'
};

const eikeAxios = axios.create({
    baseURL: 'https://newsapi.org/v2'
});



export { eikeAxios };