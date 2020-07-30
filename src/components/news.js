import React from 'react';
import { Container, ListGroup, Alert, Row, Col, Badge } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { getContent } from '../actions/action';

const News = (props) => {
  const dispatch = useDispatch();
  if (props.loading) {
    return (
      <Container>
        <Row>
          <Col sm={9}>
            <h3>NEWS</h3>
          </Col>
          <Col>
            <Badge variant={'secondary'}>{props.news.length}</Badge>
          </Col>
        </Row>
        <h2>Loading.....</h2>
      </Container>
    );
  }
  if (props.news.length === 0) {
    return (
      <Container>
        <Row>
          <Col sm={9}>
            <h3>NEWS</h3>
          </Col>
          <Col>
            <Badge variant={'secondary'}>{props.news.length}</Badge>
          </Col>
        </Row>
        <Alert variant={'danger'}>No News Available</Alert>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <h3>NEWS</h3>
        </Col>
        <Col>
          <Badge variant={'secondary'}>{props.news.length}</Badge>
        </Col>
      </Row>
      <ListGroup>
        {props.news.map((item) => (
          <ListGroup.Item
            action
            variant={'info'}
            key={Math.random()}
            onClick={() => {
              dispatch(getContent(item));
            }}
          >
            {item.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
    content: state.content,
    loading: state.loading,
  };
};
/* 
  const mapDispatchToProps = (dispatch) => {
    return {
      onGetChannel: () => dispatch(getChannel()),
      onGetNews: () => dispatch(getNews()),
    };
  };*/

export default connect(mapStateToProps)(News);
