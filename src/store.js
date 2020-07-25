import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import channelReducer from './reducers/reducer';
//import initialState from './initialState';

const middlewares = [thunk];

const store = createStore(
  channelReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
