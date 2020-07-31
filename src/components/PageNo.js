import React, { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { Container } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { getCurrentChannel } from '../actions/action';
import { handlePageChange } from '../actions/action';

const PageNo = (props) => {
  const dispatch = useDispatch();
  const totalChannel = props.channel.length;
  const channelsPerPage = 20;
  useEffect(() => {
    dispatch(
      getCurrentChannel(props.channel, props.activePage, channelsPerPage)
    );
  }, [props.activePage]);
  return (
    <Container>
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={props.activePage}
        itemsCountPerPage={props.channelsPerPage}
        totalItemsCount={totalChannel}
        onChange={(pgNo) => {
          dispatch(handlePageChange(pgNo));
        }}
      ></Pagination>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    channel: state.channel,
    activePage: state.activePage,
  };
};

export default connect(mapStateToProps)(PageNo);
