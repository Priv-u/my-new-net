import React from "react";
import s from './Dialogs.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogContainer from "./Dialog/DialogContainer";



const Dialogs = () => {
  return (
    <div className={s.dialogsWrapper}>
      <DialogContainer />
      <MessagesContainer />
    </div>
  );
}

export default Dialogs;