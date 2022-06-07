import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Первое сообщение', messageDate: '08/05/2022', likesCount: 0 },
    { id: 2, message: 'Второе сообщение', messageDate: '08/05/2022', likesCount: 0 }

  ],
  newPost: '',
  profile: null
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
      return {
        ...state,
        posts: [...state.posts, newPostText],
        newPost: ''
      }

    case UPDATE_NEW_POST:
      return {
        ...state,
        newPost: action.newText
      };
    case ADD_LIKE_TO_POST:
      return {
        ...state,
        posts: state.posts.map(p => {
          // debugger;
          if (p.id === action.postId) {
            let lCount = p.likesCount + 1;
            return { ...p, likesCount: lCount }
          }
          return p;
        })
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }

}


export const addPost = (text) => ({ type: ADD_POST, text })
export const updateNewPost = (newText) => ({ type: UPDATE_NEW_POST, newText })
export const addLike = (postId) => ({ type: ADD_LIKE_TO_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

// ****************************** Санки *****************************************

export const setMyProfile = (myUserId, paramsUserId) => {
  return (dispatch) => {
    let userId = paramsUserId;
    debugger;
    if (!userId && !myUserId) {
      userId = 2;
    } else if (!paramsUserId) {
      userId = myUserId;
    }

    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    })
  }
}


export default profileReducer;