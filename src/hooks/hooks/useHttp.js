import { useReducer, useCallback } from "react";
const httpReducer = (httpState, action) => {
    switch (action.type) {
        case "FETCH":
            return { ...httpState, loading: true };
        case "FINISH":
            return { ...httpState, loading: false, response: action.payload };
        case "ERROR":
            return { ...httpState, loading: false, error: action.payload };
        default:
            throw new Error("Unknown action");
    }
};

const useHttp = () => {
    const [http, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
        response: null,
    });
    const errorHandler = useCallback((status) => {
        dispatchHttp({ type: "ERROR", payload: status });
    }, []);
     const loadingHandler = useCallback((status) => {
         dispatchHttp({ type: "FETCH", payload: status });
     }, []);


    const sendRequest = useCallback((config) => {
        dispatchHttp({ type: "FETCH" });
        fetch(config.url, {
            method: config.method,
            body: config.body && JSON.stringify(config.body),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                
                dispatchHttp({
                    type: "FINISH",
                    payload: { ...data, action: config.action },
                });
            })
            .catch((e) => {
                dispatchHttp({ type: "ERROR", payload: e });
            });
    }, []);

    return {
        loading: http.loading,
        error: http.error,
        response: http.response,
        sendRequest: sendRequest,
        errorHandler,
        loadingHandler,
    };
};

export default useHttp;
