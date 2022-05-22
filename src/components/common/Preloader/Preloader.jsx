import React from "react";
import preLoader from './../../../assets/loader.svg';
import s from './Preloader.module.css'


const Preloader = () => {
  return (
    < div className={s.preLoader} >
      <img src={preLoader} alt='preloader' />
    </div >
  );
}

export default Preloader;