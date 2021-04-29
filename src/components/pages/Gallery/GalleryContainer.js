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
      <Header title="STORY SQUAD" displayMenu={true} />
      <Button style={{ margin: '1rem' }} onClick={leaderboard}>
        Back to Leaderboard
      </Button>
      <h2 className="h2">My Gallery</h2>
      <WeeklySubmissions />
    </>
  );
};

export default connect()(GalleryContainer);
