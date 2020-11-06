const redux = require("redux");

// State

const initialState = {
    counter: 0,
};
// Reducers
const rootReducer = (state = initialState, action) => {
    
    return state;
};

// Action
const actionCreator = (type, payload) => {
    return {
        type,
        payload,
    };
};

const store = redux.createStore(rootReducer);

store.dispatch(actionCreator("INC"));
store.dispatch(actionCreator("ADD", 5));
console.log(store.getState());
