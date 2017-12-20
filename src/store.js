import { createStore, applyMiddleware } from 'redux';
import reducer from "./component/Redux-Store/reducer.js";
import thunk from "redux-thunk"

// import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger(),
    thunk
  )
);

export default store;
