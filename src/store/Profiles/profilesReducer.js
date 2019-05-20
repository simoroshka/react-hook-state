export const initialState = {
  loading: false,
  profiles: []
};

export const actions = {
  fetch: () => ({ type: "FETCH_PROFILES" }),
  fetched: payload => ({ type: "FETCH_PROFILE_SUCCESS", payload }),
  changeNickname: (profileID, value) => {
    console.log("CHANGE_NICKNAME", profileID, value);

    return {
      type: "CHANGE_NICKNAME",
      payload: { profileID, value }
    };
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROFILES":
      return { ...state, loading: true };
    case "FETCH_PROFILES_SUCCESS":
      return { profiles: action.payload, loading: false };
    case "CHANGE_NICKNAME":
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
