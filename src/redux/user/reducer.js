const initialState = {
    currentUser: null
}

const userReducer = (state, action) => {
    state = initialState;

    if (action.type === "user/login") {
        return {...state, currentUser: 10 };
    };

    return state;
}

export default userReducer;