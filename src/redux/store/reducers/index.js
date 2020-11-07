const initialState = {
    counter: 0,
    results: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1,
            };

        case "ADD":
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case "SUB":
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        case "STORE":
            return {
                ...state,
                results: [...state.results, { id: Date.now(), value: state.counter }],
            };
        case "DELETE":
            return {
                ...state,
                results: state.results.filter((result) => result.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
