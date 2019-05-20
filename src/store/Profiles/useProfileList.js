import { useContext } from "react";
import { StoreContext } from "../GlobalStore";

export const useProfileList = () => {
  const { state, actions, dispatch } = useContext(StoreContext);

  return state.profiles;
};
