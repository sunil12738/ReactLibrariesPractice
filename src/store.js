import { createStore, applyMiddleware } from 'redux';
import reducer from "./component/Redux-Store/reducer.js";
// import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
console.log(preloadedState)
const store = createStore(
  reducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger(),
    // thunkMiddleware
  )
);

export default store;