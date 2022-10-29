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
  
} from "./types";

import { ApiUrl } from "../helpers/urls";
import axios from "axios";
import toast from "react-hot-toast";

export function fetchPost(dispatch) {
  // LOAD POST ACTION
  dispatch(getPosts_loading());
  let url = ApiUrl.fetchPost();
  axios({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => dispatch(getPosts_success(res.data.posts)))
    .catch((err) => dispatch(getPosts_failed()));
}


// FUNCTion for uploading post 
export function UploadPosts(dispatch , formData) {
     // LOAD POST ACTION
  dispatch(upload_post_loading());
  let url = ApiUrl.uploadPost();
  axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: formData,
  })
    .then((res) => dispatch(upload_post_success(res.data)))
    .catch((err) => dispatch(upload_post_failed()));
}

// FUNTION FOR DELETEING POST
export function deletePost(dispatch  , POST_ID) {
  dispatch(delete_post_loading());
  let url = ApiUrl.destroyPost(POST_ID);
  axios({
    method: "DELETE",
    url: url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => dispatch(delete_post_success(res.data)))
    .catch((err) => dispatch(delete_post_failed()));
}


// UPDATE PROFILE ACTIONS
export function getPosts_loading() {
  return {
    type: GET_POST_LOADING,
  };
}

export function getPosts_success(data) {
  return {
    type: GET_POST_SUCCESS,
    data: data,
  };
}

export function getPosts_failed() {
  return {
    type: GET_POST_FAILED,
  };
}

// UPLOAD PHOTO ACTIONS
export function upload_post_loading() {
  return {
    type: UPLOAD_POST_LOADING,
  };
}

export function upload_post_success(data) {
  toast.success(`${data.message}`, {
    duration: 3000,
    position: "top-center",
  });
  return {
    type: UPLOAD_POST_SUCCESS,
    data : data
  };
}

export function upload_post_failed() {
  return {
    type: UPLOAD_POST_FAILED,
  };
}


// delete post action
export function delete_post_loading() {
  return {
    type: DELETE_POST_LOADING,
  };
}

export function delete_post_success(data) {
  toast.success(`${data.message}`, {
    duration: 3000,
    position: "top-center",
  });
  return {
    type: DELETE_POST_SUCCESS,
    data : data
  };
}

export function delete_post_failed() {
  return {
    type: DELETE_POST_FAILED,
  };
}