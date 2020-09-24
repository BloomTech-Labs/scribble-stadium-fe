import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { getStory } from '../../../api/index';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from 'antd';

const StoryViewerContainer = () => {
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
    <div>
      <div className="btn-container">
        <Button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
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
      <Document
        file={storyPrompt}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading Story..."
      >
        <Page pageNumber={pageNumber} />
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Document>
    </div>
  );
};
export default StoryViewerContainer;
