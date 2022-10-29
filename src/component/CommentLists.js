import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Avatar from "./Avatar";

function CommentLists({ comments }) {
  return (
    <React.Fragment>
      {comments && comments.map((comment) => (
        <li className="post-comments-list" key={comment._id }>
          <div className="post-comments-header">
            <Avatar img_url={comment.user.avatar} size="20" />
            <span className="post-comment-author">{comment.user.username}</span>{" "}
            <span className="post-comment-time">1 min ago</span>{" "}
            <span className="post-comment-likes">{comment.likes.length} likes</span>{" "}
            <span className="post-comment-like-icon" style={{justifySelf: 'flex-end'}}><AiOutlineHeart className="icon" /></span>
          </div>
          <div className="post-comment-content">{ comment.content}</div>
        </li>
      ))}
    </React.Fragment>
  );
}

export default CommentLists;
