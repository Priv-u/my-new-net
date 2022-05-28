import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <div className={s.appHeader}>
      <div className={s.headerContent}>
        <div className={s.mySimbol}>
          <img src={require('./../../images/airplane.png')} alt="иконка самолета" />
        </div>
        <div className={s.headerText}>
          Projcet net
        </div>
        <div className={s.loginBlock}>
          {props.isAuth ? <div className={s.login} >{props.login}</div> : <NavLink className={s.login} to='/login'> Вход/Регистрация</NavLink>}
        </div>
      </div>
    </div>
  );
};
export default Header;