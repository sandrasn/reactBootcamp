import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./user";
import { postsReducer } from "./posts";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  postsReducer
});

export default rootReducer;
