import React from 'react';
import { HourglassTwoTone } from '@ant-design/icons';

const PDFLoading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div>
      {/* Placeholder for something more applicable. Can be image or icon. */}
      {/* <HourglassTwoTone /> */}
      <p>Loading...</p>
    </div>
  );
};

export default PDFLoading;
