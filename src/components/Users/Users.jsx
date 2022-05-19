import React from "react";
import s from './Users.module.css';

let Users = (props) => {
  // Проверка на наличие объектов в массиве пользователей выполняется в users-reducer

  props.setUsers([
    {
      id: 1, fotoUrl: 'https://mycomp.su/wp-content/uploads/zachem-nuzhen-avatar.jpg',
      followed: true, userName: 'Алена',
      status: 'В постоянном переживании', location: { country: 'Казахстан', city: 'Алматы' }
    },
    {
      id: 2, fotoUrl: 'https://mycomp.su/wp-content/uploads/zachem-nuzhen-avatar.jpg',
      followed: true, userName: 'Алеся',
      status: 'Всегда активна', location: { country: 'Казахстан', city: 'Алматы' }
    },
    {
      id: 3, fotoUrl: 'https://mycomp.su/wp-content/uploads/zachem-nuzhen-avatar.jpg',
      followed: false, userName: 'Алия',
      status: 'Тихо но однозначно', location: { country: 'Казахстан', city: 'Алматы' }
    },
    {
      id: 4, fotoUrl: 'https://mycomp.su/wp-content/uploads/zachem-nuzhen-avatar.jpg',
      followed: false, userName: 'Дима',
      status: 'Кто в армии служил, тот в цирке не смеется', location: { country: 'Казахстан', city: 'Алматы' }
    }
  ]);

  return (
    <div className={s.usersWrapper}>

      {
        props.users.map(u => <div key={u.id} className={s.user}>
          <div className={s.avaAndFollow}>
            <div className={s.ava}>
              <img src={u.fotoUrl} alt='фото' />
            </div>

            <div className={s.followButton}>
              {u.followed ?
                <button className={s.follow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                <button className={s.unfollow} onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </div>

          <div className={s.mainInfo}>
            <div className={s.name}>
              {u.userName}
            </div>

            <div className={s.status}>
              {u.status}
            </div>

            <div className={s.country}>
              {u.location.country}
            </div>

            <div className={s.city}>
              {u.location.city}
            </div>
          </div>


        </div>)
      }
    </div>
  )
};

export default Users;

// { id: 1, followed: true, userName: 'Алена', status: 'В постоянном переживании', location: { country: 'Казахстан', city: 'Алматы' } },