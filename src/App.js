import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./actions/posts";
import PostsLIst from "./component/PostsLIst";
import "./styles/posts.css";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // fetch posts
  useEffect(() => {
    fetchPost(dispatch);
  }, []);

  return (
    <div className="App">
      <PostsLIst posts={state.posts} />
    </div>
  );
}

export default App;
