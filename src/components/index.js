import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from './channels';
import PageNo from './PageNo';
import News from './news';
import Content from './content';

const Index = () => {
  return (
    <Container>
      <h1 className="text-danger text-center">NEWS BOARD</h1>
      <Row>
        <Col sm={4}>
          <Channels />
          {/*<PageNo />*/}
        </Col>
        <Col sm={4}>
          <News />
        </Col>
        <Col sm={4}>
          <Content />
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
