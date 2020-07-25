import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const channels = ({ channel, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <Container>
      <ListGroup>
        {channel.map((item) => (
          <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default channels;
