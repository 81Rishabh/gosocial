import React from 'react';
import { AiOutlineHeart ,AiOutlineComment ,AiOutlineShareAlt} from 'react-icons/ai';


function PostsLIst(props) {
  const posts = props.posts;
  return (
    <div className="posts-list">
       {
          posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
                {/* post Header */}
                <div className="post-header">
                   <div className="post-header-left">
                      <div className="avatar">
                          
                      </div>
                      <div className="post-header-content">
                         <p className="username">Rishabh vishwakarma</p> 
                         <p className="email">rishabhvishwakarma@gmail.com</p> 
                      </div>
                   </div>
                   <div className="post-header-right">
                     <p className="post-timeline">1 min ago</p>
                   </div>
                </div>  
                {/* post Header */}
                <div className="post-body">
                </div>  
                {/* post Header */}
               <div className="post-footer">
                   <div className="post-likes action">
                      <AiOutlineHeart className="icon" />
                      <p className="text">Like</p>
                   </div>
                   <div className="post-comment action">
                      <AiOutlineComment className="icon" />
                      <p className="text">Comment</p>
                   </div>
                   <div className="post-share action">
                     <AiOutlineShareAlt className="icon" />
                     <p className="text">share</p>
                   </div>
               </div>  
            </div>
          ))
       }
    </div>
  )
}

export default PostsLIst