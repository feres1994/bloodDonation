import { createStore, combineReducers } from "redux";
import { postsReducer } from "./reducers";
const store = createStore(
  combineReducers({
    posts: postsReducer
  })
);

export default store;
