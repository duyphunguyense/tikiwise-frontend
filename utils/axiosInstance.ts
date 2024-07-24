import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: "https://vercel.com/duys-projects-3838500a/tikiwise-backend/63g4yTXXjGnLLueECRB2t5MvQBED"
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