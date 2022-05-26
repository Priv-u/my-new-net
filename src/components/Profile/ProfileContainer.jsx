import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile } from './../../redux/profile-reducer';
import Profile from "./Profile";
import * as axios from "axios";


class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    // debugger;
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPost: state.profilePage.newPost,
  profile: state.profilePage.profile

})

export default connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile })(ProfileContainer);

// export default ProfileContainer;
// TODO Дописать профайл контейнер так, чтобы можно было посмотреть фото пользователя. Т.е. сделать запрос на
// сервер и получить с него данные пользователя.