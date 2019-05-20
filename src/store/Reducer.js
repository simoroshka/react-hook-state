import {
  register as profilesRegister,
  reducer as profilesReducer
} from "./Profiles/profilesReducer";
import {
  register as userRegister,
  reducer as userReducer
} from "./User/userReducer";

export const initialState = {};
export const actions = {};

// attach itself to the store
profilesRegister(initialState, actions);
userRegister(initialState, actions);

export const reducer = (state, action) => {
  console.log("run reducer", action);
  switch (action.type) {
    case "UPDATE_STATE_FROM_LOCAL_STORAGE":
      return action.newState;
    case "RESET_STATE":
      return initialState;
    default:
      return {
        ...state,
        profiles: profilesReducer(state.profiles, action),
        user: userReducer(state.user, action)
      };
  }
};
