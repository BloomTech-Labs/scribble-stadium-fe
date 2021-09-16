import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderVotingPage from './RenderVotingPage';

function VotingPageContainer({ LoadingComponent, ...props }) {
  const { push } = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);
  const [votes, setVotes] = useState();

  useEffect(() => {
    if (props.child.VotesRemaining > 0) {
      setVotes(props.votes[props.child.VotesRemaining - 1]); // Needs to update to get the assigned faceoff to vote.
    } else {
      push('/child/dashboard');
    }
  }, [props.child, props.votes, push]);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && votes && (
        <RenderVotingPage {...props} votes={votes} userInfo={userInfo} />
      )}
    </>
  );
}

export default connect(
  state => ({
    child: state.child,
    faceoffs: state.faceoffs,
    votes: state.votes,
  }),
  {}
)(VotingPageContainer);
