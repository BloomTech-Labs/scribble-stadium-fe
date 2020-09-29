import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { getStory } from '../../../api/index';
import { Header } from '../../common';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from 'antd';
import { SizeMe } from 'react-sizeme';

const RenderStoryViewer = props => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [storyPrompt, setStoryPrompt] = useState();
  const { authState } = useOktaAuth();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    // ========== second argument to getStory() is hardcoded for testing ==========
    getStory(authState, 11).then(res => {
      setStoryPrompt(res.URL);
      console.log(res);
    });
  }, [authState]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };
  const previousPage = () => {
    changePage(-1);
  };
  const nextPage = () => {
    changePage(1);
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
        <div className="btn-container">
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous Page
          </Button>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next Page
          </Button>
        </div>
      </div>
    </>
  );
};
export default RenderStoryViewer;
