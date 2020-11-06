const redux = require("redux");

// State
const initialState = {
    counter: 0,
};

// Action
const actionCreator = (type, payload) => {
    return {
        type,
        payload,
    };
};

// Reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    if (action.type === "ADD") {
        return {
            ...state,
            counter: state.counter + action.payload,
        };
    }
    return state;
};

// Store

const store = redux.createStore(rootReducer);
console.log(store.getState());

// Subscription

store.subscribe(() => {
    console.log("Subscription", store.getState());
});
// Dispatcher

store.dispatch(actionCreator("INC"));
store.dispatch(actionCreator("ADD", 10));
console.log(store.getState());
