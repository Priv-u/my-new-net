import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile, setMyProfile } from './../../redux/profile-reducer';
import Profile from "./Profile";
import { withRouter } from './../common/withRouter';
import { withAuthNavigate } from "../../hoc/withAuthNavigate";



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
let withAuthNavigateContainer = withAuthNavigate(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile, setMyProfile })(withRouter(withAuthNavigateContainer));