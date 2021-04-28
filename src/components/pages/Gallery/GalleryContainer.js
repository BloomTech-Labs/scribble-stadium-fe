import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../common';
import { Button } from 'antd';
import WeeklySubmissions from './WeeklySubmissions';
import { useHistory } from 'react-router-dom';

const GalleryContainer = () => {
  const { push } = useHistory();

  const leaderboard = () => {
    push('/child/trophyroom');
  };

  return (
    <>
      <Header title="MY GALLERY" displayMenu={true} />
      <Button
        style={{ margin: '1rem' }}
        className="back-btn"
        onClick={leaderboard}
      >
        Back to Leaderboard
      </Button>
      <WeeklySubmissions />
    </>
  );
};

export default connect()(GalleryContainer);
