import { rerenderEntireTree } from './../index';


let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Первое сообщение', messageDate: '08.05.2022', likesCount: 10 },
      { id: 2, message: 'Второе сообщение', messageDate: '08.05.2022', likesCount: 20 },
      { id: 3, message: 'Третье сообщение', messageDate: '08.05.2022', likesCount: 30 },
      { id: 4, message: 'Четвертое сообщение из внешнего массива данных', messageDate: '08.05.2022', likesCount: 40 },
      { id: 5, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi", messageDate: '08.05.2022', likesCount: 40 }
    ],
    newPost: 'Новый пост'
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
        { id: 1, message: 'Первое сообщение', messageDate: '10.05.2022', messageTime: '08:10' },
        { id: 2, message: 'Второе сообщение', messageDate: '10.05.2022', messageTime: '08:12' },
        { id: 3, message: 'Третье сообщение', messageDate: '10.05.2022', messageTime: '08:14' },
        { id: 4, message: 'Четвертое сообщение', messageDate: '10.05.2022', messageTime: '08:15' },
        { id: 5, message: 'Пятое сообщение', messageDate: '10.05.2022', messageTime: '08:15' },
        { id: 6, message: 'Шестое сообщение', messageDate: '10.05.2022', messageTime: '08:16' },
        { id: 7, message: 'Седьмое сообщение', messageDate: '10.05.2022', messageTime: '08:19' },
        { id: 8, message: 'Первое сообщение из внешнего блока данных', messageDate: '10.05.2022', messageTime: '08:19' }
      ],
    newMessage: 'Новое сообщение'
  }
}
export default state;

export const addPost = () => {
  console.log('Отправлено при нажатии кнопки');
  let newPostText = {
    id: 6,
    message: 'Первое сообщение отправленное из колбэка',
    messageDate: '10.05.2022',
    likesCount: 0
  }
  state.profilePage.posts.push(newPostText);
  rerenderEntireTree();
  // debugger;
  // alert('Нажатк кнопка НОВЫЙ ПОСТ')
}

//TODO Необходимо переписать rerenderEntireTree таким образом, чтобы избавиться от импорта
// этой функции в state