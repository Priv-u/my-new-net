import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.appHeader}>
      <img src={require('./../../images/airplane.png')} alt="иконка самолета" />
      Header
    </div>
  );
};
export default Header;