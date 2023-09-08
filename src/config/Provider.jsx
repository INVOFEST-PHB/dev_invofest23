// StateContext.js
import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

// Reducer untuk mengelola state aplikasi
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_POPUP':
      return { ...state, popup: action.value };
    case 'CHANGE_ISLOGIN':
      return { ...state, isLogin: action.value };
    default:
      return state;
  }
};

const initialState = {
  popup: false,
  isLogin: false
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
