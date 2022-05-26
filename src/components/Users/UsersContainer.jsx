import React from "react";
import { connect } from "react-redux";

import {
  follow, setUsers, unfollow, setCurrentPage,
  setTotalUsersCount, toggleIsFetching, currentPageUp,
  currentPageDown, currentScreenDown, currentScreenUp
} from "../../redux/users-reducer";

import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });
  }

  currentPageUp = (pageNumber) => {
    let newPage;
    if (pageNumber < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
      newPage = pageNumber + 1;
    } else {
      newPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    }
    this.props.toggleIsFetching(true);
    this.props.currentPageUp(newPage);
    // debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });
  }

  currentPageDown = (pageNumber) => {
    let newPage;
    debugger;
    if (pageNumber > 1) {
      newPage = pageNumber - 1
    } else {
      newPage = 1
    }
    this.props.toggleIsFetching(true);
    this.props.currentPageDown(newPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })

  }
  currentScreenDown = (pageNumber) => {
    let newStartPage;
    if (pageNumber - this.props.totalPagesCount >= 1) {
      newStartPage = pageNumber - this.props.totalPagesCount;
      debugger;
    } else {
      newStartPage = 1;
    }

    this.props.toggleIsFetching(true);
    this.props.currentScreenDown(newStartPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newStartPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        // debugger;
      })
  }

  currentScreenUp = (pageNumber) => {
    debugger;
    let newStartPage;
    if (pageNumber + this.props.totalPagesCount <= Math.ceil(this.props.totalUsersCount / this.props.pageSize) - this.props.totalPagesCount) {
      newStartPage = this.props.startPageNumber + this.props.totalPagesCount - 1;
    }
    else {
      newStartPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize) - this.props.totalPagesCount + 1;
    }
    this.props.toggleIsFetching(true);
    this.props.currentScreenUp(newStartPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newStartPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })
  }

  // TODO Добавить возможность менять отображение пагинатора по данным из выпадающих списков

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        totalPagesCount={this.props.totalPagesCount}
        startPageNumber={this.props.startPageNumber}
        onPageUp={this.currentPageUp}
        onPageDown={this.currentPageDown}
        onScreenDown={this.currentScreenDown}
        onScreenUp={this.currentScreenUp}



      />
    </>


  };
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    totalPagesCount: state.usersPage.totalPagesCount,
    startPageNumber: state.usersPage.startPageNumber

  }
}


export default connect(mapStateToProps,
  {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, currentPageUp, currentPageDown, currentScreenUp, currentScreenDown
  }
)(UsersContainer);