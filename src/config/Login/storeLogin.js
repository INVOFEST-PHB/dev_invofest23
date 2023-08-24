import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import reducer from "./reducerLOgin";
  
export const Store = createStore(reducer, applyMiddleware(thunk));

 