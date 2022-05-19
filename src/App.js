import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import UsersContainer from './components/Users/UsersContainer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';


//TODO Пересмотреть урок 49 и 50 для понимания как создавать новую компоненту с редьюсором
// основываясь на стэйте

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class='app-wrapper-contetnt'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<div> Новостная лента... </div>} />
            <Route path='/gallery' element={<div> Галерея работ, резюме, портфолио... </div>} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/settings' element={<div> Страница настроек пользователя </div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
