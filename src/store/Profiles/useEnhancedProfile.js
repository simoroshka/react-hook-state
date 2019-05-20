import React, { useContext } from "react";
import { StoreContext } from "../GlobalStore";
import userActions from "../../actions/userActions";
import profileActions from "../../actions/profileActions";

export default function useEnhancedProfile(p) {
  const { state, actions, dispatch } = useContext(StoreContext);
  const { user } = state;
  if (!user || !user.loggedIn) return p;

  const setAsCurrentProfile = async profileID => {
    dispatch(actions.user.updateStart());
    const res = await userActions.update({ currentProfileID: profileID });
    if (res.status === "ok") {
      dispatch(actions.user.setCurrentProfile(profileID));
    }
    dispatch(actions.user.updateFinished());
  };

  const changeNickname = async nickname => {
    dispatch(actions.user.updateStart());
    const res = await profileActions.update({ nickname });
    if (res.status === "ok") {
      dispatch(actions.profiles.changeNickname(p.id, nickname));
    }
    dispatch(actions.user.updateFinished());
  };

  return {
    ...p,
    isCurrent: p.id === user.currentProfileID,
    isUpdating: user.isUpdating || p.isUpdating,
    setAsCurrent: () => setAsCurrentProfile(p.id),
    changeNickname: nickname => changeNickname(nickname)
  };
}
