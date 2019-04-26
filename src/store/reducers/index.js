import {
  register as profileRegister,
  reducer as profileReducer
} from "./profileReducer";

export const initialState = {};
export const actions = {};

// attach itself to the store
profileRegister(initialState, actions);

export const reducer = (state, action) => {
  return {
    profile: profileReducer(state.profile, action)
  };
};
