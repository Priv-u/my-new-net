import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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
      // debugger;
      return ({
        ...state,
        ...action.payload,
        // isAuth: true
      })

    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })


export const authMe = () => {
  return (dispatch) => {

    authAPI.getAuth().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        // debugger;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
  }
}
// email, password, rememderMe
export const userlogin = (login, password, rememderMe) => (dispatch) => {
  authAPI.login(login, password, rememderMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(authMe());
    } else {
      let errMessage = data.messages.length > 0 ? data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: errMessage }))
    }
  })
}


export const logOut = () => (dispatch) => {
  authAPI.logOut().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  })
}

export default authReducer;