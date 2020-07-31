import axios from 'axios';
export const GET_CHANNELS = 'GET_CHANNELS';
export const GET_CURRENT = 'GET_CURRENT';
export const GET_PAGE = 'GET_PAGE';
export const GET_NEWS = 'GET_NEWS';
export const GET_CONTENT = 'GET_CONTENT';

export const getChannel = () => {
  return async (dispatch) => {
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

export const getCurrentChannel = (channel, activePage, channelsPerPage) => {
  const indexOfLastChannel = activePage * channelsPerPage;
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  return (dispatch) => {
    dispatch({
      type: GET_CURRENT,
      currentChannel: channel.slice(indexOfFirstChannel, indexOfLastChannel),
      loading: false,
    });
  };
};

export const handlePageChange = (pageNumber) => {
  return (dispatch) => {
    dispatch({
      type: GET_PAGE,
      activePage: pageNumber,
    });
  };
};

export const getNews = (url) => {
  let domain = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '');
  return async (dispatch) => {
    await axios
      .get(
        `https://newsapi.org/v2/everything?domains=${domain}&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a`
      )
      .then((res) => {
        dispatch({
          type: GET_NEWS,
          news: res.data.articles,
          loading: false,
        });
      });
  };
};

export const getContent = (item) => {
  return (dispatch) => {
    dispatch({
      type: GET_CONTENT,
      content: item,
      loading: false,
    });
  };
};
