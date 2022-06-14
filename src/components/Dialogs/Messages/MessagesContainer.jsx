import { connect } from "react-redux";
import { addMessage } from './../../../redux/dialog-reducer';
import Messages from './Messages';


let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth
  }
}

const MessagesContainer = connect(mapStateToProps, { addMessage })(Messages);

export default MessagesContainer;