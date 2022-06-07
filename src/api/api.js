import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "0d3b6300-0b44-485d-b5b4-71c164b24428"
  }
})


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    )
  }
}

export const profileAPI = {

  getProfile(userId) {
    return (
      instance.get(`profile/${userId}`)
        .then(response => response.data)
    )
  },
  // FIXME Подготовил API для получения статуса
  getProfileStatus(userId) {
    return (
      instance.get(`profile/status${userId}`)
        .then(response => response.data)
    )
  }

}

export const authAPI = {
  getAuth() {
    return (
      instance.get(`auth/me`)
        .then(response => response.data)
    )
  }
}

export const followAPI = {
  setFollow(userId) {
    return (
      instance.post(`follow/${userId}`, {})
        .then(response => response.data)
    )
  },
  setUnfollow(userId) {
    return (
      instance.delete(`follow/${userId}`)
        .then(response => response.data)
    )
  }
}



