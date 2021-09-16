import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../../common';
import { Button } from 'antd';
import { getChildByID } from '../../../api/index';
import WeeklySubmissions from './WeeklySubmissions';
import { useHistory, useParams } from 'react-router-dom';

const GalleryContainer = () => {
  const { user, isAuthenticated } = useAuth0();
  const { push } = useHistory();
  const [data, setDataInfo] = useState([]);
  const { id } = useParams();

  // moved to Parent Component to pass down data
  useEffect(() => {
    //Getting data from backend for leaderboard
    getChildByID(user, id).then(res => {
      setDataInfo(res.data.Submissions);
    });
  }, [user, id]);

  const leaderboard = () => {
    push('/child/leaderboard');
  };

  return (
    <>
      <Header title="STORY SQUAD" displayMenu={true} />
      <Button style={{ margin: '1rem' }} onClick={leaderboard}>
        Back to Leaderboard
      </Button>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <div className="content-box">
          <div className="shaped">
            <div className="dark">
              <h2 className="h2">Submission Gallery</h2>
            </div>
          </div>
        </div>
        <WeeklySubmissions data={data} />
      </div>
    </>
  );
};

export default connect()(GalleryContainer);
