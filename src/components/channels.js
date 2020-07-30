import React, { useEffect } from 'react';
import { Container, ListGroup, Badge, Col, Row } from 'react-bootstrap';
//import { Provider, useSelector, useDispatch } from 'react-redux';
import { connect, useDispatch } from 'react-redux';
import { getChannel, getNews } from '../actions/action';

const Channels = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannel());
  }, []);

  if (props.loading) {
    return (
      <Container>
        <Row>
          <Col sm={9}>
            <h3>CHANNELS</h3>
          </Col>
          <Col>
            <Badge variant={'secondary'}>{props.news.length}</Badge>
          </Col>
        </Row>
        <h2>Loading.....</h2>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <h3>CHANNELS</h3>
        </Col>
        <Col sm={3}>
          <Badge variant={'secondary'}>{props.channel.length}</Badge>
        </Col>
      </Row>
      <ListGroup>
        {props.channel.map((item) => (
          <ListGroup.Item
            action
            variant={'info'}
            key={item.id}
            onClick={() => {
              dispatch(getNews(item.url));
            }}
          >
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
    loading: state.loading,
    news: state.news,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    onGetChannel: () => dispatch(getChannel()),
    //onGetNews: () => dispatch(getNews('http://www.aljazeera.com')),
  };
};*/

export default connect(mapStateToProps)(Channels);
