import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../common';
import WeeklySubmissions from './WeeklySubmissions';

const GalleryContainer = () => {
  return (
    <>
      <Header />
      <h1>Submission Gallery</h1>
      <WeeklySubmissions />
    </>
  );
};

export default connect()(GalleryContainer);
