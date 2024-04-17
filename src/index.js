import store from './store.ts'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let updateContentApp = (store) => { // Функция
    //debugger
  root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Прокидываем весь state для обращения к нему из HOC */}
      <App />
    </Provider>
  </React.StrictMode>
);
}

//reportWebVitals();
updateContentApp(store)

store.subscribe(()=>{//передача колбэка для ре-рендеринга
    updateContentApp(store)
})