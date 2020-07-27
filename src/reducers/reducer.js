import { GET_CHANNELS, CHANNEL_ERROR } from '../actions/action';

console.log('.....in reducer');

const initialState = {
  channel: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  console.log('IN reducer', action.payload);
  console.log('action.type', action.type);
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channel: action.channel,
        loading: false,
      };

    case CHANNEL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducer;
