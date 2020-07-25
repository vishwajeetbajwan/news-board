import { GET_CHANNELS, CHANNEL_ERROR } from '../actions/types';

console.log('.....in reducer');

const initialState = {
  channel: [],
  loading: true,
  error: {},
};

const news = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHANNELS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };

    case CHANNEL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default news;
