import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers";
const store = createStore(
  combineReducers({
    users: userReducer
  })
);

export default store;
