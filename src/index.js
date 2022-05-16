import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';



const root = ReactDOM.createRoot(document.getElementById('root'));
// При передаче  методов через пропсы необходимо эти 
// методы забиндить на владельца т.е. store

let rerenderEntireTree = () => {
  root.render(

    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

// При использовании методов нет тебходимости биндить метод к владельцу, т.к. вызов метода сразу
// выполняется от его владельца.
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
}
);

reportWebVitals();
//TODO Проработать активность кнопок в Навбаре