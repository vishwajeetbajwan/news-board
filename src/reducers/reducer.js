import { GET_CHANNELS, CHANNEL_ERROR } from '../actions/action';

console.log('.....in reducer');

const initialState = {
  channel: [],
  loading: true,
  error: null,
};

export default function channelReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_CHANNELS:
      console.log('.........', action.payload);
      return {
        ...state,
        channel: action.payload,
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
}
/*
export const getChannels = (state) => state.channel;
export const getChannelsError = (state) => state.error;
*/
