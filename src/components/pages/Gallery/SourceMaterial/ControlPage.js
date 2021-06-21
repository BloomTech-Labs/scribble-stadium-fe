import React from 'react';
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

const ControlPage = props => {
  const { pageNumber, numPages, setPageNumber } = props;

  const isFirstPage = pageNumber == 1;
  const isLastPage = pageNumber == numPages;

  const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  const gotToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const gotToPrevPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const gotToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const gotToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = e => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  return (
    <div>
      <DoubleLeftOutlined className={firstPageClass} onClick={gotToFirstPage} />
      <LeftOutlined className={firstPageClass} onClick={gotToPrevPage} />
      <span>
        Page{' '}
        <input
          className="namePending"
          name="pagenumber"
          type="number"
          min={1}
          max={numPages || 1}
          value={pageNumber}
          onChange={onPageChange}
        />{' '}
        of {numPages}
      </span>
      <RightOutlined className={lastPageClass} onClick={gotToNextPage} />
      <DoubleRightOutlined className={lastPageClass} onClick={gotToLastPage} />
    </div>
  );
};

export default ControlPage;
