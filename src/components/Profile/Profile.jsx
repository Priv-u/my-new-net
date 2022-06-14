import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxValidLength } from "../../utils/validators/validators";


const maxLength200 = maxValidLength(200);

const Profile = (props) => {
  let postElements = props.posts.map((p) => <Post
    addLike={props.addLike}
    key={p.id}
    id={p.id}
    message={p.message}
    messageDate={p.messageDate}
    likesCount={p.likesCount} />);

  let postElementsUi = postElements.reverse();

  let addNewMessage = (values) => {
    debugger;
    props.addPost(values.newMessageBody);
  }

  if (!props.profile) {
    return <Preloader />
  }

  const AddMessageForm = (props) => {



    return (
      <form className={s.newMessage} onSubmit={props.handleSubmit} >
        <div className={s.newText}>
          <Field name="newMessageBody"
            component={Textarea}
            placeholder="Введите текст поста" validate={[maxLength200]}
          />
        </div>
        <div className={s.newMessageButton}>
          <button >Новый пост</button>
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

}
export default Profile;