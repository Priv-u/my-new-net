const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';



const dialogReducer = (action, state) => {
  switch (action.type) {
    case ADD_NEW_DIALOG_MESSAGE:
      {
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
          messageTime: String(now.hours + ':' + now.minutes),
        }
        if (newMessageText.message !== '') {
          state.messages.push(newMessageText);
          state.newMessage = '';
        }
        return state;
      }
    case UPDATE_NEW_DIALOG_MESSAGE:
      {
        state.newMessage = action.newMessageFromUi;
        return state;
      }
    default: {
      return state;
    }
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