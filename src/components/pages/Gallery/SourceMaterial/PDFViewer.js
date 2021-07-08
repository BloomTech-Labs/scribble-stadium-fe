import React, { useState } from 'react';
import PDFLoading from './PDFLoading';
import ControlPanel from './ControlPanel';
import PromptButtons from './PromptButtons';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = props => {
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
    <div>
      <div>
        <h3>Week's Story </h3>
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
