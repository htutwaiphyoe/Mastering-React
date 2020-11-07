import * as actionTypes from "../actions/actionTypes";
const initialState = {
    results: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE:
            return {
                ...state,
                results: [...state.results, { id: Date.now(), value: action.payload }],
            };
        case actionTypes.DELETE:
            return {
                ...state,
                results: state.results.filter((result) => result.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
