// import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../../redux/dialog-reducer'
import Messages from './Messages';
import { withAuthNavigate } from './../../../hoc/WithAuthNavigate'
import { compose } from 'redux';


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

// let AuthNavigateComponent = withAuthNavigate(Messages);
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, mapDispatchToProps)
)(Messages)