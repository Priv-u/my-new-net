import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const Profile = () => {
  return (
    <div>
      <img src={require('./images/mountains.jpg')} alt='Красивый пейзаж' />
      Новые сообщения, которые будут добавляться на ленту.
      Основной профиль
    </div>
  )
}

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />

    </div>
  );
}

export default App;
