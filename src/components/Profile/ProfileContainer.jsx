import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile, setProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import Profile from "./Profile";
import { withRouter } from './../common/withRouter';
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";



class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger;

    this.props.setProfile(this.props.myId, this.props.router.params.userId);
    this.props.getStatus(this.props.myId, this.props.router.params.userId);
  }

  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        myId={this.props.myId}
      />
    )
  }
}

let mapStateToProps = (state) => (
  {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile,
    myId: state.auth.id,
    status: state.profilePage.status
  }
)

export default compose(
  connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile, setProfile, getStatus, updateStatus }),
  withRouter,
  withAuthNavigate,
)(ProfileContainer);
