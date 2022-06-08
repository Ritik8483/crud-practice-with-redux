import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";

const middleWare=[thunk];
if(process.env.NODE_ENV==="development"){
    middleWare.push(logger);
}
export const store=createStore(rootReducer,applyMiddleware(...middleWare));