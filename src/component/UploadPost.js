import React, { useState } from "react";
import { FaPoll, FaRegImage } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { BsEmojiLaughing } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {UploadPosts} from '../actions/posts';
import "../styles/upload_post.css";
import Avatar from "./Avatar";

function UploadPost() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [content, setcontent] = useState("");
  const [file, setfile] = useState("");

  //   handle post submit
  function handlePostSubmit(e) {
      e.preventDefault();
      
      let formData = new FormData();
      formData.append("content", content);
      formData.append("user", user._id);
      formData.append("post_img", file);
      
      UploadPosts(dispatch, formData);
      setcontent("");
  }

  return (
    <form className="upload-post-contaier" onSubmit={handlePostSubmit}>
      <div className="upload-post-actions">
        <div className="icons">
          <p style={{ position: "relative" }}>
            <FaRegImage className="icon" style={{alignSelf: "flex-start"}}/>
            <input
              type="file"
              name="avatar"
              onChange={(e) => setfile(e.target.files[0])}
              style={{
                width : '100px',
                height : '20px',
                background:'transparent',
                borderRadius : '0'
              }}
            />
            <span>Image</span>
          </p>
        </div>
        <div className="icons">
          <p>
            <FiVideo className="icon" />
            <span>Video</span>
          </p>
        </div>
        <div className="icons">
          <p>
            <FaPoll className="icon" />
            <span>Activity</span>
          </p>
        </div>
        <div className="icons">
          <p>
            <BsEmojiLaughing className="icon" />
            <span>Feelings</span>
          </p>
        </div>
      </div>
      <div className="upload-post-input-box">
        {user && <Avatar img_url={user.avatar} alt="avatar" size="30" />}
        <textarea
          placeholder="Enter you content"
          className="input-box"
          value={content}
          rows="30"
          cols="30"
          onChange={(e) => setcontent(e.target.value)}
        />
        <button type="submit" className="btn btn-dark" style={{alignSelf: "flex-end"}}>
          UPLOAD
        </button>
      </div>
    </form>
  );
}

export default UploadPost;
