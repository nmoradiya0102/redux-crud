import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux-saga/store';
import { Provider } from 'react-redux';
// import Data from './components/Data';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
