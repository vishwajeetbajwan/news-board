// Get News Channels

import axios from 'axios';

//import { GET_CHANNELS, CHANNEL_ERROR } from './types';
export const GET_CHANNELS = 'GET_CHANNELS';
export const CHANNEL_ERROR = 'CHANNEL_ERROR';
console.log('......in actions');

export const fetchChannelsSuccess = async () => {
  const res = await axios.get(
    'https://newsapi.org/v2/sources?language=en&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a'
  );
  //console.log(res);
  return {
    type: GET_CHANNELS,
    channel: res.data.sources,
  };
  //console.log(res.data.sources);
};

export function fetchChannelsError(error) {
  return {
    type: CHANNEL_ERROR,
    error: error,
  };
}
