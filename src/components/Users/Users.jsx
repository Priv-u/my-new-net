import React from "react";
import s from './Users.module.css';
import UserImage from './../../images/user.png';
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  let pagesList = [];
  for (let i = 1; i <= pagesCount - 1; i++) {
    pages.push(i);
  }
  for (let i = props.startPageNumber; i <= (props.startPageNumber + props.totalPagesCount - 1); i++) {
    pagesList.push(i);
  }

  return <div className={s.usersWrapper}>
    <div className={s.paginator}>
      <span onClick={(e) => { props.onScreenDown(props.currentPage) }} className={`${s.startPage} ${s.item}`}>  </span>
      <span onClick={(e) => { props.onPageDown(props.currentPage) }} className={`${s.pageDown} ${s.item} `}>  </span>
      {pagesList.map(p => {
        return <span className={`${props.currentPage === p && s.selectedPage} ${s.pageNumber}`}
          onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
      })}
      <span onClick={(e) => { props.onPageUp(props.currentPage) }} className={`${s.pageUp} ${s.item}`}></span>
      <span onClick={(e) => { props.onScreenUp(props.currentPage) }} className={`${s.endPage} ${s.item}`}></span>
      <span>{pagesCount}</span>
      <div className={s.lists}>
        <span className={s.list1}>
          <select>
            <option value='5'>по 5 на лист</option>
            <option value='15'>по 15 на лист</option>
            <option value='30'>по 30 на лист</option>
            <option value='50'>по 50 на лист</option>
            <option value='100'>по 100 на лист</option>
          </select>
        </span>
        <span className={s.list2}>
          <select>
            <option value='10'>список из 10 страниц</option>
            <option value='20'>список из 20 страниц</option>
            <option value='30'>список из 30 страниц</option>
          </select>
        </span>

      </div>
    </div>
    <div className={s.allUsers}>
      {
        props.users.map(u => <div key={u.id} className={s.user}>
          <div className={s.avaAndFollow}>
            <div className={s.ava}>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : UserImage} alt='фото' />
              </NavLink>

            </div>

            <div className={s.followButton}>
              {u.followed ?
                <button className={s.follow} disabled={props.folowingInProgress.some(id => id === u.id)} onClick={() => {
                  // debugger;
                  props.toggleFollowingProgress(true, u.id);
                  // debugger;
                  followAPI.setUnfollow(u.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    })
                }}

                > Unfollow</button> :
                <button className={s.unfollow} disabled={props.folowingInProgress.some(id => id === u.id)} onClick={() => {
                  // debugger;
                  props.toggleFollowingProgress(true, u.id);
                  followAPI.setFollow(u.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });

                }}>Follow</button>}
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

export default Users;