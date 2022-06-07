import { usersAPI, followAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const PAGE_UP = 'PAGE-UP';
const PAGE_DOWN = 'PAGE-DOWN';
const SCREEN_DOWN = 'SCREEN-DOWN';
const SCREEN_UP = 'SCREEN-UP';
const TOGGLE_IS_FOLOWING_PROGRESS = 'TOGGLE-IS-FOLOWING-PROGRESS'

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  totalPagesCount: 30,
  startPageNumber: 1,
  folowingInProgress: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalCount }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case PAGE_UP: {
      debugger;
      if (action.newPage <= Math.ceil(state.totalUsersCount / state.pageSize) && action.newPage <= state.startPageNumber + state.totalPagesCount - 1) {
        debugger;
        return {
          ...state,
          currentPage: action.newPage
        }
      } else if (action.newPage < Math.ceil(state.totalUsersCount / state.pageSize)) {
        return {
          ...state,
          currentPage: action.newPage,
          startPageNumber: state.startPageNumber + 1
        }
      }

      return { ...state }
    }

    case PAGE_DOWN: {
      if (action.newPage >= 1 && state.startPageNumber <= action.newPage) {
        return {
          ...state,
          currentPage: action.newPage,
        }
      } else if (state.startPageNumber > action.newPage) {
        return {
          ...state,
          currentPage: action.newPage,
          startPageNumber: state.startPageNumber - 1
        }
      }
      return {
        ...state
      }
    }
    case SCREEN_DOWN: {
      return {
        ...state,
        currentPage: action.newStartPage,
        startPageNumber: action.newStartPage
      }
    }

    case SCREEN_UP: {
      return {
        ...state,
        currentPage: action.newStartPage,
        startPageNumber: action.newStartPage
      }
    }
    case TOGGLE_IS_FOLOWING_PROGRESS: {
      // debugger;
      return {
        ...state,
        folowingInProgress: action.isFetching
          // добавляем пользователя в массив и храним его там до тех пор, пока не получим ответ от сервера
          ? [...state.folowingInProgress, action.userId]
          // если пользователь с массиве есть, то удаляем его после получения ответа от сервера
          : state.folowingInProgress.filter(id => id !== action.userId)
      }
    }



    default:
      return state;
  }

}

export const setFollow = (userId) => ({ type: FOLLOW, userId })
export const setUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const currentPageUp = (newPage) => ({ type: PAGE_UP, newPage })
export const currentPageDown = (newPage) => ({ type: PAGE_DOWN, newPage })
export const currentScreenDown = (newStartPage) => ({ type: SCREEN_DOWN, newStartPage })
export const currentScreenUp = (newStartPage) => ({ type: SCREEN_UP, newStartPage })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLOWING_PROGRESS, isFetching, userId })


// ************************  Санки  *****************************

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
}

export const setPage = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    })
  }
}

export const pageUp = (pageNumber, totalUsersCount, pageSize) => {
  return (dispatch) => {
    let newPage;
    if (pageNumber < Math.ceil(totalUsersCount / pageSize)) {
      newPage = pageNumber + 1;
    } else {
      newPage = Math.ceil(totalUsersCount / pageSize)
    }
    dispatch(toggleIsFetching(true));
    dispatch(currentPageUp(newPage));
    usersAPI.getUsers(newPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    })
  }
}

export const pageDown = (pageNumber, pageSize) => {
  return (dispatch) => {
    let newPage;
    if (pageNumber > 1) {
      newPage = pageNumber - 1
    } else {
      newPage = 1
    }
    dispatch(toggleIsFetching(true));
    dispatch(currentPageDown(newPage));
    usersAPI.getUsers(newPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    })
  }
}

export const screenDown = (pageNumber, totalPagesCount, pageSize) => {
  return (dispatch) => {
    let newStartPage;
    if (pageNumber - totalPagesCount >= 1) {
      newStartPage = pageNumber - totalPagesCount;
    } else {
      newStartPage = 1;
    }
    dispatch(toggleIsFetching(true));
    dispatch(currentScreenDown(newStartPage));
    usersAPI.getUsers(newStartPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    })
  }
}

export const screenUp = (pageNumber, totalPagesCount, totalUsersCount, startPageNumber, pageSize) => {
  return (dispatch) => {
    let newStartPage;
    if (pageNumber + totalPagesCount <= Math.ceil(totalUsersCount / pageSize) - totalPagesCount) {
      newStartPage = startPageNumber + totalPagesCount - 1;
    }
    else {
      newStartPage = Math.ceil(totalUsersCount / pageSize) - totalPagesCount + 1;
    }
    dispatch(toggleIsFetching(true));
    dispatch(currentScreenUp(newStartPage));
    usersAPI.getUsers(newStartPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {

    // debugger;
    dispatch(toggleFollowingProgress(true, userId));
    // debugger;
    followAPI.setUnfollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUnfollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      })
  }
}

export const follow = (userId) => {
  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    followAPI.setFollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setFollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }
}

export default usersReducer;