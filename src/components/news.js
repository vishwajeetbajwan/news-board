import React from 'react';
import { Container, ListGroup, Alert, Row, Col, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

const News = (props) => {
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
          <ListGroup.Item action variant={'info'} key={Math.random()}>
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
