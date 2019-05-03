export const initialState = {
  loading: false,
  profiles: []
};

export const actions = {
  fetch: () => ({ type: "FETCH_PROFILE" }),
  fetched: payload => ({ type: "FETCH_PROFILE_SUCCESS", payload }),
  changeNickname: (profileID, value) => ({
    type: "CHANGE_NICKNAME",
    payload: { profileID, value }
  })
};

export const reducer = (state, action) => {
  console.log("profile reducer state", state);
  switch (action.type) {
    case "FETCH_PROFILES":
      return { ...state, loading: true };
    case "FETCH_PROFILES_SUCCESS":
      return { profiles: action.payload, loading: false };
    case "CHANGE_NICKNAME":
      console.log(action);
      const profiles = [...state];
      profiles[action.payload.profileID].nickname = action.payload.value;
      return profiles;
    default:
      return state;
  }
};

export const register = (globalState, globalActions) => {
  if (!globalState.profiles) globalState.profiles = initialState;
  globalActions.profiles = actions;
};
