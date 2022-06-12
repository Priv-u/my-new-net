import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers(
  {
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
  }

);

// TODO Перед продакшеном удалить из createStore второй аргумент
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;