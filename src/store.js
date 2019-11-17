import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postsReducer } from "./reducers";
const store = createStore(
  combineReducers({
    posts: postsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
