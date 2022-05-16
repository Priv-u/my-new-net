import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../../redux/dialog-reducer'
import Messages from './Messages';


const MessagesContainer = (props) => {

  let state = props.store.getState();
  // TODO Такой вариант прокрутки на последний элемент не работает. Возможно в будущем
  // нужно будет реализовать эту функцию в стэйте... 

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  }
  return (
    <Messages addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      messages={state.dialogsPage.messages}
      newMessage={state.dialogsPage.newMessage} />
  )
}

export default MessagesContainer;