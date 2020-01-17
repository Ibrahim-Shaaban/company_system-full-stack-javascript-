import { combineReducers } from "redux";
import alert from "./alert";
import company from "./company";

const reducer = combineReducers({ alert, company });

export default reducer;
