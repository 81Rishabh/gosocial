import {
    CREATE_COMMENT_LOAD,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL
  } from "../actions/types";
  
  const initialState = {
    isProgress: false,
    data: [],
  };
  
  export default function comments(state = initialState, action) {
    switch (action.type) {
      case CREATE_COMMENT_LOAD: {
        return {
          ...state,
          isProgress: true,
        };
      }
      case CREATE_COMMENT_SUCCESS: {
        return {
          ...state,
          isProgress: false,
          data : [action.data, ...state.data]
        };
      }
      case CREATE_COMMENT_FAIL: {
        return {
          ...state,
          isProgress : false, 
          data : []
        };
      }
      default:
        return state;
     }
  }
  