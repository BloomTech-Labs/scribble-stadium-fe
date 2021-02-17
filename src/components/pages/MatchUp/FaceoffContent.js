import React, { useEffect, useState } from 'react';
import matchup_bolt from '../../../assets/images/match_up_images/matchup_bolt.svg';

import { SubmissionViewerModal, EmojiFeedback } from '../../common';

const lock = 'https://labs28-b-storysquad.s3.amazonaws.com/lock.svg';

const FaceoffContent = props => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setContent(props.content);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  // ERRLOG: content returning null
  console.log('faceoff content content.submission1', content);
  console.log('faceoff content props', props);

  return (
    <div className="faceoff">
      {content && (
        <FaceoffSubDisplay
          custom_date={props.custom_date}
          sub={content.Submission1}
          type={content.Type}
          feedback={content.Emojis1}
          votesNeededToUnlock={props.votesNeededToUnlock}
          votesRemaining={props.votesRemaining}
          dayNeededToUnlock={props.dayNeededToUnlock}
          hourNeededToUnlock={props.hourNeededToUnlock}
        />
      )}
      <img src={matchup_bolt} alt="lightning bolt" />
      {content && (
        <FaceoffSubDisplay
          custom_date={props.custom_date}
          sub={content.Submission2}
          type={content.Type}
          feedback={content.Emojis2}
          votesNeededToUnlock={props.votesNeededToUnlock}
          votesRemaining={props.votesRemaining}
          dayNeededToUnlock={props.dayNeededToUnlock}
          hourNeededToUnlock={props.hourNeededToUnlock}
        />
      )}
      {content && <div className="points">{content.Points}</div>}
    </div>
  );
};

//ERRLOG CURRENT: {sub} {type} and {feedback} not getting passed via props. also what voodoo is this subcomponent within a component?
//      - *** NOTE *** even if content was being passed in, data wouldn't make sense:
//                      - submission1 / submission2 / emojis1 / emojis2 doesn't exist as keys on content object
//                      - might need to create a GET / call to api to get submission1 & submission2 objects with attached child data?
//                      - according to DBeaver ER diagram,  there are no keys that match sub..1 / sub...2; closest is SubmissionID1 / SubmissionID2
//      - ACTION TAKEN: replacing all "submission1" with "submissionID1" did not work

const FaceoffSubDisplay = ({ sub, type, feedback, ...props }) => {
  console.log('What is Sub ? -------------------', sub);
  console.log('What is type ? -------------------', type);
  console.log('What is feedback ? -------------------', feedback);
  console.log(
    'Look at props again now that we did stuff -------------------',
    props
  );

  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [locked, setLocked] = useState(true);

  console.log('faceoff content sub props', props);

  const currentDate = props.custom_date ? props.custom_date : new Date();
  const currentDayOfTheWeek = currentDate.getDay();
  const currentHour = currentDate.getHours();

  const openModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  useEffect(() => {
    if (
      props.votesNeededToUnlock &&
      props.votesRemaining >= props.votesNeededToUnlock &&
      currentDayOfTheWeek >= props.dayNeededToUnlock &&
      currentHour >= props.hourNeededToUnlock
    ) {
      setLocked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('props -------------------', props);

  return (
    <>
      {showModal && (
        <SubmissionViewerModal
          content={modalContent}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className="sub">
        <div className="child-info">
          {feedback && feedback.Emoji && (
            <EmojiFeedback emojis={feedback.Emoji} />
          )}
          {/*       ERRLOG: sub is an undefined object currently, app cannot read  properties of undefined object */}
          <img src={props.AvatarUrl} alt="text" />
          <span className="name">{sub.Name}</span>
        </div>
        <div className="submission-preview">
          {!locked ? (
            <img
              src={type === 'DRAWING' ? sub.ImgURL : sub.Pages[0].PageURL}
              alt="text"
              onClick={() =>
                openModal(
                  type === 'DRAWING' ? [{ ImgURL: sub.ImgURL }] : sub.Pages
                )
              }
            />
          ) : (
            <img src={lock} alt="locked" />
          )}
        </div>
      </div>
    </>
  );
};

export default FaceoffContent;
