import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile, setMyProfile } from './../../redux/profile-reducer';
import Profile from "./Profile";
import { withRouter } from './../common/withRouter';
import { withAuthNavigate } from './../../hoc/WithAuthNavigate'
import { compose } from "redux";



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId && !this.props.myId) {
      userId = 2;
    } else if (!userId) {
      userId = this.props.myId;
    }
    setMyProfile(userId);
  }

  render() {
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
    myId: state.auth.id
  }
)

export default compose(
  withAuthNavigate,
  withRouter,
  connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile })
)(ProfileContainer)