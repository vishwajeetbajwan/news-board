import { fetchChannelsSuccess, fetchChannelsError } from './action';

function fetchChannels() {
  return (dispatch) => {
    fetch(
      'https://newsapi.org/v2/sources?language=en&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a'
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchChannelsSuccess(res.data.sources));
        return res.data.sources;
      })
      .catch((error) => {
        dispatch(fetchChannelsError(error));
      });
  };
}

export default fetchChannels;
