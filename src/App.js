import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Channels from './components/channels';
import PageNo from './components/PageNo';
import News from './components/news';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Row>
          <h1 class="warning">NEWS BOARD</h1>
        </Row>
        <Row>
          <Col sm={4}>
            <Channels />
            {/*<PageNo />*/}
          </Col>
          <Col sm={4}>
            <News />
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
