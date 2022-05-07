import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import { Button } from 'antd';
import { getChildByID } from '../../../api/index';
import { setWeeklySubmissions } from '../../../state/actions/galleryActions';

import WeeklySubmissions from './WeeklySubmissions';
import { useHistory, useParams } from 'react-router-dom';

const GalleryContainer = props => {
	const {setWeeklySubmissions } = props;
  const { user } = useAuth0();
  const { push } = useHistory();
  const [, setDataInfo] = useState([]);
  const { id } = useParams();

  // moved to Parent Component to pass down data
  useEffect(() => {
    //Getting data from backend for leaderboard
    getChildByID(id).then(res => {
      setDataInfo(res.data.Submissions);
    });
  }, [user, id]);

	console.log(data);
  const leaderboard = () => {
    push('/child/leaderboard');
  };

  useEffect(() => {
<<<<<<< refs/remotes/origin/main
    props.setWeeklySubmissions(id);
  }, [props, id]);
=======
    setWeeklySubmissions(id);
<<<<<<< refs/remotes/origin/main
  }, [id]);
>>>>>>> useEffect deps
=======
  }, [setWeeklySubmissions,id]);
>>>>>>> used unused var

  return (
    <>
      <Header title="Scribble Stadium" displayMenu={true} />
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
        <WeeklySubmissions data={props.submissions} />
      </div>
      <ChildFooter />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    submissions: state.submissions,
  };
};

export default connect(mapStateToProps, { setWeeklySubmissions })(
  GalleryContainer
);
