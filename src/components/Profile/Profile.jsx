import React from "react";

let messages = [
  { id: 1, message: "Первое сообщение" },
  { id: 2, message: 'Второе сообщение' },
  { id: 3, message: 'Третье сообщение' },
  { id: 4, message: 'Четвертое сообщение из внешнего массива данных' }
];



const Post = (props) => {
  return (
    <div>
      {props.id} {props.message}
    </div>
  )
}

let posts = messages.map((post) => <Post id={post.id} message={post.message} />)

const Profile = () => {
  debugger;
  return (
    <div className='profile'>
      <div>
        <img src={require('./../../images/mountains.jpg')} alt='Красивый пейзаж' />
      </div>

      <div>
        <textarea>Новый пост</textarea>
        <div>
          <button>Новый пост</button>
        </div>
      </div>
      <div>
        {posts}
      </div>

    </div>
  );
}
export default Profile;