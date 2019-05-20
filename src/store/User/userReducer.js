export const initialState = {
  currentProfileID: 0
};

export const actions = {
  fetch: () => ({ type: "FETCH_USER" }),
  fetched: payload => ({ type: "FETCH_USER_SUCCESS", payload }),
  setCurrentProfile: profileID => ({
    type: "CHANGE_CURRENT_PROFILE",
    payload: { profileID }
  }),
  updateStart: () => ({ type: "UPDATE_REQUEST_SENT" }),
  updateFinished: () => ({ type: "UPDATE_FINISHED" }),
  login: payload => ({ type: "LOGIN_SUCCESS", payload })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "UPDATE_REQUEST_SENT":
      return { ...state, isUpdating: true };
    case "UPDATE_FINISHED":
      return { ...state, isUpdating: false };
    case "CHANGE_CURRENT_PROFILE":
      return { ...state, currentProfileID: action.payload.profileID };
    default:
      return state;
  }
};

export const register = (globalState, globalActions) => {
  if (!globalState.user) globalState.user = initialState;
  globalActions.user = actions;
};
