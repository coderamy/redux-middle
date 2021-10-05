import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducers from "./reducers";

const firstmiddleware = (state) => (next) => (action) => {
    //console.log(store.getState().countReducers)
  if (store.getState().countReducers >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};

const store = createStore(
  rootReducers,
  applyMiddleware(firstmiddleware, thunk)
);

export default store;
