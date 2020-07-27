// Get News Channels

import axios from 'axios';

//import { GET_CHANNELS, CHANNEL_ERROR } from './types';
export const GET_CHANNELS = 'GET_CHANNELS';
export const CHANNEL_ERROR = 'CHANNEL_ERROR';

export const getChannel = () => {
  return async (dispatch) => {
    console.log('IN action getchannel dispatch');

    await axios
      .get(
        'https://newsapi.org/v2/sources?language=en&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a'
      )
      .then((res) => {
        dispatch({
          type: GET_CHANNELS,
          channel: res.data.sources,
          loading: false,
        });
      });
  };
};
