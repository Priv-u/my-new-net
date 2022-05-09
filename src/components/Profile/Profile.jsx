import React from "react";
import Post from './Post/Post';
import s from './Profile.module.css';

let messages = [
  { id: 1, message: 'Первое сообщение', messageDate: '08.05.2022', likesCount: 10 },
  { id: 2, message: 'Второе сообщение', messageDate: '08.05.2022', likesCount: 20 },
  { id: 3, message: 'Третье сообщение', messageDate: '08.05.2022', likesCount: 30 },
  { id: 4, message: 'Четвертое сообщение из внешнего массива данных', messageDate: '08.05.2022', likesCount: 40 },
  { id: 5, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus quas atque exercitationem est hic cupiditate saepe ipsa maiores vero temporibus voluptas minima deleniti inventore quia ab tempore excepturi", messageDate: '08.05.2022', likesCount: 40 }
];


const Profile = () => {
  // debugger;
  let posts = messages.map((post) =>
    <Post id={post.id}
      message={post.message}
      messageDate={post.messageDate}
      likesCount={post.likesCount} />)

  return (
    <div className='profile'>
      <div>
        <img src={require('./../../images/mountains.jpg')} alt='Красивый пейзаж' />
      </div>

      <div className={s.newMessage}>
        <textarea></textarea>
        <div className={s.newMessageButton}>
          <button>Новый пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts}
      </div>

    </div>
  );
}
export default Profile;