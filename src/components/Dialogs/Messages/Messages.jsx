import React from "react";
import s from './Messages.module.css'
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { maxValidLength } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";



const Messages = (props) => {
  let addNewDialogsMessage = (values) => {
    props.addMessage(values.newDialogMessage);
  }

  let messageUi = props.messages.map(m => <Message
    id={m.id}
    message={m.message}
    messageDate={m.messageDate}
    messageTime={m.messageTime} />);

  if (props.isAuth === false) {
    return <Navigate to={'/login'} />

  }

  const AddNewDialogMessage = (props) => {
    const maxLength200 = maxValidLength(200);

    return (
      <form onSubmit={props.handleSubmit} className={s.newMessage}>
        <div className={s.text}>
          <Field name="newDialogMessage" component={Textarea} placeholder="Введите текст нового сообщения" validate={[maxLength200]}
          />
        </div>
        <div className={s.sendMessage}>
          <button>Отправить</button>
        </div>
      </form>
    )
  }

  const AddNewDialogMessageReduxForm = reduxForm({ form: "dialogMessageForm" })(AddNewDialogMessage)

  return (
    <div >
      <div className={s.messages}>
        {messageUi}
      </div>
      <AddNewDialogMessageReduxForm onSubmit={addNewDialogsMessage} />
    </div>
  )
}

export default Messages;