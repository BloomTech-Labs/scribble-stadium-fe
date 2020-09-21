import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../../../styles/StoryViewer.less';
import { getStory } from '../../../api/index';
import { useOktaAuth } from '@okta/okta-react';

const StoryViewerContainer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [storyPrompt, setStoryPrompt] = useState();
  const { authState, authService } = useOktaAuth();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    // ========== second argument to getStory() is hardcoded for testing ==========
    getStory(authState, 11).then(res => {
      setStoryPrompt(res.URL);
      console.log(res);
    });
  }, []);

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
      <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
        Previous Page
      </button>
      <button
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next Page
      </button>
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
