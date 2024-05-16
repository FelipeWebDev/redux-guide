import UserActionTypes from "./action-types";

export const LoginUser = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload
})

export const LogoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})