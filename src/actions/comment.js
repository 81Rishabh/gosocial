import {
  CREATE_COMMENT_LOAD,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from "./types";

import { ApiUrl } from "../helpers/urls";
import axios from "axios";
import toast from "react-hot-toast";

export function create_comment(dispatch, content, postId) {
  dispatch(create_comment_load());
  let url = ApiUrl.createComments();
  axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      content,
      postId,
    },
   })
    .then((res) => {
        dispatch(create_comment_success(res.data.data , res.data.message))
    })
    .catch((err) =>
      dispatch(create_comment_fail(create_comment_fail(err.response.data)))
    );
}

export function create_comment_load() {
  return {
    type: CREATE_COMMENT_LOAD,
  };
}

export function create_comment_success(data , msg) {
  toast.success(`${msg}`, {
    duration: 3000,
    position: "top-center",
  });
  return {
    type: CREATE_COMMENT_SUCCESS,
    data: data,
  };
}

export function create_comment_fail(err) {
  return {
    type: CREATE_COMMENT_FAIL,
  };
}
