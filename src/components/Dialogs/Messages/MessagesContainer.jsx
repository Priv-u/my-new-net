// import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../../redux/dialog-reducer'
import Messages from './Messages';


// const MessagesContainer = (props) => {

//   let state = props.store.getState();
//   // TODO Просмотреть видео до 48 и переписать компоненты с помощью 
//   // ract-redux и connet 

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }

//   let onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageActionCreator(text));
//   }
//   return (
//     <Messages addMessage={addMessage}
//       updateNewMessageText={onMessageChange}
//       messages={state.dialogsPage.messages}
//       newMessage={state.dialogsPage.newMessage} />
//   )
// }

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

    addMessage: () => {
      dispatch(addMessageActionCreator());
    },

    updateNewMessageText: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    }

  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;