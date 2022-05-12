import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
// При передаче  методов через пропсы необходимо эти 
// методы забиндить на владельца т.е. store
// store.updateNewPost.bind(store)

let rerenderEntireTree = (state) => {
  root.render(

    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

// При использовании методов нет тебходимости биндить метод к владельцу, т.к. вызов метода сразу
// выполняется от его владельца.
store.subscribe(rerenderEntireTree);

reportWebVitals();
//TODO почитить про binb в JavaScript и в React