import React from "react";
import s from './Dialog.module.css'


const Dialog = (props) => {
  let dialog = props.dialogs.map(d => <div> {d.id} {d.dialog}</div>);
  return (
    <div className={s.dialogs}>
      Диалоги
      {dialog}
    </div>
  );
}
export default Dialog;