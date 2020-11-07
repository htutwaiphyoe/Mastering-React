import * as actionTypes from "../actions/actionTypes";
const initialState = {
    counter: 0,
    results: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INC:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case actionTypes.DEC:
            return {
                ...state,
                counter: state.counter - 1,
            };

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        case actionTypes.STORE:
            return {
                ...state,
                results: [...state.results, { id: Date.now(), value: state.counter }],
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
