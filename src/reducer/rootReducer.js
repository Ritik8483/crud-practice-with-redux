import { combineReducers } from "redux";
import { userReducer } from "./reducer";

export const rootReducer=combineReducers({
    userRed:userReducer
})