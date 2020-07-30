import { GET_CHANNELS, GET_NEWS } from '../actions/action';

console.log('.....in reducer');

const initialState = {
  channel: [],
  news: [],
  loading: true,
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

    case GET_NEWS:
      return {
        ...state,
        news: action.news,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
