import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Reducer/reducer.jsx'

const store = createStore(Reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
