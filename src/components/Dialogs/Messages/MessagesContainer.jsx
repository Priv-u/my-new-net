import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../../redux/dialog-reducer'
import Messages from './Messages';


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