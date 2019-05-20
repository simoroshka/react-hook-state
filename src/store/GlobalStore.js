import React, { useReducer, useEffect } from "react";
import { reducer, initialState as defaultState, actions } from "./Reducer";
/*
window.localStorage.setItem(
  "dybruser",
  JSON.stringify({
    user: { currentProfileID: 0, loggedIn: true },
    profiles: [
      { nickname: "profile 1", id: 0 },
      { nickname: "profile 2", id: 1 },
      { nickname: "profile 3", id: 2 }
    ]
  })
);*/

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

  useEffect(
    function saveStateToLocalStorage() {
      console.log("save to local storage");
      window.localStorage.setItem("dybruser", JSON.stringify(state));
    },
    [state]
  );

  const updateStateFromLocalStorage = () => {
    const newState = {
      ...(window.localStorage.getItem("dybruser") === null
        ? defaultState
        : JSON.parse(window.localStorage.getItem("dybruser")))
    };
    dispatch({ type: "UPDATE_STATE_FROM_LOCAL_STORAGE", newState });
  };

  useEffect(function watchForChanges() {
    window.addEventListener("storage", updateStateFromLocalStorage);
    return () => {
      window.removeEventListener("storage", updateStateFromLocalStorage);
    };
  }, []);

  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
