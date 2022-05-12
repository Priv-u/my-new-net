import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
// При передаче  методов через пропсы необходимо эти 
// методы забиндить на владельца т.е. store

const rerenderEntireTree = (state) => {
  root.render(

    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
