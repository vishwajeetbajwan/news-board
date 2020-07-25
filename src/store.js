import { createStore } from 'redux';
import news from './reducers/rootReducers';

const initialState = {};

const store = createStore(
  news,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
