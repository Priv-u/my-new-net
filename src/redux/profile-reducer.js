import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const ADD_LIKE_TO_POST = 'ADD-LIKE-TO-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Первое сообщение', messageDate: '08/05/2022', likesCount: 0 },
    { id: 2, message: 'Второе сообщение', messageDate: '08/05/2022', likesCount: 0 }

  ],
  profile: null,
  status: ''
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
        message: action.newMessageBody,
        messageDate: String(now.day + '/' + now.month + '/' + now.year),
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPostText]
      }

    case ADD_LIKE_TO_POST:
      return {
        ...state,
        posts: state.posts.map(p => {
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

    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status
      }



    default:
      return state;
  }

}


export const addPost = (newMessageBody) => ({ type: ADD_POST, newMessageBody })
export const addLike = (postId) => ({ type: ADD_LIKE_TO_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_PROFILE_STATUS, status })

// ****************************** Санки *****************************************

export const setProfile = (myId, userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = myId;
    }
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getStatus = (myId, userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = myId;
    }
    profileAPI.getProfileStatus(userId).then(data => {
      // debugger;
      dispatch(setStatus(data));
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status).then(data => {
      if (data.resultCode === 0)
        // debugger;
        dispatch(setStatus(status));
    })
  }
}

export default profileReducer;