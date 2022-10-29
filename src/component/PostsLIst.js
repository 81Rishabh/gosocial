import "../styles/posts.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineComment } from "react-icons/md";
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiTrash, BiEditAlt ,BiSend } from "react-icons/bi";
import {IoIosArrowDown , IoIosArrowUp} from 'react-icons/io';
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";
import { create_comment } from "../actions/comment";
import Avatar from "./Avatar";
import PostSkeleton from "./PostSkeleton";
import CommentLists from "./CommentLists";


function PostsLIst() {
  const { isProgress, data } = useSelector((state) => state.posts);
  const comment = useSelector((state) => state.comments);
  const {user} = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [open , setOpen] = useState(false); 
  const [content, setcontent] = useState("");
  const [isLiked, setisLiked] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const dispatch = useDispatch();

  // hanlde dropdown
  function handleShowAndHide(ID) {
      let dropdown = document.getElementById(`dropdown-${ID}`);
      if (!show) {
        dropdown.style.display = "block";
        setShow(true);
      } else {
        dropdown.style.display = "none";
        setShow(false);
      }
     
  }

  // hanlde delete
  function handleDeletePost(ID) {
    deletePost(dispatch, ID);
  }

  // handle comments
  function handleCreateComment(postId) {
    create_comment(dispatch , content , postId);
    setcontent("");
  }

  // hanlde likes
  function handleLikes(){
     if(!isLiked){
        setlikeCount(likeCount+1);
     }
     else if(likeCount > 0) {
        setlikeCount(likeCount-1);
     }
     setisLiked(!isLiked);
  }

  return (
    <div className="posts-list">
      {isProgress && <PostSkeleton data={[1, 2]} />}
      {data &&
        data.map((post) => (
          <div className="post-wrapper" key={post._id}>
            {/* post Header */} 
            <div className="post-header">
              <div className="post-header-left">
                <Avatar img_url={post.user.avatar} size="40" />
                <div className="post-header-content">
                  <Link to={`user_profile/${post.user._id}`}>
                    <p className="username">{post.user.username}</p>
                  </Link>
                  <p className="post-timeline">1 min ago</p>
                </div>
              </div>
              <div className="post-header-right">
                <BiDotsHorizontalRounded
                  className="dot-icon"
                  onClick={() => handleShowAndHide(post._id)}
                />
                <div id={`dropdown-${post._id}`} className="dropdown">
                  <ul>
                    <li
                      className="dropdown-list delete-btn"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      <BiTrash /> <span>Delete</span>
                    </li>
                    <li className="dropdown-list edit-btn">
                      <BiEditAlt /> <span>Edit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* post Header */}
            <div className="post-content">
              <p>{post.content && post.content}</p>
            </div>

            <div className="post-body">
              {post.post_img ? (
                <img
                  src={"http://localhost:8000" + post.post_img}
                  alt="post_img"
                />
              ) : (
                "No Post uploaded"
              )}
            </div>

            {/* post Header */}
            <div className="post-footer">
              <div className="post-likes action">
               {isLiked ? <AiFillHeart className="icon" style={{color : 'red'}} onClick={handleLikes}/> : <AiOutlineHeart className="icon" onClick={handleLikes}/>}
                <span>{likeCount}</span>
              </div>
              <div className="post-comment action">
                <MdOutlineComment className="icon" />
                <span>{comment && comment.data.length}</span>
              </div>
            </div>
            <div className="posts-comments">
              <div className="post-comments-body">
               {
                  post.user._id !== user._id && (
                  <div className="post-create-comments">
                  <textarea
                    placeholder="Start Typing Your Comments.."
                    className="input-box"
                    value={content}
                    rows="10"
                    cols="30"
                    style={{ flex : '1' , height : '50px' }}
                    onChange={(e) => setcontent(e.target.value)}
                    required
                    />
                    <button
                    type="button"
                    className="btn btn-dark"
                    style={{ width: "100px" , display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' }}
                    onClick={() => handleCreateComment(post._id)}
                    disabled={content ? false : true}
                  >
                    <span>comment</span>
                    <span><BiSend style={{marginTop : '5px'}}/></span>
                  </button>
                </div>
                )
               } 
                <div className="comment-carousel">
                  <p style={{marginLeft : '1rem' , color : 'grey' , cursor : 'pointer'}} onClick={() => setOpen(!open)}>
                  comments{" "}
                  <span style={{marginTop : '16px'}}>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                  </p>
                  <ul className="post-comments" style={{
                    overflowX: 'auto',
                    height : post.comments.length > 0 || comment.data.length > 0 ? '150px' : '0px',
                    display: open ? 'block' : 'none'
                  }}>
                    <CommentLists comments={comment.data} />
                    <CommentLists comments={post.comments} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}


export default PostsLIst;
