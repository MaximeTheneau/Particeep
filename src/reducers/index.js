import { combineReducers } from "redux";
import header from "./header";

const rootReducer = combineReducers({
  header: header,
});

export default rootReducer;
