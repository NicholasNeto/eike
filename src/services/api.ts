import axios from 'axios';

const NEWS_API_KEY = '50b1dd50b09b45c6afe263b7790b4c56';
const eikeAxios = axios.create({
    baseURL: 'https://newsapi.org/v2'
});

eikeAxios.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apiKey: NEWS_API_KEY
    };
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

type getNewsOpts = { companyName: string, numberOfPages: number, from: Date, to: Date };

const getNewsByCompanyName = (opts: getNewsOpts):any => {
    console.log("getNewsByCompanyName", opts.companyName);
    return eikeAxios.get('/everything', {params:
            {q: opts.companyName, pageSize: opts.numberOfPages, from: opts.from, to: opts.to, sortBy: "publishedAt"}
    });
};

export {eikeAxios, getNewsByCompanyName};
