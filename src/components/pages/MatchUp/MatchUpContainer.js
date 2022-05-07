<<<<<<< refs/remotes/origin/main
import React, { useState } from 'react';
=======
import React, { useState} from 'react';
>>>>>>> no unused var
import { useAuth0 } from '@auth0/auth0-react';

import RenderMatchUp from './RenderMatchUp';
import { connect } from 'react-redux';

import { child, faceoffs, votes } from '../../../state/actions';
<<<<<<< refs/remotes/origin/main
// the following code was commented out to prevent warnings during compilation. If is not necessary, remove it.
// import {
//   getChild,
//   getChildSquad,
//   getFaceoffsForMatchup,
//   getFaceoffsForVoting,
// } from '../../../api/index';

function MatchUpContainer({ LoadingComponent, ...props }) {
  const {
    user,
    //  isAuthenticated
  } = useAuth0();
=======

function MatchUpContainer({ LoadingComponent, ...props }) {
<<<<<<< refs/remotes/origin/main
//  const { user, isAuthenticated } = useAuth0();
>>>>>>> no unused var
=======
  const { user } = useAuth0();
>>>>>>> no unused var
  const [userInfo] = useState(user);
  const [canVote] = useState(true);

  // useEffect(() => {
  //   getChild(user, props.child.id).then(child => {
  //     props.setChild({ ...child });
  //   });

  //   if (props.child.Ballots) {
  //     if (props.child.Ballots.length > 0 && props.child.VotesRemaining > 0) {
  //       for (let ballot of props.child.Ballots) {
  //         getFaceoffsForVoting(user, ballot[1]).then(faceoffs => {
  //           if (props.votes.length === 0) {
  //             for (let faceoff of faceoffs) {
  //               if (faceoff.ID === ballot[0]) {
  //                 props.setVotes(faceoff);
  //               }
  //             }
  //           }
  //         });
  //       }
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.faceoffs, user, props.child.VotesRemaining]);

  // useEffect(() => {
  //   if (props.child.VotesRemaining === 0) {
  //     setCanVote(false);
  //   }
  // }, [props.child]);

  // useEffect(() => {
  //   getChildSquad(user, props.child.id).then(squad => {
  //     getFaceoffsForMatchup(user, squad.ID, props.child.id).then(
  //       allFaceoffs => {
  //         props.setMemberId(squad);
  //         props.setSquadFaceoffs(allFaceoffs);
  //       }
  //     );
  //   });

  //   // eslint-disable-next-line
  // }, [user]);

  return (
    <>
      <RenderMatchUp
        {...props}
        userInfo={userInfo}
        canVote={canVote}
        votesRemaining={props.child.VotesRemaining}
      />
      {/* {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && props.faceoffs && (
        <RenderMatchUp
          {...props}
          userInfo={userInfo}
          canVote={canVote}
          votesRemaining={props.child.VotesRemaining}
        />
      )} */}
    </>
  );
}

export default connect(
  state => ({
    child: state.child,
    faceoffs: state.faceoffs,
    votes: state.votes,
    custom_date: state.custom_date,
  }),
  {
    setSquadFaceoffs: faceoffs.setSquadFaceoffs,
    setMemberId: child.setMemberId,
    setVotes: votes.setVotes,
    setChild: child.setChild,
  }
)(MatchUpContainer);
