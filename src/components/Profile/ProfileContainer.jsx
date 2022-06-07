import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile, setMyProfile } from './../../redux/profile-reducer';
import Profile from "./Profile";
import { withRouter } from './../common/withRouter';
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";



class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.setMyProfile(this.props.myId, this.props.router.params.userId);
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
    myId: state.auth.id,
  }
)

export default compose(
  connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile, setMyProfile }),
  withRouter,
  withAuthNavigate,
)(ProfileContainer);
