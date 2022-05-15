import React from "react";
import Post from './Post/Post';
import s from './Profile.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profile-reducer'


const Profile = (props) => {

  let postElements = props.posts.map((p) =>
    <Post id={p.id}
      message={p.message}
      messageDate={p.messageDate}
      likesCount={p.likesCount} />);

  let postElementsUi = postElements.reverse();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {

    let text = e.currentTarget.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div>
      <div>
        <img src={require('./../../images/mountains.jpg')} alt='Красивый пейзаж' />
      </div>

      <div className={s.newMessage}>
        <textarea onChange={onPostChange} value={props.newPost} />

        <div className={s.newMessageButton}>
          <button onClick={addPost}>Новый пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElementsUi}
      </div>

    </div>
  );
}
export default Profile;