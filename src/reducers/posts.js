import {
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  UPLOAD_POST_LOADING,
  UPLOAD_POST_SUCCESS,
  UPLOAD_POST_FAILED,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
} from "../actions/types";

const intialPostState = {
  isProgress: false,
  isUploading: false,
  isUploaded: false,
  isDeleteing : false,
  isDeleted : false,
  data: [],
};

export default function posts(state = intialPostState, action) {
  switch (action.type) {
    case GET_POST_LOADING: {
      return {
        ...state,
        isProgress: true,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        isProgress: false,
        data: action.data,
      };
    }
    case GET_POST_FAILED: {
      return {
        ...state,
        isProgress: false,
        data: [],
      };
    }
    case UPLOAD_POST_LOADING: {
      return {
        ...state,
        isUploading: true,
      };
    }
    case UPLOAD_POST_SUCCESS: {
      return {
        ...state,
        isUploading: false,
        isUploaded: true,
      };
    }
    case UPLOAD_POST_FAILED: {
      return {
        ...state,
        isUploading: false,
        isUploaded: false,
      };
    }
    case DELETE_POST_LOADING: {
        return {
          ...state,
          isDeleting: true,
        };
      }
      case DELETE_POST_SUCCESS: {
        return {
          ...state,
          isDeleting: false,
          isDeleted: true,
        };
      }
      case DELETE_POST_FAILED: {
        return {
          ...state,
          isDeleting: false,
          isDeleted: false,
        };
      }
    default:
      return state;
  }
}
