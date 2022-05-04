import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.navBattons}>
        <div className={s.profile}>
          Profile
        </div>
        <div className={s.dialogs}>
          Dialogs
        </div>
        <div className={s.news}>
          News
        </div>
        <div className={s.gallery}>
          Gallery
        </div>
        <div className={s.settings}>
          Settings
        </div>
      </div>

    </nav>

  )
}
export default Navbar;