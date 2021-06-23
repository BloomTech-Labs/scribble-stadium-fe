import React, { useState } from 'react';
import PDFLoading from './PDFLoading';
import ControlPanel from './ControlPanel';
import PromptButtons from './PromptButtons';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  const [scale, setScale] = useState(1.0);
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
        <h3>This Week's Story </h3>
      </div>
      <div>
        <PDFLoading isLoading={isLoading} />
        <Document
          file="/assets/docs/sample.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
      <PromptButtons />
    </div>
  );
};

export default PDFViewer;
