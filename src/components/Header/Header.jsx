import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.appHeader}>
      <div className={s.headerContent}>
        <div className={s.mySimbol}>
          <img src={require('./../../images/airplane.png')} alt="иконка самолета" />
        </div>
        <div className={s.headerText}>
          Projcet net
        </div>
        <div className={s.signIn}>
          Вход/Регистрация
        </div>
      </div>


    </div>
  );
};
export default Header;