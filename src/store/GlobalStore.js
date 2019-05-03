import React, { useReducer, useEffect } from "react";
import { reducer, initialState as defaultState, actions } from "./reducers";

window.localStorage.setItem(
  "dybruser",
  JSON.stringify({
    profiles: [{ nickname: "profile 1" }, { nickname: "profile 2" }]
  })
);

// global store context, single source of truth(TM)
export const StoreContext = React.createContext();

// initalising state from local storage
const initialState = {
  ...(window.localStorage.getItem("dybruser") === null
    ? defaultState
    : JSON.parse(window.localStorage.getItem("dybruser")))
};

// app wrapper to provide the state, actions and the dispatch function
export const StoreProvider = ({ children }) => {
  // combined reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
