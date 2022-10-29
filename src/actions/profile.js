import {USER_PROFILE_LOADING, USER_PROFILE_SUCCESS , USER_PROFILE_FAILED} from './types';
import axios from 'axios';
import { ApiUrl } from '../helpers/urls';

export function getProfile(USER_ID , dispatch) {
    // loading
    dispatch(getUserLoading());

    let URL = ApiUrl.userProfile(USER_ID);
    axios.get(URL)
    .then(res => dispatch(getUserProfile(res.data.data)))
    .catch(err => dispatch(getProfileFail(err.response.data)));
}

    export function getUserLoading() {
        return {
        type : USER_PROFILE_LOADING
        }
    }
 
  export function getUserProfile(data) {
     return {
         type : USER_PROFILE_SUCCESS,
         data : data
        }
    }
  
    export function getProfileFail() {
        return {
          type : USER_PROFILE_FAILED
        }
     }