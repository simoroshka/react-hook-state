import {
  register as profilesRegister,
  reducer as profilesReducer
} from "./profilesReducer";

export const initialState = {};
export const actions = {};

// attach itself to the store
profilesRegister(initialState, actions);

export const reducer = (state, action) => {
  return {
    profiles: profilesReducer(state.profiles, action)
  };
};
