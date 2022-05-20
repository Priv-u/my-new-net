import React from "react";
import s from './Post.module.css';


const Post = (props) => {
  debugger;

  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={require('./../../../images/kote.jpg')} alt="" />
      </div>
      <div className={s.postId}>
        post id:{props.id}
      </div>
      <div className={s.message}>
        <p>{props.message}</p>
      </div>
      <div className={s.date}>
        {props.messageDate}
      </div>
      <div className={s.likes} onClick={() => { props.addLike(props.id) }}>
        likes: {props.likesCount}
      </div>

    </div>
  )
}
export default Post;