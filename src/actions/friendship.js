import {
    ADD_FRIEND_REQUEST,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED,
    REMOVE_FRIEND_LOAD,
    REMOVE_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILED,
  } from "./types";
  import { ApiUrl } from "../helpers/urls";
  import axios from "axios";
  import toast from "react-hot-toast";


//   ADD USER AS FRIEND ACTION
export function addUserAdFriend(friendId, dispatch) {
    let url = ApiUrl.createFriendship();
    dispatch(add_friend_request());
    axios({
        method: "POST",
        url : url,
        data : {
            friend_ID : friendId
        },
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => dispatch(add_friend_success(res.data)))
    .catch(err => dispatch(add_friend_failed()))
}  

// REMOVE USER AS A FRIEND 
export function remove_friendship(friendId, dispatch) {
    let url = ApiUrl.removeFriendship();
    dispatch(remove_friend_loading());
    axios({
        method: "POST",
        url : url,
        data : {
            friend_id : friendId
        },
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => dispatch(remeove_friend_success(res.data)))
    .catch(err => dispatch(remove_friend_failed()))
}


 export function add_friend_request() {
     return {
       type : ADD_FRIEND_REQUEST
     }
 }

 export function add_friend_success(data) {
    toast.success(`${data.message}`, {
        duration: 3000,
        position: "top-center",
      });
     return {
       type : ADD_FRIEND_SUCCESS
     }
 }

 export function add_friend_failed() {
     return {
       type : ADD_FRIEND_FAILED
     }
 }
 
//  remove friend action
 export function remove_friend_loading() {
    return {
      type : REMOVE_FRIEND_LOAD
    }
}

export function remeove_friend_success(data) {
   toast.success(`${data.message}`, {
       duration: 3000,
       position: "top-center",
     });
    return {
      type : REMOVE_FRIEND_SUCCESS
    }
}

export function remove_friend_failed() {
    return {
      type : REMOVE_FRIEND_FAILED
    }
}
