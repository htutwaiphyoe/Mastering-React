import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./hooks/App";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./redux/store/reducers";
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
// Customer Middleware
const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("Dispatch", action);
            const result = next(action);
            console.log("New state", store.getState(), result);
            return result;
        };
    };
};
// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));
ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
