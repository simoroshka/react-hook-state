import { useContext, useEffect } from "react";
import { StoreContext } from "../GlobalStore";

export const useCurrentProfile = () => {
  const { state, actions, dispatch } = useContext(StoreContext);
  // if you need, use actions
  // you have access to the whole store and all global app actions
  useEffect(fetchProfile, []);

  function fetchProfile() {
    dispatch(actions.profile.fetch());
    setTimeout(() => {
      dispatch(
        actions.profile.fetched({
          nickname: "user" + Math.floor(Math.random() * 1000)
        })
      );
    }, 1000);
  }

  function changeNickname(value) {
    console.log("vaölue", value);
    dispatch(actions.profile.changeNickname(value));
  }

  return {
    ...state.profile,
    fetch: fetchProfile,
    changeNickname
  };
};
