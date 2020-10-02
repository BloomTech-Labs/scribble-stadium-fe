import React, { useState, useEffect, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { getStory } from '../../../api/index';
import { Header } from '../../common';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { SizeMe } from 'react-sizeme';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { markAsRead } from '../../../api';
import { tasks } from '../../../state/actions';

const RenderStoryViewer = props => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [storyPrompt, setStoryPrompt] = useState();
  const [hasViewedAllPages, setViewed] = useState(false);
  const { authState } = useOktaAuth();
  const { push } = useHistory();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    // ========== second argument to getStory() is hardcoded for testing ==========
    getStory(authState, 10).then(res => {
      setStoryPrompt(res.URL);
      console.log(res);
    });
  }, [authState]);

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
    markAsRead(authState, props.tasks.id);
    push('/child/mission-control');
    props.setHasRead(!hasViewedAllPages);
  };

  return (
    <>
      <Header backButton={true} />
      <div class="viewer-container">
        <SizeMe>
          {({ size }) => (
            <Document
              file={storyPrompt}
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
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          {<ArrowLeftOutlined />}
        </Button>
        <Button
          className="next-button"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          {<ArrowRightOutlined />}
        </Button>
        <div className="finished-container">
          <Button
            className="finished-reading"
            type="button"
            disabled={!hasViewedAllPages}
            onClick={onFinish}
          >
            Finished Reading?
          </Button>
        </div>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {
    setHasRead: tasks.setHasRead,
  }
)(RenderStoryViewer);
