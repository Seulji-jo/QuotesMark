import axios from 'axios';

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
    config.baseURL = pathName;
    return config;
  },
  err => Promise.reject(err)
);

export default instance;
