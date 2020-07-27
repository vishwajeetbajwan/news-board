import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
//import { Provider, useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import * as actionCreator from '../actions/action';

const channels = (props) => {
  /*
  if (props.loading) {
    return <h2>Loading....</h2>;
  }*/
  if (props.loading) {
    return (
      <Container>
        <ListGroup>
          <button
            onClick={() => {
              props.onGetChannel();
            }}
          >
            CHANNEL
          </button>
          {props.channel.map((item) => (
            <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  } else {
    return <h2>Loading.....</h2>;
  }
};

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetChannel: () => dispatch(actionCreator.getChannel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(channels);
