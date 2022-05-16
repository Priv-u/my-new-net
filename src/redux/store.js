import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Первое сообщение', messageDate: '08/05/2022', likesCount: 10 },
        { id: 2, message: 'Второе сообщение', messageDate: '08/05/2022', likesCount: 20 },
        { id: 3, message: 'Третье сообщение', messageDate: '08/05/2022', likesCount: 30 },
        { id: 4, message: 'Четвертое сообщение из внешнего массива данных', messageDate: '08/05/2022', likesCount: 40 },
        { id: 5, message: "Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi", messageDate: '08/05/2022', likesCount: 40 }
      ],
      newPost: ''
    },
    dialogsPage: {
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
      newMessage: 'Новое сообщение'
    }
  },
  _callSubscriber() {
    alert('Стэйт изменен');
  },
  getState() {
    // debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);

  }
}
//TODO Дописать функции для работы со страницей диалогов
export default store;
window.store = store;