import React from "react";
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessagesContainer from "./Messages/MessagesContainer";



const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <Dialog dialogs={props.store.getState().dialogsPage.dialogs} />
      <MessagesContainer store={props.store} />
    </div>
  );
}

export default Dialogs;