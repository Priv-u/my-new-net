import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? s.active : s.inactive);
  return (
    <nav className={s.navbar}>
      <div className={s.navBattons}>
        <div className={`${s.item} ${s.profile}`}>
          <NavLink to='/profile' className={setActive}>Profile</NavLink>
        </div>

        <div className={`${s.item} ${s.dialogs}`}>
          <NavLink to='/dialogs' className={setActive}>Dialogs</NavLink>
        </div>

        <div className={`${s.item} ${s.news}`}>
          <NavLink to='/news' className={setActive}>News</NavLink>
        </div>

        <div className={`${s.item} ${s.gallery}`}>
          <NavLink to='/gallery' className={setActive}>Gallery</NavLink>
        </div>

        <div className={`${s.item} ${s.findUsers}`}>
          <NavLink to='/users' className={setActive}>Users</NavLink>
        </div>

        <div className={`${s.item} ${s.settings}`}>
          <NavLink to='/settings' className={setActive}>Settings</NavLink>
        </div>
      </div>

    </nav>

  )
}
export default Navbar;