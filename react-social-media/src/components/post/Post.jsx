import "./post.css";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";
function Post({ post }) {

  const[like,setLike]=useState(post.like);
  const[isLiked,setIsLiked]= useState(true);

  const likeHandler=()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.profilePhoto}
              alt=""
            />
            <span className="postUserName">{post.userName}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRigt">
            <CgMoreVerticalAlt />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
          {post.desc}
          </span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postButton">
          <div className="postButtomLeft">
            <FcLike className="likeIcon" onClick={likeHandler} />
            <AiFillLike className="likeIcon" onClick={likeHandler}/>
            <span className="postLikeCounter">{post.like}M people Like it </span>
            <span className="postCommentText">{post.comment}M comments</span>
          </div>
          <div className="postButtomRight"></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
