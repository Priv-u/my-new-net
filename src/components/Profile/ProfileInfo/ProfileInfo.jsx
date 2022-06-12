import React from "react";
import s from './../ProfileInfo/ProfileInfo.module.css';
import noPhoto from './../../../images/user.png';
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {


  return (
    < div >
      {/* <div className={s.profileImage}>
        <img src={profileImage} alt='Красивый пейзаж' />
      </div> */}
      <div className={s.profileInfo}>
        <div className={s.ava}>
          <img className={s.avaImg} src={!props.profile.photos.large ? noPhoto : props.profile.photos.large} alt="ФОТО ОТСУТСТВУЕТ" />
        </div>
        <div className={s.status}>
          <ProfileStatus status={props.status}
            updateStatus={props.updateStatus}
            myId={props.myId} />
        </div>
        <div className={s.item}>
          Обо мне: {props.profile.aboutMe}
        </div>
        <div className={s.item}>
          Полный ник: {props.profile.fullName}
        </div>
        <div className={s.item}>
          Ищу работу: {props.profile.lookingForAJob ? 'да' : 'нет'}
        </div>
        <div className={s.item}>
          {props.profile.lookingForAJobDescription}
        </div>
        <div className={s.item}>
          Контакты:
          <div className={s.item}>
            {props.profile.contacts.facebook}
          </div>
          <div className={s.item}>
            {props.profile.contacts.vk}
          </div>
          <div className={s.item}>
            {props.profile.contacts.twitter}
          </div>
          <div className={s.item}>
            {props.profile.contacts.instagram}
          </div>
          <div className={s.item}>
            {props.profile.contacts.youtube}
          </div>
          <div className={s.item}>
            {props.profile.contacts.github}
          </div>
          <div className={s.item}>
            {props.profile.contacts.mainLink}
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProfileInfo;