import React from "react";
import Post from './Post/Post';
import s from './Profile.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/state'


const Profile = (props) => {
  let postElements = props.posts.map((p) =>
    <Post id={p.id}
      message={p.message}
      messageDate={p.messageDate}
      likesCount={p.likesCount} />);

  let postElementsUi = postElements.reverse();

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    debugger;
    let text = newPostElement.current.value;
    // debugger;
    // let action = { type: 'UPDATE-NEW-POST', newText: text };
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div>
      <div>
        <img src={require('./../../images/mountains.jpg')} alt='Красивый пейзаж' />
      </div>

      <div className={s.newMessage}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPost} />

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