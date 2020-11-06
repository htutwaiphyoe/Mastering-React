const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    return state;
};

export default reducer;
