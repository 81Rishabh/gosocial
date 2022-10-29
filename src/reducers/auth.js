import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  AUTHENTICATED_USER,
  LOGOUT,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED
} from "../actions/types";

const initialAuthState = {
  user: {},
  isLoggedin: false,
  isRegistered: false,
  isUpdated : false,
  isProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isProgress: true,
      };
    }
    case LOGIN_SUCCESS: {
      const { token } = action.data;
      localStorage.setItem("token", token);
      return {
        ...state,
        user: action.data.user,
        isLoggedin: true,
        isProgress: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isProgress: false,
      };
    }
    case AUTHENTICATED_USER: {
      return {
        ...state,
        isLoggedin: true,
        user: action.user,
      };
    }
    //  SIGN UP CASE
    case SIGNUP_START: {
      return {
        ...state,
        isProgress: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        isProgress: false,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        isRegistered: false,
        isProgress: false,
      };
    }
    case LOGOUT : {
        return {
           isLoggedin : false,
           user : {} 
        }
    }
    case UPDATE_PROFILE_START: {
       return {
         ...state,
         isProgress : true
       }
    }
    case UPDATE_PROFILE_SUCCESS: {
        return {
          ...state,
          isLoggedin : false,
          isUpdated : true,
          isProgress: false
        }
    }
    case UPDATE_PROFILE_FAILED: {
        return {
          ...state,
          isUpdated : false,
          isProgress : false
        }
    }
    default: return state;
   }
}
