import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import SettingsContainer from './components/Settings/SettingsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div class='app-wrapper-contetnt'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<div> Новостная лента... </div>} />
            <Route path='/gallery' element={<div> Галерея работ, резюме, портфолио... </div>} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/settings' element={<SettingsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
