import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_DATA:
      return ({
        ...state,
        ...action.data,
        isAuth: true
      })

    default:
      return state;
  }
}

export const setAuthUserData = ({ id, email, login }) => ({ type: SET_USER_DATA, data: { id, email, login } })

// ************************** Санка ******************************
export const authMe = () => {
  return (dispatch) => {

    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData({ id, email, login }));
      }
    })
  }
}


export default authReducer;