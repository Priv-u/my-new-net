import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profile-reducer'
import Profile from "./Profile";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },

    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    }

  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;