import React from "react";
import s from './Message.module.css'
const Message = (props) => {
  return (
    <div className={s.allMessgeWrapper}>
      <div className={s.messagesWrapper}>

        <div className={s.messageText}>
          {props.message}
        </div>
        <div className={s.messageDate}>
          {props.messageDate}
        </div>
        <div className={s.messageTime}>
          {props.messageTime}
        </div>

      </div>


    </div >
  );
}
export default Message;