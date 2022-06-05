import { connect } from "react-redux";
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs
  }
}

// В "connect" передается только одна функция, т.к. пока в компоненте Dialog ни какие действия не
// выполняются. Передаем только mapStateToProps
const DialogContainer = connect(mapStateToProps)(Dialog);

export default DialogContainer;