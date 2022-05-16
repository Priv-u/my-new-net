import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profile-reducer'
import Profile from "./Profile";


const ProfileContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <Profile addPost={addPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.posts}
      newPost={state.profilePage.newPost}
    />
  );
}
export default ProfileContainer;