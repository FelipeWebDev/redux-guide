import UserActionTypes from "../../redux/user/action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state, action) => {
  state = initialState;

  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
