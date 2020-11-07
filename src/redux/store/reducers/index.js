import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import resultReducer from "./resultReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultReducer,
});

export default rootReducer;
