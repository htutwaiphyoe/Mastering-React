import * as actionTypes from "./actionTypes";

const saveResult = (value) => {
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
