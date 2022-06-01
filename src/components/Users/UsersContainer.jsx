import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleIsFetching,
  toggleFollowingProgress,
  // ***** Санки *****
  getUsers,
  setPage,
  pageUp,
  pageDown,
  screenDown,
  screenUp,
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
// import { usersAPI } from './../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber, this.props.pageSize);
  }

  currentPageUp = (pageNumber) => {
    this.props.pageUp(pageNumber, this.props.totalUsersCount, this.props.pageSize);
  }

  currentPageDown = (pageNumber) => {
    this.props.pageDown(pageNumber, this.props.pageSize);
  }

  currentScreenDown = (pageNumber) => {
    this.props.screenDown(pageNumber, this.props.totalPagesCount, this.props.pageSize)
  }

  currentScreenUp = (pageNumber) => {
    this.props.screenUp(pageNumber, this.props.totalPagesCount, this.props.totalUsersCount, this.props.startPageNumber, this.props.pageSize);
  }

  // TODO Добавить возможность менять отображение пагинатора по данным из выпадающих списков

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        totalPagesCount={this.props.totalPagesCount}
        startPageNumber={this.props.startPageNumber}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        folowingInProgress={this.props.folowingInProgress}
        onPageChanged={this.onPageChanged}
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
    startPageNumber: state.usersPage.startPageNumber,
    folowingInProgress: state.usersPage.folowingInProgress
  }
}

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    toggleIsFetching,
    toggleFollowingProgress,
    // ***** Санки *****
    getUsers,
    setPage,
    pageUp,
    pageDown,
    screenDown,
    screenUp,
  }
)(UsersContainer);