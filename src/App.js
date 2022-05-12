import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class='app-wrapper-contetnt'>
          <Routes>
            <Route path='/profile' element={<Profile
              posts={props.state.profilePage.posts}
              newPost={props.state.profilePage.newPost}
              updateNewPost={props.updateNewPost}
              addPost={props.addPost} />} />
            <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
