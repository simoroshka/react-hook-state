import React, { useReducer } from "react";
import { reducer, initialState, actions } from "./reducers";

// global store context, single source of truth(TM)
export const StoreContext = React.createContext();

// app wrapper to provide the state, actions and the dispatch function
export const StoreProvider = ({ children }) => {
  // combined reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
