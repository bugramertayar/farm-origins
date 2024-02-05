import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: '',
  timeout: 5000
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
