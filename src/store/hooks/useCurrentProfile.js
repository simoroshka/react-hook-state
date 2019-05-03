import { useContext, useEffect } from "react";
import { StoreContext } from "../GlobalStore";

export const useCurrentProfile = () => {
  const { state, actions, dispatch } = useContext(StoreContext);

  //const currentProfile = state.user.currentProfileID;
  const currentProfile = 0;

  // if you need, use actions
  // you have access to the whole store and all global app actions

  function fetchProfile() {
    dispatch(actions.profiles.fetch());
    setTimeout(() => {
      dispatch(
        actions.profiles.fetched([
          {
            nickname: "user" + Math.floor(Math.random() * 1000)
          }
        ])
      );
    }, 1000);
  }

  function changeNickname(value) {
    dispatch(actions.profiles.changeNickname(currentProfile, value));
  }

  return {
    ...state.profiles[0],
    fetch: fetchProfile,
    changeNickname
  };
};
