import axios from 'axios';

const openApiUrl = {
  en: 'https://api.forismatic.com/api/1.0/',
  kr: 'https://api.qwer.pw/docs/helpful_text',
};

const axiosConfig = {
  timeout: 5000,
  header: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);
instance.interceptors.request.use(
  config => {
    const pathName = window.location.pathname.slice(1);
    config.baseURL = `https://cors-anywhere.herokuapp.com/${openApiUrl[pathName]}`;
    return config;
  },
  err => Promise.reject(err)
);

export default instance;
