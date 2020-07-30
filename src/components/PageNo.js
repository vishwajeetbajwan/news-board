import React from 'react';
import Pagination from 'react-js-pagination';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
//require('bootstrap-less/bootstrap/bootstrap.less');

const PageNo = (props) => {
  // const [activePage, setActivePage] = useState(1);
  // const [channelsPerPage] = useState(11);

  // const totalChannel = channel.length;

  // const indexOfLastChannel = activePage * channelsPerPage;
  // const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  // const currentChannel = channel.slice(indexOfFirstChannel, indexOfLastChannel);

  // function handlePageChange(pageNumber) {
  //   setActivePage(pageNumber);
  // }

  return (
    <Container>
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={props.activePage}
        itemsCountPerPage={props.channelsPerPage}
        totalItemsCount={props.totalChannel}
        onChange={props.handlePageChange()}
      ></Pagination>
    </Container>
  );
};
/*
const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
    itemsCountPerPage: state.channelsPerPage,
    totalItemsCount: state.totalChannel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePageChange: () => dispatch(getPageNo()),
  };
};*/

export default PageNo;
