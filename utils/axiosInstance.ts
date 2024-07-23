import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: "http://localhost:8000"
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
AxiosInstance.interceptors.response.use(function (response) {

    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default AxiosInstance;