import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderMatchUp from './RenderMatchUp';
import { connect } from 'react-redux';

import { child, faceoffs, votes } from '../../../state/actions';
import {
  getChild,
  getGameVotes,
  getChildSquad,
  getFaceoffsForMatchup,
  getFaceoffsForVoting,
} from '../../../api/index';

function MatchUpContainer({ LoadingComponent, ...props }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [canVote, setCanVote] = useState(true);
  const [numberOfTimesVoted, setNumberOfTimesVoted] = useState(3);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    getChild(authState, props.child.memberId).then(child => {
      props.setChild({ ...child });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      if (squad.ID % 2 === 0) {
        getFaceoffsForVoting(authState, squad.ID - 1).then(faceoffs => {
          props.setVotes(faceoffs);
        });
      } else {
        getFaceoffsForVoting(authState, squad.ID + 1).then(faceoffs => {
          props.setVotes(faceoffs);
        });
      }
    });

    // eslint-disable-next-line
  }, [authState]);

  useEffect(() => {
    // TODO: Instead of the api call, check for votes-remaining value in child's object
    if (props.faceoffs && props.faceoffs.length > 0) {
      getGameVotes(
        authState,
        props.faceoffs[0].SquadID,
        props.child.memberId
      ).then(res => {
        setNumberOfTimesVoted(res.length);
        if (res.length > 2) {
          setCanVote(false);
        }
      });
    }
  }, [props.faceoffs]);

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
          numberOfTimesVoted={numberOfTimesVoted}
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
