import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.navBattons}>
        <div className={s.profile}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={s.dialogs}>
          <NavLink to='/dialogs'>Dialogs</NavLink>
        </div>
        <div className={s.news}>
          <a href="/news">News</a>
        </div>
        <div className={s.gallery}>
          <a href="/gallery">Gallery</a>
        </div>
        <div className={s.settings}>
          <a href="/settings">Settings</a>

        </div>
      </div>

    </nav>

  )
}
export default Navbar;