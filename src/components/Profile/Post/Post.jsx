import React from "react";
import s from './Post.module.css';


const Post = (props) => {
  // debugger;
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={require('./../../../images/kote.jpg')} alt="" />
      </div>
      <div className={s.postId}>
        poast id:{props.id}
      </div>
      <div className={s.message}>
        {props.message}
      </div>
      <div className={s.date}>
        {props.messageDate}
      </div>
      <div className={s.likes}>
        likes: {props.likesCount}
      </div>

    </div>
  )
}
export default Post;