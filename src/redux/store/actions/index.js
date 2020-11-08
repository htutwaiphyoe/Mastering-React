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

export const saveResult = (value) => {
    return {
        type: actionTypes.STORE,
        payload: value,
    };
};
export const storeResult = (value) => (dispatch) => {
    setTimeout(() => {
        dispatch(saveResult(value));
    }, 2000);
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE,
        payload: id,
    };
};
