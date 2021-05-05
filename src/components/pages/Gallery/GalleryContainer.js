import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../common';
import { Button } from 'antd';
import WeeklySubmissions from './WeeklySubmissions';
import { useHistory } from 'react-router-dom';

const GalleryContainer = () => {
  const { push } = useHistory();

  const leaderboard = () => {
    push('/child/leaderboard');
  };

  return (
    <>
      <Header title="STORY SQUAD" displayMenu={true} />
      <Button style={{ margin: '1rem' }} onClick={leaderboard}>
        Back to Leaderboard
      </Button>
      <div className="content-box">
        <div className="shaped">
          <div className="dark">
            <h2 className="h2">My Gallery</h2>
          </div>
        </div>
      </div>

      <WeeklySubmissions />
    </>
  );
};

export default connect()(GalleryContainer);
