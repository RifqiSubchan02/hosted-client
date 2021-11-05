import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import loginReducer from "./loginReducer";

const reducer = combineReducers({ globalReducer, loginReducer });

export default reducer;