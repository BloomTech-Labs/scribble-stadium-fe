import React from 'react';
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  ZoomOutOutlined,
  ZoomInOutlined,
} from '@ant-design/icons';

const ControlPanel = props => {
  const { pageNumber, numPages, setPageNumber, scale, setScale } = props;

  //   Page Number Navigation Functionality
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

  //   Scale Functionality
  const isMinZoom = scale <= 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className="control-panel-container">
      <div className="page-navigation">
        <DoubleLeftOutlined
          className={firstPageClass}
          onClick={gotToFirstPage}
        />
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
        <DoubleRightOutlined
          className={lastPageClass}
          onClick={gotToLastPage}
        />
      </div>
      <div className="page-zoom">
        <ZoomOutOutlined className={zoomOutClass} onClick={zoomOut} />
        <span className="percentage">{(scale * 100).toFixed()}%</span>
        <ZoomInOutlined className={zoomInClass} onClick={zoomIn} />
      </div>
    </div>
  );
};

export default ControlPanel;
