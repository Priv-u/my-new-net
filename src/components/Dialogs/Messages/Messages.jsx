import React from "react";
import s from './Messages.module.css'
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../../redux/state'
import Message from "./Message/Message";


const Messages = (props) => {

  let newMessageElement = React.createRef();

  let allMessagesBlock = React.createRef();

  let scrollToBottom = () => {
    allMessagesBlock.current.scrollTop = allMessagesBlock.current.scrollHeight;
  }
  // TODO Такой вариант прокрутки на последний элемент не работает. Возможно в будущем
  // нужно будет реализовать эту функцию в стэйте... 

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    scrollToBottom();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  }

  let messageUi = props.messages.map(m => <Message
    id={m.id}
    message={m.message}
    messageDate={m.messageDate}
    messageTime={m.messageTime} />);

  return (
    <div >
      <div className={s.messages} ref={allMessagesBlock}>
        {messageUi}
      </div>
      <div className={s.newMessage}>

        <div className={s.text}>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessage}></textarea>
        </div>
        <div className={s.sendMessage}>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>

    </div>
  )
}

export default Messages;