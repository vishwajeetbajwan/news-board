import React from 'react';
import Pagination from 'react-js-pagination';
import { Container } from 'react-bootstrap';
//require('bootstrap-less/bootstrap/bootstrap.less');

const PageNo = ({
  activePage,
  channelsPerPage,
  totalChannel,
  handlePageChange,
}) => {
  return (
    <Container>
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={activePage}
        itemsCountPerPage={channelsPerPage}
        totalItemsCount={totalChannel}
        onChange={handlePageChange}
      ></Pagination>
    </Container>
  );
};

export default PageNo;
