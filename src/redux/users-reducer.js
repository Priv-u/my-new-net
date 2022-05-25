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
export const currentPageUp = (newPage) => ({ type: PAGE_UP, newPage })
export const currentPageDown = (newPage) => ({ type: PAGE_DOWN, newPage })
export const currentScreenDown = (newStartPage) => ({ type: SCREEN_DOWN, newStartPage })
export const currentScreenUp = (newStartPage) => ({ type: SCREEN_UP, newStartPage })

export default usersReducer;