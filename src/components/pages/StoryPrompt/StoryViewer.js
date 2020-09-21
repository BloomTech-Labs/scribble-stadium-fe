import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import SampleDoc from '../../../assets/pdfs/dummy.pdf';
import axios from 'axios';
import '../../../styles/StoryViewer.less';

const StoryViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  // const getPDF = () => {
  //   axios
  //     .get('https://story-squad-b-api.herokuapp.com/stories/1')
  //     .then(res => {
  //       const storyPrompt = res;
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

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
      {/* <button type="button" onClick={}>
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
        file={'https://test-image-bucket-14579.s3.amazonaws.com/pdf.pdf'}
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
