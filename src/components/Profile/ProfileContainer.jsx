import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile } from './../../redux/profile-reducer';
import Profile from "./Profile";
// import * as axios from "axios";
import { withRouter } from './../common/withRouter';
import { profileAPI } from './../../api/api';
import { Navigate } from 'react-router-dom'


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    console.log(this.props);
    debugger;
    if (!userId && !this.props.myId) {
      userId = 2;
    } else if (!userId) {
      userId = this.props.myId;
    }

    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data);
    })
  }

  render() {
    if (this.props.isAuth == false) {
      return <Navigate to={'/login'} />
    }
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => (
  {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile,
    myId: state.auth.id,
    isAuth: state.auth.isAuth

  }
)

export default connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile })(withRouter(ProfileContainer));