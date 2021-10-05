import { combineReducers } from "redux";
import postReducers from "./postReducers";
import countReducers from "./countReducers"

const rootReducers = combineReducers({
    postReducers,
    countReducers
});

export default rootReducers;