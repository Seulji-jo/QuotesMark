import axios from 'axios';

const openApiUrl = {
  en: 'https://api.forismatic.com/api/1.0/',
  kr: 'https://api.qwer.pw/docs/helpful_text',
};

const pathName = window.location.pathname.slice(1);
console.log(pathName);

const axiosConfig = {
  baseURL: openApiUrl[pathName],
  timeout: 5000,
  header: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

export default instance;
