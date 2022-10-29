import {
    ADD_FRIEND_REQUEST,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED,
    REMOVE_FRIEND_LOAD,
    REMOVE_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILED
  } from "../actions/types";


  const intialState = {
    isProgress : false,
    isFriend : false
  }

  export default function friendship(state = intialState , action) {
     switch(action.type) {
        case ADD_FRIEND_REQUEST : {
            return {
                ...state,
                isProgress : true
            }
        }
        case ADD_FRIEND_SUCCESS : {
            return {
                isProgress : false,
                isFriend : true
            }
        }
        case ADD_FRIEND_FAILED : {
            return {
                isProgress : false,
                isFriend : false
            }
        }
        case REMOVE_FRIEND_LOAD : {
            return {
                ...state,
                isProgress : true
            }
        }
        case REMOVE_FRIEND_SUCCESS : {
            return {
                ...state,
                isProgress : false,
            }
        }
        case REMOVE_FRIEND_FAILED : {
            return {
                ...state,
                isProgress : false,
            }
        }
        default : return state
     }
  }