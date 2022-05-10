import React from "react";
import Post from './Post/Post';
import s from './Profile.module.css';


const Profile = (props) => {
  // debugger;
  let posts = props.profilePage.posts.map((p) =>
    <Post id={p.id}
      message={p.message}
      messageDate={p.messageDate}
      likesCount={p.likesCount} />)

  return (
    <div>
      <div>
        <img src={require('./../../images/mountains.jpg')} alt='Красивый пейзаж' />
      </div>

      <div className={s.newMessage}>
        <textarea></textarea>
        <div className={s.newMessageButton}>
          <button onClick={props.addPost}>Новый пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts}
      </div>

    </div>
  );
}
export default Profile;