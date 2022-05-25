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

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  totalPagesCount: 30,
  startPageNumber: 1
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
      if (action.currentPage < Math.ceil(state.totalUsersCount / state.pageSize) && action.currentPage <= state.startPageNumber + state.totalPagesCount - 1) {
        return {
          ...state,
          currentPage: action.currentPage + 1,
        }
      } else if (action.currentPage < Math.ceil(state.totalUsersCount / state.pageSize)) {
        return {
          ...state,
          currentPage: action.currentPage + 1,
          startPageNumber: state.startPageNumber + 1
        }
      }

      return { ...state }
    }


    case PAGE_DOWN: {
      if (state.startPageNumber >= 1 && state.startPageNumber < action.currentPage) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
        }
      } else if (state.startPageNumber > 1) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
          startPageNumber: state.startPageNumber - 1
        }
      }
      return {
        ...state,
        currentPage: action.currentPage
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



    default:
      return state;
  }

}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const currentPageUp = (currentPage) => ({ type: PAGE_UP, currentPage })
export const currentPageDown = (currentPage) => ({ type: PAGE_DOWN, currentPage })
export const currentScreenDown = (newStartPage) => ({ type: SCREEN_DOWN, newStartPage })
export const currentScreenUp = (newStartPage) => ({ type: SCREEN_UP, newStartPage })

export default usersReducer;