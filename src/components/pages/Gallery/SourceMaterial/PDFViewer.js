import React, { useState } from 'react';
import PDFLoading from './PDFLoading';
import ControlPage from './ControlPage';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ContentPrompt = ({ close }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div>
      <div>
        <h2>This Week's Story </h2>
      </div>
      <div>
        <PDFLoading isLoading={isLoading} />
        <Document
          file="/assets/docs/sample.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <ControlPage
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
      <button>Writing Prompt</button>
      <button>Drawing Prompt</button>
    </div>
  );
};

export default ContentPrompt;
