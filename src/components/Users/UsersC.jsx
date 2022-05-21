import axios from "axios";
import React from "react";
import s from './Users.module.css';
import UserImage from './../../images/user.png'



class Users extends React.Component {


  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  }


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div className={s.usersWrapper}>
      <div className={s.paginator}>
        <span> назад </span>
        {pages.map(p => {
          return <span className={this.props.currentPage === p && s.selectedPage}
            onClick={(e) => { this.onPageChanged(p); }}> {p} </span>
        })}
        <span> вперед </span> <span> {pagesCount} </span>
      </div>
      <div className={s.allUsers}>
        {
          this.props.users.map(u => <div key={u.id} className={s.user}>
            <div className={s.avaAndFollow}>
              <div className={s.ava}>
                <img src={u.photos.small != null ? u.photos.small : UserImage} alt='фото' />
              </div>

              <div className={s.followButton}>
                {u.followed ?
                  <button className={s.follow} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> :
                  <button className={s.unfollow} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
              </div>
            </div>

            <div className={s.mainInfo}>
              <div className={s.name}>
                {u.name}
              </div>

              <div className={s.status}>
                {u.status} {u.id}
              </div>

              <div className={s.country}>
                {"u.location.country - нет на сервере"}
              </div>

              <div className={s.city}>
                {"u.location.city - нет на сервере"}
              </div>
            </div>

          </div>)
        }
      </div>

    </div >
  };
}
export default Users;

// { id: 1, followed: true, userName: 'Алена', status: 'В постоянном переживании', location: { country: 'Казахстан', city: 'Алматы' } },