import React, { useState, useEffect, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Header } from '../../common';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { SizeMe } from 'react-sizeme';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { markAsRead } from '../../../api';
import { tasks } from '../../../state/actions';

const StoryViewer = props => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasViewedAllPages, setViewed] = useState(false);

  const { user } = useAuth0();
  const { push } = useHistory();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    if (pageNumber === numPages) {
      setViewed(true);
    }
  }, [pageNumber, numPages]);

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1);
    }
  };
  const nextPage = () => {
    if (pageNumber < numPages) {
      changePage(1);
    }
  };

  const keydownListener = useCallback(
    event => {
      if (event.keyCode === 37) {
        previousPage();
      }
      if (event.keyCode === 39) {
        nextPage();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [previousPage, nextPage, numPages]
  );

  useEffect(() => {
    document.addEventListener('keydown', keydownListener);
    return () => {
      document.removeEventListener('keydown', keydownListener);
    };
  }, [keydownListener]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const onFinish = e => {
    markAsRead(user, props.tasks.id);
    push('/child/mission-control');

    props.setHasRead();
  };

  return (
    <>
      <SizeMe>
        {({ size }) => (
          <Document
            file="https://storysquad-main.s3.amazonaws.com/pdfs/Story+Squad+Week+1+Content+%2B+CCS.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading Story..."
          >
            <div className="page-container">
              <Page
                width={size.width ? size.width : 1}
                pageNumber={pageNumber}
              />
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </Document>
        )}
      </SizeMe>

      <Button
        className="prev-button"
        type="primary"
        disabled={pageNumber <= 1}
        onClick={previousPage}
        icon={<ArrowLeftOutlined />}
        size="large"
      ></Button>
      <Button
        className="next-button"
        type="primary"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
        icon={<ArrowRightOutlined />}
        size="large"
      ></Button>
    </>
  );
};

export default StoryViewer;
