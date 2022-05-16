import React from "react";
import s from './Messages.module.css'
import Message from "./Message/Message";


const Messages = (props) => {

  // TODO Такой вариант прокрутки на последний элемент не работает. Возможно в будущем
  // нужно будет реализовать эту функцию в стэйте... 

  let addMessage = () => {
    props.addMessage();

  }

  let onMessageChange = (e) => {
    let text = e.currentTarget.value;
    props.updateNewMessageText(text);

  }

  let messageUi = props.messages.map(m => <Message
    id={m.id}
    message={m.message}
    messageDate={m.messageDate}
    messageTime={m.messageTime} />);

  return (
    <div >
      <div className={s.messages}>
        {messageUi}
      </div>
      <div className={s.newMessage}>

        <div className={s.text}>
          <textarea onChange={onMessageChange} value={props.newMessage}></textarea>
        </div>
        <div className={s.sendMessage}>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>

    </div>
  )
}

export default Messages;