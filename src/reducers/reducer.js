import {
  GET_CHANNELS,
  GET_NEWS,
  GET_CONTENT,
  GET_CURRENT,
  GET_PAGE,
} from '../actions/action';

console.log('.....in reducer');

const initialState = {
  channel: [],
  currentChannel: [],
  news: [],
  content: [],
  loading: true,
  activePage: 1,
};

const reducer = (state = initialState, action) => {
  console.log('action.type', action.type);
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channel: action.channel,
        loading: false,
      };

    case GET_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };

    case GET_CURRENT:
      return {
        ...state,
        currentChannel: action.currentChannel,
        loading: false,
      };

    case GET_NEWS:
      return {
        ...state,
        news: action.news,
        loading: false,
      };

    case GET_CONTENT:
      return {
        ...state,
        content: action.content,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
