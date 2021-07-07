import React, { useState } from 'react';
import PDFLoading from './PDFLoading';
import ControlPanel from './ControlPanel';
import PromptButtons from './PromptButtons';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = props => {
  console.log('pdfviewer props', props);

  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [writingVisible, setWritingVisible] = useState('invisible');
  const [drawingVisible, setDrawingVisible] = useState('invisible');

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className="pdf-container">
      <div>
        <h3>Week {props.sprint} Story </h3>
      </div>
      <div className="pdf-viewer">
        <PDFLoading isLoading={isLoading} />
        <Document
          className="pdf-components"
          // Dummy data being displays while AWS data is broken
          file="/assets/docs/sample.pdf"
          // Real data will be displayed with props when available
          // file={props.sprintstory}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        <div className="pdf-link">
          {/* Dummy data being displays while AWS data is broken */}
          <a href="/assets/docs/sample.pdf" download target="_blank">
            Download Story
          </a>
          {/* Real data will be displayed with props when available */}
          {/* <a href={props.sprintstory} download target="_blank">
            Download Story
          </a> */}
        </div>
        <div className="pdf-components">
          <ControlPanel
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
      <PromptButtons
        drawingVisible={drawingVisible}
        setDrawingVisible={setDrawingVisible}
        writingVisible={writingVisible}
        setWritingVisible={setWritingVisible}
        drawingprompt={props.drawingprompt}
        writingprompt={props.writingprompt}
      />
    </div>
  );
};

export default PDFViewer;
