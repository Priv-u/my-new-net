import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';


const Profile = (props) => {
  let postElements = props.posts.map((p) => <Post
    addLike={props.addLike}
    key={p.id}
    id={p.id}
    message={p.message}
    messageDate={p.messageDate}
    likesCount={p.likesCount} />);

  let postElementsUi = postElements.reverse();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.currentTarget.value;
    props.updateNewPost(text);
  }
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
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