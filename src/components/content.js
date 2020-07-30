import React from 'react';
import { Container, Alert, Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const Content = (props) => {
  if (props.loading) {
    return (
      <Container>
        <Row>
          <Col sm={9}>
            <h3>CONTENT</h3>
          </Col>
        </Row>
        <h2>Loading.....</h2>
      </Container>
    );
  }
  if (props.content.length === 0) {
    return (
      <Container>
        <Row>
          <Col sm={9}>
            <h3>CONTENT</h3>
          </Col>
        </Row>
        <Alert variant={'danger'}>No Content Available</Alert>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <h3>CONTENT</h3>
        </Col>
      </Row>
      <Card border="info" style={{ width: '25rem' }}>
        <Card.Img variant={'top'} src={props.content.urlToImage} />
        <Card.Body>
          <Card.Title>{props.content.title}</Card.Title>
          <Card.Text>{props.content.description}</Card.Text>
          <Button
            variant="outline-primary"
            href={props.content.url}
            target="_blank"
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
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

export default connect(mapStateToProps)(Content);
