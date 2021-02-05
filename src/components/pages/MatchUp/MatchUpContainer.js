import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderMatchUp from './RenderMatchUp';
import { connect } from 'react-redux';

import { child, faceoffs, votes } from '../../../state/actions';
import {
  getChild,
  getChildSquad,
  getFaceoffsForMatchup,
  getFaceoffsForVoting,
} from '../../../api/index';

function MatchUpContainer({ LoadingComponent, ...props }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [canVote, setCanVote] = useState(true);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    getChild(authState, props.child.memberId).then(child => {
      props.setChild({ ...child });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.child.VotesRemaining === 0) {
      setCanVote(false);
    }
  }, [props.child]);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  useEffect(() => {
    getChildSquad(authState, props.child.id).then(squad => {
      getFaceoffsForMatchup(authState, squad.ID, props.child.id).then(
        allFaceoffs => {
          props.setMemberId(squad);
          props.setSquadFaceoffs(allFaceoffs);
        }
      );

      if (
        props.child.Ballots.length > 0 &&
        props.child.VotesRemaining > 0 &&
        props.votes.length === 0
      ) {
        for (let ballot of props.child.Ballots) {
          getFaceoffsForVoting(authState, ballot[1]).then(faceoffs => {
            for (let faceoff of faceoffs) {
              if (faceoff.ID === ballot[0]) {
                props.setVotes(faceoff);
              }
            }
          });
        }
      }
    });

    // eslint-disable-next-line
  }, [authState]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {authState.isAuthenticated && userInfo && props.faceoffs && (
        <RenderMatchUp
          {...props}
          userInfo={userInfo}
          authService={authService}
          canVote={canVote}
          votesRemaining={props.child.VotesRemaining}
        />
      )}
    </>
  );
}

export default connect(
  state => ({
    child: state.child,
    faceoffs: state.faceoffs,
    votes: state.votes,
    custom_date: state.date.custom_date,
  }),
  {
    setSquadFaceoffs: faceoffs.setSquadFaceoffs,
    setMemberId: child.setMemberId,
    setVotes: votes.setVotes,
    setChild: child.setChild,
  }
)(MatchUpContainer);
