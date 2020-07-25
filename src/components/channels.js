import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
//import { Provider, useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchChannelsSuccess } from '../actions/action';
import fetchChannels from '../actions/fetchChannel';
import { useSelector, useDispatch } from 'react-redux';

const channels = ({ channel, loading }) => {
  /*const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  console.log('news in app.js', news);*/
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <Container>
      <ListGroup>
        {channel}
        {/*channel.map((item) => (
          <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
        ))*/}
      </ListGroup>
    </Container>
  );
};

channels.propTypes = {
  channel: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  channel: state.channel,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchChannel: fetchChannels,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(channels);
