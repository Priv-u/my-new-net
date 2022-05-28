import React from "react";
import { connect } from "react-redux";
import { addLike, addPost, updateNewPost, setUserProfile } from './../../redux/profile-reducer';
import Profile from "./Profile";
import * as axios from "axios";
import { withRouter } from './../common/withRouter';


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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
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

export default connect(mapStateToProps, { addPost, updateNewPost, addLike, setUserProfile })(withRouter(ProfileContainer));