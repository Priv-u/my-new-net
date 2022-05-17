const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';

let initialState = {
  dialogs:
    [
      { id: 1, dialog: 'Алёна' },
      { id: 2, dialog: 'Алеся' },
      { id: 3, dialog: 'Алия' },
      { id: 4, dialog: 'Дима' },
      { id: 5, dialog: 'Мария Юрьевна' },
      { id: 6, dialog: 'Азамат' }
    ],
  messages:
    [
      { id: 1, message: 'Первое сообщение', messageDate: '10/05/2022', messageTime: '08:10' },
      { id: 2, message: 'Второе сообщение', messageDate: '10/05/2022', messageTime: '08:12' },
      { id: 3, message: 'Третье сообщение', messageDate: '10/05/2022', messageTime: '08:14' },
      { id: 4, message: 'Четвертое сообщение', messageDate: '10/05/2022', messageTime: '08:15' },
      { id: 5, message: 'Пятое сообщение', messageDate: '10/05/2022', messageTime: '08:15' },
      { id: 6, message: 'Шестое сообщение', messageDate: '10/05/2022', messageTime: '08:16' },
      { id: 7, message: 'Седьмое сообщение', messageDate: '10/05/2022', messageTime: '08:19' },
      { id: 8, message: 'Первое сообщение из внешнего блока данных', messageDate: '10/05/2022', messageTime: '08:19' }
    ],
  newMessage: ''
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_DIALOG_MESSAGE:

      let newMessageId = state.messages.length + 1;
      let date = new Date();
      let now = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes()
      }
      if (now.day < 10) {
        now.day = String('0' + now.day);
      }
      if (now.month < 10) {
        now.month = String('0' + now.month);
      }
      if (now.hours < 10) {
        now.hours = String('0' + now.hours);
      }
      if (now.minutes < 10) {
        now.minutes = String('0' + now.minutes);
      }

      let newMessageText = {
        id: newMessageId,
        message: state.newMessage,
        messageDate: String(now.day + '/' + now.month + '/' + now.year),
        messageTime: String(now.hours + ':' + now.minutes)
      }

      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];

      if (newMessageText.message !== '') {
        stateCopy.newMessage = '';
        debugger;
        stateCopy.messages.push(newMessageText);

      }
      return stateCopy;

    case UPDATE_NEW_DIALOG_MESSAGE:
      {
        debugger;
        let stateCopy = { ...state };
        stateCopy.newMessage = action.newMessageFromUi;
        return stateCopy;
      }


    default:
      return state;
  }
}


export const addMessageActionCreator = () => {
  return { type: ADD_NEW_DIALOG_MESSAGE }
}

export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_DIALOG_MESSAGE,
    newMessageFromUi: text
  }
}

export default dialogReducer;