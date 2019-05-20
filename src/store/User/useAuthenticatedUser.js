import { useContext, useEffect } from "react";
import { StoreContext } from "../GlobalStore";
import axios from "axios";

export const useAuthenticatedUser = () => {
  const {
    state,
    actions: { profiles, user },
    dispatch
  } = useContext(StoreContext);

  // if you need, use actions
  // you have access to the whole store and all global app actions

  async function login() {
    // call the api
    const id = 1;
    const token = "AAA";
    // set the axios token here ?

    console.log(axios);
    dispatch(user.login({ id, token }));
  }

  function logout() {
    dispatch({ type: "RESET_STATE" });
  }

  async function initUserStore() {
    // load all data after login
    /* dispatch(profiles.startFetch());
    const profiles = await profileAPI.fetch();
    dispatch(profiles.fetched(profiles));
    */
  }

  function isLoggedIn() {
    return state.user && state.user.token;
  }

  return {
    ...state.user,
    isLoggedIn: state.user && state.user.token,
    login,
    logout
  };
};

export default useAuthenticatedUser;
