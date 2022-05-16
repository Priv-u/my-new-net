import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class='app-wrapper-contetnt'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer store={props.store} />} />
            <Route path='/dialogs' element={<Dialogs store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
