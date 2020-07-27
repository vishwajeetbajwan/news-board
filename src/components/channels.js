import React, { useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
//import { Provider, useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getChannel } from '../actions/action';

const Channels = (props) => {
  useEffect(() => {
    props.onGetChannel();
  }, []);

  if (props.loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <Container>
      <ListGroup>
        {props.channel.map((item) => (
          <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetChannel: () => dispatch(getChannel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
