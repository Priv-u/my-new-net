import { connect } from "react-redux";
import { addLikeAC, addPostActionCreator, updateNewPostActionCreator } from './../../redux/profile-reducer'
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
    },

    addLike: (postId) => {
      dispatch(addLikeAC(postId))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default ProfileContainer;