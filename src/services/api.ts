import axios from 'axios';

const NEWS_API_KEY = '50b1dd50b09b45c6afe263b7790b4c56';
const eikeAxios = axios.create({
    baseURL: 'https://newsapi.org/v2'
});

eikeAxios.interceptors.request.use((config) => {
    config.url = config.url + "?apiKey=" + NEWS_API_KEY;
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

const getNewsByCompanyName = (companyName, numberOfPages) => {
    console.log("getNewsByCompanyName", companyName);
    return eikeAxios.get('/everything', {params: {q: companyName, pageSize: numberOfPages}});
}

export { eikeAxios , getNewsByCompanyName };
