import React from "react";
import { connect } from "react-redux";
import {
  follow, setUsers, unfollow, setCurrentPage,
  setTotalUsersCount, toggleIsFetching, currentPageUp,
  currentPageDown, currentScreenDown, currentScreenUp
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from './../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
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

    usersAPI.getUsers(newPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
    });
  }

  currentPageDown = (pageNumber) => {
    let newPage;

    if (pageNumber > 1) {
      newPage = pageNumber - 1
    } else {
      newPage = 1
    }
    this.props.toggleIsFetching(true);
    this.props.currentPageDown(newPage);
    usersAPI.getUsers(newPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    })

  }
  currentScreenDown = (pageNumber) => {
    let newStartPage;
    if (pageNumber - this.props.totalPagesCount >= 1) {
      newStartPage = pageNumber - this.props.totalPagesCount;

    } else {
      newStartPage = 1;
    }

    this.props.toggleIsFetching(true);
    this.props.currentScreenDown(newStartPage);
    usersAPI.getUsers(newStartPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);

    })
  }

  currentScreenUp = (pageNumber) => {
    let newStartPage;
    if (pageNumber + this.props.totalPagesCount <= Math.ceil(this.props.totalUsersCount / this.props.pageSize) - this.props.totalPagesCount) {
      newStartPage = this.props.startPageNumber + this.props.totalPagesCount - 1;
    }
    else {
      newStartPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize) - this.props.totalPagesCount + 1;
    }
    this.props.toggleIsFetching(true);
    this.props.currentScreenUp(newStartPage);
    usersAPI.getUsers(newStartPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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