import { useContext } from "react";
import { StoreContext } from "../GlobalStore";
import useEnhancedProfile from "./useEnhancedProfile";

export const useCurrentProfile = () => {
  const { state, actions, dispatch } = useContext(StoreContext);

  const currentProfileID = state.user.currentProfileID;

  const profile = useEnhancedProfile(state.profiles[currentProfileID]);

  return {
    ...profile
  };
};
