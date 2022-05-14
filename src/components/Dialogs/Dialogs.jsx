import React from "react";
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from "./Messages/Messages";



const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <Dialog dialogs={props.dialogsPage.dialogs} />
      <Messages
        messages={props.dialogsPage.messages}
        newMessage={props.dialogsPage.newMessage}
        dispatch={props.dispatch} />
    </div>
  );
}

export default Dialogs;