import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fsd-ictak-intern-portal.onrender.com', 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('userToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
