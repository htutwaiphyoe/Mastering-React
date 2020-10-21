import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./http/App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "Auth Token";
axios.defaults.headers.post["Content-Type"] = "application/json";
const requestInterceptor = axios.interceptors.request.use(
    (config) => {
        console.log(config);
        return Promise.resolve(config);
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);
axios.interceptors.request.eject(requestInterceptor);

const responseInterceptor = axios.interceptors.response.use(
    (config) => {
        console.log(config);
        return Promise.resolve(config);
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);
axios.interceptors.response.eject(responseInterceptor);
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
