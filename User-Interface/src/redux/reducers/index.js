import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  ThemeReducer: ThemeReducer,
});

export default rootReducer;
