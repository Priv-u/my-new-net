import React from "react";
import s from './Messages.module.css'


const Messages = (props) => {
  // debugger;
  let message = props.messages.map(m => <div> {m.id} {m.message} {m.messageDate} {m.messageTime}</div>);
  return (
    <div className={s.messages}>
      <div>
        Новое сообщение
        <div>
          <textarea ></textarea>
        </div>
        <div>
          <button>Отправить</button>
        </div>
      </div>
      Сообщения
      {message}
    </div>
  )
}

export default Messages;