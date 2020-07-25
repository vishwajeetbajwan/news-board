import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Channels from './components/channels';
import PageNo from './components/PageNo';
import store from './store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const App = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  /*
  const [channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [channelsPerPage] = useState(11);

  useEffect(() => {
    async function fetchChannel() {
      setLoading(true);
      var res = await axios.get(
        'https://newsapi.org/v2/sources?language=en&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a'
      );
      setChannel(res.data.sources);
      setLoading(false);
    }
    fetchChannel();
  }, []);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  const indexOfLastChannel = activePage * channelsPerPage;
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  const currentChannel = channel.slice(indexOfFirstChannel, indexOfLastChannel);
  */

  return (
    <Provider store={store}>
      <Container>
        <Row>
          <h1 className="App-h1">NEWS BOARD</h1>
        </Row>
        <Row>
          <Col sm={4}>
            <h2>Channels</h2>
            {/*<Channels channel={channel} />*/}
            <button onClick={() => dispatch({ type: 'GET_CHANNELS' })}>
              CHANNEL
            </button>
            <h4>state: {news}</h4>
            {/*
            <PageNo
              activePage={activePage}
              channelsPerPage={channelsPerPage}
              totalChannel={channel.length}
              handlePageChange={handlePageChange}
            />*/}
          </Col>
          <Col sm={4}>
            <h2>News</h2>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <h2>Content</h2>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;
