import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import '../../../styles/StoryViewer.less';
import { getStoryData } from '../../../api/index';

const StoryViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [storyPrompt, setStoryPrompt] = useState();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  useEffect(() => {
    setStoryPrompt(getStoryData('/stories/11'));
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
      {/* <button type="button" onClick={getPDF}>
        Get Story
      </button> */}
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
        // file={'https://test-image-bucket-14579.s3.amazonaws.com/pdf.pdf'}
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
export default StoryViewer;
