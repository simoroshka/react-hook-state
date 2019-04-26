export const initialState = {
  loading: false,
  nickname: ""
};

export const actions = {
  fetch: () => ({ type: "FETCH_PROFILE" }),
  fetched: payload => ({ type: "FETCH_PROFILE_SUCCESS", payload }),
  changeNickname: value => ({ type: "CHANGE_NICKNAME", value })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return { ...state, loading: true };
    case "FETCH_PROFILE_SUCCESS":
      return { ...action.payload, loading: false };
    case "CHANGE_NICKNAME":
      return { ...state, nickname: action.value };
    default:
      return state;
  }
};

export const register = (globalState, globalActions) => {
  globalState.profile = initialState;
  globalActions.profile = actions;
};
