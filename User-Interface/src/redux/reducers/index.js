import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  ThemeReducer: ThemeReducer,
  user:userReducer,
});

export default rootReducer;
