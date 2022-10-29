import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  AUTHENTICATED_USER,
  LOGOUT,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED
} from "./types";
import { ApiUrl } from "../helpers/urls";
import axios from "axios";
import toast from "react-hot-toast";


// SIGNIN ACTION
export function login(body, dispatch, navigate) {
  let url = ApiUrl.signIn();
  dispatch(login_start());
  axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: { ...body },
  })
  .then((res) => {
      dispatch(login_success(res.data.data));  // dispatch login action
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.log(err);
      dispatch(login_error(err.response.data));
    });
}

// SIGN UP ACTION
export function register(body, dispatch, navigate) {
  dispatch(signUp_start());
  let url = ApiUrl.signUp();
  axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: { ...body },
  })
    .then((res) => {
      dispatch(signUp_success(res.data));
      navigate("/signIn", { replace: true });
    })
    .catch((err) => {
      dispatch(signUp_error(err.response.data));
    });
}

// UPDATE PROFILE
export function _updateProfile(id , formData , dispatch , navigate) {
  // loading 
  dispatch(
    update_profile_loading()
  );

  
   let url = ApiUrl.updateProfile(id);
   axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
    data: formData,
  }).then((res) => {
      dispatch(
        update_profile_success(res.data)
      );
    })
    .catch((err) => dispatch(update_profile_failed(err.response.data)));
}


// SignIn ACTIONS
export function login_start() {
  return {
    type: LOGIN_START,
  };
}

export function login_success(data) {
  return {
    type: LOGIN_SUCCESS,
    data: data,
  };
}

export function login_error(data) {
  toast.error(`${data.error}`, {
    duration: 3000,
    position: "top-center",
  });
  return {
    type: LOGIN_ERROR,
  };
}

// authenticated user
export function authenticated(user) {
  return {
    type: AUTHENTICATED_USER,
    user: user,
  };
}

// SIGNUP ACTONS
export function signUp_start() {
  return {
    type: SIGNUP_START,
  };
}

export function signUp_success(data) {
  toast.success(`${data.message}`, { duration: 3000, position: "top-center" });
  return {
    type: SIGNUP_SUCCESS,
  };
}

export function signUp_error(data) {
  toast.error(`${data.error}`, { duration: 3000, position: "top-center" });
  return {
    type: SIGNUP_ERROR,
  };
}

// LOGOUT
export function logout() {
  return {
    type: LOGOUT,
  };
}

// UPDATE PROFILE ACTIONS
export function update_profile_loading() {
   return {
     type : UPDATE_PROFILE_START
   }
}

export function update_profile_success(data) {
  toast.success(`${data.message}`, { duration: 3000, position: "top-center" });
   return {
     type : UPDATE_PROFILE_SUCCESS
   }
}

export function update_profile_failed(error) {
  toast.error(`${error}`, { duration: 3000, position: "top-center" });
   return {
     type : UPDATE_PROFILE_FAILED
   }
}

