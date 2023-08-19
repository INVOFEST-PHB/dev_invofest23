import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import reducer from "./reducerLOgin";
  
const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;