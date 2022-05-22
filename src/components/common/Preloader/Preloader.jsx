import React from "react";
import preLoader from './../../../assets/loader.svg';
import s from './Preloader.module.css'


const Preloader = (props) => {
  return (
    < div className={s.preLoader} >
      {props.isFetching ? <img src={preLoader} alt='preloader' /> : null}
    </div >
  );
}

export default Preloader;