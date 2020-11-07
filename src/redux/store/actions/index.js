import * as actionTypes from "./actionTypes";
export const incrementCounter = () => {
    return {
        type: actionTypes.INC,
    };
};

export const decrementCounter = () => {
    return {
        type: actionTypes.DEC,
    };
};

export const addCounter = (value) => {
    return {
        type: actionTypes.ADD,
        payload: value,
    };
};

export const substractCounter = (value) => {
    return {
        type: actionTypes.SUB,
        payload: value,
    };
};

export const storeResult = () => {
    return {
        type: actionTypes.STORE,
    };
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE,
        payload: id,
    };
};
