import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer from './Reducer/Reducer'

const store = createStore(Reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
);


