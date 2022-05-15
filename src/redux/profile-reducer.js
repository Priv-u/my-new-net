const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


const profileReducer = (action, state) => {

  switch (action.type) {
    case ADD_POST:

      let newPostId = state.posts.length + 1;
      let date = new Date();
      let now = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      }
      if (now.day < 10) {
        now.day = String('0' + now.day);
      }
      if (now.month < 10) {
        now.month = String('0' + now.month);
      }
      let newPostText = {
        id: newPostId,
        message: state.newPost,
        messageDate: String(now.day + '/' + now.month + '/' + now.year),
        likesCount: 0
      }
      if (newPostText.message !== '') {
        state.posts.push(newPostText);
        state.newPost = '';
      }
      return state;

    case UPDATE_NEW_POST:
      state.newPost = action.newText;
      return state;

    default:
      return state;
  }

}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST,
    newText: text
  }
}

export default profileReducer;