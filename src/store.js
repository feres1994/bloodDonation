import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postsReducer,commentReducer } from "./reducers";
const store = createStore(
  combineReducers({
    posts: postsReducer,
    comment : commentReducer
    
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
