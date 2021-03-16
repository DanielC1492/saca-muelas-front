import { LOGIN, LOGOUT } from '../types/userTypes'

const initialState = {
    client: {}
};

const  userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                client: action.payload
            }
                
        default:
            return state;
    }
}

export default userReducer