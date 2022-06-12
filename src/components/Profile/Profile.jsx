import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import { reduxForm, Field } from "redux-form";



const Profile = (props) => {
  let postElements = props.posts.map((p) => <Post
    addLike={props.addLike}
    key={p.id}
    id={p.id}
    message={p.message}
    messageDate={p.messageDate}
    likesCount={p.likesCount} />);

  let postElementsUi = postElements.reverse();

  // let addPost = () => {
  //   props.addPost();
  // }

  // let onPostChange = (e) => {
  //   let text = e.currentTarget.value;
  //   props.updateNewPost(text);
  // }

  let addNewMessage = (values) => {
    debugger;
    props.addPost(values.newMessageBody);
  }

  if (!props.profile) {
    return <Preloader />
  }

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} >
        <div >
          <div className={s.newMessage}>
            <Field name="newMessageBody" component="textarea" placeholder="Введите текст поста" />
          </div>
          <div className={s.newMessageButton}>
            <button >Новый пост</button>
          </div>
        </div>
      </form>
    )
  }

  const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

  return (
    <div>
      <ProfileInfo profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        myId={props.myId} />

      <AddMessageReduxForm onSubmit={addNewMessage} />
      <div className={s.posts}>
        {postElementsUi}
      </div>

    </div>
  );
  //TODO Зарефакторить на базе redux-form - внедрить форму и поменять ее обработку
}
export default Profile;