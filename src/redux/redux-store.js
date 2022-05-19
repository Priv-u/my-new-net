import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers(
  {
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
  }

);

// TODO Перед продакшеном удалить из createStore второй аргумент
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;