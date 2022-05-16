const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  posts: [
    { id: 1, message: 'Первое сообщение', messageDate: '08/05/2022', likesCount: 10 },
    { id: 2, message: 'Второе сообщение', messageDate: '08/05/2022', likesCount: 20 },
    { id: 3, message: 'Третье сообщение', messageDate: '08/05/2022', likesCount: 30 },
    { id: 4, message: 'Четвертое сообщение из внешнего массива данных', messageDate: '08/05/2022', likesCount: 40 },
    { id: 5, message: "Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi", messageDate: '08/05/2022', likesCount: 40 }
  ],
  newPost: ''
}

const profileReducer = (state = initialState, action) => {

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