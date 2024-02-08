
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from 'redux-thunk'

import articleReducer from './articles/articleReducer';

const rootReducer = combineReducers({
  articleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));





export default store;
