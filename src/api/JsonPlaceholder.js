import axios from "axios";

const jsonplaceholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
jsonplaceholder.defaults.headers.common["Authorization"] = "Bearer";
jsonplaceholder.interceptors.request.use((config) => {
    return config;
});

export default jsonplaceholder;
