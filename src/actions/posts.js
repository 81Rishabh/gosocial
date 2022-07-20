import { UPDATE_POSTS } from "./types";

export function fetchPost(dispatch) {
  fetch("http://localhost:8000/api/v1/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(updatePost(data.posts));
    });
}


export function updatePost(posts) {
    return {
        type : UPDATE_POSTS,
        posts: posts
    }
}

