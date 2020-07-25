// Get News Channels
import axios from 'axios';
import { GET_CHANNELS, CHANNEL_ERROR } from './types';
console.log('......in actions');

export const getChannel = async (dispatch) => {
  try {
    const res = await axios.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a'
    );
    dispatch({
      type: GET_CHANNELS,
      payload: res.data.sources,
    });
    console.log(res.data.sources);
  } catch (err) {
    dispatch({
      type: CHANNEL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
