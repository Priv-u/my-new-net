import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const Profile = () => {
  return (
    <div className='profile'>
      <div>
        <img src={require('./images/mountains.jpg')} alt='Красивый пейзаж' />
      </div>
      <div>
        Пост 1
      </div>
      <div>
        Пост 2
      </div>
      <div>
        Пост 3
      </div>
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
