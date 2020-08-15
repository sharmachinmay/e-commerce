import UserActionTypes from "./user.types";

const INTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.setCurrentUser:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;