import {USER_PROFILE_LOADING, USER_PROFILE_SUCCESS} from '../actions/types';

const initialState = {
    user : null,
    isLoading : false,
}

export default function profile(state = initialState , action) {
    switch(action.type) {
        case USER_PROFILE_LOADING : {
            return {
                ...state,
                isLoading : true
            }
        }
        case USER_PROFILE_SUCCESS : {
            return {
                ...state,
                user : action.data,
                isLoading : false,
            }
        }
        default : return state;
    }
}